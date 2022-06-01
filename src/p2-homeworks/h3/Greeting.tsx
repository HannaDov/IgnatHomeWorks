import React, {ChangeEvent, KeyboardEvent} from 'react'

import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: boolean// need to fix any
    totalUsers: number
    onKeyPressHandler:(e: KeyboardEvent<HTMLInputElement>)=>void// need to fix any

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass =error? s.error :""// need to fix with (?:)

    return (
        <div className={s.place}>
            <input value={name} onChange={setNameCallback} className={s.inputClass} onKeyPress={onKeyPressHandler}/>
            <span>{error}</span>
            <button onClick={() => addUser(name)} className={s.buttonOn}>add</button>
            <span>{totalUsers}</span>
            {error&&<div className={s.errorMessage}>Title is required</div>}

        </div>
    )
}

export default Greeting
