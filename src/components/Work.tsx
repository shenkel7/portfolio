import React from 'react';
import { Link } from 'wouter';
import { TWork } from 'src/constants/works' 
// import { routes } from 'src/constants/routes'

// need to change hover to javascript later
const Work = ({path, name, category} : TWork) => {
    return (
        <div className="flex flex-col justify-center items-center" >
            <img className="hover:opacity-60 transition-all ease-in" src={path} alt={name} />
            <p>
                {name}
            </p>
            <p>
                {category}
            </p>
        </div>
    )
}

export default Work;