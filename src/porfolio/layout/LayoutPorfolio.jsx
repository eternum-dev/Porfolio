import PropTypes from 'prop-types';
import './LayoutPorfolio.css';
import { TopHeader, Footer } from './components'
import { AboutMePage, ContactPage, HomePage, ProyectPage, SkillPage } from '../pages';



export const LayoutPorfolio = () => {

    const handleScroll = (event) => {
        console.log({event});
    }

    return (
        <div className='LayoutPorfolio'
            onScrollCapture={ handleScroll}
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