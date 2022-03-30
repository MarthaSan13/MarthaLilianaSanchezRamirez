import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Test from './components/Test';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer mensaje="Lista de Productos" />
      </header>

    </div>
  );
}

export default App;
