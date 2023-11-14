import "./App.css";
import Nav from "./components/Nav";
import Projects from "./Pages/Project";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import Certifications from "./Pages/Certifications";
import ContactMe from "./Pages/ContactMe";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutMe />
      <Certifications />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
