import React, {useEffect, useRef} from 'react'
import anime from 'animejs'
import { Link } from 'wouter';
import { routes } from 'src/constants/routes';

const Secret1 = () => {
    const myRef = useRef(null);

    useEffect(() => {
        anime({
            targets: myRef.current,
            keyframes: [
            {translateY: 20},
            ],
            direction: "alternate",
            duration: 2000,
            easing: "easeInOutSine",
            loop: true,
        });
    },[])

    return (
        <div className="flex justify-center items-center p-10">
            <Link href={routes.HOME}>
                <img ref={myRef} className="w-40 transform scale-x-flip" src="/assets/exicrisme.png" alt=""/>
            </Link>
            <div className="text-header mx-10">
                HEehsehoasehfoasdifh
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

export default Secret1;
