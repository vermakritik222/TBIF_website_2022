import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/shared/Nav/Nav";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import "./util/animation/Animation.scss";
import "./App.css";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
