import { presentation } from '../../../../data/home';
import './sectionTop.css';

export const SectionTop = () => {
    return (
        <section className="home__section-top">
            <header>
                <h1 className="home__name">{presentation.title}</h1>
            </header>

            <h2 className="home__profesion">{presentation.moreInfo}</h2>
        </section>
    )
}