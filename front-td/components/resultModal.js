import React from 'react';

export default function ResultModal(props) {
	return (
        <section className={props.showMe ? "resultModal" : "resultModal hide-me"}>
            <h2>Threat results for {props.query}</h2>
            <div>
                <p className={props.color}>{props.threat}%</p>
                <p>This Handle has a threat of {props.threat}%</p>
            </div>
        </section>
	);
}