import Layout from '../components/layout';
import { fetch } from '../services/fetcher';


export default function Home() {
	return (
		<Layout>
			<h3>Other Findings</h3>
		<Footer>
		</Footer>
		</Layout>
	);
}
function Footer(props) {
	return(
	<footer>
		<h2>Copyright goes here</h2>
	</footer>)
}

// export async function getStaticProps() {
// 	const comic = await fetch();

// 	return {
// 		props: { comic },
// 	};
// }
