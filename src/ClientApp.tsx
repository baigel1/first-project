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
  apiKey: "f2f580f4d14ad73ed8cb8dea6cc853f6",
  experienceKey: "articleexperience",
  locale: "en",
  verticalKey: "testentity",
  endpoints: SandboxEndpoints,
};

const searcher = provideHeadless(config);

function ClientApp() {
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

export default ClientApp;
