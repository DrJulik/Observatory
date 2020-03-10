import React from "react";
import { Consumer } from "../../context";

let n = -12;
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
						<div className="nav-text">
							<div>B</div>
							<div>A</div>
							<div>C</div>
							<div>K</div>
						</div>
						<i className="fas fa-caret-left fa-2x"></i>
					</div>
				);
			}}
		</Consumer>
	);
};

export default LeftArrow;
