import React from "react";
import { Consumer } from "../../context";

let n = 1;
const LeftArrow = () => {
	const goBack = dispatch => {
		n--;
		dispatch({ type: "GO_BACK", payload: n });
	};

	return (
		<Consumer>
			{value => {
				const { dispatch } = value;
				return (
					<div className="panel-left" onClick={goBack.bind(this, dispatch)}>
						<h2 className="nav-text">A</h2>
						<i className="fas fa-caret-left fa-2x"></i>
					</div>
				);
			}}
		</Consumer>
	);
};

export default LeftArrow;
