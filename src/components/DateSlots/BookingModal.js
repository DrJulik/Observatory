import React, { Component } from "react";
import { Consumer } from "../../context";
import BookingForm from "./BookingForm";

class BookingModal extends Component {
	render() {
		const { id, handleClose, show, availability } = this.props;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return show ? (
						<div
							className="booking-modal"
							ref={node => {
								this.node = node;
							}}
						>
							<div className="modal-body" ref={this.modalRef}>
								<div className="modal-content">
									<h1 className="booking-title">Your Booking</h1>
									<h2 className="booking-date">Date: Today</h2>
									<h3 className="booking-availability">
										It is{" "}
										{availability ? (
											<span className="open">Available!</span>
										) : (
											<span className="taken">Unavailable, sorry!</span>
										)}
									</h3>
									<BookingForm
										availability={availability}
										id={id}
										handleClose={handleClose}
										dispatch={dispatch}
									/>
								</div>
							</div>
						</div>
					) : null;
				}}
			</Consumer>
		);
	}
}

export default BookingModal;
