"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BestMatch, TopStock } from "@/utils/types";
import TableRow from "./TableRow";

interface Props {
  active: number;
  searchString?: string;
}

const Table = ({ active, searchString }: Props) => {
  const apiKey = process.env.API_KEY;
  const [data, setData] = useState<any>({});
  const getData = async () => {
    const { data } =
      active !== 2
        ? await axios.get(
            `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`
          )
        : await axios.get(
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchString}&apikey=${apiKey}`
          );
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const { top_gainers, top_losers } = data;
  const { bestMatches } = data;

  return (
    <div className="relative overflow-x-auto w-full">
      <table className="table-fixed w-full mt-5 text-lg text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-5">
              Company Symbol
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Change percentage
            </th>
            <th scope="col" className="px-6 py-3">
              Volume
            </th>
          </tr>
        </thead>
        {active === 0 && (
          <tbody>
            {top_gainers?.map((item: TopStock) => (
              <TableRow item={item} gain={true} key={item.ticker} />
            ))}
          </tbody>
        )}
        {active === 1 && (
          <tbody>
            {top_losers?.map((item: TopStock) => (
              <TableRow item={item} gain={false} key={item.ticker} />
            ))}
          </tbody>
        )}
        {active === 2 && (
          <tbody>
            {bestMatches?.map((item: BestMatch) => (
              <TableRow item={item} gain={false} key={item["1. symbol"]} />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Table;
