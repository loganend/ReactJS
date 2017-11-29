import React from 'react';

import Header from './header.js'
import Footer from './footer.js'

export default class Layout extends React.Component {

	constructor(){
		super();
		this.state = {title: "Hello Title"};
	}

	changeTitle(title){
		this.setState({title});
	}

	render() {
		// setTimeout(() => {
		// 	this.setState({title: "Weeelcom Will!"});
		// }, 3000)
		// const  title = "Use props"

		return (

			<div>
				<Header changeTitle = {this.changeTitle.bind(this)} title = {this.state.title}/>
				<Footer/>
			</div>
		);
	}
}