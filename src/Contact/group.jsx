import { Email } from "./email";
import { Phone } from "./phone";

import style from './group.module.css'

export function Aside(){




    return(

        <div  className={style.aside}>
<Phone />
<Email />
        </div>

    )
}

