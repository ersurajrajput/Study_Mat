import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { fetchAllNews } from "../API/NewsAPI";
import Footer from "./Footer";
import LoadingBar from "./LoadingBar";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],          // ✅ Always start with an empty array
      pageNo: 1,
      totalResult: 0,
      error: null,
    };
  }

  async componentDidMount(q = this.state.pageNo) {
    await this.loadNews(q);
  }

  // ✅ Refactored for reuse
  loadNews = async (page) => {
    try {
      this.setState({ isLoading: true, error: null });

      // Fetch news data
      const newData = await fetchAllNews("india", page);

      // ✅ Safe check if articles exist
      const articles = Array.isArray(newData?.articles) ? newData.articles : [];

      this.setState({
        data: articles,
        isLoading: false,
        totalResult: newData?.totalResults || 0,
        pageNo: page,
      });

      console.log("Fetched data:", newData);
    } catch (e) {
      console.error("Error fetching news:", e);
      this.setState({ isLoading: false, error: "Failed to fetch news." });
    }
  };

  handleNextClick = async () => {
    this.loadNews(this.state.pageNo + 1);
  };

  handlePreviousClick = async () => {
    this.loadNews(this.state.pageNo - 1);
  };

  render() {
    const { data, isLoading, error, pageNo } = this.state;

    return (
      <>
        <div className="container mb-5 mt-5 ">
          {/* Pagination buttons */}
          <div className="d-flex justify-content-between mb-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handlePreviousClick}
              disabled={pageNo <= 1}
            >
              &#8592; Previous
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.handleNextClick}
            >
              Next &#8594;
            </button>
          </div>

          {/* Conditional rendering using ternary */}
          {isLoading ? (
            <LoadingBar />
          ) : error ? (
            <p className="text-center text-danger mt-4">{error}</p>
          ) : Array.isArray(data) && data.length > 0 ? (
            <div className="row justify-content-center">
              {data.map((item, index) => (
                <NewsItem
                  key={index}
                  title={item.title }
                  description={item.description }
                  url={item.url}
                  urlToImage={item.urlToImage}
                  publishedAt={item.publishedAt}
                  content={item.content}
                />
              ))}
            </div>
          ) : (
            <p className="text-center mt-4">No news available.</p>
          )}

          <Footer />
        </div>
      </>
    );
  }
}
