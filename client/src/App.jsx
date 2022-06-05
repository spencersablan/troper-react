import { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
	const [userData, setUserData] = useState({
		firstName: "",
		lastName: "",
		prefix: "",
		id: 0,
	});

	// Get User Data
	const getUserData = async () => {
		try {
			const response = await fetch("http://localhost:3001/user");

			if (!response.ok) {
				throw new Error("Server Error");
			}

			const data = await response.json();

			setUserData(data);
		} catch (error) {
			console.log(error);
		}
	};

	// Set user data
	useEffect(() => {
		getUserData();
	}, []);

	return (
		<div className="wrapper">
			<Header userData={userData} />
			<Body userData={userData} />
		</div>
	);
}

export default App;
