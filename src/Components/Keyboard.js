import React, { Component } from "react";
import styled from "styled-components";
import Key from "./Key";

class Keyboard extends Component {
  render() {
    console.log("Keyboard: ", this.props);
    return (
      <StyledKeyboard className="keyboard">
        {this.props.keys.map((key) => {
          return <Key name={key.name} image={key.image} kbd={key.kbd} />;
        })}
      </StyledKeyboard>
    );
  }
}

const StyledKeyboard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Keyboard;
