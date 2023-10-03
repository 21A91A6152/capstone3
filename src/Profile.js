import React from 'react'
import './cssfiles/global.css';
import Header from './comp/Header.js'
import TopCardList from './comp/top-card-list.js'
import Overview from './comp/Overview.js'
import Switch from './comp/Switch.js'

function Profile() {
  return (
    <>
    <Header>
      <Switch/>
    </Header>
    <TopCardList/>
    <Overview/>
    </>
  );
}

export default Profile;
