import React, { useContext, useEffect, useState } from "react";
import { getStudents, setUserInDB } from "../utils/firebase-db";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({
		displayName: "",
		email: "",
		photoURL: "",
		uid: "",
		students: [],
	});
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Login
	const login = (user) => {
		return new Promise(async (resolve, reject) => {
			const userData = {
				displayName: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
				uid: user.uid,
			};
			setCurrentUser({ ...userData });
			await authenticate();

			resolve();
		});
	};

	const authenticate = async () => {
		if (currentUser.uid) {
			// Set Students
			const students = await getStudents(currentUser.uid);
			setCurrentUser({ ...currentUser, students });

			// Authenticate
			setIsAuthenticated(true);

			// Send user data to DB
			setUserInDB(currentUser);
		}
	};

	useEffect(() => {
		authenticate();
	}, [currentUser.uid]);

	const value = {
		currentUser,
		login,
		isAuthenticated,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
