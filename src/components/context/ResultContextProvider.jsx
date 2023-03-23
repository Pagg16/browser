import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const ResultContext = createContext();

const baseUrl = "https://google-search72.p.rapidapi.com";

const options = {
  method: "GET",
  url: "",
  params: {},
  headers: {
    "X-RapidAPI-Key": "570f0ed2cdmsh30dc44b8e51f7b7p18bb4ajsn19eabb1c5b1f",
    "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
  },
};

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("word cup");
  const [regionCode, setRegionCode] = useState("us");
  const [language, setLanguage] = useState("en");
  const [sortType, setSortType] = useState("relevance");

  const getResults = async () => {
    setIsLoading(true);

    const optionsClone = Object.assign({}, options);

    optionsClone.url = baseUrl + "/search";
    optionsClone.params = {
      query: searchTerm,
      gl: regionCode,
      lr: language,
      num: "10",
      start: "0",
      sort: sortType,
    };

    const response = await axios
      .request(optionsClone)
      .finally(setIsLoading(false));

    console.log(response.data);

    setResult(response.data);
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
