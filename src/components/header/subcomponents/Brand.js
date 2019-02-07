import React from "react";

const Brand = props => (
	<div className="navbar-brand">
		<a
			href="/"
			className="navbar-item has-text-black uppercase is-size-4">
			{props.name}
		</a>
	</div>
);

export default Brand;
