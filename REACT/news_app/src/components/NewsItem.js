import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    // Extract props and apply defaults
    const {
      title = "Untitled Article",
      description = "No description available",
      url = "#",
      urlToImage,
      publishedAt,
      content,
    } = this.props;

    // Use environment fallback image if no valid URL
    const fallbackImg =
      urlToImage && urlToImage.trim() !== ""
        ? urlToImage
        : process.env.REACT_APP_SAMPLE_IMG ||
          "https://via.placeholder.com/300x200?text=No+Image";

    return (
      <div className="card m-3" style={{ width: "18rem" }}>
        <img
          src={fallbackImg}
          alt={title || "News"}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div className="card-body">
          <h5 className="card-title">
            {title.length > 50 ? title.slice(0, 50) + "..." : title}
          </h5>

          <p className="card-text">
            {description
              ? description.slice(0, 100) + "..."
              : "No description available"}
          </p>

          <a
            href={url || "#"}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read full article
          </a>
        </div>
      </div>
    );
  }
}
