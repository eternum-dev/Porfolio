import { Link } from 'react-router-dom';
import { LayoutPorfolio } from '../../layout/LayoutPorfolio';
import './contactPage.css';


export const ContactPage = () => {
    return (
        <LayoutPorfolio>
            <>
                <h1>Contact</h1>
                <section className="contact">
                    <article className="contact__article">
                        <header>
                            <h3>social</h3>
                        </header>
                        <div className='contact__wrapper'>
                            <Link className='contanc__link'>
                                <img src="#" alt="" />
                            </Link>
                            <Link className='contanc__link'>
                                <img src="#" alt="" />
                            </Link>

                            <Link className='contanc__link'>
                                <img src="#" alt="" />
                            </Link>

                        </div>
                    </article>
                    <div className='contact__hr'></div>
                    <article className="contact__article">
                        <header>
                            <h3>formulario</h3>
                        </header>
                        <label htmlFor="" className='contact__label'> nombre</label>
                        <input type="text" className='contact__input' />
                        <label htmlFor="" className='contact__label'> correo</label>
                        <input type="email" className='contact__input' />
                        <label htmlFor="" className='contact__label'>razon</label>
                        <input type="text" className='contact__input' />
                        <label htmlFor="" className='contact__label'> message </label>
                        <textarea className='contact__input textarea' name="menssage" id="message" cols="10" rows="10" />
                    </article>
                </section>
            </>


        </LayoutPorfolio>
    )
}