import React, { Component } from 'react';

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className='container'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-sm btn-primary" target='_blank' rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
