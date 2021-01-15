import Layout from '../components/layout';
import Link from 'next/link';

function About() {
	return (
		<Layout>
			<h1>About Goes Here</h1>
			<p>
				<Link href="/">
					<a>Back to Home Page</a>
				</Link>
			</p>
		</Layout>
	);
}

export default About;
