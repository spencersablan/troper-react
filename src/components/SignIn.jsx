import { signInWithGoogle } from "../utils/firebase";
import "./SignIn.scss";
export default function SignIn() {
	return (
		<div className="sign-in">
			<h3 className="sign-in--header">Login</h3>
			<button onClick={signInWithGoogle}>Sign In with Google</button>
		</div>
	);
}
