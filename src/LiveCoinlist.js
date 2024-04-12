import React, { useState, useEffect } from "react";
import { fetchCoinData } from "./api";

export default function LiveCoin({ setSelectedCoin, addFavoriteCoin }) {
  const [filteredCoinData, setFilteredCoinData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData();
      setFilteredCoinData(data);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRowClick = (coin) => {
    setSelectedCoin(coin);
  };

  const handleCheckboxChange = (event, coinId) => {
    const updatedCoinData = filteredCoinData.map((coin) =>
      coin.id === coinId ? { ...coin, favorited: event.target.checked } : coin
    );

    const selectedCoin = updatedCoinData.find((coin) => coin.id === coinId);
    if (selectedCoin && event.target.checked) {
      addFavoriteCoin(selectedCoin);
    }
    setFilteredCoinData(updatedCoinData);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = filteredCoinData.filter((coin) =>
      coin.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredCoinData(filtered);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Symbol</th>
          <th>Name</th>
          <th>Market Cap (USD)</th>
          <th>Price (USD)</th>
          <th>Change (24Hr)</th>
          <th>Favorited</th>
        </tr>
      </thead>
      <tbody>
        {filteredCoinData.map((coin) => (
          <tr key={coin.id} onClick={() => handleRowClick(coin)}>
            <td>{coin.rank}</td>
            <td>{coin.symbol}</td>
            <td>{coin.name}</td>
            <td>{coin.marketCapUsd}</td>
            <td>{coin.priceUsd}</td>
            <td>{coin.changePercent24Hr}</td>
            <td>
              <input
                type="checkbox"
                checked={coin.favorited || false}
                onChange={(event) => handleCheckboxChange(event, coin.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}