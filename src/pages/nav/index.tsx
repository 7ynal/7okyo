import React from 'react';
import {
  Link
} from "react-router-dom";
import {Grid} from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import AddBoxIcon from '@material-ui/icons/AddBox';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import style from './style.module.scss';

export default function Nav(){
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

    return<nav className={style.bottomNavigation}>
      <BottomNavigation value={value} onChange={handleChange}>
        <Link to="/">
          <BottomNavigationAction label="Recents" value="recents" icon={<WhatshotIcon />} />
        </Link>
        <Link to="/create">
          <BottomNavigationAction label="Favorites" value="favorites" icon={<VideogameAssetIcon />} />
        </Link>
        <Link to="/create/bot">
          <BottomNavigationAction label="Nearby" value="nearby" icon={<AddBoxIcon />} />
        </Link>
      </BottomNavigation>
  </nav>
}