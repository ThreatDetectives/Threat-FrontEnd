import axios from 'axios';

export async function fetch(id = null, web = true) {
	if (web) return webFetch(id);
}

function webFetch(id) {
	let url;
	if (id === null) {
		url = 'http://xkcd.com/info.0.json';
	} else {
		url = `http://xkcd.com/${id}/info.0.json`;
	}

	try {
		return axios.get(url).then((res) => res.data);
	} catch (err) {
		console.log(err);
	}
}
