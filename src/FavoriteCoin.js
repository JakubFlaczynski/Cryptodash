import React from "react";

export default function FavoriteCoin({ favoriteCoins }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Market Cap (USD)</th>
          <th>Price (USD)</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {favoriteCoins.map((coin) => (
          <tr key={coin.id}>
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
