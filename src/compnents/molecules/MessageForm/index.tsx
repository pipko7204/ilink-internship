import React from "react";

import s from "./style.module.scss"
import {InputFile} from "../../atoms/InputFile";
import {InputText} from "../../atoms/InputText";

interface IMessageForm {
    someFunction?: (value: string) => void
}

export const MessageForm: React.FC<IMessageForm> = ({
                                                        someFunction
}) => {
    return (
        <div className={s.message_form}>
            <InputFile/>
            <InputText/>
            <button className={s.send_button}></button>
        </div>
    )
}