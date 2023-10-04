import { Aside } from "./group";
import { Card } from "./card";

import style from './contact.module.css'

export function Contact(){


    return(
        <div id="Contact" className="container mt-5">

        <div className={style.column}>

        <Aside />

        <Card />
        </div>
</div>
    )
}