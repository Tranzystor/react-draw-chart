import React from "react";
import PropTypes from "prop-types";

const Button = ({ text }) => <div>simple div - {text}</div>;

Button.propTypes = {
  text: PropTypes.string
};

Button.defaultProps = {
  text: "Click Me"
};

export default Button;
