import React, { useState, useEffect } from "react";
import { fetchCoinData } from "./api";

export default function Coin() {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData();
      setCoinData(data);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 100);

    return () => clearInterval(intervalId);
  }, []);

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
        </tr>
      </thead>
      <tbody>
        {coinData.map((coin) => (
          <tr key={coin.id}>
            <td>{coin.rank}</td>
            <td>{coin.symbol}</td>
            <td>{coin.name}</td>
            <td>{coin.marketCapUsd}</td>
            <td>{coin.priceUsd}</td>
            <td>{coin.changePercent24Hr}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
