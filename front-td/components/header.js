import Link from 'next/link';

export default function Header() {
	return (
		<>
			<nav>
				<Link href="/">
					<a>| Home | </a>
				</Link>
				<Link href="/about">
					<a>About Creators |</a>
				</Link>
				
				</nav>
		</>
	);
}
