import React, { Component } from 'react';
import axios from 'axios';
// import data from './dummyData.json';

export class TwitterQuery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    handleInput(event) {
        this.setState({
            query: event.target.value
        });
    }

    handleSubmission() {
        if(this.state.query !== '')
            this.queryThreat(this.state.query);
    }

    pressEnter(event) {
        if(event.key==="Enter"){
            if(this.state.query !== '')
                this.queryThreat(this.state.query);
        }
    }


    async queryThreat(query) {
        this.props.toggleResults();
        await this.apiQuery(query);
        // console.log(result);
        // this.parseData(result);
        // this.props.displayQuery(query);
        // this.setState({query:""});
    }
    
 

    parseData(result) {

        let index = 0;
        console.log(result);
        for(let i = 0;i<result.length;i+=2){
            let value = this.formatInteger(result[i+1]);

            this.props.displayThreat(value+1,index);
            this.props.displayTitle(result[i],index);
            this.props.timerToggle(index);
            index++;
        }

    }

    formatInteger(input) {

        const value = input.replace("%","");
        return parseInt(value);
    }

    async apiQuery(query) {

        let result;

        axios.post("http://127.0.0.1:8000/", {"twitterHandle": "hexx_king"})
            .then(response => {
                result=(response.data);
                this.parseData(result.ThreatReport);
                this.props.displayQuery(query);
                this.setState({query:""});
            });
        return result;  
        
        // let result = [];

        // for(let i = 0;i<data.ThreatReport.length;i++){
        //     let item = data.ThreatReport[i];
        //     result.push(item);
        // }
        
        // return result;
    }



    render() {
        return (
            <div className="twitterQuery">
                <div>
                    <label>Enter Twitter Handle</label>
                    <input onKeyPress={this.pressEnter.bind(this)} type="text" value={this.state.query} onChange={this.handleInput.bind(this)} placeholder="   Twitter Handle" required/>
                </div>
                    <button onClick={this.handleSubmission.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default TwitterQuery;