import navStyles from '../styles/Nav.module.css'
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
import Image from 'next/image'
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
	let brandImg = <Image src="/img/logo.png" placeholder="asdasd" width="200" height="50" alt="logo" />;
	let containerClasses =
		classes.containerNoPadding + " " + !props.withParallax
			? classes.containerNoParallax
			: null;
	return (
		<div className={containerClasses}>
			<Header
				brand={brandImg}
				rightLinks={<HeaderLinks />}
				fixed
				color="transparent"
				changeColorOnScroll={{
					height: 400,
					color: "white",
				}}
				{...rest}
			/>
			{props.withParallax ? (
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
			) : null}
		</div>
	);
}

export default Nav