import React, { Component } from 'react'
import AddNinjas from './AddNinjas';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Ryu', age: 30, belt: 'black', id: 1},
      {name: 'Yoshi', age: 20, belt: 'green', id: 2},
      {name: 'Crystal', age: 25, belt: 'pink', id: 3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    // console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });

    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome:)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinjas addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;