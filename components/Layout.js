import Nav from './Nav'
import styles from "../styles/Layout.module.css";

const Layout = ({children}) => {
    return (
			<fragment>
				<div className={styles.containerFluid}>
					<main className={styles.main}>{children}</main>
				</div>
			</fragment>
		);
};

export default Layout;
