import React from "react";
import { Consumer } from "../../context";

const RightArrow = () => {
	let n = 12;
	const goForward = dispatch => {
		n++;
		dispatch({ type: "GO_FORWARD", payload: n });
	};

	return (
		<Consumer>
			{value => {
				const { dispatch } = value;
				return (
					<div className="panel-right" onClick={goForward.bind(this, dispatch)}>
						<div className="nav-text">
							<div>F</div>
							<div>O</div>
							<div>R</div>
							<div>W</div>
							<div>A</div>
							<div>R</div>
							<div>D</div>
						</div>
						<i className="fas fa-caret-right fa-2x"></i>
					</div>
				);
			}}
		</Consumer>
	);
};

export default RightArrow;
