import React from "react";
import {ChatButton} from "../../atoms/ChatButton";
import logo from "./../../../assets/Group3.svg"

import s from "./style.module.scss"

export function Header() {
    return (
        <>
            <header className={s.header}>
                <img className={s.img} src={logo} alt=""/>
                <ChatButton/>
            </header>
        </>
    )
}