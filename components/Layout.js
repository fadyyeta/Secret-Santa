import React, { Fragment } from "react";
import Nav from "./Nav";
import Footer from "./Footer/Footer.js";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Nav />
			<div className={styles.containerFluid}>
				<main className={styles.main}>{children}</main>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Layout;
