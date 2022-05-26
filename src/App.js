import "./App.css";
import Intro from "./components/Intro";
import blob1 from "./assets/blob-top.png"
import blob2 from "./assets/blob-bottom.png"


function App() {
  return (
    <section>
      <img src={blob1} className="img-top" />
      <img src={blob2} className="img-bottom" />
      <Intro />
    </section>
  );
}

export default App;
