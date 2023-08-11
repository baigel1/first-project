import {
  UniversalResults,
  VerticalResults,
  StandardCard,
  MapboxMap,
  StandardSection,
} from "@yext/search-ui-react";

import "mapbox-gl/dist/mapbox-gl.css";

import ProductCard from "./ProductCard";
import { ExampleCard } from "./ExampleCard";
import { MarkdownCard } from "./MarkdownCard";

const Results = () => {
  return (
    <div className="bg-orange-100">
      <VerticalResults
        CardComponent={ProductCard}
        customCssClasses={{
          verticalResultsContainer: "p-8 flex flex-wrap justify-around",
        }}
      />
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
