const ContactoPage = (props) => {
    return (  <main className="holder contacto">
    <div>
        <h2>Contacto rapido</h2>
        <form action="" className="formulario">
            <p>
                <label for="nombre">Nombre</label>
                <input type="text"/>
            </p>
            <p>
                <label for="nombre">Email</label>
                <input type="text"/>
            </p>
            <p>
                <label for="nombre">Telefono</label>
                <input type="text"/>
            </p>
            <p>
                <label for="nombre">Mensaje</label>
                <textarea></textarea>
            </p>
            <p>
                <input type="submit" value="Enviar"/>
            </p>



        </form>
    </div>
    <div className="datos">
        <h2>Otras vias de comunicacion</h2>
        <p>Tambien podes contactarte con nosotros con los siguientes medios</p>
        <ul>
            <li>Telefono: 4735693</li>
            <li>Email:compañiadetierras@gmail.com</li>
        </ul>

    </div>

</main>);
}
export default ContactoPage;