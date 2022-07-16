import Layout from '../components/Layout';
import { useState, useEffect } from "react";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

	let [layoutOptions, setLayoutOptions] = useState({
		withParallax: pageProps.withParallax,
	});
	let propsLayout = {
		...pageProps,
		withParallax: layoutOptions.withParallax,
	};
	let handleLayout = function (newValue) {
		setLayoutOptions(newValue);
	};
	// useEffect(
	// 	(layoutOptions) => {
	// 		handleLayout({
	// 			withParallax: false,
	// 		});
	// 		//propsLayout = layoutOptions;
	// 	},
	// 	[pageProps]
	// );
	return (
		<Layout withParallax={layoutOptions.withParallax} props={propsLayout}>
			<Component getLayoutOptions={handleLayout} {...propsLayout} />
		</Layout>
	);
}

export default MyApp
