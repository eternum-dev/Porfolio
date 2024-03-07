import { useEffect } from "react";
import { useLocation } from "react-router-dom";




export const useScrollNavigate = (  ) => {
    const location  = useLocation();
    useEffect(() => {

        const hash = location.hash.slice(1); // Remove the '#' character from the hash

        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
}