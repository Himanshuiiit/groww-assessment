"use client";
import { BestMatch, TopStock } from "@/utils/types";
import { useRouter } from "next/navigation";
import React from "react";

const TableRow = ({
  item,
  gain,
}: {
  item: TopStock | BestMatch;
  gain: boolean;
}) => {
  const router = useRouter();
  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      onClick={() =>
        router.push(
          `/${item._type === "TopStock" ? item.ticker : item["1. symbol"]}`
        )
      }
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {item._type === "TopStock" ? item.ticker : item["1. symbol"]}
      </th>
      <td className="px-6 py-4">${item._type === "TopStock" ? item.price : item["5. marketOpen"]}</td>
      <td className={`px-6 py-4 ${gain ? "text-green-600" : "text-red-600"}`}>
        {gain ? "▲" : "▼"} {item._type === "TopStock" ? item.change_percentage : "0"}
      </td>
      <td className="px-6 py-4">{item._type === "TopStock" ? item.volume : "Unknown"}</td>
    </tr>
  );
};

export default TableRow;
