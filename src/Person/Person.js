import React from 'react';

const person = (props) => {
	return (
		<div>
		<p>Im a person. Name: { props.name }. Age: { props.age }. Random number: { Math.floor(Math.random() * 30) }</p>
		<p>{ props.children }</p>
		</div>
	)
};

export default person;