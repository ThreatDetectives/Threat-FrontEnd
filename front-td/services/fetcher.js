import axios from 'axios';
export async function fetch(id = null, web = true) {
	if (web) return webFetch(id);
	else return mockFetch(id);
}
// // Debugging/test function
// function mockFetch(id) {
// 	if (id === null) {
// 		return {
// 			num: 2408,
// 			title: 'Egg Strategies',
// 			img: 'https://imgs.xkcd.com/comics/egg_strategies.png',
// 			alt:
// 				'Neutral Evil is for people who like keeping the weight nicely centered in the carton, but also hate everyone else who wants that.',
// 		};
// 	} else if (id === '2408') {
// 		return {
// 			num: 2408,
// 			title: 'Egg Strategies',
// 			img: 'https://imgs.xkcd.com/comics/egg_strategies.png',
// 			alt:
// 				'Neutral Evil is for people who like keeping the weight nicely centered in the carton, but also hate everyone else who wants that.',
// 		};
// 	} else {
// 		return {
// 			num: 2407,
// 			title: 'Depth and Breadth',
// 			img: 'https://imgs.xkcd.com/comics/depth_and_breadth.png',
// 			alt:
// 				"A death-first search is when you lose your keys and travel to the depths of hell to find them, and then if they're not there you start checking your coat pockets.",
// 		};
// 	}
// }
// function webFetch(id) {
// 	let url;
// 	if (id === null) {
// 		url = 'http://xkcd.com/info.0.json';
// 	} else {
// 		url = `http://xkcd.com/${id}/info.0.json`;
// 	}
// 	try {
// 		return axios.get(url).then((res) => res.data);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
