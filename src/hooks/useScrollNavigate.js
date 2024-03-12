import { useEffect } from "react";
import { useLocation } from "react-router-dom";




export const useScrollNavigate = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.slice(1);

        if (hash) {
            const element = document.getElementById(hash);

            if (element) {
                let position = element.getBoundingClientRect();
                window.scrollTo({
                    left: position.left,
<<<<<<< HEAD
                    top: position.top + window.scrollY - 132,
=======
                    top: position.top + window.scrollY - 140,
>>>>>>> 898b149323e263a1ba0d41fba94dd74beb3a868c
                    behavior: 'smooth'
                })
                // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);
}