import React from "react";
import s from "./style.module.scss"

interface IChatHeader {
    name?: string,
    minutes?: number,
}

const name1 = "AFAAF AFSf";
const minutes1 = 3;

export const ChatHeader: React.FC<IChatHeader> = ({
    name,
    minutes
}) => {

    return (
        <div className={s.container}>
            <h4 className={s.name}>{name1}</h4>
            <p className={s.minutes}>last seen {minutes1} minutes ago</p>
        </div>
    )
}