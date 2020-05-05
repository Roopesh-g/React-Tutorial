/* https://codeburst.io/how-to-use-react-lifecycle-methods-ddc79699b34e
  //Frequently used ones
1. componentDidMount
2. componentDidUpdate
3. componentWillUnmount
  //In-frequently used
4. shouldComponentUpdate
5. getDerivedStateFormProps
6. getSnapshotBeforeUpdate

*/
import React from 'react';
import LifeCycle from './LifeCycle';

class Init extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      initailCounterValue: 1
    }
    this.handleMount = this.handleMount.bind(this);
    this.initializeCounter = () => {this.setState({initailCounterValue: Number.parseInt(Math.random()*10)})}
  }

  handleMount(){
    this.setState((prevState) => {
      return {mount: !(prevState.mount)}
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.handleMount()}} disabled={this.state.mount}>Mount</button>
        <button onClick={() => {this.handleMount()}} disabled={!this.state.mount}>Un-mount</button>
        <button onClick={() => {this.initializeCounter()}}>Re-initialize the counter</button>
        {this.state.mount ? <LifeCycle initailCounterValue={this.state.initailCounterValue}/> : <p>No component to mount</p>}
      </div>
    )
  }
}

export default Init;
