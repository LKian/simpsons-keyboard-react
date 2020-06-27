import React, { Component } from "react";
import styled from "styled-components";
import Key from "./Key";

class Keyboard extends Component {
  render() {
    return (
      <StyledKeyboard>
        <div className="keyboard-row ">
          {this.props.keys.map((key, i) => (
            <>
              {typeof key.kbd === "number" ? (
                <Key
                  name={key.name}
                  image={key.image}
                  kbd={key.kbd}
                  dataKey={key.dataKey}
                ></Key>
              ) : null}
            </>
          ))}
        </div>
        <div className="keyboard-row ">
          {this.props.keys.map((key, i) => (
            <>
              {i >= 10 && i < 20 ? (
                <Key
                  name={key.name}
                  image={key.image}
                  kbd={key.kbd}
                  dataKey={key.dataKey}
                ></Key>
              ) : null}
            </>
          ))}
        </div>
        <div className="keyboard-row ">
          {this.props.keys.map((key, i) => (
            <>
              {i >= 20 && i < 29 ? (
                <Key
                  name={key.name}
                  image={key.image}
                  kbd={key.kbd}
                  dataKey={key.dataKey}
                ></Key>
              ) : null}
            </>
          ))}
        </div>
        <div className="keyboard-row">
          {this.props.keys.map((key, i) => (
            <>
              {i >= 29 && i < 37 ? (
                <Key
                  name={key.name}
                  image={key.image}
                  kbd={key.kbd}
                  dataKey={key.dataKey}
                ></Key>
              ) : null}
            </>
          ))}
        </div>
      </StyledKeyboard>
    );
  }
}

const StyledKeyboard = styled.div`
  .keyboard-row {
    display: flex;
    justify-content: space-around;
    width: 90vw;
  }
`;

export default Keyboard;
