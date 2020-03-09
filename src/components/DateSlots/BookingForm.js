import React, { Component } from "react";
import Confirmation from "./PopUps/Confirmation";
import classNames from "classnames";

class BookingForm extends Component {
	state = {
		name: "",
		phone: "",
		message: "",
		errors: {},
		isConfirmed: false
	};

	submitForm = (id, dispatch, e) => {
		const { name, phone, message } = this.state;
		// Error checking
		if (name === "") {
			this.setState({ errors: { name: "Name is required" } });
			e.preventDefault();
			return;
		} else if (phone === "") {
			this.setState({ errors: { phone: "Phone is required" } });
			e.preventDefault();
			return;
		} else if (message === "") {
			this.setState({ errors: { message: "Message is required" } });
			e.preventDefault();
			return;
		} else {
			dispatch({ type: "CHANGE_AVAILABILITY", payload: id });
			this.setState({ isConfirmed: true });
			e.preventDefault();
		}
	};
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		const { id, availability, handleClose, dispatch } = this.props;
		const { name, phone, message, isConfirmed, errors } = this.state;
		return (
			<>
				{!isConfirmed ? (
					<form
						className="booking-form"
						onSubmit={this.submitForm.bind(this, id, dispatch)}
					>
						<div className="booking-input-name">
							<label htmlFor="name">Your Name:</label>
							{availability ? (
								<input
									className={classNames({ "not-valid": errors.name })}
									value={name}
									type="text"
									name="name"
									placeholder="Johny"
									onChange={this.onChange}
									error={errors.name}
									// required
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
									className={classNames({ "not-valid": errors.phone })}
									type="number"
									name="phone"
									placeholder="123-456-7890"
									value={phone}
									onChange={this.onChange}
									error={errors.phone}
									// required
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
									className={classNames({ "not-valid": errors.message })}
									value={message}
									type="text"
									name="message"
									placeholder="From 6 to 8"
									onChange={this.onChange}
									error={errors.message}
									// required
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
						{errors.name || errors.phone || errors.message ? (
							<h2 style={{ color: "red", marginTop: "2rem" }}>
								Please fill out the required fields!
							</h2>
						) : null}
					</form>
				) : (
					<Confirmation />
				)}
			</>
		);
	}
}

export default BookingForm;
