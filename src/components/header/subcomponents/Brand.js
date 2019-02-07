import React from "react";

const Brand = props => (
	<div className="navbar-brand">
		<a
			href="/"
			className="navbar-item uppercase bold has-text-white">
			{props.name}
		</a>
	</div>
);

export default Brand;
