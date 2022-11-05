import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import Footer from "./components/Footer";

function iconObject(obj) {
    if (typeof obj !== "object") return obj;
    if (!obj?.icon) return obj;
    const icon = (
        <div className="icon">
            <img src={`/src/assets/${obj.icon}.svg`}></img>
        </div>
    );
    return {
        ...obj,
        icon: icon,
    };
}

function App() {
    const user = {
        icon: "square",
        name: "Luigi",
    };

    const fakepost = {
        user,
        body: {
            media: null,
            text: "My first fake post",
        },
        dateTime: new Date("11-05-2022 16:10"),
    };

    const trueFakePost = {
        icon: "star",
        name: "Stella",
        media: null,
        text: "My second fake post",
        created_at: new Date("11-05-2022 18:10"),
    };

    return (
        <div style={{ height: "120vh" }}>
            <Nav />
            <SideBar></SideBar>
            <div className="c-container">
                <Card post={iconObject(trueFakePost)} />
                <Card>Bye World</Card>
            </div>
            <Footer user={iconObject(user)} />
        </div>
    );
}

export default App;
