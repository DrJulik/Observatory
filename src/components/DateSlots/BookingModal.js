import React, { Component } from "react";
import { Consumer } from "../../context";

class BookingModal extends Component {
	submitForm = (id, dispatch, e) => {
		dispatch({ type: "CHANGE_AVAILABILITY", payload: id });
		e.preventDefault();
	};

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
									<form onSubmit={this.submitForm.bind(this, id, dispatch)}>
										<div className="booking-input-name">
											<label htmlFor="name">Your Name:</label>
											{availability ? (
												<input name="name" placeholder="Johny"></input>
											) : (
												<input
													name="name"
													placeholder="Already Taken"
													disabled
												></input>
											)}
										</div>
										<div className="booking-input-phone">
											<label htmlFor="phone">Your phone number:</label>
											{availability ? (
												<input name="phone" placeholder="123-456-7890"></input>
											) : (
												<input
													name="phone"
													placeholder="123-456-7890"
													disabled
												></input>
											)}
										</div>
										<div className="booking-input-time">
											<label htmlFor="time">
												How long do you want to reserve us for?
											</label>
											{availability ? (
												<input name="time" placeholder="From 6 to 8"></input>
											) : (
												<input
													name="time"
													placeholder="Not today!"
													disabled
												></input>
											)}
										</div>
										<div className="buttons">
											{availability ? (
												<input
													type="submit"
													className="book-button"
													value="Book Me!"
												/>
											) : (
												<input
													type="submit"
													className="book-button"
													value="Sorry!"
													disabled
												/>
											)}

											<button className="back-button" onClick={handleClose}>
												Go Back!
											</button>
										</div>
									</form>
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
