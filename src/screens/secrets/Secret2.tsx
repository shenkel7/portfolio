import React, {useEffect, useRef} from 'react'
import anime from 'animejs'
import { Link } from 'wouter';
import { routes } from 'src/constants/routes';
import Typewriter from 'typewriter-effect'

const Secret2 = () => {

    const ephemeris = useRef(null);

    useEffect(() => {

        anime({
            targets: ephemeris.current,
            opacity: 1,
            delay: 3000,
            duration: 2000,
            easing: "easeInOutSine",
        });

    },[])

    return (
        <div className="flex flex-col justify-center items-center p-10">
            <Link href={routes.WORKS}>
                <img className="w-2/5 transform cursor-pointer animate-pulse-slow z-10" src="/assets/ephemeris.png" alt=""/>
            </Link>
            <div ref={ephemeris} className="font-ephemeris select-none text-text my-10 w-1/2 text-center opacity-0">
                Three Double-O Seven
            </div>
            <div className="absolute bottom-0 text-background select-none">
            You crave the slow death/
            Seltzer in the eyes,
            Palm-cutting gravel,
            Rain that stings.
            </div>
        </div>
    );
}

export default Secret2;
