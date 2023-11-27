
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      
      {/* <Route path="/sample" element={<sample/>}></Route> */}
    
      </Routes>
      </BrowserRouter>
  );
}

export default App;
