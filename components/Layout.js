import React, { Fragment, useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer/Footer.js";
import styles from "../styles/Layout.module.css";

const Layout = ({ children, props }) => {
	let [layoutOptions, setLayoutOptions] = useState({
		withParallax: props.withParallax,
	});
	useEffect(() => {
		setLayoutOptions({ withParallax: props.withParallax });
	}, []);
	return (
		<Fragment>
			<Nav withParallax={layoutOptions.withParallax} {...props} />
			<div className={styles.containerFluid}>
				<main className={styles.main}>{children}</main>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Layout;
