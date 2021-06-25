import React from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";

const StyledSlider = styled(ReactSlider)`
  width: ${props => (props.orientation === "vertical" ? "25px" : "100%")};
  height: ${props => (props.orientation === "vertical" ? "100%" : "25px")};
`;

const Label = styled.h4`
  margin: 0;
  margin-bottom: 8px;
  color: white;
  margin-left: ${props => props.orientation === "vertical" ? "-4px" : "0px"};
`;

const Slider = (props, state) => {
  return (
    <div
      style={{
        height: props.orientation === "vertical" ? "100%" : "auto"
      }}
    >
      <Label {...props} >{props.label}</Label>
      <StyledSlider {...props} />
    </div>
  );
};

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
  outline: none;
  border: 1px solid white;
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}></StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${props =>
    props.index === 2 ? "#f00" : props.index === 1 ? "#ddd" : "#1fa1f1"};
  border-radius: 25px;
  width: ${props => (props.orientation === "vertical" ? "100%" : "auto")};
`;

const Track = (props, state) => {
  return <StyledTrack {...props} index={state.index ? state.index : props.index} />;
};

export default Slider;
export { Slider, Thumb, Track };
