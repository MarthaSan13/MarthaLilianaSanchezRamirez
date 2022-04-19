import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Home from './components/Home';
import Cart from './components/Cart';
import CustomProvider from "./contexts/CartContext"
import ItemListContainer from './containers/ItemListContainer';

function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <header className="App-header">
          <CustomProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home mensaje={""} />} />
              <Route path="categories" element={<Categories />} />
              {/* <Route path="/category/:unacategory" element={<Category />} />  */}
              <Route path="/category/:unacategory" element={<ItemListContainer />} />
              <Route path="/producto/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CustomProvider>
        </header>

      </div>

    </BrowserRouter>
  );
}

export default App;
