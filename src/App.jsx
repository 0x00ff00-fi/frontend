import "./App.css";
import { useEffect, useState } from "react"
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import Footer from "./components/Footer";

const AVAILABLE_ICONS = ["square", "circle", "triangle", "star"]
const AVAILABLE_NAMES = ["Mario", "Luigi", "Peach", "Bowser", "Toad", "Yoshi", "Boo", "Ronald McDonald"]

function App() {
  const [posts, setPosts] = useState([])
  const [filters, setFilters] = useState('')
  const filteredPosts = posts.filter(p => p.content.toLowerCase().includes(filters) || p.name.toLowerCase().includes(filters))

  useEffect(() => {
    fetch("https://green-api.kendaganio.com/posts")
      .then(r => r.json())
      .then(p => setPosts(p))

    return () => { console.log("useEffect: cleanup func") }
  }, [])


  const user = {
    icon: AVAILABLE_ICONS[Math.floor(Math.random() * AVAILABLE_ICONS.length)],
    name: AVAILABLE_NAMES[Math.floor(Math.random() * AVAILABLE_NAMES.length)]
  };

  function renderNothing() {
    return (<p>Nothing to see here at the moment.</p>)
  }

  function renderPosts() {
    return filteredPosts.map((post, i) => {
      return (
        <Card key={i} post={post} />
      )
    })
  }

  return (
    <div>
      <Nav user={user} search={setFilters} />
      <SideBar></SideBar>
      <div className="c-container">
        {filteredPosts.length < 1 ? renderNothing() : renderPosts()}
      </div>
      <Footer user={user} />
    </div>
  );
}

export default App;
