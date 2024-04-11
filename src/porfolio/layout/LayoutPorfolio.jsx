import PropTypes from 'prop-types';
import { TopHeader, Footer } from './components';
import './LayoutPorfolio.css';


export const LayoutPorfolio = ({ children }) => {

    return (
        <div className='LayoutPorfolio'>
            {/* top Header */}
            <TopHeader />

            {/* content */}
            <main className='main' >
                {children}
            </main>

            {/* footer */}
            <Footer />
        </div>
    )
}


LayoutPorfolio.propTypes = {
    children: PropTypes.any
}