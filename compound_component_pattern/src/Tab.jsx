import { useContext, createContext } from "react";
export const TabsContext = createContext();

export const Tab = ({ children, index }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);

  return (
    <button
      role="tab"
      className={activeIndex === index ? "tab active" : "tab"}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
};
