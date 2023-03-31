import {
  UniversalResults,
  VerticalResults,
  StandardCard,
  MapboxMap,
  StandardSection,
} from "@yext/search-ui-react";

import "mapbox-gl/dist/mapbox-gl.css";

const Results = () => {
  return (
    <div className="bg-orange-100">
      {/* <VerticalResults
        CardComponent={StandardCard}
        customCssClasses={{
          verticalResultsContainer: "p-8 flex flex-wrap",
        }}
      /> */}
      <UniversalResults
        verticalConfigMap={{
          testentity: {
            label: "TEST ENTITIES",
            viewAllButton: true,
            SectionComponent: StandardSection,
            CardComponent: StandardCard,
          },
        }}
      />
      {/* <div className="h-40">
        <MapboxMap mapboxAccessToken="" />
      </div> */}
    </div>
  );
};

export default Results;
