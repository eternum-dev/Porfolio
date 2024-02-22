import './sectionBotton.css';


export const SectionBotton = () => {
    return (
        <section className='home__section-bot'>
            <img src="src\assets\yo.jpg" alt="yo" className='home__img' />

            <article className="home__card">
                <header>
                    <h3>Quien soy ? </h3>
                </header>
                <p className='home__parrafo'>
                    Soy un apasionado desarrollador frontend autodidacta, guiado por la curiosidad y la sed de conocimiento.
                </p>
                <p>
                    Mi capacidad para adaptarme me permite  abrazar cambios y desafíos con entusiasmo. Me sumerjo en el aprendizaje, explorando nuevas tecnologías y tendencias para impulsar experiencias digitales.
                </p>
            </article>

            <img src="src\assets\desktop.png" alt="desk" className='home__img' />

            <article className="home__card">
                <header>
                    <h3>Abordando Desafíos con Innovación</h3>
                </header>
                <p className='home__parrafo'>
                    Utilizo herramientas web e inteligencia artificial,  para superar desafíos en la creación de imágenes, textos, estilos css y más.
                </p>
                <p>
                    mi búsqueda constante de aprendizaje refleja mi compromiso con la mejora continua. Un ejemplo  de estos son estas imagenes que cree apartir de diferentes tecnologías.
                </p>
            </article>


        </section>
    )
}