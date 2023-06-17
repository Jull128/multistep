import React from 'react'
import style from './style.module.css'

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className={style.container}>
                {children}
            </div>
        </React.Fragment>
    )
}

