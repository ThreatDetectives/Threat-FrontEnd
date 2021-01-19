import Link from 'next/link';

export default function Header() {
	return (
		<>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/hate">
					<a> | Hate Speech Percentage | </a>
				</Link>
				<Link href="/profanity">
					<a>Profanity Percentage</a>
				</Link>
				</nav>
			<h1>Hate Detector</h1>
		</>
	);
}
