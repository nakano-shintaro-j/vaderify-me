import styled from "styled-components";

const Dropzone = styled.div`
  color: white;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23${props =>
    props.reject
      ? "f3ba2e"
      : props.accept
      ? "32cd32"
      : "FF9DDB"}' stroke-width='4' stroke-dasharray='16%2c 16' stroke-dashoffset='4' stroke-linecap='round'/%3e%3c/svg%3e");
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  padding: 16px;
  padding-top: 20%;
  z-index: 1;
  overflow: hidden;
  * {
    text-align: center;
    z-index: 1;
  }
  cursor: pointer;
`;

export const DropzoneBackground = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  background: ${props =>
    props.reject
      ? "#f3ba2e"
      : props.accept
      ? "#32cd32"
      : "#FF9DDB"};
  z-index: 0;
  top: 70%;
  transform: rotate(-10deg);
  transition: background 300ms ease-in-out;
`;

export default Dropzone;
