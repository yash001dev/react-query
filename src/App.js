import logo from "./logo.svg";
import "./App.css";
import { Switch } from "react-router-dom";
import BooksList from "./BooksList/BooksList";
import { CreateBook } from "./CreateBook";

function App() {
  return (
    <Switch>
      <Route path="/update-book">
        <UpdateBook />
      </Route>
      <Route path="/create-book">
        <CreateBook />
      </Route>
      <Route path="/">
        <BooksList />
      </Route>
    </Switch>
  );
}

export default App;
