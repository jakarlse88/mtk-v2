import React from "react";

const DropdownLinks = props => (
	<div className="navbar-item has-dropdown is-hoverable has-background-black">
		<a
			href="/"
			className="navbar-link uppercase has-text-white">
			Informasjon
		</a>
		<div className="navbar-dropdown has-background-black">
			{props.links.map((item, index) => (
				<a
					key={index}
					href={item.address}
					className="has-text-white has-background-black navbar-item">
					{item.name}
				</a>
			))}
		</div>
	</div>
);

export default DropdownLinks;
