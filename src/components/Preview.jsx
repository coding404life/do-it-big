import Markdown from "react-markdown";

const Preview = ({ components, showPreview, setShowPreview }) => {
  return (
    <>
      {showPreview && (
        <div className="absolute inset-0 z-20 bg-white grid grid-cols-1 md:grid-cols-2 gap-1 h-screen overflow-y-scroll">
          {components.map((comp) =>
            comp.type === "text" ? (
              <div key={comp.id} className="p-2 prose">
                <Markdown>{comp.content}</Markdown>
              </div>
            ) : (
              <div key={comp.id}>
                <img
                  src={comp.url || "https://placehold.co/600x400"}
                  alt="preview"
                  className="w-full"
                />
              </div>
            )
          )}

          <button
            onClick={() => setShowPreview(false)}
            className="fixed top-0 right-0 mr-5 mt-3 px-2 rounded bg-red-400 text-white p-1 cursor-pointer "
          >
            close
          </button>
        </div>
      )}
    </>
  );
};

export default Preview;
