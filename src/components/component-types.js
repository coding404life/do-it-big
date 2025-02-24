import ImageComponent from "./draggable-components/ImageComponent";
import TextComponent from "./draggable-components/TextComponent";

export const COMPONENT_TYPES = {
  text: {
    Component: TextComponent,
    defaultProps: { content: "" },
  },
  image: {
    Component: ImageComponent,
    defaultProps: { url: "" },
  },
  // Add more component types here in the future
};
