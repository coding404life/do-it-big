import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

// Draggable Sidebar Item
export const DraggableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg cursor-move hover:bg-gray-100 transition-colors"
    >
      {children}
    </div>
  );
};
