import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return ( <div className={classes.someClass}>
        <div className={classes.name}>{props.affair.name}</div>
            <div className={classes.priority}>[{props.affair.priority}]</div>
            <div>
                <button className={classes.button} onClick={deleteCallback}>X</button>
            </div>



        </div>
    )
}

export default Affair
