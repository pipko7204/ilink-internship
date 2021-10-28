import React from "react";

import s from "./style.module.scss"

interface IInputText {
    someFunction?: (value: string) => void,
}

export const InputText: React.FC<IInputText> = ({
   someFunction,
}) => {
    return (
        <input
            className={s.textarea}
            placeholder="Write something..."
            type="textarea"
        />
    )
}