import React, { Component } from 'react';
import ArticlesList from './components/ArticlesList';
import AddArticle from './components/AddArticle'

class App extends Component {
  state = {
    articles: []
  }
  addArticle = async article => {
    try {
      const res = await fetch('http://localhost:3001/articles', {
        method: 'POST',
        body: JSON.stringify(article),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      !res.ok && Error('no')
      const json = await res.json()
      this.setState(prevState => {
        return {
          articles: [...prevState.articles, json]
        }
      })
    } catch (e) {
      console.error(e)
    }
  }
  componentDidMount = async () => {
    try {
      const res = await fetch('http://localhost:3001/articles')
      if (!res.ok) {
        throw new Error('API bad.')
      }
      const json = await res.json()
      this.setState({
        articles: json
      })
    } catch (e) {
      console.error(e)
    }
  }
  render() {
    return (
      <div style={{ backgroundColor: 'black' }}>
         <ArticlesList articles={this.state.articles} />
         <AddArticle addArticle={this.addArticle} />
      </div>
    );  
  }
}

export default App;
