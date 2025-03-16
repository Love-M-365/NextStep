import React, { Component } from 'react';
import NewsItems from './NewsItems';

export class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=career%20OR%20JOBS%20OR%20EMPLOYMENT&apiKey=eb16ccf391cd4eed9e83b0aec4a1560d&pagesize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles
    });
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>Newsgram- Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((ele) =>
            <div className='col-md-4' key={ele.newsUrl}>
              <NewsItems
                title={ele.title ? ele.title : ''}
                description={ele.description ? ele.description : " "}
                imgUrl={ele.urlToImage}
                newsUrl={ele.url}
              />
            </div>
          )}
        </div>
        <div className="d-flex justify-content-between my-2">
          <button type="button" className="btn btn-dark">&larr; previous</button>
          <button type="button" className="btn btn-dark">next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
