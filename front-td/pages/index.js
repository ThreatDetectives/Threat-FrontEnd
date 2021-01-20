import Layout from '../components/layout';
import { fetch } from '../services/fetcher';

// const superagent = require('superagent');

///make a function that makes a POST request to the back end. ?which route will handle this(url)?

export default function Home() {
	return (
		<Layout>
			<main>
				<h1>Threat Detectives</h1>
				<p id="aboutproduct">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id. Ultrices vitae auctor eu augue ut lectus arcu. Sem viverra aliquet eget sit amet. In vitae turpis massa sed elementum. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Scelerisque eleifend donec pretium vulputate. Et ultrices neque ornare aenean. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Est ullamcorper eget nulla facilisi etiam dignissim. Dignissim sodales ut eu sem integer vitae justo. Nunc pulvinar sapien et ligula ullamcorper. Nunc id cursus metus aliquam eleifend mi in. Metus dictum at tempor commodo. Augue interdum velit euismod in pellentesque massa. Fames ac turpis egestas integer eget aliquet nibh. Amet nulla facilisi morbi tempus iaculis urna id. In fermentum et sollicitudin ac orci phasellus egestas. Maecenas pharetra convallis posuere morbi.
				</p>
				<div id="hpcontent">
				<input type="text" id="urlhere" name="inputbox"></input>
				<input type="submit" value="Hate Speech"></input>
				<input type="submit" value="Profanity"></input>
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
