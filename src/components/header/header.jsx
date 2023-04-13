import React, { useEffect, useState } from 'react';
import './css/header.css';
import { Categories } from '../categories/categories';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { NewsCards } from '../newsCards/newsCards';
import { NewsService } from '../../services/news.service';
import { FavoritesCards } from '../newsCards/favoritesCards';
import { TopHeadlinesCards } from '../newsCards/topHeadlinesCards';
import { Twirl as Hamburger } from 'hamburger-react';

export const Header = () => {
  const [news, setNews] = useState();
  const [apple, setApple] = useState();
  const [bitcoin, setBitcoin] = useState();
  const [wsj, setWSJ] = useState();
  const [tech, setTech] = useState();
  const [tesla, setTesla] = useState();
  const [headlines, setHeadlines] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const newsService = new NewsService();

    newsService.fetchAll().then((allNews) => {
      setNews(allNews);
      return allNews;
    });

    newsService.fetchBitcoin().then((bitcoins) => {
      setBitcoin(bitcoins);
      return bitcoins;
    });

    newsService.fetchApple().then((apples) => {
      setApple(apples);
      return apples;
    });

    newsService.fetchTechCrunch().then((techCrunch) => {
      setTech(techCrunch);
      return techCrunch;
    });

    newsService.fetchTesla().then((teslas) => {
      setTesla(teslas);
      return teslas;
    });

    newsService.fetchWSJ().then((wsjArticle) => {
      setWSJ(wsjArticle);
      return wsjArticle;
    });

    newsService.fetchTopHeadlines().then((headline) => {
      setHeadlines(headline);
      return headline;
    });
  }, []);

  return (
    <Router>
      <div className="same-line">
        <div className="hamburger">
          <Hamburger
            toggled={isOpen}
            size={25}
            rounded
            toggle={setIsOpen}
          />
        </div>
        <h1 className="title">
          <span style={{ color: '#BB1E1E' }}>My</span>
          News
        </h1>
      </div>

      <div className="categories">
        <Categories />
      </div>

      <div className="news-cards">
        <Routes>
          <Route
            path="/Home"
            element={
              <NewsCards articles={news?.articles} />
            }
          />
          <Route
            path="/Apple"
            element={
              <NewsCards articles={apple?.articles} />
            }
          />
          <Route
            path="/WSJ"
            element={<NewsCards articles={wsj?.articles} />}
          />
          <Route
            path="/Bitcoin"
            element={
              <NewsCards articles={bitcoin?.articles} />
            }
          />
          <Route
            path="/Tech"
            element={
              <NewsCards articles={tech?.articles} />
            }
          />
          <Route
            path="/Tesla"
            element={
              <NewsCards articles={tesla?.articles} />
            }
          />
          <Route
            path="/TopHeadlines"
            element={
              <TopHeadlinesCards
                articles={headlines?.articles}
              />
            }
          />
          <Route
            path="/Favorites"
            element={<FavoritesCards />}
          />

          <Route
            path="*"
            element={
              <NewsCards articles={news?.articles} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
