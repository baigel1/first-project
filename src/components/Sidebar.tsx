/**
 * Container for left-sidebar, holds the search bar and facets
 *
 */
import {
  SearchBar,
  StandardFacets,
  NumericalFacets,
  FilterSearch,
} from "@yext/search-ui-react";

import { useSearchActions, useSearchState } from "@yext/search-headless-react";

import { useState, useEffect } from "react";

const Sidebar = () => {
  // const [searchCount, setSearchCount] = useState(0);
  const [recs, setRecs] = useState([]);

  const searchActions = useSearchActions();
  const filters = useSearchState((state) => state.filters.static);
  const selectedFilters = filters?.filter((filter) => filter.selected) ?? [];
  const disabled = selectedFilters.length === 0;

  // const runSearch = () => {
  //   setSearchCount(searchCount + 1);
  // };
  useEffect(() => {
    //call recs api
    fetch(
      "https://recommendations.optimizelocation.com/models/yext-hh-most-popular/query"
    )
      .then((data) => data.json())
      .then((results) => {
        setRecs(results.recommendations);
        console.log("results are: ");
        console.log(results.recommendations);
      });
  }, []);

  return (
    <div className="flex flex-col w-5/12 h-screen h-full bg-red-800">
      <h1 className="p-8 text-white text-6xl font-semibold">
        Baigel's Supermarket!
      </h1>
      <SearchBar
        customCssClasses={{
          searchBarContainer: "p-8",
          searchButton: "bg-orange-500",
          inputElement: "text-xl text-[#ab1111]",
        }}
        // onSearch={runSearch}
      />
      {/* <StandardFacets
        customCssClasses={{
          standardFacetsContainer: "p-8",
          optionLabel: "text-white",
          titleLabel: "text-white text-xl font-semibold",
        }}
      />
      <NumericalFacets
        customCssClasses={{
          numericalFacetsContainer: "p-8",
          optionLabel: "text-white",
          titleLabel: "text-white text-xl font-semibold",
        }}
      /> */}
      {/* filter search section */}
      {/* <FilterSearch
        searchFields={[
          { fieldApiName: "color", entityType: "product" },
          { fieldApiName: "size", entityType: "product" },
        ]}
        label="Color Filter"
        customCssClasses={{
          label: "text-white text-xl",
          filterSearchContainer: "p-8",
        }}
        sectioned={true}
        // searchOnSelect={true}
        onSelect={() => searchActions.executeVerticalQuery()}
      />
      <button
        onClick={() => {
          searchActions.executeVerticalQuery();
        }}
      >
        Search
      </button> */}

      {/*maybe throw in some recommendations here? like most popular items on HH rn*/}
      {
        <h1 className="text-white text-4xl text-bold p-8">
          Recommended HH Content
        </h1>
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
