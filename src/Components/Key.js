import React, { Component } from "react";
import styled from "styled-components";

class Key extends Component {
  render() {
    console.log("audio ", this.props);
    const handlerFx = (e) => {
      const audioFile = e.currentTarget.querySelectorAll("img")[0].alt;
      console.log(`audio is ${audioFile}`);
    };

    return (
      <StyledKey
        className="thestyledkey"
        data-key={this.props.dataKey}
        onClick={handlerFx}
      >
        <p className="character-name">{this.props.name}</p>
        <img
          className="character-image"
          src={`images/${this.props.image}`}
          alt={this.props.name}
        />
        <kbd className="character-keycode">{this.props.kbd}</kbd>
      </StyledKey>
    );
  }
}

const StyledKey = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border: 0.2rem solid #ace;
  padding: 5px 0 10px;
  background: rgba(190, 70, 220, 0.3);
  .character-name {
    min-height: 60px;
    text-transform: uppercase;
    color: #ffdf00;
    font-size: 0.7rem;
  }
  .character-image {
    max-height: 50px;
  }
  .character-keycode {
    color: #eee;
  }
`;

export default Key;
