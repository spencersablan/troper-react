import { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
	const [userData, setUserData] = useState(
		localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null
	);

	// Set initial user data
	useEffect(() => {
		getUserData();
	}, []);

	// Get User Data
	const getUserData = async () => {
		try {
			const response = await fetch("http://localhost:3001/user/12345");

			if (!response.ok) {
				throw new Error("Server Error");
			}

			const data = await response.json();

			setUserData(data);
		} catch (error) {
			console.log(error);
		}
	};

	// Set user data in child
	const externalSetUserData = (data) => {
		setUserData(data);
	};

	return (
		<GoogleOAuthProvider clientId="70253352156-sh3detuiinmcpqpiqglt1bmf93b585cv.apps.googleusercontent.com">
			<div className="wrapper">
				<Header userData={userData} />
				<Body setUserData={externalSetUserData} userData={userData} />
			</div>
		</GoogleOAuthProvider>
	);
}

export default App;
