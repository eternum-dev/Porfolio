import './sectionBotton.css';


export const SectionBotton = () => {
    return (
        <section className='home__section-bot'>
            <img src="src\assets\yo.jpg" alt="yo" className='home__img' />

            <article className="home__card">
                <header>
                    <h3>Sobre mi</h3>
                </header>
                <p className='home__parrafo'>
                    ¡Soy ale! tengo 28 años soy desarrollador frontend autodidacta.
                    LLevo +4 años en el mundo del desarrollo  y una toda mi vida enamorado de la tecnología.
                </p>
                <p className='home__parrafo' >
                    Desde la primera vez que tuve un computador supe que de alguna forma viviria de esto.
                    Mi mamá  dice  literalemente nací mirando la pantalla.
                </p>
            </article>

            <img src="src\assets\desktop.png" alt="desk" className='home__img' />

            <article className="home__card">
                <header>
                    <h3>Abordando Nuevos Desafíos</h3>
                </header>
                <p className='home__parrafo'>
                    En mi busqueda de especializarme para dar la mejor experiencia al usuario, he aprendido diversas herramientas como librerias, frameworks, inteligencia artificial entre otros.
                </p>
                <p>
                    Estoy constantemente  conectado con la comunidad de la programacion, tanto por linkedin, discord youtube y twitch lo que  siempreme hace estar al tanto nuevas tecnologias y tendencias. 
                </p>
            </article>


        </section>
    )
}