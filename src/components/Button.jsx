import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  min-height: 32px;
  outline: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: ${props => (props.leftIcon ? 8 : 12)}px;
  padding-right: ${props => (props.rightIcon ? 8 : 12)}px;
  font-family: ${props => (props.outlined ? "inherit" : '"Exo 2"')};
  font-weight: ${props => (props.outlined ? 700 : 900)};
  background: ${props =>
    props.outlined
      ? "transparent"
      : "linear-gradient(90deg, rgb(255, 157, 219) 0%, rgb(38, 164, 254) 100%)"};
  border: ${props => (props.outlined ? "2px solid white" : "none")};
  color: ${props => (props.outlined ? "white" : "white")};
  font-size: 18px;
  transition: all 300ms ease-in-out;
  margin-left: 4px;
  margin-right: 4px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  opacity: ${props => (props.disabled ? 0.25 : props.outlined ? 0.7 : 1)};
  &:hover {
    cursor: ${props => (props.disabled ? "default" : "pointer")};
    background: ${props =>
      props.outlined
        ? props.disabled
          ? "transparent"
          : "linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)"
        : props.disabled
        ? "linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)"
        : "linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)"};
    color: white;
    opacity: ${props => (props.disabled ? 0.25 : 1)};
  }
  &:active {
     background: ${props =>
      "linear-gradient(90deg, rgb(210, 166, 210) 0%, rgb(45, 197, 215) 100%)"};
  }
`;

const Button = props => {
  const {
    leftIcon,
    rightIcon,
    children,
    outlined = false,
    disabled = false
  } = props;
  return (
    <StyledButton
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      outlined={outlined}
      disabled={disabled}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  );
};

export default Button;
