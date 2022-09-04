import { useState, useEffect } from 'react';
import axios from 'axios';
import ProyectoItem from '../components/proyectos/ProyectoItem';
import '../styles/ProyectosPage.css'
const ProyectosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        const cargarProyectos = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/proyectos`);
            setProyectos(response.data);
            setLoading(false);

        };

        cargarProyectos();
    }, []);


    return (<main className="holder">
        <h1>Proyectos actuales</h1>
        {
            loading ? (
                <p>Cargando...</p>
            ) : (
                proyectos.map(item => <ProyectoItem key={item.id}
                    proyecto={item.proyecto} descripcion={item.descripcion}
                    imagen={item.imagen}/>)
            )
        }
        
    </main>);
}
export default ProyectosPage;