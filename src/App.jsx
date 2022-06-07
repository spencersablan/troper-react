import { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { db } from "./utils/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
	const [userData, setUserData] = useState({
		firstName: "",
		lastName: "",
		prefix: "",
		id: "",
	});

	const usersCollectionRef = collection(db, "users");

	// Get User Data
	const getUserData = async () => {
		const data = await getDocs(usersCollectionRef);
		const user = data.docs.find((doc) => doc.id === "Q7EoCkXIBrrVjSHg43cb");
		setUserData({ ...user.data(), id: "Q7EoCkXIBrrVjSHg43cb" });
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
