import React from "react";
import { Consumer } from "../../context";

const RightArrow = () => {
	let n = 11;
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
						<i className="fas fa-caret-right fa-2x"></i>
					</div>
				);
			}}
		</Consumer>
	);
};

export default RightArrow;
