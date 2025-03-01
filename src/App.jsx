import { useState } from "react";
import {
  DndContext,
  useDroppable,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
} from "@dnd-kit/core";

import { Sidebar } from "./components/sidebar/Sidebar";
import Preview from "./components/Preview";
import { COMPONENT_TYPES } from "./components/component-types";

const DroppableCanvas = ({ children, id }) => {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className="mt-5 md:mt-0 md:w-3/4 p-4 bg-gray-100 min-h-[800px]"
    >
      {children}
    </div>
  );
};

const App = () => {
  const [components, setComponents] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && over.id === "dropped-into-canvas") {
      const componentConfig = COMPONENT_TYPES[active.id];

      if (componentConfig) {
        const newComponent = {
          id: Date.now(),
          type: active.id,
          ...componentConfig.defaultProps,
        };

        setComponents((prev) => [...prev, newComponent]);
      }
    }
  };

  const updateComponent = (id, updates, defaultProps) => {
    setComponents(
      components.map((component) =>
        component.id === id
          ? {
              ...component,
              ...(defaultProps.url !== undefined ? { url: updates } : {}),
              ...(defaultProps.content !== undefined
                ? { content: updates }
                : {}),
            }
          : component
      )
    );
  };

  const renderComponent = (component) => {
    const { Component, defaultProps } = COMPONENT_TYPES[component.type] || {};
    if (!Component) return null;

    return (
      <Component
        key={component.id}
        {...component}
        onChange={(updates) =>
          updateComponent(component.id, updates, defaultProps)
        }
      />
    );
  };

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="overflow-y-scroll h-screen">
        <div className="flex md:flex-row flex-col p-4">
          {/* Sidebar */}
          <Sidebar />

          {/* Canvas */}
          <DroppableCanvas id="dropped-into-canvas">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {components.map((comp) => renderComponent(comp))}
            </div>
          </DroppableCanvas>
        </div>

        <button
          onClick={() => setShowPreview(true)}
          className="fixed top-0 right-0 mr-5 mt-3 px-2 rounded bg-green-400 text-white p-1 cursor-pointer "
        >
          Preview
        </button>

        <Preview
          showPreview={showPreview}
          components={components}
          setShowPreview={setShowPreview}
        />
      </div>
    </DndContext>
  );
};

export default App;
