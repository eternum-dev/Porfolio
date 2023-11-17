import { LayoutPorfolio } from '../../layout/LayoutPorfolio';
import { SectionBotton } from './components/SectionBotton';
import { SectionTop } from './components/SectionTop';
import './homePage.css';


export const HomePage = () => {
    return (
        <LayoutPorfolio>
            <>
                <SectionTop />
                <SectionBotton />
            </>
        </LayoutPorfolio>

    )
}