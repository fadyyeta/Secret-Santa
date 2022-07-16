import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
// import { getStaticProps } from "../components/Helper";
// import Layout from "../components/Layout";

export default function Home({ title = "Home Page", getLayoutOptions }) {
	useEffect(() => {
		getLayoutOptions({ withParallax: true });
	}, []);
	const pageTitle = "Secret Santa" + (title ? " - " + title : "");
	// let props = getStaticProps(Layout);
	return (
		<Fragment>
			<title>{pageTitle}</title>
			<div className={styles.container}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
			</div>
		</Fragment>
	);
}
