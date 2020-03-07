import React, { Component } from "react";
import About from "./pages/About/About";

class DescBox extends Component {
	state = {
		show: false
	};
	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};
	render() {
		return (
			<div className="div1">
				<div className="content">
					<h1>Be one with the Stars</h1>
					<h3>Our observatory is open 24 hours a day, 7 days a week.</h3>
					<button onClick={this.showModal}>About Our Observatory</button>
					<About show={this.state.show} handleClose={this.hideModal} />
				</div>
			</div>
		);
	}
}

export default DescBox;
