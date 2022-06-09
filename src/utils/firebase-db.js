import { collection, query, where, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

/**
 *  Creates user if one does not exist.
 * 	Updates user if it finds a match.
 */
export const setUser = async () => {
	const userRef = doc(db, "users", currentUser.uid);
	await setDoc(userRef, { ...currentUser }, { merge: true });
};

/** Creates student */
export const newStudent = () => {};
