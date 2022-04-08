import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Test from './components/Test';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer mensaje={"Lista de Productos"} />} />
            <Route path="categories/:name" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />

          </Routes>
        </header>

      </div>
    </BrowserRouter>
  );
}

export default App;
