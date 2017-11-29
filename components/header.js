import React from 'react';

import Title from './header/title.js'

export default class Header extends React.Component {

	constructor(){
		super();
		this.name = "Will";
	}

	handleChange(event){
		const title = event.target.value;
		this.props.changeTitle(title);
	}

	render(){
		// this.props.changeTitle("newTitle");
		return (
			<div>
				<Title title = {this.props.title}/>
				<input value = {this.props.title} onChange = {this.handleChange.bind(this)} />
			</div>
			);
	}
}