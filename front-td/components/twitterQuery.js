import React, { Component } from 'react';
import axios from 'axios';
import data from './dummyData.json';

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

    async handleSubmission() {
        if(this.state.query !== '')
            await this.queryThreat(this.state.query);
    }


    async queryThreat(query) {

        let result = await this.apiQuery(query);
        await this.parseData(result);
    }

    async parseData(result) {

        let index = 0;

        for(let i = 0;i<result.length;i+=2){
            let value = await this.formatInteger(result[i+1]);

            this.props.displayThreat(value,index);
            this.props.displayTitle(result[i],index);
            index++;
        }

    }

    async formatInteger(input) {

        const value = input.replace("%","");
        return parseInt(value);
    }

    async apiQuery(query) {

        // let result = "";

        // axios.get("https://secret-ocean-49799.herokuapp.com/{end point here}")
        //     .then(response => {
        //         result=response.data;
        //     });
        // return result;  
        
        let result = [];

        for(let i = 0;i<data.ThreatReport.length;i++){
            let item = data.ThreatReport[i];
            result.push(item);
        }
        
        return result;
    }



    render() {
        return (
            <div className="twitterQuery">
                <div>
                    <label>Enter Twitter Handle</label>
                    <input type="text" value={this.state.query} onChange={this.handleInput.bind(this)} placeholder="   Twitter Handle" required/>
                </div>
                    <button onClick={this.handleSubmission.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default TwitterQuery;