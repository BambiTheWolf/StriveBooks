import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomList from "./components/Booklist";

import books from "./data/scifi.json";
import Registration from "./components/Registration";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<CustomList books={books} />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </header>
    </div>
  </BrowserRouter>
);

export default App;
