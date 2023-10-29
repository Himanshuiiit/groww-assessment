"use client"
import React, { ReactNode, createContext, useState } from "react";

interface Props {
  children?: ReactNode;
}

export interface DataType {
  searchString: string;
  setSearchString: (serachString: string) => void;
}

export const Data = createContext<DataType | null>(null);

const DataProvider = ({ children }: Props) => {
  const [searchString, setSearchString] = useState<string>("");
  return (
    <Data.Provider value={{ searchString, setSearchString }}>
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
