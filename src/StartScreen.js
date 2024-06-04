import React from 'react';
import { Link } from 'react-router-dom';
import startGame from './startGame.png';
import startGame2x from './startGame@2x.png';
import { PlayButton, LogoBlock, GameLogo, Wrap, Title } from './UI';

const gameLogo = window.devicePixelRatio < 2 ? startGame : startGame2x;

const StartScreen = () => (
  <Wrap>
    <LogoBlock>
      <GameLogo src={gameLogo} alt="Memory Game" />
      <Title>MEMORY GAME</Title>
      <Link to="/game">
        <PlayButton data-tid="NewGame-startGame">Play</PlayButton>
      </Link>
    </LogoBlock>
  </Wrap>
);

export default StartScreen;
