import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
	return (
		<AuthProvider>
			<div className="wrapper">
				<Header />
				<Body />
			</div>
		</AuthProvider>
	);
}

export default App;
