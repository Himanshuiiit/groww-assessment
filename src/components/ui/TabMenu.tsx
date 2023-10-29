"use client";
import React, { useState } from "react";
import Table from "./Table";

const TabMenu = () => {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="w-full bg-gray-900 flex flex-col justify-center items-center">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          <a
            className={`inline-block p-4 cursor-pointer ${
              active === 0
                ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            }`}
            onClick={() => setActive(0)}
          >
            Top Gainers
          </a>
        </li>
        <li className="mr-2">
          <a
            className={`inline-block p-4 cursor-pointer ${
              active === 1
                ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            }`}
            onClick={() => setActive(1)}
          >
            Top Losers
          </a>
        </li>
      </ul>
      <Table active={active} />
    </div>
  );
};

export default TabMenu;
