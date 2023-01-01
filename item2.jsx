
import React, { Component } from "react";

class Item2 extends Component {
  // state = {
  //   value: 0,
  // };

  // handleChange = () => {
  //   this.props.onHandleChange(this.state.value + 1);
  // };

  // handlePlus = () => {
  //   this.setState({
  //     value: this.state.value + 1,
  //   });

  //   this.handleChange();
  // };

  handleChange() {
    this.props.onHandleChange(this.props.itval + 1);
  }

  // handlePlus = () => {
  //   this.setState(
  //     {
  //       value: this.state.value + 1,
  //     },
  //     () => this.handleChange(this.state.value)
  //   );
  // };
  render() {
    return (
      <div>
        <p>item2: {this.props.itval}</p>
        <h1 onClick={() => this.handleChange()}>TAMBAH</h1>
      </div>
    );
  }
}
export default Item2;
