import React from 'react'
import Header from 'src/components/Header'
// import Work from 'src/components/Work';
import WorkPage from 'src/screens/WorkPage';
import { Switch, Route, useLocation, Link, useRoute } from 'wouter';
import { routes } from 'src/constants/routes';

export type TWork = {
    path: string;
    name: string;
    category: string;
};

const WorksList : TWork[] = [
    {
        path: "/assets/the_hanged.png",
        name: "The Hanged",
        category: "Personal Project - Elucidate",
    },
    {
        path: "/assets/the_devoured.png",
        name: "The Devoured",
        category: "Personal Project - Elucidate",
    },
    {
        path: "/assets/the_poisoned.png",
        name: "The Poisoned",
        category: "Personal Project - Elucidate",
    }
];

const Works = () => {
    const [location, setLocation] = useLocation();

    return (<div className="text-text">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
                {
                    WorksList.map((work, index) => 
                        <Link key={index} href={`${location}/${work.name}`}>
                            {/* <Work {...work} /> */}
                            <div className="flex flex-col justify-center items-center" >
                                <img className="hover:opacity-60 transition-all ease-in" src={work.path} alt={work.name} />
                                <p>
                                    {work.name}
                                </p>
                                <p>
                                    {work.category}
                                </p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default Works;