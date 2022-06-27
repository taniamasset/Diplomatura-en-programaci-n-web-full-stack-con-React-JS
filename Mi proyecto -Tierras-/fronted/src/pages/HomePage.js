import'../styles/HomePage.css'
const HomePage = (props) => {
    return (<main className="holder">
    <div className="columnas">
        <div className="homeimg">
            <img className="fotoinicio" src="img/inicio.jpg" alt="loteo"/>
        </div>

        <div className="Bienvenidos">
            <h2>Bienvenidos</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur corrupti sunt ratione ipsa
                laboriosam rerum voluptas accusamus eligendi obcaecati officiis facilis nihil voluptate soluta
                architecto quia nemo, dolorum aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi possimus molestias ipsa nihil
                consectetur accusantium eaque, eos itaque esse officia facilis error nam, tempore unde labore vel.
                Dolorem, ipsa est?</p>
        </div>

    </div>
</main>);
}
export default HomePage;