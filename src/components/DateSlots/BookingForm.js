import React, { Component } from "react";

class BookingForm extends Component {
	state = {
		name: "",
		phone: "",
		message: ""
	};
	submitForm = (id, dispatch, e) => {
		dispatch({ type: "CHANGE_AVAILABILITY", payload: id });
		// Not ideal but works for now (Confirmation comp)
		alert("Booking Confirmed!");
		e.preventDefault();
	};
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		const { id, availability, handleClose, dispatch } = this.props;
		const { name, phone, message } = this.state;
		return (
			<form
				className="booking-form"
				onSubmit={this.submitForm.bind(this, id, dispatch)}
			>
				<div className="booking-input-name">
					<label htmlFor="name">Your Name:</label>
					{availability ? (
						<input
							value={name}
							type="text"
							name="name"
							placeholder="Johny"
							onChange={this.onChange}
						/>
					) : (
						<input
							value={name}
							type="text"
							name="name"
							placeholder="Already Taken"
							disabled
							onChange={this.onChange}
						></input>
					)}
				</div>
				<div className="booking-input-phone">
					<label htmlFor="phone">Your phone number:</label>
					{availability ? (
						<input
							type="number"
							name="phone"
							placeholder="123-456-7890"
							value={phone}
							onChange={this.onChange}
						></input>
					) : (
						<input
							value={phone}
							type="number"
							name="phone"
							placeholder="123-456-7890"
							disabled
							onChange={this.onChange}
						></input>
					)}
				</div>
				<div className="booking-input-time">
					<label htmlFor="time">Reservation Time:</label>
					{availability ? (
						<input
							value={message}
							type="text"
							name="message"
							placeholder="From 6 to 8"
							onChange={this.onChange}
						/>
					) : (
						<input
							value={message}
							type="text"
							name="message"
							placeholder="Not today!"
							disabled
							onChange={this.onChange}
						></input>
					)}
				</div>
				<div className="buttons">
					{availability ? (
						<input type="submit" className="book-button" value="Book Me!" />
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
		);
	}
}

export default BookingForm;
