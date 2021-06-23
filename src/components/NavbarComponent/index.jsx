import  '../Styles/estilos.css';
import { CartWidget } from '../CartWidget';
import logo from '../Images/logo.png';


export const NavBarComponent = () => {
    return (
        <header className="header">
            <img src={logo} alt="" className="logo"/>
            <nav className="nav">
                <ul>
                    <li><a>ACÚSTICAS</a></li>
                    <li><a>ELECTROACÚSTICAS</a></li>
                    <li><a>ELÉCTRICAS</a></li>
                    <CartWidget/>
                </ul>
            </nav>
        </header>
    )
}