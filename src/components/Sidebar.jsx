import { Image, Type } from "lucide-react";
import { DraggableItem } from "./DraggableItem";

export function Sidebar() {
  return (
    <div className="w-1/4 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Elements</h2>
      <div className="space-y-2">
        <DraggableItem id="text">
          <Type className="w-6 h-6" /> Text Component
        </DraggableItem>

        <DraggableItem id="image">
          <Image className="w-6 h-6" /> Image Component
        </DraggableItem>
      </div>
    </div>
  );
}
