import React, { useContext, useState, useEffect, useRef } from "react";
import { collection, query, where, doc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({});
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	/** Creates user in DB */
	const setUserInDB = async () => {
		const userRef = doc(db, "users", currentUser.uid);
		await setDoc(userRef, { ...currentUser }, { merge: true });
	};

	// Login
	const login = async (user) => {
		setCurrentUser(user);
	};

	// Watch for login & set isAuthenitcated to true
	useEffect(() => {
		setIsAuthenticated(true);
		setUserInDB();
	}, [setCurrentUser]);

	const value = {
		currentUser,
		login,
		isAuthenticated,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
