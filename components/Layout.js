import React, { Fragment, useState, useEffect, useRef } from "react";
import Nav from "./Nav";
import Footer from "./Footer/Footer.js";
import styles from "../styles/Layout.module.css";

const Layout = ({ children, props }) => {
	let [layoutOptions, setLayoutOptions] = useState({
		withParallax: props.withParallax,
	});
	let containerClass = useRef(styles.main);
	useEffect(() => {
		setLayoutOptions({ withParallax: props.withParallax });
	containerClass.current += layoutOptions.withParallax
		? ""
		: " " + styles.containerNoParallax;
	}, []);
	return (
		<Fragment>
			<Nav withParallax={layoutOptions.withParallax} {...props} />
			<div className={styles.containerFluid}>
				<main className={containerClass.current}>{children}</main>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Layout;
