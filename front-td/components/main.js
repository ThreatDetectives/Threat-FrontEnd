import React, { Component } from 'react';
import ResultModal from './resultModal';
import TwitterQuery from './twitterQuery';

export class Main extends Component {

	state = {
		threatLevel: null,
		threatColor: '',
		searchQuery: '',
		showModal: false,
	}
	
	displaySearchQuery = (query) => {
		this.setState({
			searchQuery: query
		});
	}

	displayModal = () => {
		this.setState({
			showModal: true
		});
	}


	displayThreatLevel = (percentage) => {
		this.setState({ 
			threatLevel: percentage
		});
	}

	displayThreatColor = (threat) => {
		let color;
		if (threat >= 0 && threat < 25)
			color = 'threat-green';
		else if (threat > 24 && threat < 50)
			color = 'threat-yellow';
		else if (threat > 49 && threat < 75)
			color = 'threat-orange';
		else if (threat > 74)
			color = 'threat-red';
		
		this.setState({
			threatColor: color
		});
	}


	render() {
		return (
			<main>
				<section>
					<p>We bring light to threatening speech.</p>
					<p>How to use me...How to use me...How to use me...How to use me...How to use me...How to use me...How to use me...How to use me...How to use me...How to use me...How to use me...How to use me...How to use me...How to use me...How to use me...</p>
				</section>

				<TwitterQuery
					displayThreat = { this.displayThreatLevel }
					displayColor = { this.displayThreatColor }
					displayQuery = { this.displaySearchQuery }
					displayModal = { this.displayModal }
				/>

				<ResultModal
					showMe = { this.state.showModal }
					threat = { this.state.threatLevel }
					color = { this.state.threatColor }
					query = { this.state.searchQuery }
				/>


			</main>
		)
	}

}

export default Main;