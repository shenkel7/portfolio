import React, { useEffect, useState, useRef, ReactNode } from 'react'
import Header from 'src/components/Header'
import { useLocation, Link } from 'wouter';
import { routes } from 'src/constants/routes';
import { WorksList, InteractiveList, CodeList, TWork } from 'src/constants/works';
import anime from 'animejs'

type TWorkType = {
    title: string;
    list: Array<TWork>;
    mapper: ReactNode;
}

const MapIllustrations = () => {
    const [location, setLocation] = useLocation();

    return (
        <>
        {
            WorksList.map((work, index) => 
                <Link key={index} href={`${location}/Illustrations/${index}`}>
                    {/* <Work {...work} /> */}
                    <div className="group flex flex-col justify-center items-center cursor-pointer" >
                        <div className="flex flex-col justify-center items-center">
                            <img className="group-hover:opacity-60 transition-all ease-in" src={work.thumbnail} alt={work.name} />
                            <img className="opacity-0 group-hover:opacity-100 transition-opacity ease-in absolute w-36" src="/assets/eye_idle.gif" alt=""/>
                        </div>
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
    </>
    )
}

const MapInteractives = () => {
    const [location, setLocation] = useLocation();

    return (
        <>
        {
            InteractiveList.map((work, index) => 
                <Link key={index} href={`${location}/Interactive/${index}`}>
                    {/* <Work {...work} /> */}
                    <div className="group flex flex-col justify-center items-center cursor-pointer" >
                        <div className="flex flex-col justify-center items-center">
                            <img className="group-hover:opacity-60 transition-all ease-in" src={work.thumbnail} alt={work.name} />
                            <img className="opacity-0 group-hover:opacity-100 transition-opacity ease-in absolute w-36" src="/assets/eye_idle.gif" alt=""/>
                        </div>
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
    </>
    )
}

const MapCode = () => {
    const [location, setLocation] = useLocation();

    return (
        <>
        {
            CodeList.map((work, index) => 
                <a key={index} href={work.link}>
                    {/* <Work {...work} /> */}
                    <div className="group flex flex-col justify-center items-center cursor-pointer" >
                        <div className="flex flex-col justify-center items-center">
                            <div className="bg-black">
                                <img className="group-hover:opacity-60 transition-all ease-in h-48 object-contain" src={work.thumbnail} alt={work.name} />
                            </div>
                            <img className="opacity-0 group-hover:opacity-100 transition-opacity ease-in absolute w-36" src="/assets/eye_idle.gif" alt=""/>
                        </div>
                        
                        <p className="text-center text-lg">
                            {work.name}
                        </p>
                        <p className="text-center mb-2">
                            {work.category}
                        </p>
                        <p className="text-sm">
                            {work.description}
                        </p>
                    </div>
                </a>
            )
        }
    </>
    )
}

export const WorkTypes : TWorkType[] = [
    {
        title: "Illustrations",
        list: WorksList,
        mapper: <MapIllustrations />
    },
    {
        title: "Interactive",
        list: InteractiveList,
        mapper: <MapInteractives />
    },
    {
        title: "Code Projects",
        list: CodeList,
        mapper: <MapCode />
    },
 ]

const Works = () => {
    const [category, setCategory] = useState(0);
    const [currentList, setCurrentList] = useState(WorkTypes[0].list);

    const myRef = useRef(null);

    useEffect(()=> {
        setCurrentList(WorkTypes[category].list);
        anime({
            targets: myRef.current,
            keyframes: [
            {
                translateY: 20,
                opacity: '0%',
            
            },
            {
                translateY: -20,
                opacity: '100%',
            
            },
            ],
            // direction: "forward",
            // delay: 100,
            duration: 500,
            easing: "easeInOutSine",
        
        });

        // return () => {
        //     anime({
        //         opacity: '0%',
        //         duration: 100,
        //     })
        // }
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
            <div ref={myRef} className="translate-y-8 opacity-0 grid grid-cols-1 md:grid-cols-3 gap-8 px-10 my-10">
                {WorkTypes[category].mapper}
            </div>
           
            <Link className="relative cursor-pointer" href={routes.SECRET2}>
                <img className="absolute right-0 opacity-10 h-40" src="/assets/ephemeris.png" alt=""/>
            </Link>
        </div>
    );
}

export default Works;