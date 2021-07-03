import React, { Component } from 'react';

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
            this.fakeQuery(this.state.query);
    }

    fakeQuery(query) {
        // const result = Math.floor((Math.random() * (100 -1) + 1));
        // this.props.displayThreat(result);
        // this.props.timerToggle();
        this.setState({
            query: ''
        });

        let tempTitle=["","","","",""];
        let tempThreat=[0,0,0,0,0];

        for(let i = 0;i<5;i++){
            tempTitle[i]="title"+i;
            tempThreat[i]=(i+1)*17;
            this.props.displayThreat(tempThreat[i]+1,i);
            this.props.displayTitle(tempTitle[i],i);
            this.props.timerToggle(i);
        }

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