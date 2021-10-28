import React from "react";

import s from "./style.module.scss"

interface IInputFile {
    someFunction?: (value: string) => void
}

export const InputFile: React.FC<IInputFile> = ({
    someFunction
}) => {
    return (
        <label>
            <div className={s.file_label}></div>
            <input type="file" className={s.button}></input>
        </label>
    )
}
