import React from 'react'
import Header from 'src/components/Header'
// import Work from 'src/components/Work';
import WorkPage from 'src/screens/WorkPage';
import { Switch, Route, useLocation, Link, useRoute } from 'wouter';
import { routes } from 'src/constants/routes';

export type TWork = {
    path: string;
    thumbnail: string;
    name: string;
    category: string;
};

export const WorksList : TWork[] = [
    {
        path: "/assets/works/the_hanged.png",
        thumbnail: "assets/thumbnails/the_hanged_thumbnail.jpg",
        name: "The Hanged",
        category: "Personal Project - Elucidate",
    },
    {
        path: "/assets/works/the_devoured.png",
        thumbnail: "assets/thumbnails/the_devoured_thumbnail.jpg",
        name: "The Devoured",
        category: "Personal Project - Elucidate",
    },
    {
        path: "/assets/works/the_poisoned.png",
        thumbnail: "assets/thumbnails/the_poisoned_thumbnail.jpg",
        name: "The Poisoned",
        category: "Personal Project - Elucidate",
    }
];

const Works = () => {
    const [location, setLocation] = useLocation();

    return (<div className="text-text">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 my-10">
                {
                    WorksList.map((work, index) => 
                        <Link key={index} href={`${location}/${index}`}>
                            {/* <Work {...work} /> */}
                            <div className="group flex flex-col justify-center items-center" >
                                <img className="group-hover:opacity-60 transition-all ease-in" src={work.thumbnail} alt={work.name} />
                                <img className="opacity-0 group-hover:opacity-100 transition-opacity ease-in absolute w-40" src="/assets/eye_idle.gif" />
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