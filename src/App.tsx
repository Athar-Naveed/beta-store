import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Home from "./pages/Home";
import FAQ from "./pages/Faq";
function App() {

  return (
    <>
    
    <Router>
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
