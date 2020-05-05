import React from 'react';

//const ErrorComponent = () => <div>{props.random}</div>

class LifeCycle extends React.Component {
  constructor(props) {
    console.log("Message from constructor method");
    super(props);
    this.state = {
      counter: 1,
      limit: 3,
      initailCounterValue: 1
    }

    //One way to write custom Methods; is to write it in constructor itself
    this.increment = () => {this.setState({counter: this.state.counter + 1, limit: this.state.limit - 1})}

    this.handleDecrement = this.handleDecrement.bind(this);
  }

  //Another way to write custom Methods; is to write outside of constructor (prevState can be used)
  handleDecrement() {
    this.setState((prevState) => {
      return {counter: prevState.counter - 1, limit: this.state.limit - 1}
    })
  }

  /*
  ...is invoked right before calling the render method,
  both on the initial mount and on subsequent updates
  It should return an object to update the state, or null to update nothing.
  */
  static getDerivedStateFromProps(props,state) {
    if(props.initailCounterValue && state.initailCounterValue !== props.initailCounterValue){
      return {
        counter: props.initailCounterValue,
        initailCounterValue: props.initailCounterValue
      }
    }
    return null;
  }

  /*
  ...called when the component is constructed and gets added to the DOM
  */
  componentDidMount() {
      console.log("Message from Component Did Mount method");
      console.log("---------------------------------------");
  }

  /*
  ...This method is used to avoid possible unnecessary renders
  Do not Use 'this.state', instead use 'nextState' to determine re-rendering
  This method is not called for the initial render or when
  */
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Should Component Update? ${nextState.limit >= 0 ? "Yes" : "No"}`);
    console.log("------------------------------------------");
    return (
      nextState.limit >= 0 ? true : false
    )
  }

  /*
  ...This method is used to avoid possible unnecessary renders
  Do not Use 'this.state', instead use 'nextState' to determine re-rendering
  This method is not called for the initial render or when
  */
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Message from Get Snapshot Before Update method");
    console.log("------------------------------------------");
    return null;
  }

  render() {
    console.log("Message from render method");

    if(this.state.error){
      return <div>We have encountered an error! {this.state.error.message}</div>
    }

    return (
      <div>
        <h1>This is to introduce Life Cycle Methods in React</h1>
        <button onClick={() => {this.increment()}}>Increment</button>
        <button onClick={() => {this.handleDecrement()}}>Decrement</button>
        <p>Click left: {this.state.limit}</p>
        <h3>Counter: {this.state.counter}</h3>
        {/*<ErrorComponent />*/}
      </div>
    )
  }

  /*
  ...called right after "re-rendering". Not called for the initial render.
  .setState can be used
  */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Message from Component Did Update method");
    console.log("----------------------------------------");
  }

  /*
  ...called right after component is unmounted.
  */
  componentWillUnmount() {
    console.log("Message from Component Will Unmount method");
    console.log("----------------------------------------");
  }

  /*
  ...
  */
  componentDidCatch(error, info) {
    console.log("Error encountered!!!");
    this.setState({error, info});
  }
}

export default LifeCycle;
