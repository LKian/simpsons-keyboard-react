import React, { Component } from "react";
import styled from "styled-components";
import Keyboard from "./Keyboard";
import "../App.css";
import data from "../data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keys: data,
    };
  }

  async componentDidMount() {
    console.log("Component did mount.");
  }

  render() {
    // console.log("State ", this.state.keys);
    return (
      <StyledApp className="App">
        <Keyboard keys={this.state.keys} />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("./images/background.png");
  background-size: contain;
  width: 100%;
`;

export default App;
