import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
//import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container" >
        {/* <TextForm heading = "Enter the text to analyze below:"/> */}
        <About></About>
      </div>
      
    </div>
  );
}
export default App;
