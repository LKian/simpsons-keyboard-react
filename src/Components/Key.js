import React, { Component } from "react";
import styled from "styled-components";

class Key extends Component {
  render() {
    console.log("key ", this.props);
    return (
      <StyledKey>
        <p>{this.props.name}</p>
        <img
          className="character-image"
          src={`images/${this.props.image}`}
          alt={this.props.name}
        />
        <p>{this.props.kbd}</p>
      </StyledKey>
    );
  }
}

const StyledKey = styled.div`
  min-width: 110px;
  min-height: 110px;
  border: 0.4rem solid #ace;
  color: white;
  background: rgba(190, 70, 220, 0.3);
  .character-image {
    max-height: 50px;
  }
`;

export default Key;
