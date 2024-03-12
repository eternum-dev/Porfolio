import { useEffect } from "react";
import { useLocation } from "react-router-dom";



export const useIntersectionUrlUpdater = (componentRef) => {

    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                       
                        const newUrl = `${location.pathname}#${componentRef.current.id}`;
                        window.history.pushState(null, '', newUrl);
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(componentRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return {

    }
}