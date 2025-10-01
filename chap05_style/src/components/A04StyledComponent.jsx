import React from "react";

// npm i styled-components
// https://styled-components.com/
// HTML Tag + CSS => Component
import { MYBOX, MYBOXTWO, MYBTN } from './css/A04Styled'
/*
import styled from 'styled-components'

const MYBOX = styled.div`
  background-color: ${props => props.$bgColor || 'lightgray'} ;
  color: white;
  padding: 10px;
  border: 1px solid black;
`
const MYBOXTWO = styled(MYBOX)`
  margin: 10px;
  border: 5px solid lightgreen;
`
const MYBTN = styled.button`
  background-color: ${props => props.$bgColor || 'lightgray'} ;
  color: white;
  padding: 3px;
  border: 1px solid black;

  &:hover {
    background-color: black ;
    color: lightgray
  }
`
*/

function A04StyledComponent() {
  return (
    <div className="mb-5">
      <h3>A04 Styled Component</h3>

      <MYBTN>CLICK</MYBTN>

      <MYBOXTWO $bgColor="orange">
        styled-components utilises tagged template literals to style your components.
        It removes the mapping between components and styles.
        This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.
      </MYBOXTWO>

      <MYBOX $bgColor="orange">
        styled-components utilises tagged template literals to style your components.
        It removes the mapping between components and styles.
        This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.
      </MYBOX>

      <MYBOX>
        styled-components utilises tagged template literals to style your components.
        It removes the mapping between components and styles.
        This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.
      </MYBOX>
    </div>
  );
}

export default A04StyledComponent;
