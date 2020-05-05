import React from 'react';

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    /*This is the common code for the ClickCounter and HoverCounter Component*/
    constructor() {
      super();
      this.state = {
        count: 0
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
      this.setState(prevState => {
        return {count: prevState.count + 1}
      })
    }

    render() {
      return <OriginalComponent handleChange={this.handleChange} count={this.state.count} {...this.props}/>;
    }
  }
  return NewComponent;
}

export default UpdatedComponent;
