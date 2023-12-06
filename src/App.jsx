import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="wrapper">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
