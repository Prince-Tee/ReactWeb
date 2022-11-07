import {Routes, Route} from "react-router-dom";
import "./App.css";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import {Profile} from "./components/pages/Profile"

function App() {
  return (
     <div className="App">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Profile/>}/>
          <Footer/>
        </Routes> 
    </div>
  );
}

export default App;
