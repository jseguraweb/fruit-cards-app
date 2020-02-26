import React, { Component } from 'react';
import FruitCard from './FruitCard';
import './App.css'
import apple from '../img/apple.png'
import banana from '../img/banana.png'
import pineapple from '../img/pineapple.png'
import Form from './Form';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        {
          name: 'apple',
          picture: apple,
          description: 'An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.'
        },
        {
          name: 'pineapple',
          picture: pineapple,
          description: 'The pineapple (Ananas comosus) is a tropical plant with an edible fruit, also called a pineapple,[2][3] and the most economically significant plant in the family Bromeliaceae.[4] The pineapple is indigenous to South America where it has been cultivated for many centuries.'
        },
        {
          name: 'banana',
          picture: banana,
          description: 'A banana is an edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.'
        }
      ]
    }
  }

  createCard = newCard => {
    let newState = [...this.state.fruits, newCard]
    this.setState({
      fruits: newState
    })
  }

  deleteCard = index => {
    let newState = [...this.state.fruits];
    newState.splice(index, 1);
    this.setState({
      fruits: newState
    })
  }

  render() {
    let allFruits = this.state.fruits.map((fruit, i) => <FruitCard key={i} index={i} name={fruit.name} picture={fruit.picture} description={fruit.description} deleteCard={this.deleteCard} />);
    return (
      <div>
        <h1>Fruit cards</h1>
        <Form createCard={this.createCard} />
        <div className="container">
          {allFruits}
        </div>
      </div>
    );
  }
}

export default App;
