import React from "react";
import {Message} from "../../atoms/Message";
import s from "./style.module.scss"

import {users} from "./../../Users/"

const ii = users[1].chat


interface IChat {
    chat?: Array<any>
}

export const Chat:React.FC<IChat> = ({
                                         chat = []
                                     }) => {
    return (
        <div className={s.chat_container}>

            {ii.map(item => (

                <Message key={item["id"]} message={item.message} myMessage={item.myMessage}/>

            ))}

            <Message myMessage={false} message="sdfsdffsd"/>
        </div>
    )
}