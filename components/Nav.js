import navStyles from '../styles/Nav.module.css'
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import Parallax from "../components/Parallax/Parallax.js";
import styles from "../styles/jss/nextjs-material-kit/pages/components.js";



const useStyles = makeStyles(styles);
const Nav = (props) => {
    const classes = useStyles();
	const { ...rest } = props;
	return (
		<div className={classes.containerNoPadding}>
			<Header
				brand="NextJS Material Kit"
				rightLinks={<HeaderLinks />}
				fixed
				color="transparent"
				changeColorOnScroll={{
					height: 400,
					color: "white",
				}}
				{...rest}
			/>
			<Parallax image="/img/nextjs_header.jpg">
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.brand}>
								<h1 className={classes.title}>NextJS Material Kit.</h1>
								<h3 className={classes.subtitle}>
									A Badass Material Kit based on Material-UI and NextJS.
								</h3>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
		</div>
	);
}

export default Nav