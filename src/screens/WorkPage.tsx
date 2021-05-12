import React from 'react'
import Header from 'src/components/Header'

const WorkPage = ({name}: {name: string;}) => {
    return (
        <div>
            <Header />
            <div className="text-text flex justify-center items-center">
                Workpage
            </div>
        </div>
    );
}

export default WorkPage;
