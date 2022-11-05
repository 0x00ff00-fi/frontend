import "./App.css";
import { useEffect, useState } from "react"
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import Footer from "./components/Footer";

function iconObject(obj) {
  if (typeof obj !== "object") return obj;
  if (!obj?.icon) return obj;
  const icon = (
    <div className="icon-bg">
      <img src={`/src/assets/${obj.icon}.svg`}></img>
    </div>
  );
  return {
    ...obj,
    icon: icon,
  };
}
function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("http://35.228.77.154/posts")
      .then(r => r.json())
      .then(p => setPosts(p))

    return () => { console.log("useEffect: cleanup func") }
  }, [])

  const user = {
    icon: "square",
    name: "Luigi",
  };

  return (
    <div style={{ height: "120vh" }}>
      <Nav />
      <SideBar></SideBar>
      <div className="c-container">
        {posts.map((post, i) => {
          return (
            <Card key={i} post={iconObject(post)} />
          )
        })}
        <Card>Bye World</Card>
      </div>
      <Footer user={iconObject(user)} />
    </div>
  );
}

export default App;
