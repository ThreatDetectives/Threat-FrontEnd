import React, { Component } from 'react';
import ResultModal from './resultModal';
import TwitterQuery from './twitterQuery';

export class Main extends Component {

	state = {
		threatLevel: [],
		timerToggle: [false,false,false,false,false],
		title: ["","","","",""],
		query: "",
		toggleResults: false
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

	toggleResults = () => {

		if(!this.state.toggleResults){

			this.setState({
				toggleResults:true
			})
		}
	}

	displayQuery = (query) => {
		this.setState({ 
			query: query
		});
	}



	render() {
		
		let results = [];
		for(let i=0;i<this.state.threatLevel.length;i++){
			results.push({
				key:i,
				id:i,
				title:this.state.title[i],
				threat:this.state.threatLevel[i],
				timerToggle:this.state.timerToggle[i],
				displayThreat:this.displayThreatLevel,
				displayTitle:this.displayTitle,
				stopAnimate:this.timerToggle

			});
		}

		return (
			<main>
				<section>
					<p>We bring light to threatening speech.</p>
					<p>
						The inspiration for this project came after the January 6th Capitol Riot. We wanted to create a tool that would look for similar threats.
						<br></br>
						<br></br>
						Here you can enter in a Twitter Handle to receive the percentages on how threatenting or neutual any given user might be. 
					</p>
				</section>

				<TwitterQuery
					displayThreat = { this.displayThreatLevel }
					timerToggle = { this.timerToggle }
					displayTitle = { this.displayTitle }
					displayQuery = { this.displayQuery }
					toggleResults = { this.toggleResults }
				/>
				{/* "Threatening", "Conspiracy Theory", "Hate Speech", "Profanity" and "Neutral Language" */}
				<div className={ this.state.toggleResults?"":"hideResult" } id="theResults">
					
					<h2>Search results for { this.state.query }</h2>
					<div className="resultsContainer">
						{
							results.map((item)=>
								<ResultModal
								key={ item.key }
								id = { item.id }
								title = { item.title }
								threat = { item.threat }
								displayThreat = { item.displayThreat }
								displayTitle = { item.displayTitle }
								timerToggle = { item.timerToggle }
								stopAnimate = { item.stopAnimate }
								/>
							)
						}


					</div>
				</div>


			</main>
		)
	}

}

export default Main;