import PropTypes from 'prop-types';
import './LayoutPorfolio.css';
import { TopHeader, Footer } from './components'
import { AboutMePage, ContactPage, HomePage, ProyectPage, SkillPage } from '../pages';



export const LayoutPorfolio = () => {

    return (
        <div className='LayoutPorfolio'>
            {/* top Header */}
            <TopHeader />

            <main className='main'>
                <HomePage />
                <ProyectPage />
                <SkillPage />
                <AboutMePage />
                <ContactPage />

            </main>

            {/* footer */}
            <Footer />

        </div>
    )
}



LayoutPorfolio.propTypes = {
    children: PropTypes.any
}