import React, { Component } from 'react';

export class TwitterQuery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    handleInput(e) {
        this.setState({
            query: e.target.value
        });
    }

    handleSubmission() {
        if(this.state.query !== '')
            this.fakeQuery(this.state.query);
    }

    fakeQuery(query) {
        const result = Math.floor((Math.random() * (100 -1) + 1));
        this.props.displayThreat(result);
        this.props.displayColor(result);
        this.props.displayQuery(this.state.query);
        this.props.displayModal();
        this.setState({
            query: ''
        });
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