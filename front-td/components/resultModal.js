import React from 'react';

export default function ResultModal(props) {
	return (
        <section className="resultModal">
            <h1>Threat results for {props.query}</h1>
            <p className={props.color}>{props.threat}%</p>
            <p>This Handle has a threat of {props.threat}%</p>
        </section>
	);
}