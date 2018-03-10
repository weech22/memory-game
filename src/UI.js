import styled from 'styled-components';

export const PlayButton = styled.button`
  border: none;
  opacity: 0.85;
  background: #ffffff;
  border-radius: 4px;
  width: 144px;
  height: 42px;
  color: #1b6d2e;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #1c7430;
  letter-spacing: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  transition: opacity 0.25s;
`;

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GameLogo = styled.img`
  width: 320px;
  height: 164px;
  @media only screen and (min-width: 520px) {
    width: auto;
    height: auto;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const NewGameButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.25px;
  &:disabled {
    color: #aaaaaa;
  }
`;

export const PointsBlock = styled.span`
  opacity: 0.8;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0px;
`;

export const Points = styled.span`
  font-family: 'krungthep';
  font-weight: 400;
`;

export const CardWrap = styled.div`
  margin-bottom: 30px;
`;

export const GameHeader = styled.div`
  padding: 50px 12px 20px 5px;
  @media only screen and (min-width: 768px) {
    padding: 50px 13px 20px 7px;
  }
  @media only screen and (min-width: 992px) {
    padding: 50px 18px 20px 11px;
  }
`;

export const CardImage = styled.img`
  border-radius: 5%;
  width: 90%;
  height: 90%;
  cursor: pointer;
  opacity: ${props => (props.isVisible ? '1' : '0')};
`;

export const Title = styled.h1`
  opacity: 0.85;
  font-family: 'Open Sans', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.2px;
  margin: 22px 0 34px 0;
`;
