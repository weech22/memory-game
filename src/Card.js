import React, { Component } from 'react';
import Cards from './Cards';
import { CardImage } from './UI';

const getCardSide = (isFaceUp, name) => {
  if (isFaceUp) {
    return name;
  }
  return 'back';
};

const getDataTid = (isFaceUp) => {
  if (isFaceUp) {
    return 'Card';
  }
  return 'Card-flipped';
};

class Card extends Component {
  state = {
    id: this.props.id,
    isFaceUp: this.props.isFaceUp,
    isVisible: this.props.isVisible,
    suit: this.props.suit,
    rank: this.props.rank,
  };

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  clickHandler = () => {
    this.props.onClick(this.state);
  };

  render() {
    const cardName = this.state.rank + this.state.suit;
    const cardSide = getCardSide(this.state.isFaceUp, cardName);
    const dataTid = getDataTid(this.state.isFaceUp);

    return (
      <div data-tid={dataTid}>
        <CardImage
          src={Cards[cardSide]}
          onClick={this.clickHandler}
          isVisible={this.state.isVisible}
        />
      </div>
    );
  }
}

export default Card;
