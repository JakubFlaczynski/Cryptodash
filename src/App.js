import React, { useState, useEffect } from "react";
import "./App.css";
import Coin from "./Coinlist";
import Piechart from "./Piechart";
import InspectedCoin from "./CoinInspect";
import FavoriteCoin from "./FavoriteCoin";
import { fetchCoinData } from "./api";

function App() {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [favoriteCoins, setFavoriteCoins] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCoinData();
        setCoinData(data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchData();
  }, []);

  const addFavoriteCoin = (coin) => {
    if (!favoriteCoins.some((favorite) => favorite.id === coin.id)) {
      setFavoriteCoins([...favoriteCoins, coin]);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCoinData = coinData.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <div className="top-layer">
        <div className="coinlist-wrapper">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <Coin
            coinData={filteredCoinData}
            setSelectedCoin={setSelectedCoin}
            addFavoriteCoin={addFavoriteCoin}
          />
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
            coinData={filteredCoinData}
            setSelectedCoin={setSelectedCoin}
            addFavoriteCoin={addFavoriteCoin}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
