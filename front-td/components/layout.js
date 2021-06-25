import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import Main from './main';


export default function Layout() {
	return (
		<div className="page-container">
			<Head>
				<title>Threat Detective</title>
			</Head>

			<Header />

			<Main />

			<Footer />
		</div>
	);
}
