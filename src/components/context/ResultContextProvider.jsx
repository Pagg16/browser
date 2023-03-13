import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com/v1";

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (typr) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${typr}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "570f0ed2cdmsh30dc44b8e51f7b7p18bb4ajsn19eabb1c5b1f",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    });

    const data = await response.json();
    setResult(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, result, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
