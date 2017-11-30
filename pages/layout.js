import React from "react";
import { Link } from "react-router";

import Nav from "../components/layout/nav.js";
import Footer from "../components/layout/footer.js";

export default class Layout extends React.Component {
	render(){
		console.log(this.props);
		const {location} = this.props;
		const containerSytle = {
			marginTop: "60px"
		};

		return (
			<div> 
				<Nav location =  {location}/>
				<div class = "container" style = {containerSytle}>
					<div class = "row">
						<div class = "col-lg-12">
							<h1>KillerNew.net</h1>

							{this.props.children}
						</div>
					</div>
					<Footer />
				</div>


			</div> 
			)
	}
}