import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Hotel from "./Pages/hotel/Hotel";
import List from "./Pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hotels" element={<List/>}></Route>
        <Route path="/hotels:id" element={<Hotel/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
