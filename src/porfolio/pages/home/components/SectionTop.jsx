import { topPage } from '../../../../data/home';
import './sectionTop.css';

export const SectionTop = () => {
    return (
        <section className="home__section-top">
            <header>
                <h1 className="home__name">{topPage.title}</h1>
            </header>

            <h2 className="home__profesion">{topPage.subTitle}</h2>
        </section>
    )
}