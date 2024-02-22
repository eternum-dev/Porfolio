import { Link } from 'react-router-dom';
import { LayoutPorfolio } from '../../layout/LayoutPorfolio';
import './contactPage.css';
import { useForm } from '../../../hooks/useForm';


export const ContactPage = () => {
    const { onInputChange, formState } = useForm();


    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

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
                            <Link to='https://www.linkedin.com/in/alejandrothon/' target='_blank'
                                className='contanc__link'>
                                <img src="src\assets\icons\LinkedIn.svg" alt="linkedin" className='contact__icon' />
                            </Link>
                            <Link to='https://github.com/eternum-dev' target='_blank'
                                className='contanc__link'>
                                <img src="src\assets\icons\GitHub.svg" alt="github" className='contact__icon' />
                            </Link>

                            <Link className='contanc__link'>
                                <img src="src\assets\icons\emaill.svg" alt="correo" className='contact__icon' />
                            </Link>
                        </div>
                    </article>
                    <div className='contact__hr'></div>
                    <article className="contact__article">
                        <header>
                            <h3>formulario</h3>
                        </header>
                        <form onSubmit={onSubmit}
                            className='contactForm'
                        >
                            <label htmlFor="name" className='contact__label'> nombre </label>
                            <input
                                type="text"
                                className='contact__input'
                                name='name'
                                onChange={onInputChange}
                                placeholder='juan ferrera'
                            />
                            <label htmlFor="email" className='contact__label'> correo</label>
                            <input
                                type="email"
                                className='contact__input'
                                name='email'
                                onChange={onInputChange}
                                placeholder='juan.ferrera@tuempresa.cl'
                            />
                            <label htmlFor="issue" className='contact__label'>razon</label>
                            <input
                                type="text"
                                className='contact__input'
                                name='issue'
                                onChange={onInputChange}
                                placeholder='tu razon'
                            />
                            <label htmlFor="message" className='contact__label'> message </label>
                            <textarea
                                id="message"
                                cols="10" rows="10"
                                className='contact__input textarea'
                                name="menssage"
                                onChange={onInputChange}
                                placeholder='lorem'
                            />
                            <button className="contact__button button"> enviar</button>
                        </form>

                    </article>
                </section>
            </>


        </LayoutPorfolio>

    )
}