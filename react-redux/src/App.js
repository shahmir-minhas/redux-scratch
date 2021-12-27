import logo from "./logo.svg";
import "./App.css";
import Cake from "./components/Cake";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cake />
      </Provider>
    </div>
  );
}

export default App;
