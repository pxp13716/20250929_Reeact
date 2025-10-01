import styled from 'styled-components'

export const MYBOX = styled.div`
  background-color: ${props => props.$bgColor || 'lightgray'} ;
  color: white;
  padding: 10px;
  border: 1px solid black;
`
export const MYBOXTWO = styled(MYBOX)`
  margin: 10px;
  border: 5px solid lightgreen;
`
export const MYBTN = styled.button`
  background-color: ${props => props.$bgColor || 'lightgray'} ;
  color: white;
  padding: 3px;
  border: 1px solid black;

  &:hover {
    background-color: black ;
    color: lightgray
  }
`