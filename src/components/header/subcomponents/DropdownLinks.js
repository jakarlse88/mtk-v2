import React from "react";

const DropdownLinks = props => (
	<div className="navbar-item has-dropdown is-hoverable">
		<a href="/" className="navbar-link uppercase">
			Informasjon
		</a>
		<div className="navbar-dropdown">
			{props.links.map((item, index) => (
				<a key={index} href={item.address} className="navbar-item">
					{item.name}
				</a>
			))}
		</div>
	</div>
);

export default DropdownLinks;
