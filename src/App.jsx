import { useState } from "react";
import { DndContext, useDroppable } from "@dnd-kit/core";

import "./App.css"; // Include Tailwind CSS
import { Sidebar } from "./components/Sidebar";
import TextComponent from "./components/draggable-components/TextComponent";
import ImageComponent from "./components/draggable-components/ImageComponent";

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

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log({ active, over });

    if (over && over.id === "dropped-into-canvas") {
      const newComponent = {
        id: Date.now(),
        type: active.id,
      };

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
