import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Category from './components/Category';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import Test from './components/Test';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home mensaje={"Lista de Productos"} />} />
            <Route path="categories" element={<Categories />} />
            <Route path="/category/:unacategory" element={<Category />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
          </Routes>


        </header>

      </div>
    </BrowserRouter>
  );
}

export default App;
