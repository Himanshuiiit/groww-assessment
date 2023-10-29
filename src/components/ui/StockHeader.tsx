import { StockData } from "@/utils/types";
import React from "react";

interface Props {
  data: StockData;
}

const StockHeader = ({ data }: Props) => {
  return (
    <div className="mb-8 flex flex-row justify-between">
      <div className="flex flex-col">
        <div className="font-bold text-xl">{data.Name}</div>
        <div>{data.Symbol + ", " + data.AssetType}</div>
        <div>{data.Exchange}</div>
      </div>
      <div>
        <div className="font-bold text-xl">{data["50DayMovingAverage"]}</div>
        <div
          className={`${
            +data.ProfitMargin >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {+data.ProfitMargin >= 0
            ? "+ " + data.ProfitMargin + "% ▲"
            : "- " + data.ProfitMargin + "% ▼"}
        </div>
      </div>
    </div>
  );
};

export default StockHeader;
