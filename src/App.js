import "./App.css";
import "./styles.css";
import Search from "./Search";
import Overview from "./Overview";
import Temperature from "./Temperature";

function App() {
  return (
    <div className="App">
      <div className="Weather">
        <Search />
        <Overview />
        <Temperature />
      </div>
    </div>
  );
}

export default App;
