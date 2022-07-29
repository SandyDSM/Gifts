import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/custom.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";
import ItemListCart from "./container/ItemListCart";
import CartContextProvider from "./components/CartContext";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<ItemListCart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
