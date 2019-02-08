/*
 * Components
 */
import Brand from "./subcomponents/Brand";
import NavbarEnd from "./subcomponents/NavbarEnd";
import React, { Component } from "react";

/*
 * CSS
 */
import "./header.css";

/*
 * Config
 */
import config from "./config";

class Header extends Component {
	componentDidMount() {
		window.addEventListener(
			"scroll",
			this._handleFadeIn
		);
	}

	componentWillUnmount() {
		window.removeEventListener(
			"scroll",
			this._handleFadeIn
		);
	}

	_handleFadeIn = e => {
		const header = document.querySelector(
			"#header"
		);

		if (
			document.documentElement.scrollTop >
			window.innerHeight
		) {
			header.className = "active";
		} else {
			header.className = "";
		}
	};

	render() {
		const {
			navbarLinks,
			dropdownLinks,
			brandName
		} = config;

		return (
			<header id="header">
				<nav className="navbar border-bottom is-fixed-top">
					<div className="container">
						<Brand name={brandName} />
						<NavbarEnd
							navbarLinks={navbarLinks}
							dropdownLinks={
								dropdownLinks
							}
						/>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
