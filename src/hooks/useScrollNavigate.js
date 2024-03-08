import { useEffect } from "react";
import { useLocation } from "react-router-dom";




export const useScrollNavigate = () => {
    const location = useLocation();
    
    useEffect(() => {
        const hash = location.hash.slice(1);

        if (hash) {
            const element = document.getElementById(hash);
            
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);
}