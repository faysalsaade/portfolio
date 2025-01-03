import Hero from "./hero";
import Navbar from "./component/Navbar";
import Achievements from "./component/Achievements";
import Posts from "./component/posts";
function App() {
  return (
    <div id="about">
      <Navbar />
      <Hero />
      <Achievements />
      <Posts />
    </div>
  );
}

export default App;
