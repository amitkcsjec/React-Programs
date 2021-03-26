import React, { Component } from 'react'
import ConditionalOutput from './ConditionalOutput'
import Ninjas from './Ninjas'
import AddNinjas from './AddNinjas'
import ReactForms from './ReactForms'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  addNinja = (ninja) => {
        console.log(ninja);
        // ninja.id = Math.random();
        // let ninjas = [...this.state.ninjas, ninja];
        // this.setState({
        //   ninjas: ninja
        // })
  }

  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome:)</p>
        <Ninjas ninjas={this.state.ninjas} />
        <ConditionalOutput ninjas={this.state.ninjas} />
        <AddNinjas />
        <ReactForms addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;