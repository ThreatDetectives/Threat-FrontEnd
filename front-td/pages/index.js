import Layout from '../components/layout';
import { Component } from 'react';

// const superagent = require('superagent');

///make a function that makes a POST request to the back end. ?which route will handle this(url)?

export default function Home() {
	return (
		<Layout>
				<section><img src="https://via.placeholder.com/150"></img></section>
				<h3>We Bring Light To Threatening Speech</h3>
				<p>Enter Twitter Handle Below</p>
				<Index />
				<div>10%</div>
				<footer>
					<p>™/Created by..</p>
					<p>GitHub</p>
				</footer>
			
		</Layout>
	);
}
class Index extends Component {
	constructor() {
		super();
		this.state = {
			twitterHandle: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
		fetch('https://threat-detectives.herokuapp.com/', {
			method: 'POST',
			mode: 'no-cors',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				twitterHandle: this.state.twitterHandle,
			}),
		})
			.then((response) => {
				try {
					console.log(response);
				} catch (error) {
					console.log(error.message);
				}
				return response.json();
			})
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
					placeholder="Twitter Handle"
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
