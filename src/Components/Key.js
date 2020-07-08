import React, { Component } from "react";
import styled from "styled-components";

class Key extends Component {
  render() {
    console.log("Image props: ", this.props.image);
    const handlerFx = (e) => {
      const audio = document.querySelector(
        `audio[data-key="${this.props.kbd}"]`
      );

      audio.play();
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
          src={require(`../images/${this.props.image}`)}
          alt={this.props.name}
        />
        <audio data-key={this.props.kbd}>
          <source src={require(`../sounds/${this.props.source}.mp3`)} />
        </audio>
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
