import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomList from "./components/Booklist";

import books from "./data/scifi.json";

function App() {
  return (
    <div className="App">
      <CustomList books={books} />
    </div>
  );
}

export default App;
