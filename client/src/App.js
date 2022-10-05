import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Types from "./components/Types";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route path={"/pokemons/:id"} component={Detail} />
          <Route path={"/create"} component={Create} />
          <Route path={"/types"} component={Types} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
