import React, { Component } from "react";
import { Card } from "flowbite-react/lib/esm/components";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="mx-4 sm:max-w-2xl hover:brightness-110 shadow-lg shadow-black">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={imageUrl?imageUrl:"https://c.ndtvimg.com/2022-11/92e7e9pg_asteroid-generic_625x300_01_November_22.jpg"}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <div>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href={newsUrl}>  <a href={newsUrl} target="_blank" rel="noopener noreferrer"> ReadMore ↗ </a></button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default NewsItem;
