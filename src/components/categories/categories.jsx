import React, { useState } from 'react';
import './css/categories.scss';
import HomeIcon from '@mui/icons-material/Home';
import AppleIcon from '@mui/icons-material/Apple';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ComputerIcon from '@mui/icons-material/Computer';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { NavLink } from 'react-router-dom';

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const iconArray = [
    {
      icon: <HomeIcon />,
      title: 'Home',
    },
    {
      icon: <AppleIcon />,
      title: 'Apple',
    },
    {
      icon: <NewspaperIcon />,
      title: 'WSJ',
    },
    {
      icon: <CurrencyBitcoinIcon />,
      title: 'Bitcoin',
    },
    {
      icon: <ComputerIcon />,
      title: 'Tech',
    },
    {
      icon: <ElectricCarIcon />,
      title: 'Tesla',
    },
    {
      icon: <FavoriteIcon />,
      title: 'Favorites',
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="wrapping">
      <div className="push-left">
        {iconArray.map((iconItem, index) => {
          return (
            <div
              className="activeButton"
              key={iconItem.title}
            >
              <NavLink to={iconItem.title} end>
                <button
                  className="buttons"
                  style={{
                    backgroundColor:
                      index === activeIndex ? 'white' : '',
                    color:
                      index === activeIndex
                        ? '#bb1e1e'
                        : 'rgb(112, 109, 109)',
                  }}
                  onClick={() => handleClick(index)}
                >
                  {iconItem.icon}
                  <br />
                  {iconItem.title}
                </button>
                <br />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
