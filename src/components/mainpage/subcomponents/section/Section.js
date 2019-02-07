/*
 * Components
 */
import classNames from "classnames";
import React from "react";

/*
 * CSS
 */
import "./section.css";

const Section = props => {
	const titleStyles = classNames({
		title: true,
		"has-text-right": props.index % 2 === 0
	});

	const subtitleStyles = classNames({
		subtitle: true,
		"has-text-right": props.index % 2 === 0
	});

	return (
		<div className="section is-full-height">
			<div className="container">
				<img src="" alt={props.title} />
				<h1 className={titleStyles}>
					{props.title}
				</h1>
				<h2 className={subtitleStyles}>
					{props.subtitle}
				</h2>
				<p className="has-text-justified">
					Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Modi
					soluta eius accusamus debitis
					aliquam ducimus nesciunt. Doloribus
					culpa similique cupiditate, minus
					sint voluptates quam reiciendis
					numquam doloremque, modi, sapiente
					aliquam nemo vel hic! Culpa eum
					alias magni laboriosam aut
					inventore beatae animi unde
					corrupti nesciunt veritatis commodi
					cupiditate fuga maxime, iure
					debitis, eius dolorum error. Iste,
					aspernatur atque quas hic natus ut,
					provident dicta assumenda totam
					rerum libero ducimus aperiam
					reprehenderit, suscipit ad sequi
					doloribus nobis accusantium?
					Doloribus omnis quis veniam qui
					tempore debitis neque beatae
					laudantium optio pariatur,
					voluptatum saepe corrupti deserunt
					eos voluptas voluptatem! Veniam
					alias nihil deleniti?
				</p>
			</div>
		</div>
	);
};

export default Section;
