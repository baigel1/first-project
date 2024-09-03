import {
  UniversalResults,
  VerticalResults,
  StandardCard,
  MapboxMap,
  StandardSection,
  GenerativeDirectAnswer,
  Pagination,
} from "@yext/search-ui-react";

import "mapbox-gl/dist/mapbox-gl.css";

import ProductCard from "./ProductCard";
import { ExampleCard } from "./ExampleCard";
import { MarkdownCard } from "./MarkdownCard";
import SourcesCard from "./SourcesCards";

const Results = () => {
  return (
    <div className="bg-orange-100 flex flex-col items-center">
      {/* <GenerativeDirectAnswer
        customCssClasses={{
          container: "bg-red-200 border-2 border-teal-500 w-4/6 mt-6",
          header: "text-teal-500",
          answerText: "text-slate-400",
          citationTitle: "text-red-300",
        }}
        CitationCard={SourcesCard}
      /> */}
      <VerticalResults
        CardComponent={ProductCard}
        customCssClasses={{
          verticalResultsContainer: "p-8 flex flex-wrap justify-around",
        }}
      />
      <Pagination />
      {/* <UniversalResults
        verticalConfigMap={{
          products: {
            label: "food",
          },
        }}
      /> */}
      {/* <div className="h-40">
        <MapboxMap mapboxAccessToken="" />
      </div> */}
    </div>
  );
};

export default Results;
