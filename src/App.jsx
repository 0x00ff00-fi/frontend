import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Card from "./components/Card";

function App() {
    return (
        <div style={{ height: "120vh" }}>
            <Nav />
			<SideBar></SideBar>
            <div className="c-container">
				<Card>Hello World</Card>
				<Card>Bye World</Card>
			</div>
        </div>
    );
}

export default App;
