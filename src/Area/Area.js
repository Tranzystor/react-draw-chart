import React from "react";
import PropTypes from "prop-types";

const Area = ({ text }) => <div>area div - {text}</div>;

Area.propTypes = {
  text: PropTypes.string
};

Area.defaultProps = {
  text: "Areadiv"
};

export default Area;
