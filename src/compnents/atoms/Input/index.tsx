import React, {useState} from "react";
import s from "./style.module.scss"
import cn from "classnames";

interface IInput {
    type: string,
    placeholder: string,
    error: boolean,
    label: string,
    name: string
    value: string,
    onChange: (value: string) => void,
}

export const Input: React.FC<IInput> = ({
    type,
    placeholder,
    label,
    name,
    value,
    onChange,
}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const loginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
        if (event.target.value.length < 2 || event.target.value.length > 10) {
            setLoginError('Имя пользователя от 2 до 10 символов')
            if (!event.target.value) {
                setLoginError('Поле не заполнено')
            }
        } else {
            setLoginError('')
            onChange(event.target.value)
        }
    }

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
        if (event.target.value.length < 3 || event.target.value.length > 8) {
            setPasswordError('Пароль от 3 до 8 символов')
            if (!event.target.value) {
                setPasswordError('Поле не заполнено')
            }
        } else {
            setPasswordError('')
            onChange(event.target.value)
        }
    }

    const blurHandler = (event: React.SyntheticEvent) => {


        switch (name) {
            case 'name':
                setLoginDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div className={cn(s.container)}>
            <p className={s.paragraph}>{label}</p>
            <input
                name={name}
                value={(name === 'name') ? login : password }
                type={type}
                placeholder={placeholder}
                className={(loginError || passwordError) ? cn(s.input, s.input_invalid) : s.input}
                onBlur={event => blurHandler(event)}
                onChange={(name === 'name') ? (event => loginHandler(event)) : (event => passwordHandler(event))}

            />
            <p className={cn(s.paragraph, s.invalid)}>{loginError}</p>
            <p className={cn(s.paragraph, s.invalid)}>{passwordError}</p>
        </div>
    )

}
