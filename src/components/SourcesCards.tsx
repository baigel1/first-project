import { CardProps, CitationProps } from "@yext/search-ui-react";
import { Product } from "../types/products";

const SourcesCard = (props: CitationProps) => {
  const citation = props.citation;
  const myResults = props.searchResults;
  console.log(myResults);
  let url: any = "";

  //loop through all search results to find the one used in the citation
  for (let i = 0; i < myResults.length; i++) {
    if (myResults[i].rawData.uid === citation) {
      url = myResults[i].rawData.link;
    }
  }

  return (
    <div className="flex w-2/12 border border-red-800 flex-col my-4 justify-between bg-white mx-2 w-60">
      {<a href={url}>{citation}</a>}
    </div>
  );
};

export default SourcesCard;
