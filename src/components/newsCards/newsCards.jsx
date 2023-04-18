import React, { useState } from 'react';
import './css/newsCards.scss';
import { Cards } from './cards';
import arrayItems from '../../arrayItems';
import SearchIcon from '@mui/icons-material/Search';
import { LatestNewsWidget } from '../latestNews/latestNewsWidget';

export const NewsCards = (props) => {
  const { articles } = props;
  const [query, setQuery] = useState('');

  return (
    <div className="parent">
      <div className="search">
        <div className="searchInput">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search News"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="searchButton">
            <button type="submit">SEARCH</button>
          </div>
        </div>
      </div>
      <h2>News</h2>
      <div className="news-container">
        <div className="card-container">
          {articles
            ?.filter((post) => {
              if (query === '') {
                return post;
              } else if (
                post?.title
                  ?.toLowerCase()
                  .includes(query.toLowerCase())
              ) {
                return post;
              }
            })
            .slice(0, 4) // add this to limit to first 4 items
            .map((post, index) => (
              <Cards
                key={post.title}
                title={post.title}
                author={post.author}
                urlToImage={post.urlToImage}
                source={post.source}
              />
            ))}
          {arrayItems
            ?.filter((post) => {
              if (query === '') {
                return post;
              } else if (
                post?.title
                  ?.toLowerCase()
                  .includes(query.toLowerCase())
              ) {
                return post;
              }
            })
            .slice(0, 4) // add this to limit to first 4 items
            .map((post, index) => (
              <Cards
                key={post.title}
                title={post.title}
                author={post.author}
                urlToImage={post.urlToImage}
                source={post.source}
              />
            ))}
        </div>

        <div className="widget-wrapper">
          <LatestNewsWidget />
        </div>
      </div>
      <div className="card-container">
        {articles
          ?.filter((post) => {
            if (query === '') {
              return post;
            } else if (
              post?.title
                ?.toLowerCase()
                .includes(query.toLowerCase())
            ) {
              return post;
            }
          })
          .slice(4)
          .map((post, index) => (
            <Cards
              key={post.title}
              title={post.title}
              author={post.author}
              urlToImage={post.urlToImage}
              source={post.source}
            />
          ))}
        {arrayItems
          ?.filter((post) => {
            if (query === '') {
              return post;
            } else if (
              post?.title
                ?.toLowerCase()
                .includes(query.toLowerCase())
            ) {
              return post;
            }
          })
          .slice(4) // add this to limit to first 4 items
          .map((post, index) => (
            <Cards
              key={post.title}
              title={post.title}
              author={post.author}
              urlToImage={post.urlToImage}
              source={post.source}
            />
          ))}
      </div>
    </div>
  );
};
