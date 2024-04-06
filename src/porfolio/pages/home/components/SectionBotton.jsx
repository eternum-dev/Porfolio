import Github from '../../../../assets/icons/Github';
import Linkedin from '../../../../assets/icons/Linkedin';
import { Email } from '../../../../assets/icons';
import { botPage } from '../../../../data/home';
import { Networks } from '../../../components/Networks';
import './sectionBotton.css';
import { Tooltip } from '../../../components/Tooltip';


export const SectionBotton = () => {
    return (
        <section className='home__section-bot'>
            <div className='home__wrapper-img' id='hexagono'>
                <img
                    src={botPage.portfolioImg}
                    alt="yo"
                    className='home__img'
                />
                <img src={botPage.podiumImg} alt="podium"  className='svg'/>
            </div>

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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 3rem', gap: '4rem', background: '#ccc', width: 'fit-content', height: 'fit-content', margin: 'auto auto 0 auto', backgroundColor: 'var(--veryBlack)', boxShadow: 'rgba(0, 0, 0, 0.24) 5px 12px 10px', borderRadius: '2rem' }}>
                    <Networks alt='linkedin' path='https://www.linkedin.com/in/alejandrothon/' >
                        <Linkedin />
                    </Networks>
                    <Networks alt='github' path='https://github.com/eternum-dev'>
                        <Github className='link-hover' />
                    </Networks>
                    <Networks alt='email' path='alejandro.thon.j@gmail.com'>
                        <Tooltip title="Copiar correo">
                            <Email />
                        </Tooltip>

                    </Networks>

                </div>
            </div>
        </section>
    )
}