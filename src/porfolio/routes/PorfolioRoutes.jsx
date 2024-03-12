import { Navigate, Route, Routes } from 'react-router-dom';
// import { AboutMePage, HomePage, SkillPage, ContactPage, ProyectPage } from '../pages';
import { LayoutPorfolio } from '../layout/LayoutPorfolio';
<<<<<<< HEAD
import { AboutMePage, ContactPage, HomePage, ProyectPage, SkillPage } from '../pages';
import { Separadores } from '../components/Separadores';
=======
import { ContactPage } from '../pages';
>>>>>>> 898b149323e263a1ba0d41fba94dd74beb3a868c




export const PorfolioRoutes = () => {
  return (
<<<<<<< HEAD
    <Routes>   

      <Route  
        path="/"
        element={
          <LayoutPorfolio>
            <HomePage />
            <Separadores />

 
            <ProyectPage />
            <Separadores />

            <SkillPage />
            <Separadores />

            <AboutMePage />
            <Separadores />

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
=======
    <Routes>
      <Route path="/" element={<LayoutPorfolio />} />
      <Route path="/contact" element={<ContactPage />} />
>>>>>>> 898b149323e263a1ba0d41fba94dd74beb3a868c

      {/* error page 
        <ErrorPage />
      */}


      {/*  otras rutas    */}
      <Route path="*" element={<Navigate to='/' replace={true} />} />
    </Routes>

  )
}


