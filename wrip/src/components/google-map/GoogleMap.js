import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const GoogleMap = ({ children, ...props }) => (
  <div
    style={{
      height: "92vh",
      width: "100%",
      padding: "20px",
      backgroundColor: "rgb(248, 249, 250)",
      display: "block",
    }}
  >
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY,
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </div>
);

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

GoogleMap.defaultProps = {
  children: null,
};

export default GoogleMap;
