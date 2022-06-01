import React from 'react'
import classes from './Error404.module.css'

function Error404() {
    return (
        <div className={classes.error}>
            <div>404</div>

            <div><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvdmM2-6LhAyhqUp-yO3Og6utnMiKeZZEMw&usqp=CAU'}/> </div>
            <div>Page not found!</div>
            </div>
    )

}

export default Error404
