import React, { useState } from 'react';
import './css/categories.scss';
import HomeIcon from '@mui/icons-material/Home';
import AppleIcon from '@mui/icons-material/Apple';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ComputerIcon from '@mui/icons-material/Computer';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavLink } from 'react-router-dom';

export const Categories = () => {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  };

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

  return (
    <div className="wrapping">
      <div className="push-left">
        {iconArray.map((iconItem) => {
          return (
            <div
              className="activeButton"
              key={iconItem.title}
            >
              <NavLink
                style={({ isActive }) => {
                  return {
                    background: isActive ? 'white' : '',
                    color: isActive ? '#bb1e1e' : 'white',
                  };
                }}
                to={iconItem.title}
                end
              >
                <button
                  className="buttons"
                  onClick={handleClick}
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
