import React from 'react'
import s from "./Message.module.css";

type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = (props: messagePropsType) => {

    return (
        <div className={s.messageStyle}>
            <div >
                <img className={s.img} src={props.avatar}/>
            </div>

            <div className={s.p}>
                <p className={s.item}>{props.name}</p>
                <p className={s.message}>{props.message}</p>
                <p className={s.itemTime}>{props.time}</p>
            </div>


        </div>
    )
}

export default Message
