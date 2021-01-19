import Link from 'next/link';

export default function Post({ post }) {
	return (
		<>
			<h2>{post.title}</h2>
			<img src={post.img} alt={post.alt} />
		</>
	);
}

export function PostList({ mostRecentPost }) {
let posts = [];
	// iterate downwards, for 10 units
	for (let i = mostRecentPost; i > mostRecentPost - 10; i--) {
		posts = [...posts, i];
	}

	return (
		<ul>
			{posts.map((post) => (
				<ComicLink post={post} key={post} />
			))}
		</ul>
	);
}

function PostLink({ post }) {
	return (
		<li>
			<Link href="/posts/[id].js" as={`/pages/${post}`}>
				<a>{post}</a>
			</Link>
		</li>
	);
}
