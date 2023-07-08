import { useEffect, useState } from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  // const [MaxPages, setMaxPages] = useState(0);
  const [TotalResult, setTotalResult] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const pageSize = 9;
  const apiKey = "27b4044f329349a98e247a0931a887fa";
  const country = "in";
  const category = props.category;

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        // setArticles({...articles},data.articles);
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        // setMaxPages(Math.ceil(data.totalResults / pageSize));
        setTotalResult(data.totalResults);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page,category]);

  // const handlePrevious = () => {
  //   if (page > 1) {
  //     setPage((prevPage) => prevPage - 1);
  //   }
  // };

  // const handleNext = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };


 const fetchMore=async()=>
  {
    setPage((prevPage) => prevPage + 1);
  }
  return (
    <>
      <h1
        className="text-center"
        style={{ marginTop: "5rem", marginBottom: "1rem" }}
      >
        Top {category} News
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length < TotalResult}
        loader={<h4>Loading...</h4>}
      >
        <div className="row justify-content-center">
          {articles.map((article) => (
            <Card
              key={article.title}
              title={article.title}
              description={article.description}
              urlToImage={article.urlToImage}
              url={article.url}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;


  /* <div className="container d-flex justify-content-between">
        <button
          type="button"
          disabled={page <= 1 ? true : false}
          className="btn btn-dark"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={page === MaxPages ? true : false}
          className="btn btn-dark"
          onClick={handleNext}
          >
          Next
        </button>
      </div> */

