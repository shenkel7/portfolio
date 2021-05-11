import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'wouter';
import { routes } from 'src/constants/routes'

const NameHeader = () => {
    return (
        <img className="absolute top-0 w-2/5 max-w-md" src="assets/signature.png" alt="Kelly Shen"/>
    )
}

type TDynamicLink = {
    to: string;
    current: string;
    children: React.ReactNode;
}

const DynamicLink = ({to, current, children} : TDynamicLink) => {
    if(to === current){
        return (
            <Link className="font-majormonodisplay text-2xl md:text-6xl font-bold mx-4 md:mx-8 z-10" to={to}>
            {children}
            </Link>
        )
    } else {
        return (
            <Link className="font-majormonodisplay text-sm md:text-2xl font-bold mx-4 md:mx-8 z-10" to={to}>
            {children}
            </Link>
        )
    }
}

const Header = () => {
    const [location, setLocation] = useLocation();

    console.log(location);

    return (
        <div className="text-header bg-transparent w-full flex items-center justify-center px-12 pt-16 pb-8">
            <NameHeader />
            <DynamicLink to={routes.HOME} current={location}>
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