import'../styles/ProyectosPage.css'
const ProyectosPage = (props) => {
    return (<main className="holder">
    <h2>Proyectos actuales</h2>
    <div className="proyecto">
        <img src="img/foto proyectos/proyecto1.jpg" alt="Localidad A"/>
        <div className="info">
            <h4>Localidad A</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis aperiam, praesentium
                aliquam enim laudantium, dolorum, vitae error quas repudiandae quia eum odit nihil quos accusantium
                molestiae pariatur explicabo rerum.</p>
        </div>

    </div>
    <div className="proyecto">
        <img src="img/foto proyectos/proyecto2.jpg" alt="Localidad B"/>
        <div className="info">
            <h4>Localidad B</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis aperiam, praesentium
                aliquam enim laudantium, dolorum, vitae error quas repudiandae quia eum odit nihil quos accusantium
                molestiae pariatur explicabo rerum.</p>
        </div>

    </div><div className="proyecto">
        <img src="img/foto proyectos/proyecto3.jpg" alt="Localidad C"/>
        <div className="info">
            <h4>Localidad C</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis aperiam, praesentium
                aliquam enim laudantium, dolorum, vitae error quas repudiandae quia eum odit nihil quos accusantium
                molestiae pariatur explicabo rerum.</p>
        </div>

    </div>
</main>);
}
export default ProyectosPage;