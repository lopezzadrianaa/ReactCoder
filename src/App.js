import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/NavbarComponent';
import { ItemListContainer } from './containers/ItemListContainer';
import './components/Styles/estilos.css';




function App() {
  
  return (
    <div className="App">
      <NavBarComponent/> 
      <ItemListContainer/>
    </div>
  );
}

export default App;
