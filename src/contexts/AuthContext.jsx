import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({});
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const login = (user) => {
		setCurrentUser(user);
	};

	// Watch for login
	useEffect(() => {
		if (Object.keys(currentUser).length === 0) setIsAuthenticated(true);
		console.log(isAuthenticated);
	}, [setCurrentUser]);

	const value = {
		currentUser,
		login,
		isAuthenticated,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
