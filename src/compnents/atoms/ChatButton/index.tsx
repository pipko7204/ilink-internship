import React from "react";

import s from "./style.module.scss"

interface IChatButton {

    disabled?: boolean
}

export const ChatButton:React.FC<IChatButton> = ({
    disabled
}) => {
    return (
        <button className={s.button_chat}></button>
    )
}

