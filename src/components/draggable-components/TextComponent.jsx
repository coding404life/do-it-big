import Markdown from "react-markdown";

const TextComponent = ({ content, onChange }) => (
  <div className={"border rounded p-4 w-1/2"}>
    <textarea
      value={content}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border p-1 rounded"
    />

    <div className="prose">
      <Markdown>{content}</Markdown>
    </div>
  </div>
);
export default TextComponent;
