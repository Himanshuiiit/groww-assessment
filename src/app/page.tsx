"use client";
import HeroSection from "@/components/ui/HeroSection";
import TabMenu from "@/components/ui/TabMenu";
import Table from "@/components/ui/Table";
import { Data, DataType } from "@/utils/contexts/DataContext";
import { useContext } from "react";

export default function Home() {
  const { searchString } = useContext(Data) as DataType;
  return (
    <main className="">
      <HeroSection />
      {searchString.length === 0 ? (
        <TabMenu />
      ) : (
        <>
          <div className="w-full bg-gray-600 -mb-6 py-2 text-center text-lg">
            Search Result for &ldquo;{searchString}&ldquo;
          </div>
          <Table active={2} searchString={searchString} />
        </>
      )}
    </main>
  );
}
