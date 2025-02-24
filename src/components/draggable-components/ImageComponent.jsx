const ImageComponent = ({ url, onChange }) => (
  <div className={"p-4 w-1/2 border rounded"}>
    <input
      value={url}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Image URL"
      className="w-full mb-2 border p-1 rounded"
    />
    <img
      src={url || "https://placehold.co/600x400"}
      alt="preview"
      className="w-full"
    />
  </div>
);

export default ImageComponent;
