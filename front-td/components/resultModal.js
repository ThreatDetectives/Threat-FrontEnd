import React from 'react';

export default function ResultModal(props) {
	return (
        <section className={props.showMe ? "resultModal" : "resultModal"}>
            {/* <h2>Threat score for {props.query}</h2> */}
            <h2>Threat score</h2>
            <div>
                <p className={props.color}>{props.threat}%</p>
                
            </div>
        </section>
	);
}