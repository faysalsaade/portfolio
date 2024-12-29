import "./component/Navbar.css";

import Hero from "./hero";
import Navbar from "./component/Navbar";
import Achivements from "./achivements";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Achivements />
    </div>
  );
}

export default App;
