export async function getStaticProps(ctx) {
	const { props } = ctx.params;

	return {
		props: { props },
	};
}
