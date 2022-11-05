import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Card from "./components/Card";

function App() {
	const user = {
		icon: <img src="/src/assets/star.svg" ></img>,
		name: "Stella",
	}

    return (
        <div style={{ height: "120vh" }}>
            <Nav />
			{/* <SideBar></SideBar> */}
            <div className="c-container">
				<Card user={user}>Hello World</Card>
				<Card>Bye World</Card>
			</div>
        </div>
    );
}

export default App;
