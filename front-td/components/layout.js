import Head from 'next/head';
import Header from './header';

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Threat Detector</title>
			</Head>

			<Header />

			<main>{children}</main>
		</div>
	);
}
