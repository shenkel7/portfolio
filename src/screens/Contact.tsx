import React from 'react'
import Header from 'src/components/Header'

type TLogo = {
    src: string;
    alt: string;
};

const Logo = ({src, alt} : TLogo) => {
    return (
        <img className="h-8 mx-6" src={src} alt={alt} />
    );
}

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="text-text flex justify-center items-center px-10 mt-16">
                <p>
                    Want to ask or chat about anything?
                    You can contact me
                    <span className="text-header">
                        <a href="mailto:kellyshenportfolio@gmail.com"> here.</a>
                    </span>
                </p>
            </div>
            <div className="mt-8 flex flex-col items-center text-text px-10">
                Alternatively, you can reach me in these nooks and crannies.
                <div className="font-majormonodisplay my-4">
                    Links
                </div>
                <div className="flex flex-row w-full justify-center">
                    <a rel="preload" href="https://github.com/shenkel7" >
                        <Logo src="/assets/logos/GitHub-Mark-Light-120px-plus.png" alt="GitHub" />
                    </a>
                    <a rel="preload" href="https://www.artstation.com/aquafroq">
                        <Logo src="/assets/logos/Artstation-logo.png" alt="ArtStation" />
                    </a>
                    <a rel="preload"  href="https://www.linkedin.com/in/kelly-shen-8218011b6/">
                        <Logo src="/assets/logos/LI-In-Bug.png" alt="Linkedin" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
