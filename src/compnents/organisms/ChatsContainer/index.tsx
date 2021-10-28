import React from "react";
import {ChatItem} from "../../molecules/ChatItem";
import s from "./style.module.scss"

interface IChatContainer {
    chats?: string,
}

export const ChatContainer: React.FC<IChatContainer> = ({
    chats,
}) => {

    return (
        <div className={s.chat_container}>
            <ChatItem selected={false} name="sdfsdf" message="sffsd" lastMessageMy={false}/>
            <ChatItem selected={true} name="sdfsdf" message="sffsd" lastMessageMy={true}/>
            <ChatItem selected={false} name="sdfsdf" message="sffsd" lastMessageMy={true}/>
            <ChatItem selected={false} name="sdfsdf" message="sffsd" lastMessageMy={false}/>
        </div>
    )
}