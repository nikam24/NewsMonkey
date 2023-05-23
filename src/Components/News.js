// import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  
  constructor() {
    super();
    console.log("Hello I am a constructor.");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=826dac6c0ee74e02bef5a04ece8d5274&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handlePrevClick = async () => {
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=826dac6c0ee74e02bef5a04ece8d5274&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };

  handleNextClick = async () => {
    console.log("Next");

    if (!(this.state.page + 1 > Math.ceil(this.statetotalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=826dac6c0ee74e02bef5a04ece8d5274&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({loading: false});

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  };

  render() {
    console.log("render");
    return (
      <div className="flex flex-col items-center space-y-8 my-3 mx-6">
        <div>
          <h2 className="text-4xl font-bold">NewsMonkey - Top Headlines</h2>
        </div>
        {this.state.loading && <Spinner/>}
        <div className="grid md:grid-cols-3 gap-4">
          {!this.state.loading && this.state.articles.map((element) => (
            <NewsItem
              key={element.url}
              title={element.title ? element.title : ""}
              description={element.description ? element.description : ""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            />
          ))}
        </div>
        <div
          disabled={this.state.page <= 1}
          className="flex w-full justify-between"
        >
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            id="iam"
            disabled={this.state.page + 1 > Math.ceil(this.statetotalResults / 9)}
            type="button"
            className="text-white bg-gray-800 
            hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
