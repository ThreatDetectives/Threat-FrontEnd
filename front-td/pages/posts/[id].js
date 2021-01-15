import Layout from '../../components/layout';
import Comic from '../../components/comic';
import { fetch } from '../../services/fetcher';

export default function displayComic({ comic }) {
	return (
		<Layout>
			<Comic comic={comic} />
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
