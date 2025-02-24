import Markdown from "react-markdown";

const TextComponent = ({ content, onChange }) => (
  <div className="border rounded p-4">
    <textarea
      value={content}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-1 "
      placeholder="Text"
    />

    <div className="prose break-words">
      <Markdown>{content}</Markdown>
    </div>
  </div>
);
export default TextComponent;
