import React from "react";
import {LogForm} from "../../molecules/LogForm";
import cn from "classnames";
import logo from "../../../assets/Group3.svg"

import s from "./style.module.scss"

export function FormContainer() {
    return (
        <>
        <div className={s.login_content_container}>
            <div className={s.img_container}></div>
            <img src={logo} className={s.logo} alt="здесь должна быть иконка"/>
            <h1>Wellcome to <span className={cn(s.dedicated, s.h1)}>Chatty</span><span className={cn(s.exclamation_point, s.h1)}>!</span></h1>
            <h2>Please, autorize yourself</h2>
            <LogForm/>
        </div>
        </>
    )
}


