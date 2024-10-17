import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';



function App() {

  return (
    <BrowserRouter>
      <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:id' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Checkout />} />
          </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
