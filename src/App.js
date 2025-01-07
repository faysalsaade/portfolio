import Hero from "./hero";
import Navbar from "./component/Navbar";
import Achievements from "./component/Achievements";
import Posts from "./component/posts";
import Contact from "./component/contact";
function App() {
  return (
    <div id="about">
      <Navbar />
      <Hero />
      <Achievements />
      <Posts />
      <Contact />
    </div>
  );
}

export default App;
