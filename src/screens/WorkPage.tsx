import React, { useEffect } from 'react'
import Header from 'src/components/Header'
import { WorksList } from 'src/constants/works'

const WorkPage = ({index}: {index: number;}) => {
    console.log(index);

    useEffect(() => {
        window.scrollTo(0, 150);
    },[])

    return (
        <div>
            <Header />
            <div className="text-text flex flex-col justify-center items-center mt-10">
                <div className="font-majormonodisplay">
                    {WorksList[index].name}
                </div>
                <img className="h-screen my-8" src={WorksList[index].path} />
                <div className="mb-8">
                    Hey
                </div>
            </div>
        </div>
    );
}

export default WorkPage;
