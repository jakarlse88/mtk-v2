import React from "react";

const NavbarLinks = props =>
	props.links.map((item, index) => (
		<a
			key={index}
			href={item.address}
			className="navbar-item uppercase">
			{item.name}
		</a>
	));

export default NavbarLinks;
