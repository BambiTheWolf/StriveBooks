import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomList from "./components/Booklist";

import books from "./data/scifi.json";

function App() {
  return (
    <div>
      {/* <CustomAlert
        text="DANGER! The site doesn't take any responsibilities for damage or injuries
          caused by possessed/cursed books."
      />
      <CustomBadge badge="NEW BOOKS" color="primary" />
      <CustomBook book={books[0]} /> */}
      <CustomList books={books} />
    </div>
  );
}

export default App;
