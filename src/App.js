import React, { useState } from "react";
import "./App.css";
import Coin from "./Coinlist";
import Piechart from "./Piechart";
import InspectedCoin from "./CoinInspect";
import FavoriteCoin from "./FavoriteCoin";

function App() {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [favoriteCoins, setFavoriteCoins] = useState([]);

  const addFavoriteCoin = (coin) => {
    if (!favoriteCoins.some((favorite) => favorite.id === coin.id)) {
      setFavoriteCoins([...favoriteCoins, coin]);
    }
  };

  return (
    <main>
      <div className="top-layer">
        <div className="coinlist-wrapper">
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
          <FavoriteCoin favoriteCoins={favoriteCoins}></FavoriteCoin>
        </div>
      </div>
      <div className="bottom-layer">
        <div className="graph-wrapper">
          <Coin
            setSelectedCoin={setSelectedCoin}
            addFavoriteCoin={addFavoriteCoin}
          ></Coin>
        </div>
      </div>
    </main>
  );
}

export default App;
