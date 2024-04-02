import "./App.css";
import Coin from "./Coinlist";
import Piechart from "./Piechart";

function App() {
  return (
    <main>
      <div class="top-layer">
        <div class="coinlist-wrapper">
          <Coin></Coin>
        </div>
        <div class="marketshare-wrapper">
          <Piechart></Piechart>
        </div>
      </div>
      <div class="mid-layer">
        <div class="coindata-wrapper"></div>
        <div class="starred-wrapper"></div>
      </div>
      <div class="bottom-layer">
        <div class="graph-wrapper"></div>
      </div>
    </main>
  );
}

export default App;
