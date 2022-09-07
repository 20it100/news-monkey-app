import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NEWSMONKEY TOP NEWS</h2>    
            <NewsItem title="mytitle" description="mydesc" imageUrl="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3d77fa01693146b8b3c08c635039d0ea"/>
      </div>
    )
  }
}

export default News