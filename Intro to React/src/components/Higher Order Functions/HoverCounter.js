import React from 'react';
import UpdatedComponent from './WithCounter';

class HoverCounter extends React.Component {
  /*This is used to count the no of times the user hovers on heading element*/
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
  /**********/

  render() {
    return (
      <div>
        <p>{this.props.usage}</p>
        <h4 onMouseOver={() => {this.props.handleChange()}}>Hover Counter: {this.props.count}</h4>
      </div>      
    )
  }
}
export default UpdatedComponent(HoverCounter);
