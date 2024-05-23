import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h3>About Us</h3>
        <h4>{name}</h4>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count - 1,
            })
          }
        >
          -
        </button>
        <h5>Count = {this.state.count}</h5>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          +
        </button>
      </div>
    );
  }
}

export default About;
