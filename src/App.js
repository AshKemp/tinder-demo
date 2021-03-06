import "./App.css";
import { Header } from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      {/* {Header} */}
      <Header />
      {/* {Tinder Cards} */}
      <TinderCards />
      {/* {SwipeButtons} */}
    </div>
  );
}

export default App;
