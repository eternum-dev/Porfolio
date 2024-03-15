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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5rem 1rem', gap: '1rem', background: '#ccc', width: 'clamp(130px, 100%, 150px)', height: 'fit-content', marginTop: 'auto', backgroundColor: 'var(--veryBlack)', border:'1px solid #ccc',  borderRadius:'5px'}}>
                    <Networks alt='linkedin' path='https://www.linkedin.com/in/alejandrothon/' />
                    <Networks alt='github' path='https://github.com/eternum-dev' />
                    <Networks alt='email' path='alejandro.thon.j@gmail.com' />
                </div>
            </div>
        </section>
    )
}