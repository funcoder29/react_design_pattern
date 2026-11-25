import { withLoading } from "./withLoading";
import { Profile } from "./Profile.jsx";
import "./App.css";

function App() {
  const ProfileWithLoading = withLoading(Profile);

  return <ProfileWithLoading isLoading={true} />;
}

export default App;
