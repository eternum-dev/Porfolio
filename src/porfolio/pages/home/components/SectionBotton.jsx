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
                    ¡Soy ale! desarrollador frontend 
                </p>
                <p className='home__parrafo' >
                    +4 años en el mundo de la progrmacion y estamos solo comenzando 💪💪
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