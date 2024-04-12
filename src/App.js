import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Coin from "./Coinlist";
import Piechart from "./Piechart";
import InspectedCoin from "./CoinInspect";
import FavoriteCoin from "./FavoriteCoin";
import { fetchCoinData } from "./api";
import BlankPage from "./BlankPage";
import BlankPageButton from "./BlankPageButton";
import LiveCoin from "./LiveCoinlist";
import SearchInput from "./SearchInput";

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
    <BrowserRouter>
      <main>
        <div className="search-wrapper">
          <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
          <BlankPageButton />
        </div>
        <div className="top-layer">
          <div className="coinlist-wrapper">
            <Routes>
              <Route
                path="/"
                element={
                  <Coin
                    coinData={filteredCoinData}
                    setSelectedCoin={setSelectedCoin}
                    addFavoriteCoin={addFavoriteCoin}
                  />
                }
              />
              <Route path="/blankpage" element={<BlankPage />} />
            </Routes>
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
            <LiveCoin
              coinData={filteredCoinData}
              setSelectedCoin={setSelectedCoin}
              addFavoriteCoin={addFavoriteCoin}
            />
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
