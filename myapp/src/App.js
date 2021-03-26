import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: '30', belt: 'black', id: 1 },
      { name: 'Yoshi', age: '20', belt: 'green', id: 2 },
      { name: 'Crystal', age: '25', belt: 'pink', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
        </header>
          <p className="App-intro">
          </p>
          <h1>My first React app</h1>
          <p>Welcome:)</p>
          <Ninjas />
          <Ninjas name="Ryu" age="25" belt="black" />
          <Ninjas name="Yoshi" age="30" belt="green" />
          <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
