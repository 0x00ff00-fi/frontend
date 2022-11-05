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
      <img loading="lazy" src={`/src/assets/${obj.icon}.svg`}></img>
    </div>
  );
  return {
    ...obj,
    icon: icon,
  };
}
function App() {
  const [posts, setPosts] = useState([])
	const [filters, setFilters] = useState('')

	const filteredPosts = posts.filter(p => p.content.toLowerCase().includes(filters) || p.name.toLowerCase().includes(filters))

	function search(string) {
		setFilters(string)
	}

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
    <div>
      <Nav user={user} search={search} />
      <SideBar></SideBar>
      <div className="c-container">
        {filteredPosts.map((post, i) => {
          return (
            <Card key={i} post={iconObject(post)} />
          )
        })}
      </div>
      <Footer user={iconObject(user)} />
    </div>
  );
}

export default App;
