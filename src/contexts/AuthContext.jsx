import React, { useContext, useState, useEffect, useRef } from "react";
import { setUser } from "../utils/firebase-db";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({});
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Login
	const login = async (user) => {
		setCurrentUser(user);
	};

	// Watch for login & set isAuthenitcated to true
	useEffect(() => {
		setIsAuthenticated(true);
		setUser();
	}, [setCurrentUser]);

	const value = {
		currentUser,
		login,
		isAuthenticated,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
