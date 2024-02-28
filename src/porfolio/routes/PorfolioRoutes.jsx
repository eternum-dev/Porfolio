import { Route, Routes } from 'react-router-dom';
// import { AboutMePage, HomePage, SkillPage, ContactPage, ProyectPage } from '../pages';
import { LayoutPorfolio } from '../layout/LayoutPorfolio';




export const PorfolioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPorfolio/>} />

    </Routes>

  )
}


