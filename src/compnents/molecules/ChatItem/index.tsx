import React from "react";
import {Avatar} from "../../atoms/Avatar";

import s from "./style.module.scss"
import cn from "classnames";

interface IChatItem {
    selected: boolean,
    avatarUrl?: string,
    name: string,
    message: string,
    lastMessageMy: boolean,
}

export const ChatItem: React.FC<IChatItem> = ({
    selected,
    avatarUrl,
    name,
    message,
    lastMessageMy,
}) => {
    return (
        <div className={selected ? cn(s.container, s.selected) : s.container}>
            <Avatar />
            <div className={s.chat_info}>
                <h5 className={selected ? cn(s.user_name, s.selected) : s.user_name }>{name}</h5>
                <div className={s.message_info}>
                     <p className={selected ? cn(s.you, s.selected) : s.you}>{lastMessageMy ? "You:" : ""}</p>
                    <p className={selected ? cn(s.message, s.selected) : s.message}>{message}</p>
                </div>
            </div>
        </div>
    )
}
