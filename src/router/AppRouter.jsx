import { Route, Routes } from "react-router-dom"
import { PorfolioRoutes } from "../porfolio/routes/PorfolioRoutes"




export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<PorfolioRoutes />} />
        </Routes>
    )
}