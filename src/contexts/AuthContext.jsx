import React, { useContext, useState, useEffect, useRef } from "react";
import { getAllUsers, setUserInDB } from "../utils/firebase-db";

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
	});
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Login
	const login = async (user) => {
		const userData = {
			displayName: user.displayName,
			email: user.email,
			photoURL: user.photoURL,
			uid: user.uid,
		};

		setCurrentUser({ ...userData });
		getAllUsers();
		authenticate();
	};

	const authenticate = () => {
		if (currentUser.uid) {
			setIsAuthenticated(true);
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
