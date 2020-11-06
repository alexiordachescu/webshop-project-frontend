import "./App.css";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
