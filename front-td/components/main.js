import Link from 'next/link';

export default function Comic({ comic }) {
	return (
		<>
			<h2>{comic.title}</h2>
			<img src={comic.img} alt={comic.alt} />
		</>
	);
}

export function ComicList({ mostRecentNum }) {
	let nums = [];
	// iterate downwards, for 10 units
	for (let i = mostRecentNum; i > mostRecentNum - 10; i--) {
		nums = [...nums, i];
	}

	return (
		<ul>
			{nums.map((num) => (
				<ComicLink num={num} key={num} />
			))}
		</ul>
	);
}

function ComicLink({ num }) {
	return (
		<li>
			<Link href="/comics/[id].js" as={`/comics/${num}`}>
				<a>{num}</a>
			</Link>
		</li>
	);
}
