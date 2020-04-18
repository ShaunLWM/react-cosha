import React from "react";
import "./Cosha.css";

export default function Cosha(props) {
	return (
		<div className="cosha-wrapper">
			<img {...props} className="cosha"></img>
			<img {...props} className="cosha-clone"></img>
		</div>
	);
}
