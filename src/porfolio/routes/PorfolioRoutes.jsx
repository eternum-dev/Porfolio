import { Navigate, Route, Routes } from 'react-router-dom';
// import { AboutMePage, HomePage, SkillPage, ContactPage, ProyectPage } from '../pages';
import { LayoutPorfolio } from '../layout/LayoutPorfolio';
import { ContactPage } from '../pages';




export const PorfolioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPorfolio />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* error page 
        <ErrorPage />
      */}


      {/*  otras rutas    */}
      <Route path="*" element={<Navigate to='/' replace={true} />} />
    </Routes>

  )
}


