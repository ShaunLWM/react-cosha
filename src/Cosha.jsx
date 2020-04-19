import React from "react";

export default function Cosha(props) {
	const { className = "cosha", blur = "5px", brightness = 1, saturation = 1, x = 0, y = 0 } = props;

	const wrapper = {
		position: "relative",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
	};

	const clone = {
		filter: `blur(${blur}) brightness(${brightness}) saturate(${saturation})`,
		position: "absolute",
		width: "100%",
		zIndex: -1,
		transform: `translate3d(${x}, ${y}, 0)`,
	};

	return (
		<div className={`${className}-wrapper`} style={wrapper}>
			<img {...props} className={className}></img>
			<img {...props} className={`${className}-clone`} style={clone}></img>
		</div>
	);
}
