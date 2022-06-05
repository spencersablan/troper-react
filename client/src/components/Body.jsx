import { useState } from "react";
import Home from "./Home";
import Student from "./Student";
import "./Body.scss";

const BodyView = Object.freeze({
	Home: "Home",
	Student: "Student",
});

export default function Body() {
	const [bodyState, setBodyState] = useState(BodyView.Student);

	const BodyViewComponent = () => {
		switch (bodyState) {
			case BodyView.Home:
				return <Home />;
			case BodyView.Student:
				return <Student />;
		}
	};

	return (
		<div className="body">
			<BodyViewComponent />
		</div>
	);
}