import React,{ Fragment} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "../styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "../pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "../pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "../pages-sections/LandingPage-Sections/WorkSection.js";


const useStyles = makeStyles(styles);

export default function LandingPage({ title = "Landing Page" }) {
	const classes = useStyles();
	return (
		<Fragment>
			<title>Secret Santa{title ? " - " + title : ""}</title>
			<div className={classes.containerFluid}>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<ProductSection />
						<TeamSection />
						<WorkSection />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
