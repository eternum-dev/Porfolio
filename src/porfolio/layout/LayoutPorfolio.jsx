import PropTypes from 'prop-types';
import './LayoutPorfolio.css';
import { TopHeader, Footer } from './components'
import { AboutMePage, HomePage } from '../pages';



export const LayoutPorfolio = () => {

    return (
        <div className='LayoutPorfolio'>
            {/* top Header */}
            <TopHeader />

            <main className='main'>
                <HomePage />
                <AboutMePage />

            </main>

            {/* footer */}
            <Footer />

        </div>
    )
}



LayoutPorfolio.propTypes = {
    children: PropTypes.any
}