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
            <Link className="font-majormonodisplay sm:text-2xl md:text-6xl font-bold px-4 md:px-8 z-10 transform transition-all hover:scale-105" 
            onClick={ onClick ?? onClick}
            to={to}>
            {children}
            </Link>
        )
    } else {
        return (
            <Link className="font-majormonodisplay sm:text-md md:text-2xl font-bold px-4 md:px-8 z-10 transform transition-all hover:scale-125" 
            onClick={ onClick ?? onClick}
            to={to}>
            {children}
            </Link>
        )
    }
}

const Header = () => {
    const [location, setLocation] = useLocation();



    return (
        <div className="text-header bg-transparent flex items-center justify-center px-8 pt-16 pb-8">
            <NameHeader />
            <DynamicLink to={routes.HOME} current={location} onClick={()=>{console.log("clicked")}}>
                Home
            </DynamicLink>
            <DynamicLink to={routes.WORKS} current={location}>
                Works
            </DynamicLink>
            <DynamicLink to={routes.ABOUT} current={location}>
                About
            </DynamicLink>
            <DynamicLink to={routes.CONTACT} current={location}>
                Contact
            </DynamicLink>
        </div>

    )
}

export default Header;