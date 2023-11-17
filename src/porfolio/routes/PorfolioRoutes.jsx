import { Route, Routes } from 'react-router-dom';
import { AboutMePage, HomePage, SkillPage, ContactPage, ProyectPage } from '../pages';




export const PorfolioRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/skills" element={<SkillPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/proyect" element={<ProyectPage />} />

    </Routes>

  )
}