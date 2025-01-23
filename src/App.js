import Hero from "./hero";
import Navbar from "./component/Navbar";
import Posts from "./component/posts";
import Contact from "./component/contact";
import SimpleSlider from "./component/Slider";
function App() {
  return (
    <div id="about">
      <Navbar />
      <Hero />
      <SimpleSlider />
      <Posts />
      <Contact />
    </div>
  );
}

export default App;
