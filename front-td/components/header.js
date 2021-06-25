import Link from 'next/link';

export default function Header() {
	return (
		<>

			<header>
				<h1>Threat Detector</h1>
				<nav>
					<ul>
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>About Creators</a>
							</Link>							
						</li>
					</ul>

				</nav>
			</header>

		</>
	);
}
