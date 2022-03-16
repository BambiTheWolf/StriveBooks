import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomAlert from "./components/WarningSign";
import CustomBadge from "./components/MyBadge";
import CustomBook from "./components/SingleBook";

import books from "./data/scifi.json";

function App() {
  return (
    <div>
      <CustomAlert
        message="The site doesn't take any responsibilities for damage or injuries
          caused by possessed/cursed books."
      />
      <CustomBadge badge="NEW BOOKS" color="primary" />
      <CustomBook selectedBook={books[1]} />
    </div>
  );
}

export default App;
