/*
 * Components
 */
import Brand from "./subcomponents/Brand";
import NavbarEnd from "./subcomponents/NavbarEnd";
import React from "react";

/*
 * CSS
 */
import "./header.css";

/*
 * Config
 */
import config from "./config";

const Header = () => {
	const { navbarLinks, dropdownLinks, brandName } = config;

	return (
		<header>
			<nav className="navbar is-fixed-top border-bottom">
				<Brand name={brandName} />
				<NavbarEnd
					navbarLinks={navbarLinks}
					dropdownLinks={dropdownLinks}
				/>
			</nav>
		</header>
	);
};

export default Header;
