import { useForm } from '../../../hooks/useForm';
import { Networks, Github, Linkedin, Email, Cv } from '../../components';
// import { Github, Linkedin, Email, Cv } from '../../../assets/icons';
import { sendEmail } from '../../../helpers/sendEmail';
import './contactPage.css';



const iconSize = '64';
export const ContactPage = () => {

    const { onInputChange, formState } = useForm();

    const onSubmit = async (event) => {
        event.preventDefault();
        sendEmail(formState);
    }


    return (

        <div id='contactPage'>
            <h1>Contact</h1>
            <section className="contact">
                <article className="contact__article">
                    <header>
                        <h3>social</h3>
                    </header>
                    <div className='contact__wrapper'>
                        <Networks
                            path='https://www.linkedin.com/in/alejandrothon/'
                            alt='linkedin'>
                            <Linkedin size={iconSize} />
                        </Networks>


                        <Networks
                            path='https://github.com/eternum-dev'
                            alt='github'
                        >
                            <Github size={iconSize} />
                        </Networks>

                        <Networks
                            path=''
                            alt='email'
                        >
                            <Email size={iconSize} />
                        </Networks>

                        <Networks
                            path=''
                            alt='cv'>
                            <Cv size={iconSize} />
                        </Networks>

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
                            name='from_name'
                            onChange={onInputChange}
                            placeholder='juan ferrera'
                        />
                        <label htmlFor="email" className='contact__label'> correo</label>
                        <input
                            type="email"
                            className='contact__input'
                            name='user_email'
                            onChange={onInputChange}
                            placeholder='juan.ferrera@tuempresa.cl'
                        />
                        {/* <label htmlFor="issue" className='contact__label'>razon</label>
                        <input
                            type="text"
                            className='contact__input'
                            name='issue'
                            onChange={onInputChange}
                            placeholder='tu razon'
                        /> */}
                        <label htmlFor="message" className='contact__label'> message </label>
                        <textarea
                            id="message"
                            cols="10" rows="10"
                            className='contact__input textarea'
                            name="message"
                            onChange={onInputChange}
                            placeholder='lorem'
                        />
                        <button className="contact__button button"> enviar</button>
                    </form>

                </article>
            </section>
        </div>

    )
}