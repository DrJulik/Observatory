import React, { Component } from "react";
import DateSlot from "./DateSlot";
import { Consumer } from "../../context";

class DateSlots extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { slots } = value;
					return (
						<React.Fragment>
							{slots.map(slot => {
								return (
									<DateSlot
										key={slot.id}
										id={slot.id}
										dayOfTheWeek={slot.dayOfTheWeek}
										date={slot.date}
										availability={slot.availability}
									/>
								);
							})}
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default DateSlots;
