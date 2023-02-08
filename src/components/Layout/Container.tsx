import React, { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='lg:p-28 p-10'>
            {children}
        </div>
    )
}

export default Container