import React, { Component } from "react";
import moment from "moment";

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_AVAILABILITY":
			return {
				slots: state.slots.map(slot =>
					action.payload === slot.id ? { ...slot, availability: false } : slot
				)
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		slots: [
			{
				id: 1,
				dayOfTheWeek: moment().format("dddd"),
				date: moment().format("MMMM, Do"),
				availability: true
			},
			{
				id: 2,
				dayOfTheWeek: moment()
					.add(1, "d")
					.format("dddd"),
				date: moment()
					.add(1, "d")
					.format("MMMM, Do"),
				availability: false
			},
			{
				id: 3,
				dayOfTheWeek: moment()
					.add(2, "d")
					.format("dddd"),
				date: moment()
					.add(2, "d")
					.format("MMMM, Do"),
				availability: true
			},
			{
				id: 4,
				dayOfTheWeek: moment()
					.add(3, "d")
					.format("dddd"),
				date: moment()
					.add(3, "d")
					.format("MMMM, Do"),
				availability: true
			},
			{
				id: 5,
				dayOfTheWeek: moment()
					.add(4, "d")
					.format("dddd"),
				date: moment()
					.add(4, "d")
					.format("MMMM, Do"),
				availability: true
			},
			{
				id: 6,
				dayOfTheWeek: moment()
					.add(5, "d")
					.format("dddd"),
				date: moment()
					.add(5, "d")
					.format("MMMM, Do"),
				availability: true
			},
			{
				id: 7,
				dayOfTheWeek: moment()
					.add(6, "d")
					.format("dddd"),
				date: moment()
					.add(6, "d")
					.format("MMMM, Do"),
				availability: false
			},
			{
				id: 8,
				dayOfTheWeek: moment()
					.add(7, "d")
					.format("dddd"),
				date: moment()
					.add(7, "d")
					.format("MMMM, Do"),
				availability: false
			},
			{
				id: 9,
				dayOfTheWeek: moment()
					.add(8, "d")
					.format("dddd"),
				date: moment()
					.add(8, "d")
					.format("MMMM, Do"),
				availability: false
			},
			{
				id: 10,
				dayOfTheWeek: moment()
					.add(9, "d")
					.format("dddd"),
				date: moment()
					.add(9, "d")
					.format("MMMM, Do"),
				availability: false
			},
			{
				id: 11,
				dayOfTheWeek: moment()
					.add(10, "d")
					.format("dddd"),
				date: moment()
					.add(10, "d")
					.format("MMMM, Do"),
				availability: true
			},
			{
				id: 12,
				dayOfTheWeek: moment()
					.add(11, "d")
					.format("dddd"),
				date: moment()
					.add(11, "d")
					.format("MMMM, Do"),
				availability: true
			}
		],
		dispatch: action => {
			this.setState(state => reducer(state, action));
		}
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
