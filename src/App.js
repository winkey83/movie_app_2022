import React from "react";

class App extends React.Component {
  state={
    count: 0,
  };

  constructor(props) {
    super(props);
    console.log('AA: constructor');
  }

  componentDidMount() {
    console.log('AA: componentDidMount');
  }

  componentDidUpdate() {
    console.log('AA: componentDidUpdate');
  }

  add = () => {
    this.setState(current=>({
      count: current.count+1
    }));
  };

  subtract = () => {
    this.setState(current=>({
      count: current.count-1
    }));
  };

  render() {
    console.log('AA: render');
    return (
      <div>
        <h1>BattleField:{this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  }
}

export default App;
