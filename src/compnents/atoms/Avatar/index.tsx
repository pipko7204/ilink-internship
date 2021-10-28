import React from "react";
import s from "./style.module.scss"

interface IAvatar {
    man?: boolean,
}

export const Avatar: React.FC<IAvatar> = ({
    man,
}) => {
    return (
        <div className={s.avatar}></div>
    )
}
