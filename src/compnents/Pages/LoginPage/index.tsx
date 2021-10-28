import React from "react";
import {FormContainer} from "../../organisms/FormContainer";
import image from "./../../../assets/sdelal.png"             //"./../../../assets/Group.svg"

import s from "./style.module.scss"

export function LoginPage() {
    return (
        <div className={s.login_page}>
            <div className={s.content_block}>
                <div className={s.form}>
                    <FormContainer />
                </div>

            </div>
            <div className={s.img_block}>
                <img src={image} alt=""/>
            </div>
        </div>
    )
}


