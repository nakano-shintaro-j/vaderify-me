import styled from "styled-components";

const Title = styled.h1`
  font-family: "Exo 2";
  color: ${props => props.reject ? "#f3ba2e" : props.accept ? "#32cd32" : "#FFFFFF"};
  font-weight: 800;
  font-size: ${props => (props.size ? props.size : 3)}em;
  margin: 0;
  text-shadow: -5px 5px 0px rgba(0,0,0,.4);
  text-transform: uppercase;
  transition: color 300ms ease-in-out;
`;

export default Title;
