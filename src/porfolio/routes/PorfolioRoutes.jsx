import { Navigate, Route, Routes } from 'react-router-dom';
import { LayoutPorfolio } from '../layout/LayoutPorfolio';
import { AboutMePage, ContactPage, HomePage, ProyectPage, SkillPage } from '../pages';
import { Separadores } from '../components/Separadores';


export const PorfolioRoutes = () => {
  return (
    <Routes>   

      <Route  
        path="/"
        element={
          <LayoutPorfolio >
            <HomePage />
            <Separadores />
 
            <ProyectPage />
            <Separadores />

            <SkillPage />
            <Separadores />

            <AboutMePage />

          </LayoutPorfolio>}
      />

      <Route
        path="/contact"
        element={
          <LayoutPorfolio>
            <ContactPage />
          </LayoutPorfolio>
        }
      />

      {/*  otras rutas    */}
      <Route path="*" element={<Navigate to='/' replace={true} />} />
    </Routes>

  )
}


