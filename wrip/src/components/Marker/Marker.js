import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Animation for Marker but it's a bit buggi
const Wrapper = styled.div`
  background: rgb(255, 0, 0);
  border-radius: 50%;
  height: 15px;
  width: 15px;
  box-shadow: 0 0 0 0 rgb(255, 0, 0);
  transform: scale(1);
  animation: pulse 2s infinite;

  position: absolute;
  top: 50%;
  left: 50%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 1;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
    }
  }
`;

const Marker = ({ text, onClick }) => (
  console.log("text", text),
  console.log("onClik", onClick),
  (<Wrapper alt={text} onClick={onClick} />)

);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;

/*

*/
