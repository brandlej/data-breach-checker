import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as LoadingIndicatorSvg } from "../images/loading-indicator.svg";

const propTypes = {
  as: PropTypes.elementType,
  style: PropTypes.shape({}),
};

export const LoadingIndicator = ({ as: Component = "div", style }) => (
  <Component style={style}>
    <LoadingIndicatorSvg />
  </Component>
);

LoadingIndicator.propTypes = propTypes;
