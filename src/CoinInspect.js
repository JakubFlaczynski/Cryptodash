import React from "react";

export default function InspectedCoin({ selectedCoin }) {
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
        {selectedCoin && (
          <tr>
            <td>{selectedCoin.symbol}</td>
            <td>{selectedCoin.name}</td>
            <td>{selectedCoin.marketCapUsd}</td>
            <td>{selectedCoin.priceUsd}</td>
            <td>{selectedCoin.changePercent24Hr}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
