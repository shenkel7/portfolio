import React from 'react'
import Header from 'src/components/Header'
import { WorksList } from 'src/screens/Works'

const WorkPage = ({index}: {index: number;}) => {
    console.log(index);
    return (
        <div>
            <Header />
            <div className="text-text flex justify-center items-center mt-10">
                <img className="w-4/5" src={WorksList[index].path} />
            </div>
        </div>
    );
}

export default WorkPage;
