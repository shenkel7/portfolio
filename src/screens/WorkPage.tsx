import React, { useEffect, useState } from 'react'
import Header from 'src/components/Header'
import { WorkTypes } from 'src/screens/Works'
import { TWork } from 'src/constants/works'

const WorkPage = ({index, type}: {index: number; type: string;}) => {

    const workType = WorkTypes.find(item => item.title === type);
    const workList = workType?.list as TWork[] | undefined;

    useEffect(() => {
        window.scrollTo(0, 150);
    },[])

    return (
        <div>
            <Header />
            <div className="text-text flex flex-col justify-center items-center mt-10">
                <div className="font-majormonodisplay">
                    {workList ? workList[index].name : ""}
                </div>
                <img className="h-screen object-contain mt-8 mb-4" src={ workList ? workList[index].path : ""} alt={workList ? workList[index].name : ""}/>
                <div className="mb-8 whitespace-pre-line p-8 md:p-24">
                    {workList ? workList[index].description : ""}
                </div>
            </div>
        </div>
    );
}

export default WorkPage;
