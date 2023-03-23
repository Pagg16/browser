import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";
import Loading from "../loading/Loading";

function Results() {
  const { getResults, result, searchTerm, setSearchTerm, isLoading } =
    useResultContext();

  const { pathname } = useLocation();

  useEffect(() => {
    getResults();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  switch (pathname) {
    case "/search":
      return (
        <div className="results__search">
          {result?.items?.map(({ link, title }, index) => {
            return (
              <div key={index}>
                <a href={link} target="_blank" rel="noreferrer">
                  <p>{link.length > 30 ? link.substring(0, 30) : link}</p>
                  <p>{title}</p>
                </a>
              </div>
            );
          })}
        </div>
      );
    case "/images":
      return (
        <div className="results__images">
          {result?.items?.map(({ link, title }, index) => {
            return (
              <div key={index}>
                <a href={link} target="_blank" rel="noreferrer">
                  <p>{link.length > 30 ? link.substring(0, 30) : link}</p>
                  <p>{title}</p>
                </a>
              </div>
            );
          })}
        </div>
      );
    case "/news":
      return "SEARCH";
    case "/videos":
      return "SEARCH";

    default:
      return "ERROR";
  }
}

export default Results;
