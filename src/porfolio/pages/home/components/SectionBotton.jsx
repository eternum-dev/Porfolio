import { Networks } from '../../../components/Networks';
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
                    Desde la primera vez que tuve un computador y vi todo lo que podía hacer, supe que de alguna forma un dia viviria de esto. Mi mamá  dice  literalemente nací mirando la pantalla.
                </p>
            </article>


            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5rem 1rem', gap: '1rem', background:'#ccc' }}>
                <Networks alt='linkedin' path='https://www.linkedin.com/in/alejandrothon/'/> 
                <Networks alt='github' path='https://github.com/eternum-dev'/> 
                <Networks alt='email' path='alejandro.thon.j@gmail.com'/> 
            </div>
        </section>
    )
}