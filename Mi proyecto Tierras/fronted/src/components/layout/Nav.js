// import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom"

import '../../styles/layout.css'
const Nav = (props) => {
    return (<nav>
        <div className="holder">
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "activo":undefined}>Home</NavLink></li>
                <li><NavLink to="/proyectos" className={({ isActive }) => isActive ? "activo":undefined}>Proyectos</NavLink></li>
                <li><NavLink to="/contacto" className={({isActive})=>isActive ? "activo": undefined}>Contacto</NavLink></li>
                <li><NavLink to="/novedades" className={({isActive})=>isActive ? "activo": undefined}>Novedades</NavLink></li>
                <li><NavLink to="/galeria"className={({isActive})=>isActive ? "activo": undefined}>Galeria</NavLink></li>


            </ul>
        </div>
    </nav>);
}
export default Nav;