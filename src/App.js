//import './App.css';
import "./sass/custom.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="container">
          <ItemListContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
