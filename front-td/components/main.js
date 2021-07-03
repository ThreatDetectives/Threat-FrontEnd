import React, { Component } from 'react';
import ResultModal from './resultModal';
import TwitterQuery from './twitterQuery';

export class Main extends Component {

	state = {
		threatLevel: [],
		timerToggle: [false,false,false,false,false],
		title: ["","","","",""]
	}
	


	displayTitle = (title,i) => {
		let tempTitle=this.state.title;
		tempTitle[i]=title;
		this.setState({ 
			title:tempTitle
		});
	}
	
	displayThreatLevel = (percentage,i) => {
		let tempThreat=this.state.threatLevel;
		tempThreat[i]=percentage;
		this.setState({ 
			threatLevel:tempThreat
		});
	}

	timerToggle = (i) => {
		let tempTimer=this.state.timerToggle;
		tempTimer[i]=this.state.timerToggle[i]?false : true;
		this.setState({
			timerToggle:tempTimer
		})
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
					timerToggle = { this.timerToggle }
					displayTitle = { this.displayTitle }
				/>
				{/* "Threatening", "Conspiracy Theory", "Hate Speech", "Profanity" and "Neutral Language" */}
				<div id="theResults">
					<h2>Search results for {}</h2>
					<div className="resultsContainer">
						<ResultModal
							id = { 0 }
							title = { this.state.title[0] }
							threat = { this.state.threatLevel[0] }
							displayThreat = { this.displayThreatLevel }
							displayTitle = { this.displayTitle }
							timerToggle = { this.state.timerToggle[0] }
							stopAnimate = { this.timerToggle }
						/>

						<ResultModal
							id = { 1 }
							title = { this.state.title[1] }
							threat = { this.state.threatLevel[1] }
							displayThreat = { this.displayThreatLevel }
							displayTitle = { this.displayTitle }
							timerToggle = { this.state.timerToggle[1] }
							stopAnimate = { this.timerToggle }
						/>

						<ResultModal
							id = { 2 }
							title = { this.state.title[2] }
							threat = { this.state.threatLevel[2] }
							displayThreat = { this.displayThreatLevel }
							displayTitle = { this.displayTitle }
							timerToggle = { this.state.timerToggle[2] }
							stopAnimate = { this.timerToggle }
						/>

						<ResultModal
							id = { 3 }
							title = { this.state.title[3] }
							threat = { this.state.threatLevel[3] }
							displayThreat = { this.displayThreatLevel }
							displayTitle = { this.displayTitle }
							timerToggle = { this.state.timerToggle[3] }
							stopAnimate = { this.timerToggle }
						/>

						<ResultModal
							id = { 4 }
							title = { this.state.title[4] }
							threat = { this.state.threatLevel[4] }
							displayThreat = { this.displayThreatLevel }
							displayTitle = { this.displayTitle }
							timerToggle = { this.state.timerToggle[4] }
							stopAnimate = { this.timerToggle }
						/>
					</div>
				</div>


			</main>
		)
	}

}

export default Main;