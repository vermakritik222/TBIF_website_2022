import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/shared/Nav/Nav";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Footer from "./components/shared/Footer/Footer";
import People from "./pages/People/People";
import Career from "./pages/Career/Career";
import Portfolio from "./pages/Portfolio/Portfolio";
import Facilities from "./pages/Facilities/Facilities";
import ContactUs from "./pages/ContactUs/ContactUs";
import Apply from "./pages/Apply/Apply";
import "./util/animation/Animation.scss";
import "./App.css";
import Events from "./pages/Events/Events";

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
            <Route path="/facilities" component={Facilities} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/events" component={Events} />
            <Route path="/career" component={Career} />
            <Route path="/apply" component={Apply} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
