import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomList from "./components/Booklist";

import books from "./data/scifi.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomList books={books} />
      </header>
    </div>
  );
}

export default App;
