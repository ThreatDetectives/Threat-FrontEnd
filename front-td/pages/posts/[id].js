import Layout from '../../components/layout';
import Posts from '../../components/main'
import { fetch } from '../../services/fetcher';

export default function displayPost({ post }) {
	return (
		<Layout>
			<h1>99% threat</h1>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const id = context.query.id;

	const comic = await fetch(id);

	return {
		props: {
			comic,
		},
	};
}
