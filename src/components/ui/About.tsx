import { StockData } from "@/utils/types";
import React from "react";

interface Props {
  data: StockData;
}
const About = ({ data }: Props) => {
  return (
    <div className="border-2 border-blue-300 rounded-lg">
      <div className="px-3 py-2 font-bold text-lg border-b-2 border-blue-300">
        About {data.Name}
      </div>
      <div className="px-4 py-3">
        <div className="mb-6">
          <div className="pb-3">{data.Description}</div>
          <div className="pb-3 mt-6 mb-4">
            <span className="mr-4 py-4 px-6 text-sm font-bold bg-blue-200 rounded-full text-blue-600">
              Industry: {data.Industry}
            </span>
            <span className="ml-4 py-4 px-6 text-sm font-bold bg-blue-200 rounded-full text-blue-600">
              {" "}
              Sector: {data.Sector}
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between font-semibold mb-6">
          <div className="flex flex-col">
            <div className="w-28 text-gray-600">52-Week Low</div>
            <div>${data["52WeekLow"]}</div>
          </div>
          <div className="relative top-8 mr-3 w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
              style={{
                width: `${
                  (+data["50DayMovingAverage"] /
                    (+data["52WeekHigh"] - +data["52WeekLow"])) *
                  100
                }%`,
              }}
            ></div>
          </div>
          <div className="flex flex-col">
            <div className="w-28 text-gray-600">52-Week High</div>
            <div>${data["52WeekHigh"]}</div>
          </div>
        </div>
        <div className="flex flex-row justify-around mb-6 font-semibold">
          <div className="flex flex-col gap-1">
            <div className="text-gray-600">Market Cap</div>
            <div>
              {isNaN(+data.MarketCapitalization)
                ? "None"
                : "$" + data.MarketCapitalization}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-gray-600">P/E Ratio</div>
            <div>{data.PERatio}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-gray-600">Beta</div>
            <div>{data.Beta}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-gray-600">Dividend Yield</div>
            <div>{data.DividendYield}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-gray-600">Profit Margin</div>
            <div>{data.ProfitMargin}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
