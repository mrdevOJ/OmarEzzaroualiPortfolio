import { Card } from './card'
import style from './header.module.css'

export function Header(){
const heder =[style.navb].join(' ')
    return(

        <div className={heder}>
<div className={style.hy}>
    <h1 className={style.title}> Hey There I'am Omar</h1>
    <h4 className={style.h4}>"I am a seasoned full-stack developer proficient in both MERN and XAMPP stacks, ensuring end-to-end expertise in web application development."




</h4>
</div>
<Card />

       </div>
    )
}