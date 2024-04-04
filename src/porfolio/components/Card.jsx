import PropTypes from 'prop-types';
import './card.css';



export const Card = ({ data, children, isLinked = false }) => {

    return (
        <article className={`cardProyect ${isLinked && 'cardProyect__active'}`}  >
            <img src={data.img} alt={data.name} className="proyect__img" />

            <div className='cardProyect__info'>
                <header className='cardProyect__header'>
                    <h3>{data.name}</h3>
                </header>
                {
                    data.description &&
                    <p className="proyect__description" >
                        {data.description}
                    </p>
                }
            </div>

            {
                data.tecnologias &&
                <div className='tec__container'>
                    {
                        data.tecnologias &&
                        data.tecnologias.map(tec => (
                            <img src={`src/assets/stack-tech-icon/${tec.name}.svg`}
                                alt={tec.name}
                                className='tec__img'
                                key={tec.name}
                            />
                        ))
                    }
                </div>
            }
            {
                children
            }
        </article>
    )
}




Card.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string,
        tecnologias: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired
            })
        ),
        repository: PropTypes.string
    }).isRequired,
    children: PropTypes.object,
    isLinked: PropTypes.bool
};
