import React, { useEffect, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './css/latestNewsWidget.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NewsService } from '../../services/news.service';
import { TopHeadlinesCards } from '../newsCards/topHeadlinesCards';
import { Box } from '@mui/material';

export const LatestNewsWidget = () => {
  const [headlines, setHeadlines] = useState();
  const newsService = new NewsService();
  const [displayedArticles, setDisplayedArticles] =
    useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    newsService.fetchHeadline().then((headline) => {
      setDisplayedArticles(headline.articles);
      return headline;
    });

    newsService.fetchTopHeadlines().then((headline) => {
      setHeadlines(headline);
      return headline;
    });
  }, []);

  const fetchMoreData = () => {
    if (
      displayedArticles.length >= headlines.totalResults
    ) {
      setHasMore(false);
      return;
    }
    newsService
      .fetchHeadline(displayedArticles.length + 1)
      .then((newArticles) => {
        setDisplayedArticles((prevArticles) => [
          ...prevArticles,
          ...newArticles.articles,
        ]);
      });
  };

  return (
    <div className="widget">
      <Card
        sx={{
          height: '50px',
          borderTopRightRadius: '15px',
          borderTopLeftRadius: '15px',
        }}
        square={true}
        elevation={0}
      >
        <CardContent
          sx={{
            display: 'flex',
            fontWeight: 700,
          }}
        >
          <img
            src="https://i.imgur.com/9nNNYV2.gif"
            alt="Live-red-dot"
            height="25px"
            width="25px"
          />
          Latest News
        </CardContent>
      </Card>

      <Card square={true} elevation={0}>
        <div className="scrollableDiv">
          <InfiniteScroll
            dataLength={displayedArticles.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>No more news to show</b>
              </p>
            }
          >
            {displayedArticles.map(
              (headlineItem, index) => (
                <React.Fragment key={index}>
                  <div className="time">
                    <CardContent>
                      {headlineItem.publishedAt
                        ?.slice(0, 16)
                        .split('T')
                        .join(' ')}
                    </CardContent>
                  </div>
                  <div className="title-fix">
                    {headlineItem.title}
                  </div>
                  <div className="card-line"></div>
                </React.Fragment>
              ),
            )}
          </InfiniteScroll>
        </div>
      </Card>

      <Card
        sx={{
          height: '50px',
          borderBottomRightRadius: '15px',
          borderBottomLeftRadius: '15px',
        }}
        square={true}
        elevation={0}
      >
        <div className="card-line"></div>
        <CardContent
          sx={{
            display: 'flex',
            fontWeight: 700,
          }}
        >
          <div className="see-news">
            <Link
              to="/TopHeadlines"
              element={<TopHeadlinesCards />}
              style={{
                textDecoration: 'none',
                color: '#1e71bb',
              }}
            >
              See all news
            </Link>
          </div>
          <div className="arrow">
            <ArrowForwardIosIcon
              style={{ height: 15, width: 15 }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
