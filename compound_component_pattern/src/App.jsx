import { Tabs } from "./Tabs.jsx";
import { Tab } from "./Tab.jsx";
import { TabList } from "./TabList.jsx";
import { TabPanel } from "./TabPanel.jsx";
import { TabPanels } from "./TabPanels.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab index={0}>Profile</Tab>
          <Tab index={1}>Settings</Tab>
          <Tab index={2}>Billing</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <h2>Profile Page</h2>
          </TabPanel>
          <TabPanel>
            <h2>Settings Page</h2>
          </TabPanel>
          <TabPanel>
            <h2>Billing Page</h2>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
