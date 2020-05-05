import React from 'react';

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((prevState) => {
      return {count: prevState.count + 1}
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incrementCount()}>Click</button>
        <h3>Counter is: {this.state.count}</h3>
      </div>
    )
  }
}

export default ClassCounter;
