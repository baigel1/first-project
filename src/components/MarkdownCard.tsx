import { CardProps } from "@yext/search-ui-react";

import "../styles/resetStyles.css";
import MDEditor from "@uiw/react-md-editor";

const builtInCssClasses = {
  container:
    "flex flex-col justify-between border border-gray-200 rounded-lg mb-4 p-4 shadow-sm",
  header: "flex text-neutral-dark",
  title: "text-lg font-medium",
  thumbsFeedbackContainer:
    "flex justify-end mt-4 text-sm text-gray-500 font-medium",
};

// change to the field name that contains markdown string
const markdownFieldName = "c_markdowntest";

// this interface is used to expose the field name containing Markdown Content to the card
interface CustomRawDataType {
  name: string;
  description: string;
  [markdownFieldName]: { markdown: string };
}

export function MarkdownCard(props: CardProps<CustomRawDataType>): JSX.Element {
  const { result } = props;

  return (
    <div className={`${builtInCssClasses.container} `}>
      <p className={builtInCssClasses.header}>Markdown Render Card</p>
      <div className={builtInCssClasses.title}>{result.rawData.name}</div>
      <div className="container reset-style" data-color-mode="light">
        <MDEditor.Markdown
          source={result.rawData?.[markdownFieldName]?.markdown}
        />
      </div>
    </div>
  );
}
