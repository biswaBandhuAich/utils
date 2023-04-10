import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

function AllNews(props) {
  const [pageCount, setPageCount] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [newsArticles, setNewsArticles] = useState([]);

  const fetchAllNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=31696d7173f0409c825ce6086f8f0b77&page=${pageNumber}`;
    let allNews = await fetch(url);
    let parsedData = await allNews.json();
    setPageCount(Math.ceil(parseInt(parsedData.totalResults) / 20));
    setNewsArticles(parsedData.articles);
  };

  const nextNews = (pageNum) => {
    console.log(pageNum);
    setPageNumber(pageNum);
    fetchAllNews();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchAllNews();
  });

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
              <div className="col-md-4 my-3" key={news.title}>
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
        <Pagination pages={pageCount} nextNews={nextNews} />
      </div>
    </>
  );
}

export default AllNews;
