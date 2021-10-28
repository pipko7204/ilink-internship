import React from "react";
import cn from "classnames";
import s from "./style.module.scss"

interface IMessage {
    message:string,
    myMessage: boolean
}

export const Message: React.FC<IMessage> = ({
    message,
    myMessage,
}) => {
    return (
            <p className={myMessage ? cn(s.message, s.my_message) : cn(s.enemy_message, s.message)}>{message}</p>
    )
}


