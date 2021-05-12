import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'wouter';
import { routes } from 'src/constants/routes'
// import anime from 'animejs'

const NameHeader = () => {
    return (
        <img className="absolute top-0 w-96 max-w-md" src="/assets/signature.png" alt="Kelly Shen"/>
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
            <Link className="font-majormonodisplay text-3xl md:text-6xl font-bold mx-4 md:mx-8 z-10 transform transition-all hover:scale-105" 
            onClick={ onClick ?? onClick}
            to={to}>
            {children}
            </Link>
        )
    } else {
        return (
            <Link className="font-majormonodisplay text-lg md:text-2xl font-bold mx-4 md:mx-8 z-10 transform transition-all hover:scale-125" 
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
        <div className="text-header bg-transparent w-full flex items-center justify-center px-8 pt-16 pb-8">
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