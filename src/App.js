import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer mensaje="Este será el Contenedor de productos" />

      </header>
    </div>
  );
}

export default App;
