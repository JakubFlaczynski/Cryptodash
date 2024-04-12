import { PieChart as PieChart } from "@mui/x-charts";
import React, { useState, useEffect } from "react";
import { fetchCoinData } from "./api";

export default function Piechart() {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData();
      setCoinData(data);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const chartData = () => {
    const top10Coins = [];
    for (let i = 0; i < 10 && i < coinData.length; i++) {
      const coin = coinData[i];
      top10Coins.push({
        id: coin.rank,
        value: coin.marketCapUsd,
        label: coin.name,
      });
    }
    return top10Coins;
  };

  return (
    <PieChart
      series={[
        {
          data: chartData(),
        },
      ]}
      width={700}
      height={290}
    />
  );
}
