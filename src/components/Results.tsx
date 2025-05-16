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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductCard from "./ProductCard";
// import { ExampleCard } from "./ExampleCard";
// import { MarkdownCard } from "./MarkdownCard";
import SourcesCard from "./SourcesCards";
import { useSearchState } from "@yext/search-headless-react";

const Results = () => {
  const gdaLoading = useSearchState(
    (state) => state.generativeDirectAnswer.isLoading
  );
  return (
    <div className="bg-orange-100 flex flex-col items-center">
      <div className="my-4">{gdaLoading && <Skeleton count={5} />}</div>
      <GenerativeDirectAnswer
        customCssClasses={{
          container: "bg-red-300 border-2 border-gray-500 w-4/6 mt-6",
          answerText: "text-slate-400",
          citationTitle: "text-slate-300",
        }}
        CitationCard={SourcesCard}
      />
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
