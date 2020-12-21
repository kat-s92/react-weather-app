import "./App.css";
import Search from "./Search";
import "./Search.css";

function App() {
	return (
		<div className="App">
			<div className="Container">
				<Search defaultCity="Moscow" />
			</div>
			<div className="ref">
				<small>
					Coded by Katya
					<br />
					<a
						href="https://github.com/kat-s92/react-weather-app"
						target="_blank"
						rel="noreferrer"
					>
						Open-source
					</a>
				</small>
			</div>
		</div>
	);
}

export default App;
