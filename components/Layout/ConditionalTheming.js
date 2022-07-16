import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/jss/nextjs-material-kit/pages/components.js";
const useStyles = makeStyles(styles);
const ConditionalTheming = ({ children }) => {
	const classes = useStyles();
	return children ? (
		<div className={classes.containerNoParallax}> {children}</div>
	) : (
		{ children }
	);
};
export const getLayout = (page, withoutParallax) => (
	<ConditionalTheming withoutParallax={withoutParallax}>
		{page}
	</ConditionalTheming>
);
export default ConditionalTheming;
