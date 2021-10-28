import React from "react";
import {Header} from "../../molecules/Header";
import {ChatContainer} from "../../organisms/ChatsContainer";
import {ChatHeader} from "../../molecules/ChatHeader";
import {Chat} from "../../molecules/Chat";
import {MessageForm} from "../../molecules/MessageForm";

import s from "./style.module.scss"

interface IChatPage {
    users? : Array<any>
}

export const ChatPage: React.FC<IChatPage> = ({
    users
}) => {
    return (
        <div className={s.chat_page}>
            <div className={s.header}>
                <Header/>
            </div>
            <div className={s.chat_container}>
                <ChatContainer/>
            </div>
            <div className={s.chat_header}>
                <ChatHeader/>
            </div>
            <div className={s.chat}>
                <Chat/>
            </div>
            <div className={s.message_form}>
                <MessageForm/>
            </div>
        </div>
    )
}
