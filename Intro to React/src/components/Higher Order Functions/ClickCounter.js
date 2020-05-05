import React from 'react';
import UpdatedComponent from './WithCounter';

class ClickCounter extends React.Component {
  /*This is used to count the no. of times user clicks on the button*/
    // constructor() {
    //   super();
    //   this.state = {
    //     count: 0
    //   }
    //   this.handleChange = this.handleChange.bind(this);
    // }
    //
    // handleChange() {
    //   this.setState(prevState => {
    //     return {count: prevState.count + 1}
    //   })
    // }
  /*******/
  render() {
    return (
      <div>
        <p>{this.props.usage}</p>
        <button onClick={() => {this.props.handleChange()}}>Clicked {this.props.count} times!</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter);
