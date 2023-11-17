import './sectionBotton.css';


export const SectionBotton = () => {
    return (
        <section className='home__section-bot'>
            <div className='home__container-cards' >
                <article className="home__card">
                    <header>
                        <h3>title</h3>
                    </header>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, aperiam?</p>
                </article>
                <article className="home__card">
                    <header>
                        <h3>title</h3>
                    </header>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, aperiam?</p>
                </article>
            </div>

            <article className="home__card--dis">
                <header>
                    <h3>title</h3>
                </header>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, aperiam?</p>
            </article>
        </section>
    )
}