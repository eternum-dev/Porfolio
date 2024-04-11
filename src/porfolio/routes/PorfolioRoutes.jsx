import { Navigate, Route, Routes } from 'react-router-dom';
import { LayoutPorfolio } from '../layout/LayoutPorfolio';
import { AboutMePage, ContactPage, HomePage, ProyectPage, SkillPage } from '../pages';
import { PageBreak } from '../components/PageBreak';


export const PorfolioRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <LayoutPorfolio >
            <HomePage />
            <PageBreak />

            <ProyectPage />
            <PageBreak />

            <SkillPage />
            <PageBreak />

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


