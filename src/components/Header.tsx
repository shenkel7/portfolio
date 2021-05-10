import React, {useEffect} from 'react';
import { Link } from 'wouter';
import { routes } from 'src/constants/routes'

const NameHeader = () => {

    useEffect(() => {

    }, [])

    return (
        <img className="absolute top-0 w-2/5 max-w-md" src="assets/signature.png" alt="Kelly Shen"/>
    )
}

const Header = () => {
    return (
        <div className="text-header bg-transparent w-full flex items-center justify-center px-12 pt-16 pb-8 font-majormonodisplay text-4xl font-bold">
            <NameHeader />
            <Link className="mx-8 z-10" to={routes.HOME}>
                Home
            </Link>
            <Link className="mx-8 z-10" to={routes.WORKS}>
                Works
            </Link>
            <Link className="mx-8 z-10" to={routes.ABOUT}>
                About
            </Link>
        </div>

    )
}

export default Header;