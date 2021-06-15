import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/NavbarComponent';
import { CartWidget } from './components/NavbarComponent/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';
import './components/NavbarComponent/estilos.css'




function App() {
  const productos = [
    {id: 1, nombre: 'Guitarra Gibson Acústica', precio: 52000},
    {id: 1, nombre: 'Guitarra Fender Eléctrica', precio: 42000},
    {id: 1, nombre: 'Guitarra Gracia Acústica', precio: 34000}
  ];

  return (
    
    <div className="App">
     <NavBarComponent/>
     <div className="container-cards">
        <div className="container">
          <div className="row">
            <ItemListContainer gretting={productos[0]}/>
            <ItemListContainer gretting={productos[1]}/>
            <ItemListContainer gretting={productos[2]}/>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
