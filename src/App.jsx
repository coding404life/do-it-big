import { useState } from "react";
import { DndContext, useDroppable } from "@dnd-kit/core";

import ReactMarkdown from "react-markdown";
import "./App.css"; // Include Tailwind CSS
import { Sidebar } from "./components/Sidebar";

// Text Component
const TextComponent = ({ content, onChange }) => (
  <div className={`p-4 w-1/2 border`}>
    <textarea
      value={content}
      onChange={(e) => onChange(e.target.value)}
      className="w-full"
    />

    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);

// Image Component
const ImageComponent = ({ url, onChange }) => (
  <div className={`p-4  w-1/2  border`}>
    <input
      value={url}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Image URL"
      className="w-full mb-2"
    />
    <img
      src={url || "https://placehold.co/600x400"}
      alt="preview"
      className="w-full"
    />
  </div>
);

// Droppable Canvas
const DroppableCanvas = ({ children, id }) => {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className="w-3/4 p-4 bg-gray-100 min-h-[800px]">
      {children}
    </div>
  );
};

// Main App
const App = () => {
  const [components, setComponents] = useState([]);
  console.log({ components });

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log({ active, over });

    if (over && over.id === "dropped-into-canvas") {
      const newComponent =
        active.id === "text"
          ? { id: Date.now(), type: "text", content: "" }
          : { id: Date.now(), type: "image", url: "" };

      console.log({ newComponent });
      setComponents((prev) => [...prev, newComponent]);
    }
  };

  const updateComponent = (id, updates) => {
    setComponents(
      components.map((c) => (c.id === id ? { ...c, ...updates } : c))
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Canvas */}
        <DroppableCanvas id="dropped-into-canvas">
          <div className="flex flex-wrap">
            {components.map((comp) =>
              comp.type === "text" ? (
                <TextComponent
                  key={comp.id}
                  {...comp}
                  onChange={(content) => updateComponent(comp.id, { content })}
                />
              ) : (
                <ImageComponent
                  key={comp.id}
                  {...comp}
                  onChange={(url) => updateComponent(comp.id, { url })}
                />
              )
            )}
          </div>
        </DroppableCanvas>
      </div>
    </DndContext>
  );
};

export default App;
