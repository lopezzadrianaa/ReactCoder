/* import  '..components/Styles/estilos.css'; */
import { ItemList } from "../../components/ItemList";
import '../../components/Styles/estilos.css'

export const ItemListContainer = () => {
    const productos = [
        {id: 1, nombre: 'Guitarra Gibson Acústica', precio: 52000, stock: 100},
        {id: 2, nombre: 'Guitarra Fender Eléctrica', precio: 42000, stock: 100},
        {id: 3, nombre: 'Guitarra Gracia Acústica', precio: 34000, stock: 4}
      ];

      return (
        <div className="container-cards">
          <div className="container">
              <div className="row">
          <ItemList productos={productos}/>
          </div>
          </div>
        </div>
      )
    
}