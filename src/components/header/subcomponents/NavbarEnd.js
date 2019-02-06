import DropdownLinks from "./DropdownLinks";
import NavbarLinks from "./NavbarLinks";

import React from "react";

const NavbarEnd = props => (
	<div className="navbar-end">
		<NavbarLinks links={props.navbarLinks} />
		<DropdownLinks links={props.dropdownLinks} />
	</div>
);

export default NavbarEnd;
