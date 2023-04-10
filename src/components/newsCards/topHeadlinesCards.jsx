import React, { useState } from 'react';
import './css/newsCards.scss';
import { Cards } from './cards';
import SearchIcon from '@mui/icons-material/Search';

export const TopHeadlinesCards = (props) => {
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
      <h2>Top Headlines</h2>

      <div className="container">
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
