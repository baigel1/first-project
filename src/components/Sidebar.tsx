/**
 * Container for left-sidebar, holds the search bar and facets
 *
 */
import {
  SearchBar,
  Facets,
  FilterSearch,
  ApplyFiltersButton,
  StandardFacet,
  OnSelectParams,
  StaticFilters,
  AppliedFilters,
} from "@yext/search-ui-react";

import {
  DisplayableFacet,
  FieldValueFilter,
  FieldValueStaticFilter,
  SelectableStaticFilter,
  StaticFilter,
  useSearchActions,
  useSearchState,
} from "@yext/search-headless-react";

import { useState, useEffect } from "react";

const Sidebar = () => {
  // const [searchCount, setSearchCount] = useState(0);
  const [recs, setRecs] = useState([]);

  const searchActions = useSearchActions();

  // const selectedFilters = filters?.filter((filter) => filter.selected) ?? [];
  // const disabled = selectedFilters.length === 0;
  const filtersState = useSearchState((state) => state.filters.static);
  const resultsState = useSearchState((state) => state.vertical.resultsCount);
  const inputState = useSearchState((state) => state.query.input);

  const runSearch = () => {
    console.log("running search");
    if (!inputState) {
      console.log(`input state is: ${inputState}`);
      console.log("nope!");
    } else {
      console.log(`input state is: ${inputState}`);
      searchActions.executeVerticalQuery();
    }

    //searchActions.executeUniversalQuery();
  };

  //TESTING STATIC FILTERS
  useEffect(() => {
    console.log(filtersState);
    filtersState?.map((filter) => {
      if (isFieldValueStaticFilter(filter.filter)) {
        // Now TypeScript knows `filter` is a `FieldValueStaticFilter`
        console.log(filter.filter.fieldId);
      } else {
        console.warn("The filter is not of type FieldValueStaticFilter");
      }
    });
  }, [filtersState]);

  useEffect(() => {
    //call recs api
    // fetch(
    //   "https://recommendations.optimizelocation.com/models/yext-hh-most-popular/query"
    // )
    //   .then((data) => data.json())
    //   .then((results) => {
    //     setRecs(results.recommendations);
    //     console.log("recs are: ");
    //     console.log(results.recommendations);
    //   });
  }, []);

  // Type guard to check if the filter is a FieldValueStaticFilter
  function isFieldValueStaticFilter(
    filter: StaticFilter
  ): filter is FieldValueStaticFilter {
    return (filter as FieldValueStaticFilter).fieldId !== undefined;
  }

  const handleFilterSelect = ({
    newFilter,
    newDisplayName,
    setCurrentFilter,
  }: OnSelectParams) => {
    console.log(newFilter);
    console.log(newDisplayName);
    setCurrentFilter(newFilter);
    const locationFilter: SelectableStaticFilter = {
      filter: newFilter,
      selected: true,
      displayName: newDisplayName,
    };
    searchActions.setStaticFilters([locationFilter]);
    console.log(filtersState);
  };

  // const transformColorFacet = (
  //   options: DisplayableFacet["options"]
  // ): DisplayableFacet["options"] => {
  //   return options.map((option) => {
  //     let displayName = "Yes";

  //     return {
  //       ...option,
  //       displayName,
  //     };
  //   });
  // };
  return (
    <div className="flex flex-col w-5/12 h-screen h-full bg-red-400">
      <h1 className="p-8 text-white text-6xl font-semibold">
        Baigel's Supermarket!
      </h1>
      <SearchBar
        customCssClasses={{
          searchBarContainer: "p-8",
          inputElement: "text-xl text-[#ab1111]",
        }}
        // onSearch={runSearch}
      />
      <AppliedFilters />
      {/* <StaticFilters
        title="Colors"
        fieldId="color"
        filterOptions={[
          { value: "yellow" },
          { value: "blue" },
          { value: "purple" },
        ]}
      /> */}
      {/*********  FACETS SECTION **********/}
      {/* <Facets /> */}
      {/* <StandardFacet fieldId="color" />
        <StandardFacet fieldId="name" />
      </Facets> */}
      {/* <StandardFacets
        customCssClasses={{
          standardFacetsContainer: "p-8",
          optionLabel: "text-white",
          titleLabel: "text-white text-xl font-semibold",
        }}
        searchOnChange={false}
        excludedFieldIds={["c_productHierarchy"]}
      />
      <NumericalFacets
        customCssClasses={{
          numericalFacetsContainer: "p-8",
          optionLabel: "text-white",
          titleLabel: "text-white text-xl font-semibold",
        }}
      /> */}
      {/* <HierarchicalFacets
        includedFieldIds={["c_productHierarchy"]}
        customCssClasses={{
          hierarchicalFacetsContainer: "p-8",
        }}
      /> */}

      {/* END OF FACETS */}

      {/* filter search section */}
      <FilterSearch
        searchFields={[
          { fieldApiName: "builtin.location", entityType: "location" },
        ]}
        label="Supermarket Filter"
        customCssClasses={{
          label: "text-white text-xl",
          filterSearchContainer: "p-8",
        }}
        onSelect={handleFilterSelect}
      />
      {/* <FilterSearch
        searchFields={[
          { fieldApiName: "builtin.location", entityType: "location" },
        ]}
        label="Supermarket Filter"
        customCssClasses={{
          label: "text-white text-xl",
          filterSearchContainer: "p-8",
        }}
        onSelect={handleFilterSelect}
      />

      <FilterSearch
        searchFields={[{ fieldApiName: "name", entityType: "location" }]}
        label="Name Filter"
        customCssClasses={{
          label: "text-white text-xl",
          filterSearchContainer: "p-8",
          inputElement: "bg-slate-200",
        }}
        onSelect={handleFilterSelect}
      />
      <ApplyFiltersButton /> */}
      {/* <button
        onClick={() => {
          searchActions.executeVerticalQuery();
        }}
      >
        
        Search
      </button> */}

      {/*maybe throw in some recommendations here? like most popular items on HH rn*/}
      {
        // <h1 className="text-white text-4xl text-bold p-8">
        //   Recommended HH Content
        // </h1>
      }
      {recs.map((rec: any) => {
        return (
          <div className="border-2 m-8 p-2">
            <a
              href={rec.profile.landingPageUrl}
              target="_blank"
              className="text-white text-xl"
            >
              {rec.entity_id}: {rec.details.clicks}
              {" Clicks"}
            </a>
          </div>
        );
      })}
      {/* <div className="text-6xl text-white m-auto">{searchCount}</div> */}
    </div>
  );
};

export default Sidebar;
