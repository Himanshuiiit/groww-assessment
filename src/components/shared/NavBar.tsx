"use client";
import { Data, DataType } from "@/utils/contexts/DataContext";
import Image from "next/image";
import React, { useContext } from "react";

const NavBar = () => {
  const { searchString, setSearchString } = useContext(Data) as DataType;
  return (
    <div className="bg-gray-900 flex flex-row justify-center gap-x-72 items-center h-20">
      <h1 className="text-2xl font-bold">GrowwStonks</h1>
      <div className="w-[40%] relative">
        <Image
          src={"/assets/search-icon.png"}
          alt="icon"
          width={24}
          height={24}
          className="absolute top-2 left-3"
        />
        <input
          type="text"
          className="w-full h-10 rounded-3xl bg-gray-500 px-12 placeholder:text-gray-400"
          placeholder="Search stocks & etfs"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
    </div>
  );
};

export default NavBar;
