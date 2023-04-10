import React, { useEffect, useState } from 'react';
import './css/newsCards.scss';
import { Cards } from './cards';
import SearchIcon from '@mui/icons-material/Search';

export const FavoritesCards = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('items')));
  }, []);

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
      <h2>Favorites</h2>

      <div className="container">
        {items
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
