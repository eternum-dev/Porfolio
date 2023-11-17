import PropTypes from 'prop-types';
import './LayoutPorfolio.css';
import { TopHeader, Footer } from './components'



export const LayoutPorfolio = ({ children }) => {

    return (
        <div className='LayoutPorfolio'>
            {/* top Header */}
            <TopHeader />

            <main className='main'>
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