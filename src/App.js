import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/shared/Nav/Nav";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Footer from "./components/shared/Footer/Footer";
import People from "./pages/People/People";
import "./util/animation/Animation.scss";
import "./App.css";
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/people" component={People} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
