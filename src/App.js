import React from 'react';
import 'flexboxgrid2/flexboxgrid2.css';
import { BrowserRouter, Route } from 'react-router-dom';
import GameScreen from './GameScreen';
import StartScreen from './StartScreen';
import EndGameScreen from './EndGameScreen';

const App = () => (
  <div className="container" data-tid="App">
    <BrowserRouter>
      <div>
        <Route path="/" exact component={StartScreen} />
        <Route path="/game" component={GameScreen} />
        <Route path="/endGame" component={EndGameScreen} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
