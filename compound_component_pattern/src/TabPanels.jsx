import { useContext } from "react";
import { TabsContext } from "./Tab.jsx";

export const TabPanels = ({ children }) => {
  const { activeIndex } = useContext(TabsContext);
  return <div className="tab-panels">{children[activeIndex]}</div>;
};
