import styled from "styled-components";
import { useState } from "react";


const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;

const RoleDice = ({currentDice, roleDice}) => {


  return (
    <DiceContainer>
    <div className="dice" onClick={roleDice}>
        <img src= {`/images/dice_${currentDice}.png`} alt="dice 1" />
        <p>Click on Dice to roll</p>
    </div>
    <div>

    </div>
    </DiceContainer>
  )
}

export default RoleDice

