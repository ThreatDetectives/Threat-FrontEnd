import Layout from '../components/layout';
import { fetch } from '../services/fetcher';
import { Component } from 'react';

// const superagent = require('superagent');

///make a function that makes a POST request to the back end. ?which route will handle this(url)?

export default function Home() {
	return (
		<Layout>
			<main>
				<h1>Threat Detector</h1>
				<p id="aboutproduct">
					Threat dector is a learning AI that can detect threating speech. This
					tool scrapes the inputed URL and returns a percentage of hate speech
					and profanity used in their posts. The AI was trained with data sets
					of hate speech
				</p>
				<Index />
				{/* <form action="/server" method="post">
					<input type="text" id="handle" value="twitter hadnle"></input>
					<input type="submit"></input>
				</form> */}
				<footer>footer goes here</footer>
			</main>
		</Layout>
	);
}
class Index extends Component {
	constructor() {
		super();
		this.state = {
			twitterHandle: '',
		};
	}
	handleChange = (evt) => {
		// This triggers everytime the input is changed
		this.setState({
			// [evt.target.name]: evt.target.value,
			twitterHandle: evt.target.value,
		});
	};
	handleSubmit = (evt) => {
		evt.preventDefault();
		// alert(JSON.stringify(this.state.twitterHandle));
		//making a post request with the fetch API
		// route to heroku hosted back end goes here
		fetch('http://127.0.0.1:8000/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				twitterHandle: this.state.twitterHandle,
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					name="twitterHandle"
					type="text"
					id="name"
					value={this.state.twitterHandle}
					onChange={this.handleChange}
				></input>
				<input type="submit" />
			</form>
		);
	}
}
// export async function getStaticProps() {
// 	const comic = await fetch();

// 	return {
// 		props: { comic },
// 	};
// }
