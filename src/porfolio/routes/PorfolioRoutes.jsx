import { Route, Routes } from 'react-router-dom';
import { AboutMePage, HomePage, SkillPage, ContactPage, ProyectPage } from '../pages';
import { LayoutPorfolio } from '../layout/LayoutPorfolio';




export const PorfolioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPorfolio/>} />
      {/* <Route path="/about" element={<AboutMePage />} />
      <Route path="/skills" element={<SkillPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/proyect" element={<ProyectPage />} />

      <Route path="/*" element={<HomePage />} /> */}
    </Routes>

  )
}