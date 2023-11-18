import PropTypes from 'prop-types';
import './cardProyect.css';

let i = 0;




export const CardProyect = ({ proyect }) => {



    return (
        <article key={++i} className="proyect__card">
            <header className='proyect__header'>
                <h3 className="proyect__title">{proyect.name}</h3>
            </header>
            <img src={proyect.img} alt={proyect.name} className="proyect__img" />


            <div className='tec'>
                <p className="proyect__description">{proyect.description}</p>
                {
                    proyect.tecnologias.map(tec => (
                        <div key={tec.name} className='tec__container'>
                            <h4 className='tec__title'>{tec.name}</h4>
                            <img src={tec.img} alt={tec.name} className='tec__img' />
                        </div>
                    ))
                }
            </div>
        </article>
    )
}




CardProyect.propTypes = {
    proyect: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tecnologias: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};
