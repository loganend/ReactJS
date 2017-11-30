import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {

	navigate(){
		// console.log(this.props)
		this.props.router.replace("/");
	}

	render(){
		const {router} = this.props;
		console.log(router.isActive("archives"));


		return (
			<div>
				<h1>KillerNew.net</h1>
				{this.props.children}
				<Link to="archives" activeClassName = "test"><button class = "btn btn-danger">archives</button></Link>
				<Link to="settings"><button class = "btn btn-success">settings</button></Link>
				<button onClick={this.navigate.bind(this)}>featured</button>
			</div>
		);
	}
}