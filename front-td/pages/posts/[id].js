import Layout from '../../components/layout';
import Post from '../../components/main'

export default function displayPost() {
	return (
		<Layout>
			<h1>99% threat</h1>
		</Layout>
	);
}

// export async function getServerSideProps(context) {
// 	const id = context.query.id;

// 	const comic = await fetch(id);

// 	return {
// 		props: {
// 			comic,
// 		},
// 	};
// }
