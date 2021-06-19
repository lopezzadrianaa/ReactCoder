
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import  '../Styles/estilos.css';

export const CartWidget = () => {
    return(
        <FontAwesomeIcon icon={faShoppingCart} className="iconoCarro"/>
    )
}