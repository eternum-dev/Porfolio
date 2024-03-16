import { botPage } from '../../../../data/home';
import { Networks } from '../../../components/Networks';
import './sectionBotton.css';


export const SectionBotton = () => {
    return (
        <section className='home__section-bot'>
            <img src="src\assets\yo.jpg" alt="yo" className='home__img' />
            <div style={{ display: 'grid', gap: '2rem' }}>
                <article className="home__card">
                    <header>
                        <h3>{botPage.title}</h3>
                    </header>
                    {
                        botPage.parrafos.map((parrafo) => (
                            <p className='home__parrafo' key={parrafo}>
                                {parrafo}
                            </p>
                        ))
                    }


                </article>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 3rem', gap: '4rem', background: '#ccc', width:'fit-content', height: 'fit-content', margin: 'auto auto 0 auto', backgroundColor: 'var(--veryBlack)', boxShadow: 'rgba(0, 0, 0, 0.24) 5px 12px 10px', borderRadius: '2rem' }}>
                    <Networks alt='linkedin' path='https://www.linkedin.com/in/alejandrothon/' />
                    <Networks alt='github' path='https://github.com/eternum-dev' />
                    <Networks alt='email' path='alejandro.thon.j@gmail.com' />
                </div>
            </div>
        </section>
    )
}