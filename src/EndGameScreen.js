import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import endGame from './endGame.png';
import endGame2x from './endGame@2x.png';
import { PlayButton, LogoBlock, GameLogo, Wrap, Title } from './UI';

const Congrats = styled(Title)`
  font-size: 24px;
  letter-spacing: 0.15px;
  line-height: 35px;
  margin: 15px 0 39px 0;
  text-align: center;
`;

const RetryButton = styled(PlayButton)`
  width: 128px;
`;

const gameLogo = window.devicePixelRatio < 2 ? endGame : endGame2x;

const EndGameScreen = props => (
  <Wrap>
    <LogoBlock>
      <GameLogo src={gameLogo} alt="Memory Game" />
      <Congrats>
        Поздравляем!<br />Ваш итоговый счёт: {props.location.points}
      </Congrats>
      <Link to="/">
        <RetryButton data-tid="EndGame-retryGame">Ещё раз</RetryButton>
      </Link>
    </LogoBlock>
  </Wrap>
);

export default EndGameScreen;
