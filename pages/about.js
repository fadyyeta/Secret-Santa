import React, { Fragment } from "react";
const About = ({ title = "About us" }) => {
	return (
		<Fragment>
			<title>Secret Santa{title ? " - " + title : ""}</title>
			<div>About</div>
		</Fragment>
	);
};

export default About;
