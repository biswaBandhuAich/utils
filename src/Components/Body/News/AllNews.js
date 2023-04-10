import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

function AllNews(props) {
  const [pageCount, setPageCount] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [newsArticles, setNewsArticles] = useState([]);

  const fetchAllNews = async () => {
    let url = `https://gnews.io/api/v4/search?q=example&apikey=a985c61f198f69d2954105f8e1ea2fda&page=${pageNumber}&max=500`;
    let allNews = await fetch(url);
    let parsedData = await allNews.json();
    setPageCount(Math.ceil(parseInt(parsedData.totalArticles) / 10));
    console.log(parsedData);
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
  }, []);

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
                  image={news.image}
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
