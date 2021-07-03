import React, { Component } from 'react';


export class ResultModal extends Component {

    constructor(props){
        super(props);
        this.state={
            title:"",
            output:0,
            threat:-1,
            bar:'progress-circle p0',
            final:0,
            textColor:'',
            outerColor:'outer-color-black'
        };
    }

    // Mounting the interval for animation timer
    componentDidMount() {
        this.intervalId=setInterval(()=>this.timer(),25);
    }

    // Unmounts the interval timer on exit
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    timer=()=> {
        this.timerCount();

        if(this.props.timerToggle&&this.state.output<=this.state.threat-1){
            this.setState(prevState =>({
                output:prevState.output+1,
                final:this.state.output,
                outerColor:this.displayThreatColor(this.state.final)
            }));
            this.progressBar();
        }
        if (this.state.output === this.state.threat - 1) {
            this.setState({
                final:this.state.output,
                output:0
            });
            this.props.stopAnimate(this.props.id);
        }
    }

    timerCount=()=> {
        this.setState({
            threat:this.props.threat
        });
    }

    progressBar=()=> {
        if(this.state.output<51) {
            this.setState({
                bar:'progress-circle p'+this.state.output
            });
        }
        else {
            this.setState({
                bar:'progress-circle over50 p'+this.state.output
            });
        }
    }

    displayThreatColor = (threat) => {
		let color;
		if (threat >= 0 && threat < 25)
			color = 'green';
		else if (threat > 24 && threat < 50)
			color = 'yellow';
		else if (threat > 49 && threat < 75)
			color = 'orange';
		else if (threat > 74)
			color = 'red';
		
		this.setState({
			textColor:'span-'+color,
            outerColor:'outer-color-'+color
		});
	}


    render() {
        
        return (
            <section>
                <h3 className="threatTitle">{ this.props.title }</h3>
            <section className="circle-prog-widget">
                <div id="circle-container" className={this.state.outerColor}>
                    <div className={this.state.bar}>
                        <span id="number-display" className={this.state.textColor}>{this.state.final}%</span>
                        <div className="left-half-clipper">
                            <div className="first50-bar"></div>
                            <div className="value-bar"></div>
                        </div>
                    </div>
                </div>
            </section>
            </section>
        )
    }


}

export default ResultModal;