import React, { Component } from 'react';
import Card from './Card';
import { NewGameButton, PointsBlock, Points, CardWrap as Wrap, GameHeader } from './UI';

const cardChangeDelay = 1000;
const cardShowTime = 5000;
const endScreenDelay = 1000;
const pairCount = 9;
const suits = ['C', 'D', 'H', 'S'];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const shuffle = () => Math.random() - 0.5;
const isMatch = cards => cards[0].suit === cards[1].suit && cards[0].rank === cards[1].rank;
const getPointsIncrement = resolvedPairs => (pairCount - resolvedPairs) * 42;
const getPointsDecrement = resolvedPairs => resolvedPairs * 42;

const initializeDeck = () => {
  const topCards = [...Array(52).keys()]
    .slice()
    .sort(shuffle)
    .slice(0, pairCount);
  return [...topCards, ...topCards]
    .slice()
    .sort(shuffle)
    .map((card, index) => ({
      suit: suits[Math.trunc(card / 13)],
      rank: ranks[card % 13],
      isFaceUp: true,
      isVisible: true,
      id: index,
    }));
};

const updateDeck = (state, field, value) =>
  state.deck.map((card, index) => {
    if (state.selectedCards.reduce((result, a) => result || a.id === index, false)) {
      return {
        ...card,
        [field]: value,
      };
    }
    return card;
  });

class GameScreen extends Component {
  state = {
    deck: undefined,
    selectedCards: [],
    resolvedPairs: 0,
    points: 0,
    pregameShow: false,
  };

  componentWillMount() {
    this.newGame();
  }

  newGame = () => {
    const deck = initializeDeck();
    this.setState(
      () => ({
        deck,
        pregameShow: true,
        points: 0,
        resolvedPairs: 0,
        selectedCards: [],
      }),
      () => {
        setTimeout(() => {
          this.setState(
            () => ({
              deck: this.state.deck.map(card => ({ ...card, isFaceUp: false })),
            }),
            () => {
              this.setState({ pregameShow: false });
            },
          );
        }, cardShowTime);
      },
    );
  };

  cardClickHandler = (card) => {
    if (
      this.state.selectedCards.length < 2 &&
      !this.state.pregameShow &&
      (this.state.selectedCards[0] === undefined || this.state.selectedCards[0].id !== card.id)
    ) {
      this.setState(
        () => ({ selectedCards: [...this.state.selectedCards, card] }),
        () => {
          this.setState({ deck: updateDeck(this.state, 'isFaceUp', true) });
          if (this.state.selectedCards.length === 2) {
            if (isMatch(this.state.selectedCards)) {
              this.setState(
                () => ({ resolvedPairs: this.state.resolvedPairs + 1 }),
                () => {
                  this.setState(
                    () => ({
                      points: this.state.points + getPointsIncrement(this.state.resolvedPairs),
                    }),
                    () => {
                      if (this.state.resolvedPairs === pairCount) {
                        setTimeout(() => {
                          this.props.history.push({
                            pathname: '/endGame',
                            points: this.state.points,
                          });
                        }, endScreenDelay);
                      }
                    },
                  );
                },
              );
              setTimeout(() => {
                this.setState(
                  () => ({ deck: updateDeck(this.state, 'isVisible', false) }),
                  () => {
                    this.setState({ selectedCards: [] });
                  },
                );
              }, cardChangeDelay);
            } else {
              this.setState({
                points: this.state.points - getPointsDecrement(this.state.resolvedPairs),
              });
              setTimeout(() => {
                this.setState(
                  () => ({ deck: updateDeck(this.state, 'isFaceUp', false) }),
                  () => {
                    this.setState({ selectedCards: [] });
                  },
                );
              }, cardChangeDelay);
            }
          }
        },
      );
    }
  };

  render() {
    return (
      <div>
        <GameHeader>
          <div className="row between-xs">
            <NewGameButton
              onClick={this.newGame}
              disabled={this.state.pregameShow}
              data-tid="Menu-newGame"
            >
              Restart
            </NewGameButton>
            <PointsBlock>
              Points: <Points data-tid="Menu-scores">{this.state.points}</Points>
            </PointsBlock>
          </div>
        </GameHeader>
        <div className="row center-xs" data-tid="Deck">
          {this.state.deck.map(card => (
            <div className="col-xs-2" key={card.id}>
              <Wrap>
                <Card
                  suit={card.suit}
                  rank={card.rank}
                  isFaceUp={card.isFaceUp}
                  isVisible={card.isVisible}
                  id={card.id}
                  onClick={this.cardClickHandler}
                />
              </Wrap>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GameScreen;
