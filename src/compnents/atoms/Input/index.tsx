import React from "react";
import s from "./style.module.scss"

interface IInput {
    type: string,
    placeholder: string,
    error: boolean,
    label: string,
}

export const Input: React.FC<IInput> = ({
    type,
    placeholder,
    error,
    label,
}) => {
    return (
        <>
            <p className={s.p}>{label}</p>
            <input
                type={type}
                placeholder={placeholder}
                className={s.input}
            />
        </>
    )

}
