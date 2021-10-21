import React from "react";
import s from './style.module.scss'

interface IButton {
    name: string,
    disabled?: boolean,
}

export const Button: React.FC<IButton> = ({
    name,
    disabled,
}) => {
    return (
        <>
            <button className={s.button}
            disabled={disabled}
            >
                {name}
            </button>
        </>
    )
}
