import PropTypes from 'prop-types';
import './LayoutPorfolio.css';
import { TopHeader, Footer } from './components'
import { AboutMePage, HomePage, ProyectPage, SkillPage } from '../pages';



export const LayoutPorfolio = () => {

    return (
        <div className='LayoutPorfolio'
        >
            {/* top Header */}
            <TopHeader />

            <main className='main' >
                <HomePage />
                <hr />
                <ProyectPage />
                <hr />
                <SkillPage />
                <hr />
                <AboutMePage />
                <hr />
            </main>

            {/* footer */}
            <Footer />

        </div>
    )
}



LayoutPorfolio.propTypes = {
    children: PropTypes.any
}