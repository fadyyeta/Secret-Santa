import Nav from './Nav'
import styles from "../styles/Layout.module.css";

const Layout = ({children}) => {
    return (
			<fragment>
				<Nav />
				<div className={styles.container}>
					<main className={styles.main}>{children}</main>
				</div>
			</fragment>
		);
};

export default Layout;
