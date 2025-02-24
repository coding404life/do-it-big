import { DraggableItem } from "./DraggableItem";
import { ELEMENTS } from "./sidebar-elements";

export function Sidebar() {
  return (
    <div className="md:w-64 bg-white md:border-r border-gray-200 p-4">
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
