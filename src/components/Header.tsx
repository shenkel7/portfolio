import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'wouter';
import { routes } from 'src/constants/routes'
// import anime from 'animejs'

const NameHeader = () => {
    return (
        <img className="absolute top-0 w-80 max-w-md" src="/assets/signature.png" alt="Kelly Shen"/>
    )
}

type TDynamicLink = {
    to: string;
    current: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const DynamicLink = ({to, current, children, onClick} : TDynamicLink) => {
    if(to === current){
        return (
            <div className="font-majormonodisplay text-xl sm:text-xl md:text-6xl font-bold px-2 md:px-8 z-10 transform transition-all hover:scale-105 cursor-pointer" 
            onClick={ onClick ?? onClick}
            >
            {children}
            </div>
        )
    } else {
        return (
            <div className="font-majormonodisplay text-sm sm:text-base md:text-2xl font-bold px-2 md:px-8 z-10 transform transition-all hover:scale-125 cursor-pointer" 
            onClick={ onClick ?? onClick}
            >
            {children}
            </div>
        )
    }
}

interface IHeader {
    delay?: number;
    onPress?: () => void;
}

const Header = ({delay, onPress} : IHeader) => {
    const [location, setLocation] = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);



    return (
        <div className="text-header bg-transparent flex items-center justify-center px-8 pt-16 pb-8">
            <NameHeader />
            <DynamicLink to={routes.HOME} current={displayLocation} 
            onClick={()=>{
                if(displayLocation !== routes.HOME){

                    setDisplayLocation(routes.HOME);
                    setTimeout(() => setLocation(routes.HOME), delay ? delay : 0);
                    onPress && onPress();
                }
            }}>
                Home
            </DynamicLink>
            <DynamicLink to={routes.WORKS} current={displayLocation} 
            onClick={()=>{
                setDisplayLocation(routes.WORKS);
                setTimeout(() => setLocation(routes.WORKS), delay ? delay : 0);
                onPress && onPress();
            }}>
                Works
            </DynamicLink>
            <DynamicLink to={routes.ABOUT} current={displayLocation} 
            onClick={()=>{
            setDisplayLocation(routes.ABOUT);
            setTimeout(() => setLocation(routes.ABOUT), delay ? delay : 0);
            onPress && onPress();
            }}>
                About
            </DynamicLink>
            <DynamicLink to={routes.CONTACT} current={displayLocation}
            onClick={()=>{
            setDisplayLocation(routes.CONTACT);
            setTimeout(() => setLocation(routes.CONTACT), delay ? delay : 0);
            onPress && onPress();
            }}>
                Contact
            </DynamicLink>
        </div>

    )
}

export default Header;