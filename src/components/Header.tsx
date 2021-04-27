import React from 'react';
import { Link } from 'wouter';
import { routes } from 'src/constants/routes'

const Header = () => {
    return (
        <div className="text-text bg-transparent w-full flex items-center justify-between px-12 pt-8 relative">
            <Link to={routes.HOME}>
                Home
            </Link>
            <div className="">
                <Link to={routes.ABOUT}>
                    About
                </Link>
            </div>
        </div>
    )
}

export default Header;