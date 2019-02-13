import React, { Component } from 'react'
import Article from './Article';

export default class ArticlesList extends Component {
  render() {
    if (!this.props.articles.length) return null
    return (
      <>
      <h1 style={{ textAlign: 'center', padding: '10px', color: 'white' }}>Articles</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {this.props.articles.map(article => <Article key={article.title} {...article} />)}
        </div>
      </>
    )
  }
}
