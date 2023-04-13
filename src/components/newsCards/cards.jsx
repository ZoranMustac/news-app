import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import './css/cards.css';

export const Cards = (props) => {
  const { source, urlToImage, title, author } = props;
  const [savedState, setSavedState] = useState(false);

  useEffect(() => {
    const savedItems = JSON.parse(
      localStorage.getItem('items'),
    );
    if (savedItems) {
      const savedCard = savedItems.find(
        (item) => item.title === title,
      );
      if (savedCard) {
        setSavedState(true);
      }
    }
  }, [title]);

  const addBookmark = () => {
    const savedItems =
      JSON.parse(localStorage.getItem('items')) || [];
    const cardArray = {
      source: source,
      urlToImage: urlToImage,
      title: title,
      author: author,
    };
    const updatedItems = [...savedItems, cardArray];
    localStorage.setItem(
      'items',
      JSON.stringify(updatedItems),
    );
    setSavedState(true);
  };

  const deleteBookmark = () => {
    const savedItems = JSON.parse(
      localStorage.getItem('items'),
    );
    const updatedItems = savedItems.filter(
      (item) => item.title !== title,
    );
    localStorage.setItem(
      'items',
      JSON.stringify(updatedItems),
    );
    setSavedState(!savedState);
  };

  return (
    <div className="box">
      <Box
        sx={{
          marginBottom: '25px',
        }}
        key={title}
      >
        <Card
          key={title}
          sx={{
            width: 320,
            height: 280,
            borderRadius: 3,
          }}
        >
          <CardMedia
            sx={{ height: 120 }}
            image={
              urlToImage ??
              'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'
            }
          />
          <div className="subheader">
            <CardContent>{source?.name}</CardContent>
          </div>
          <div className="header">
            <p>{title}</p>
          </div>
          <div className="one-row">
            <div className="author">
              <p>{author ?? 'N/A'}</p>
            </div>
            <div className="favorite">
              <IconButton>
                {savedState ? (
                  <FavoriteIcon
                    onClick={(e) => {
                      setSavedState(false);
                      deleteBookmark();
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={(e) => {
                      e.preventDefault();
                      setSavedState(true);
                      addBookmark();
                    }}
                  />
                )}
              </IconButton>
            </div>
          </div>
        </Card>
      </Box>
    </div>
  );
};
