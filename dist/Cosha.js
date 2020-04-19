function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
export default function Cosha(props) {
  const {
    className = "cosha",
    blur = "5px",
    brightness = 1,
    saturation = 1,
    x = 0,
    y = 0
  } = props;
  const wrapper = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  };
  const clone = {
    filter: `blur(${blur}) brightness(${brightness}) saturate(${saturation})`,
    position: "absolute",
    width: "100%",
    zIndex: -1,
    transform: `translate3d(${x}, ${y}, 0)`
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapper
  }, /*#__PURE__*/React.createElement("img", _extends({}, props, {
    className: className
  })), /*#__PURE__*/React.createElement("img", _extends({}, props, {
    className: `${className}-clone`,
    style: clone
  })));
}