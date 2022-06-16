import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

export default function Home({ title = "Home Page" }) {
	const pageTitle = "Secret Santa" + (title ? " - " + title : "");
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
