import "./App.css";
import { MouseTrackerWithProps } from "./MouseTrackerWithProps.jsx";
import { MouseTrackerWithChildren } from "./MouseTrackerWithChildren.jsx";

function App() {
  return (
    <>
      <MouseTrackerWithProps
        render={({ x, y }) => (
          <p>
            Position is at ({x}, {y})
          </p>
        )}
      />
      <MouseTrackerWithChildren>
        {({ x, y }) => (
          <p>
            Mouse is at ({x}, {y})
          </p>
        )}
      </MouseTrackerWithChildren>
    </>
  );
}

export default App;
