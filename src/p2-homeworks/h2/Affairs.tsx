import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: any
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={() => props.deleteAffairCallback(a._id)}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className={classes.item}>

            {mappedAffairs}
            <div className={classes.buttonFilter}>
                <button className={props.filter === "all" ? classes.activeFilter : ""} onClick={setAll}>All</button>
                <button className={props.filter === "high" ? classes.activeFilter : ""} onClick={setHigh}>High</button>
                <button className={props.filter === "middle" ? classes.activeFilter : ""} onClick={setMiddle}>Middle
                </button>
                <button className={props.filter === "low" ? classes.activeFilter : ""} onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
