import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";



export const useNavBar = (haderRef) => {

    const location = useLocation();
    const [scrollTop, setScrollTop] = useState(0);
    // const [page, setPage] = useState('');

    const navRef = useRef();
    const openMenuRef = useRef();
    const closeMenuRef = useRef();

    useEffect(() => {
        const handleScroll = () => {

            const classNavBar = navRef.current.className;

            if (!classNavBar.includes('navBar')) {
                if (scrollTop < window.scrollY) {
                    haderRef.current.classList.add('isSticky');
                    setScrollTop(window.scrollY);
                } else {
                    haderRef.current.classList.remove('isSticky');
                    setScrollTop(window.scrollY);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    useEffect(() => {
        const hash = location.hash.slice(1);

        if (hash) {
            const element = document.getElementById(hash);

            if (element) {
                let position = element.getBoundingClientRect();

                window.scrollTo({
                    top: position.top + window.scrollY,
                    behavior: 'smooth'
                })
            }
        }
    }, [location]);

    const isVisible = (page) => {
        const hash = location.hash.slice(1); hash === page

        return hash === page && 'isActive';
    }

    const showNav = () => {
        navRef.current.classList.toggle('navBar');
        openMenuRef.current.classList.toggle('disable');
        closeMenuRef.current.classList.toggle('disable');
    }


    return {
        haderRef,
        navRef,
        openMenuRef,
        closeMenuRef,

        showNav,
        isVisible,
        // setPage
    }
}