import React, {useState} from 'react';
import {Button} from "../../atoms/Button";
import {Input} from "../../atoms/Input";

import s from "./style.module.scss"

export const LogForm: React.FC = () => {

    const [inputLogin, setInputLogin] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const updateLogin = (value: string) => {
        setInputLogin(value)
        if (value.length < 3 || value.length > 8) {  //С этой строкой какие-то странности. Если поменять значения на, допустим, 2 и 10, то перестаёт работать
            setInputLogin('')
        }
    }

    const updatePassword = (value: string) => {
        setInputPassword(value)
        if (value.length < 3 || value.length > 8) {  // с этой тоже странности
            setInputPassword('')
        }
    }

    return (
        <>
            <Input
                onChange={updateLogin}
                value=""
                name="name"
                type="text"
                placeholder="Input user name"
                error={true}
                label="User name"/>
            <Input
                onChange={updatePassword}
                value=""
                name="password"
                type="password"
                placeholder="Input password"
                error={false}
                label="Password"/>
            <Button
                name="Log in"
                disabled={(inputLogin && inputPassword) ? false : true}
            />
            {/*<p>{inputLogin}</p>
            <p>{inputPassword}</p>*/}
        </>
    )
}



