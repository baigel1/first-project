import {
  provideHeadless,
  SearchHeadlessProvider,
  HeadlessConfig,
  SandboxEndpoints,
} from "@yext/search-headless-react";

/* components */
import Sidebar from "./components/Sidebar";
import Results from "./components/Results";

const config: HeadlessConfig = {
  apiKey: "9641a03ad3de221fb9c566b0c9148351",
  experienceKey: "test-experience",
  locale: "en",
  verticalKey: "products",
  endpoints: SandboxEndpoints,
};

const searcher = provideHeadless(config);

function App() {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="flex">
        {/**
         * < Sidebar />
         *    < Searchbar />
         *    < Facets />
         *    < FAQs />
         * < Results />
         */}
        <Sidebar />
        <Results />
      </div>
    </SearchHeadlessProvider>
  );
}

export default App;
