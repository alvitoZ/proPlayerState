
import React, { Component, Fragment } from "react";
import Item2 from "./Item2";

class Item1 extends Component {
  state = {
    value: 0,
  };

  handleChange(newValue) {
    this.setState({
      value: newValue,
    });
  }

  render() {
    return (
      <Fragment>
        <p>item1 {this.state.value}</p>
        <Item2
          itval={this.state.value}
          onHandleChange={(newValue) => this.handleChange(newValue)}
        />
      </Fragment>
    );
  }
}
export default Item1;
