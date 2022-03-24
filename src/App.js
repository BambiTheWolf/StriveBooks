import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomList from "./components/Booklist";
import Navbar from "./components/NavBar";

import books from "./data/scifi.json";

const App = () => (
  <div className="App">
    <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomList books={books} />} />
        </Routes>
      </BrowserRouter>
    </header>
  </div>
);

export default App;
