import Layout from '../components/layout';
import { fetch } from '../services/fetcher';

// const superagent = require('superagent');

///make a function that makes a POST request to the back end. ?which route will handle this(url)?

export default function Home() {
	return (
		<Layout>
			<main>
				<h1>Threat Detector</h1>
				<p id="aboutproduct">We Bring Light To Threatening Speech</p>
				<div id="hpcontent">
				<input type="text" id="urlhere" name="inputbox"></input>
				<input type="submit" value="Threat"></input>
				</div>
			<footer>footer goes here</footer>
			</main>
		</Layout>
	);
}


// export async function getStaticProps() {
// 	const comic = await fetch();

// 	return {
// 		props: { comic },
// 	};
// }
