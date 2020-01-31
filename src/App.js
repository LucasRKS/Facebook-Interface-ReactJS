import React from 'react';

import './App.css';

import Header from './components/header/Header';
import PostList from './components/postList/PostList';

function App() {
  return (<div className="container">
    <Header />
    <PostList />
  </div>)
}

export default App;