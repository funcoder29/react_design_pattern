import "./App.css";
import { Card } from "./component/Card.jsx";

function App() {
  return (
    <Card header={<h2>Profile</h2>} footer={<button>Save</button>}>
      <p>Name: Priya</p>
    </Card>
  );
}

export default App;
