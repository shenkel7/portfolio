import React, { useEffect, useState } from 'react'
import Header from 'src/components/Header'
import { WorksList } from 'src/constants/works'
import { WorkTypes } from 'src/screens/Works'

const WorkPage = ({index, type}: {index: number; type: string;}) => {

    const WorkList = WorkTypes.find(item => item.title === type);

    useEffect(() => {
        window.scrollTo(0, 150);
    },[])

    return (
        <div>
            <Header />
            <div className="text-text flex flex-col justify-center items-center mt-10">
                <div className="font-majormonodisplay">
                    {WorkList ? WorkList.list[index].name : ""}
                </div>
                <img className="h-screen object-contain my-8" src={ WorkList ? WorkList.list[index].path : ""} />
                <div className="mb-8">
                    Hey
                </div>
            </div>
        </div>
    );
}

export default WorkPage;
