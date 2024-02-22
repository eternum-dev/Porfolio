import PropTypes from 'prop-types';
import './cardProyect.css';



export const CardProyect = ({ proyect }) => {

    return (
        <article className='cardProyect'>
            <img src={proyect.img} alt={proyect.name} className="proyect__img" />

            <div className='tec'>
                <header className='cardProyect__header'>
                    <h3>{proyect.name}</h3>
                </header>
                <p className="proyect__description">{proyect.description}</p>
            </div>
            <div className='tec__container'>
                {
                    proyect.tecnologias.map(tec => (
                        // src\assets\stack-tech-icon\CSS3.svg
                        <img src={`src/assets/stack-tech-icon/${tec.name}.svg`} alt={tec.name} className='tec__img' key={tec.name} />
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
                name: PropTypes.string.isRequired
            })
        ).isRequired,
    }).isRequired,
};
