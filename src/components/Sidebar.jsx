import { Image, Type } from "lucide-react";
import { DraggableItem } from "./DraggableItem";

const ELEMENTS = [
  {
    id: "image",
    type: "image",
    Icon: Image,
    label: "Image",
  },
  {
    id: "text",
    type: "text",
    Icon: Type,
    label: "Text",
  },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Elements</h2>
      <div className="space-y-2">
        {ELEMENTS.map(({ id, type, Icon, label }) => (
          <DraggableItem key={id} id={type}>
            <Icon className="w-6 h-6" /> <span>{label}</span>
          </DraggableItem>
        ))}
      </div>
    </div>
  );
}
