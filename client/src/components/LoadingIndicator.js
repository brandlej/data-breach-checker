import React from "react";
import { ReactComponent as LoadingIndicatorSvg } from "../images/loading-indicator.svg";

export const LoadingIndicator = ({ as: Component = "div", style }) => (
  <Component style={style}>
    <LoadingIndicatorSvg />
  </Component>
);
