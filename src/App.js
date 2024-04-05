import React, { useState } from "react";
import "./App.css";
import Coin from "./Coinlist";
import Piechart from "./Piechart";
import InspectedCoin from "./CoinInspect";
import FavoriteCoin from "./FavoriteCoin"; // 1. Import the FavoriteCoin component

function App() {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [favoriteCoins, setFavoriteCoins] = useState([]); // 2. Add state for favoriteCoins

  // 3. Function to add favorite coin
  const addFavoriteCoin = (coin) => {
    if (!favoriteCoins.some((favorite) => favorite.id === coin.id)) {
      setFavoriteCoins([...favoriteCoins, coin]);
    }
  };

  return (
    <main>
      <div className="top-layer">
        <div className="coinlist-wrapper">
          {/* 4. Pass addFavoriteCoin function as prop to Coin component */}
          <Coin
            setSelectedCoin={setSelectedCoin}
            addFavoriteCoin={addFavoriteCoin}
          ></Coin>
        </div>
        <div className="marketshare-wrapper">
          <Piechart></Piechart>
        </div>
      </div>
      <div className="mid-layer">
        <div className="coindata-wrapper">
          <InspectedCoin selectedCoin={selectedCoin}></InspectedCoin>
        </div>
        <div className="starred-wrapper">
          {/* Pass favoriteCoins state to FavoriteCoin component */}
          <FavoriteCoin favoriteCoins={favoriteCoins}></FavoriteCoin>
        </div>
      </div>
      <div className="bottom-layer">
        <div className="graph-wrapper"></div>
      </div>
    </main>
  );
}

export default App;
