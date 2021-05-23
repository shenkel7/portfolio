import React from 'react'
import Header from 'src/components/Header'

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="text-text flex justify-center items-center px-10">
                Want to ask or chat about anything?
                You can contact me&ensp;
                <span className="text-header">
                    <a href="mailto:kellyshenportfolio@gmail.com"> here.</a>
                </span>
            </div>
        </div>
    );
}

export default Contact;
