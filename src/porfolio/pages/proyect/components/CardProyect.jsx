import PropTypes from 'prop-types';
import './cardProyect.css';



export const CardProyect = ({ proyect }) => {

    return (
        <article className='card'>
            <img src={proyect.img} alt={proyect.name} className="proyect__img" />
            <header>
                <h3>{proyect.name}</h3>
            </header>
            <div className='tec'>
                <p className="proyect__description">{proyect.description}</p>
                <div className='tec__container'>
                    {
                        proyect.tecnologias.map(tec => (
                            <img src={tec.img} alt={tec.name} className='tec__img' key={tec.name} />
                        ))
                    }
                </div>
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
