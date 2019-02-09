/*
 * Components
 */
import classNames from "classnames";
import React from "react";

/*
 * CSS
 */
import "./hero.css";

const Hero = props => {
	const titleClassNames = classNames({
		title: true,
		"is-size-1": true,
		[`has-text-${props.textColor}`]: true
	});

	const subtitleClassNames = classNames({
		subtitle: true,
		[`has-text-${props.textColor}`]: true
	});

	return (
		<section className="hero is-fullheight has-background-img" id="mainpage-hero">
			<div className="hero-body">
				<div className="container has-text-centered">
					<h1 className={titleClassNames}>
						{props.title}
					</h1>
					<h2 className={subtitleClassNames}>
						{props.subtitle}
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Hero;
