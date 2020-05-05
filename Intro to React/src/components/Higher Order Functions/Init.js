import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class Init extends React.Component {

  /*One alternartive to Higher Order Functions (HOC) is to include reusable code in PARENT Component; as below*/
  // constructor() {
  //   super();
  //   this.state = {
  //     count:0
  //   }
  //   this.handleChange = this.handleChange.bind(this);
  //
  // }
  //
  // handleChange() {
  //   //alert("I'm clicked");
  //   this.setState(function(prevState){
  //     return {count: prevState.count + 1}
  //   })
  // }

  render() {
    return (
      <div>
        <ClickCounter usage="This will count no. of clicks"/>
        <HoverCounter usage="This will count no. mouse overs"/>
      </div>
    )
  }
}

export default Init;
