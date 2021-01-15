import Layout from '../components/layout';
import Comic, { ComicList } from '../components/comic';
import { fetch } from '../services/fetcher';

export default function Home({ comic }) {
	return (
		<Layout>
			<Comic comic={comic} />
			<h3>Other Findings</h3>
			<ComicList mostRecentNum={comic.num} />
		</Layout>
	);
}
function Footer(props) {
	return;
	<footer comicNum={props.comic.num}>
		<h2>Previous 10</h2>
	</footer>;
}
export async function getStaticProps() {
	const comic = await fetch();

	return {
		props: { comic },
	};
}
