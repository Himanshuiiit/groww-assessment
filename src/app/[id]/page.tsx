import React from "react";
import { TBLTWdata } from "@/utils/constants/data";
import StockHeader from "@/components/ui/StockHeader";
import Graph from "@/components/ui/Graph";
import About from "@/components/ui/About";
import axios from "axios";

interface Props {
  params: { id: string };
}
const Page = async ({ params: { id } }: Props) => {
  const apiKey = process.env.API_KEY;
  const { data } = await axios.get(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${id}&apikey=${apiKey}`
  );  

  return (
    <div className="text-black mt-12 lg:mx-96 md:mx-48 sm:mx-8">
      <StockHeader data={data} />
      <Graph id={id} />
      <About data={data} />
    </div>
  );
};

export default Page;
