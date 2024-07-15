import { useState, useEffect } from 'react';

const MOBILE_WIDTH = 768; 

const useWindowWidth = (): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < MOBILE_WIDTH);
        };
    // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Initial check on component mount
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};

export default useWindowWidth;