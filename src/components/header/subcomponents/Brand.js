import React from "react";

const Brand = props => (
	<div className="navbar-brand">
		<a href="/" className="navbar-item uppercase bold">
			{props.name}
		</a>
	</div>
);

export default Brand;
