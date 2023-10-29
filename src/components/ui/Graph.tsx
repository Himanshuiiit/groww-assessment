"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const Graph = ({ id }: { id: string }) => {
  const apiKey = process.env.API_KEY;
  const [activeKey, setActiveKey] = useState(0);
  const [range, setRange] = useState("TIME_SERIES_INTRADAY");
  const [labels, setLabels] = useState<string[]>([]);
  const [marketData, setMarketData] = useState<number[]>([]);
  const [keyExtractor, setKeyExtractor] = useState<string>(
    "Time Series (60min)"
  );

  const getData = async () => {
    const { data } = await axios.get(
      `https://www.alphavantage.co/query?function=${range}&symbol=${id}&interval=60min&apikey=${apiKey}`
    );

    setLabels(
      Object.keys(data[keyExtractor])
        .filter((label, index) => index % 4 === 0)
        .map((key) => {
          return keyExtractor === "Time Series (60min)"
            ? key.split(" ")[1]
            : key;
        })
    );
    setMarketData(
      Object.values(data[keyExtractor]).map((value: any) => +value["1. open"])
    );
  };

  useEffect(() => {
    switch (activeKey) {
      case 0:
        setRange("TIME_SERIES_INTRADAY");
        setKeyExtractor("Time Series (60min)");
        break;
      case 1:
        setRange("TIME_SERIES_DAILY");
        setKeyExtractor("Time Series (Daily)");
        break;
      case 2:
        setRange("TIME_SERIES_DAILY");
        setKeyExtractor("Time Series (Daily)");
        break;
      case 3:
        setRange("TIME_SERIES_WEEKLY");
        setKeyExtractor("Weekly Time Series");
        break;
      case 4:
        setRange("TIME_SERIES_WEEKLY");
        setKeyExtractor("Weekly Time Series");
        break;
      case 5:
        setRange("TIME_SERIES_MONTHLY");
        setKeyExtractor("Monthly Time Series");
        break;
      default:
        break;
    }
    getData();
  }, [activeKey]);

  const data = {
    labels,
    datasets: [
      {
        label: id,
        data: marketData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const keys = ["1D", "1W", "1M", "3M", "6M", "1Y"];
  return (
    <div className="border-2 border-blue-300 rounded-lg mb-6 px-4 py-3">
      <Line options={options} data={data} />
      <div className="w-[36%] mx-auto mt-4 flex justify-center gap-4 p-2 border-2 border-blue-300 rounded-full">
        {keys.map((key, index) => {
          return (
            <div
              className={`py-1 px-1.5 border-2 border-blue-300 rounded-full cursor-pointer ${
                activeKey === index ? "bg-blue-600 text-white" : ""
              }`}
              onClick={() => setActiveKey(index)}
              key={key}
            >
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Graph;
