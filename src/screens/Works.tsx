import React from 'react'
import Header from 'src/components/Header'
import Work from 'src/components/Work';

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
    return (
        <div className="text-text">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
                {
                    WorksList.map((work) => <Work {...work} />)
                }
            </div>
        </div>
    );
}

export default Works;