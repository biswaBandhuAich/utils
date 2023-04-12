import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

function AllNews(props) {
  const [pageNumber, setPageNumber] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);

  const fetchAllNews = async () => {
    let url = `https://newsapiforgithub-default-rtdb.asia-southeast1.firebasedatabase.app/artices.json`;
    let allNews = await fetch(url);
    let parsedData = await allNews.json();
    const fetchingDataWithKeys = Object.getOwnPropertyNames(parsedData);
    setNewsArticles(parsedData[fetchingDataWithKeys[pageNumber]]);
  };
  useEffect(() => {
    fetchAllNews();
  }, []);

  const nextNews = (pageNum) => {
    setPageNumber(pageNum);
    fetchAllNews();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="container text-center my-4">
        <h1
          style={
            props.mode === "dark"
              ? {
                  color: "white",
                }
              : { color: "black" }
          }
        >
          Here goes all the latest news
        </h1>
      </div>
      <div className="container">
        <div className="row">
          {newsArticles.map((news) => {
            return (
              <div className="col-md-4 my-3" key={news.url}>
                <NewsItem
                  title={news.title}
                  image={news.urlToImage}
                  description={news.description}
                  url={news.url}
                  mode={props.mode}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <Pagination nextNews={nextNews} />
      </div>
    </>
  );
}

export default AllNews;
