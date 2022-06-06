import { useState } from "react";
import Home from "./Home";
import Student from "./Student";
import SignIn from "./SignIn";
import "./Body.scss";

const BodyView = Object.freeze({
	Home: "Home",
	Student: "Student",
	SignIn: "SignIn",
});

export default function Body({ userData, setUserData }) {
	const [bodyViewState, setBodyState] = useState(BodyView.SignIn);

	const BodyViewComponent = () => {
		switch (bodyViewState) {
			case BodyView.Home:
				return <Home userData={userData} />;
			case BodyView.Student:
				return <Student />;
			case BodyView.SignIn:
				return <SignIn setUserData={setUserData} />;
		}
	};

	return (
		<div className="body">
			<BodyViewComponent />
		</div>
	);
}
