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
      <br />
      <footer>
        This project was coded by Magda Tudora and is open sourced on{" "}
        <a href="https://github.com/Magda0006/weather-react" target="_blank">
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
