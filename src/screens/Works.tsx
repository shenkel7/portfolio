import React, { useEffect, useState } from 'react'
import Header from 'src/components/Header'
// import Work from 'src/components/Work';
import WorkPage from 'src/screens/WorkPage';
import { Switch, Route, useLocation, Link, useRoute } from 'wouter';
import { routes } from 'src/constants/routes';
import { WorksList, InteractiveList, CodeList, TWork } from 'src/constants/works';

type TWorkType = {
    title: string;
    list: Array<TWork>;
}

const WorkTypes : TWorkType[] = [
    {
        title: "Illustrations",
        list: WorksList,
    },
    {
        title: "Interactive",
        list: InteractiveList,
    },
    {
        title: "Code Projects",
        list: CodeList,
    },
 ]

const Works = () => {
    const [location, setLocation] = useLocation();
    const [category, setCategory] = useState(0);
    const [currentList, setCurrentList] = useState(WorkTypes[0].list);

    useEffect(()=> {
        setCurrentList(WorkTypes[category].list);
    }, [category])

    const SubCategory = ({title, current, onClick}: {title: string; current: number; onClick: () => void;}) => {
        return (
            <div className="mx-2 px-2 pb-1 cursor-pointer text-xs sm:text-sm md:text-lg" onClick={onClick} >
                <p className={(WorkTypes[current].title === title) ? "text-text" : "text-gray"}>
                    {title}
                </p>
            </div>
        )
    }

    return (
        <div className="text-text">
            <Header />
            <div className="flex justify-center font-majormonodisplay flex-col sm:flex-row md:flex-row md:mt-10">
                {
                    WorkTypes.map((work, index) => {
                        return(
                            <SubCategory title={work.title} current={category} onClick={() => setCategory(index)}  />
                        )
                    } )
                }
                
            </div>
            {currentList.length === 0 && // empty list
                <div className="flex justify-center items-center mt-10">
                    Coming soon
                </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 my-10">
                {
                    currentList.map((work, index) => 
                        <Link key={index} href={`${location}/${index}`}>
                            {/* <Work {...work} /> */}
                            <div className="group flex flex-col justify-center items-center cursor-pointer" >
                                <img className="group-hover:opacity-60 transition-all ease-in" src={work.thumbnail} alt={work.name} />
                                <img className="opacity-0 group-hover:opacity-100 transition-opacity ease-in absolute w-40" src="/assets/eye_idle.gif" />
                                <p className="text-center">
                                    {work.name}
                                </p>
                                <p className="text-center">
                                    {work.category}
                                </p>
                            </div>
                        </Link>
                    )
                }
            </div>
            <Link className="relative" href={routes.SECRET2}>
                <img className="absolute right-0 opacity-10 h-40" src="/assets/ephemeris.png"/>
            </Link>
        </div>
    );
}

export default Works;