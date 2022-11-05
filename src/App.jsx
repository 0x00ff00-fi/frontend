import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Card from "./components/Card";

function App() {
	const user = {
		icon: <img src="/src/assets/star.svg" ></img>,
		name: "Stella",
	}

	const fakepost = {
		user,
		body: {
			media: null,
			text: "My first fake post"
		},
		dateTime: new Date("11-05-2022 16:10")
	}

    return (
        <div style={{ height: "120vh" }}>
            <Nav />
			<SideBar></SideBar>
            <div className="c-container">
				<Card post={fakepost} />
				<Card>Bye World</Card>
			</div>
        </div>
    );
}

export default App;
