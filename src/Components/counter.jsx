import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          افزودن
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 p-1 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "صفر" : count;
  }
}

export default Counter;
