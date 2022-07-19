//import './App.css';
import "./sass/custom.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="container mt-5">
          {/*<ItemListContainer greeting= 'Hola soy el ItemList Container'/>*/}
          <ItemDetailContainer/>
        </div>
      </header>
    </div>
  );
}

export default App;
