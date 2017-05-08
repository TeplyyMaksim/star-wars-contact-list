import React from 'react';
import topImg from './es6-webpack-react-babel.png';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="c-app">
        <img src={topImg} />
        <h1>Your application starts here</h1>
      </div>
    );
  }
}
