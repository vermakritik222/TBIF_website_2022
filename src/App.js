import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/shared/Nav/Nav";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
