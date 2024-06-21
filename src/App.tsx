import {
  provideHeadless,
  SearchHeadlessProvider,
  HeadlessConfig,
  CloudRegion,
  Environment,
} from "@yext/search-headless-react";

/* components */
import Sidebar from "./components/Sidebar";
import Results from "./components/Results";

const config: HeadlessConfig = {
  apiKey: "c86d435433eaa875de63ea410bf8ccb6",
  experienceKey: "test",
  locale: "en",
  verticalKey: "products",
  //environment: Environment.SANDBOX,
  //cloudRegion: CloudRegion.US,
};

const searcher = provideHeadless(config);

function App() {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="flex">
        <Sidebar />
        <Results />
      </div>
    </SearchHeadlessProvider>
  );
}

export default App;
