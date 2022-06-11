import { collection, query, where, doc, setDoc, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";

/**
 *  Creates user if one does not exist.
 * 	Updates user if it finds a match.
 */
export const setUserInDB = async (user) => {
	const userRef = doc(db, "users", user.uid);
	await setDoc(userRef, { ...user }, { merge: true });
};

/** Gets students of user */
export const getStudents = async (userID) => {
	const studentRef = collection(db, "students");
	const studentQuery = query(studentRef, where("teacherID", "==", userID));
	const snapshot = await getDocs(studentQuery);

	let students = [];

	snapshot.docs.forEach((doc) => {
		students.push({ ...doc.data(), id: doc.id });
	});

	return students;
};

/** Creates student */
export const newStudent = () => {};

/** Get all users (For Development) */
export const getAllUsers = async () => {
	const usersCollection = collection(db, "users");

	const snapshot = await getDocs(usersCollection);

	let users = [];

	snapshot.docs.forEach((doc) => {
		users.push({ ...doc.data(), id: doc.id });
	});

	console.log(users);
};
