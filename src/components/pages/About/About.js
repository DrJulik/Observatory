import React, { Component } from "react";
import "./../../../style.scss";

class About extends Component {
	render() {
		const { handleClose, show } = this.props;

		// const showHideClassName = show ? "modal" : "modal display-none";

		return show ? (
			<div
				className="modal"
				ref={node => {
					this.node = node;
				}}
			>
				<div className="modal-body" ref={this.modalRef}>
					<div className="modal-content">
						<a href="/about" className="close" onClick={handleClose}>
							&times;
						</a>
						<h2>About Us</h2>
						<p>
							For many years we let people look into our tubes and stuff, for
							which we charge people money. Wanna look at cool stars and stuff?
							You have the right place.
						</p>
						<p>
							Have a specific date in mind? Click on the date slot to book the
							selected date!
						</p>
					</div>
				</div>
			</div>
		) : null;
	}
}

export default About;
