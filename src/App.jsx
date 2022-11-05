import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";

function App() {
    return (
        <div style={{ height: "120vh" }}>
            <Nav />
			<SideBar></SideBar>
            <div style={{ paddingTop: "3rem" }}>Hello world</div>
        </div>
    );
}

export default App;
