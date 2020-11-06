import "./App.css";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import { Route, Switch } from "react-router-dom";
import ToolBar from "./components/ToolBar";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div className="App">
      <ToolBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={Products} />
        <Route path="/basket" component={ShoppingCart} />
      </Switch>
    </div>
  );
}

export default App;
