import React, { Component } from "react";
import classNames from "classnames";
import BookingModal from "./BookingModal";

class DateSlot extends Component {
	state = {
		show: false
	};
	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = e => {
		e.stopPropagation();
		this.setState({ show: false });
	};

	render() {
		const { id, dayOfTheWeek, date, availability } = this.props;

		return (
			<div className="date-card" onClick={this.showModal}>
				<div className="content-date">
					<h2 className="day-of-week">{dayOfTheWeek}</h2>
					<h5 className="date">{date}</h5>
					<h3
						className={classNames({
							"availability--open": availability === true,
							"availability--taken": availability !== true
						})}
					>
						{availability ? "Available" : "Unavailable"}
					</h3>
				</div>
				<BookingModal
					id={id}
					show={this.state.show}
					handleClose={this.hideModal}
					availability={availability}
				/>
			</div>
		);
	}
}

export default DateSlot;
