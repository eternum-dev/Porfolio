import PropTypes from 'prop-types';
import './LayoutPorfolio.css';
import { TopHeader, Footer } from './components'
<<<<<<< HEAD



export const LayoutPorfolio = ({children}) => {
=======
import { AboutMePage, HomePage, ProyectPage, SkillPage } from '../pages';



export const LayoutPorfolio = () => {
>>>>>>> 898b149323e263a1ba0d41fba94dd74beb3a868c

    return (
        <div className='LayoutPorfolio'
        >
            {/* top Header */}
            <TopHeader />

            <main className='main' >
<<<<<<< HEAD
                {children}
=======
                <HomePage />
                <hr />
                <ProyectPage />
                <hr />
                <SkillPage />
                <hr />
                <AboutMePage />
                <hr />
>>>>>>> 898b149323e263a1ba0d41fba94dd74beb3a868c
            </main>

            {/* footer */}
            <Footer />

        </div>
    )
}



LayoutPorfolio.propTypes = {
    children: PropTypes.any
}