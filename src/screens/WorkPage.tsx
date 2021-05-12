import React from 'react'
import Header from 'src/components/Header'
import { WorksList } from 'src/screens/Works'

const WorkPage = ({index}: {index: number;}) => {
    console.log(index);
    return (
        <div>
            <Header />
            <div className="text-text flex justify-center items-center">
                <img src={WorksList[index].path} />
            </div>
        </div>
    );
}

export default WorkPage;
