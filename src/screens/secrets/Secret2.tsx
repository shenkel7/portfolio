import React, {useEffect, useRef} from 'react'
import anime from 'animejs'
import { Link } from 'wouter';
import { routes } from 'src/constants/routes';

const Secret2 = () => {

    return (
        <div className="flex justify-center items-center p-10">
            <Link href={routes.WORKS}>
                <img className="w-2/5 transform cursor-pointer animate-pulse-slow z-10" src="/assets/ephemeris.png" alt=""/>
            </Link>
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
