import React from 'react';

type ContainerProps = {
    children?: React.ReactNode;
    className?: string;
}

export const Container = ({children, className} : ContainerProps) => {
    return (
        <div>
            {children}
        </div>
    )
}