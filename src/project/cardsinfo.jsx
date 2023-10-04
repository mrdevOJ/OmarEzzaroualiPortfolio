import style from './cardinfo.module.css'



export function Cardsinfo(){
const cardsinfo = [style.row , 'mt-5 bg-dark p-5 '].join(' ')
    return(
<div className={cardsinfo} id='Projects'> 

<div className={style.column}>
            <div class={style.cards}>
  <p> web-based news platform that utilizes <strong>API and JQuery</strong>  technologies to bring the latest news updates to its users.</p>
  <img   class="rounded  img-fluid w-100" src='https://i.ibb.co/qJ9rSNh/Capture-d-cran-2023-02-02-203421.png' />
  <p class={style.cardfooter}>Created by OMAR EZZAROUALI.</p>
</div>
</div>
<div className={style.column}>
            <div class={style.cards}>
  <p>  a web-based blogging platform that integrates the latest web technologies, including<strong> Html, CSS, and JQuery,</strong> </p>
  <img   class="rounded  img-fluid w-100" src='https://i.ibb.co/X28vXCY/Capture-d-cran-2023-02-13-172855.png' />

  <p class={style.cardfooter}>Created by OMAR EZZAROUALI.</p>
</div>
</div>
<div className={style.column}>
            <div class={style.cards}>
  <p>eCommerce website developed using   <strong>Laravel 10 with Bootstrap, CSS and JavaScript.</strong></p>
  <img   class="rounded  img-fluid w-100" src='https://i.ibb.co/y8Mj81b/Capture-d-cran-2023-06-06-143924.png' />

  <p class={style.cardfooter}>Created by OMAR EZZAROUALI.</p>
</div>
</div>
<div className={style.column}>
            <div class={style.cards}>
  <p>web-based gallery that showcases the beauty and diversity of Morocco. Utilizing only pure <strong>CSS</strong> and<strong> HTML</strong>  technologies.</p>
  <img   class="rounded  img-fluid w-100" src='https://i.ibb.co/bL5yBmS/Capture-d-cran-2023-02-13-175950.png' />

  <p class={style.cardfooter}>Created by OMAR EZZAROUALI.</p>
</div>
</div>
<div className={style.column}>
            <div class={style.cards}>
  <p>J'ai utilisé la technologie <strong>Laravel</strong> pour les réservations de salles utilise Laravel UI.</p>
  <img   class="rounded  img-fluid w-100" src='https://i.ibb.co/8YpzY1R/Capture-d-cran-2023-06-25-185841.png' />
  <p class={style.cardfooter}>Created by OMAR EZZAROUALI.</p>
</div>
</div>
<div className={style.column}>
            <div class={style.cards}>
  <p>"Full E-commerce Web Site ",projet <strong>Laravel 10</strong> complete qui faire tromper des plusieurs technologies.</p>
  <img   class="rounded  img-fluid w-100" src='https://i.ibb.co/6DVrHTr/Capture-d-cran-2023-10-03-162909.png' />
<p class={style.cardfooter}>Created by OMAR EZZAROUALI.</p>
</div>
</div>
<div className={style.column}>
            <div class={style.cards}>
  <p> Laravel project for a <strong>coffee shop website</strong>.
My work is focused on reservation Form that provide a dynamic transition</p>
    <img   class="rounded  img-fluid w-100" src='https://i.ibb.co/pdQvwKP/Capture-d-cran-2023-08-20-150646.png' />
    <p class={style.cardfooter}>Created by OMAR EZZAROUALI.</p>
</div>
</div>
<div className={style.column}>
            <div class={style.cards}>
  <p>'Morocco Travels', construit avec la stack  MongoDB & ExpressJS & ReactJS & NodeJS <strong>"MERN"</strong> .</p>
  <img   class="rounded  img-fluid w-100" src='https://i.ibb.co/KrjWMtX/Capture-d-cran-2023-07-27-163000.png' />
  <p class={style.cardfooter}>Created by OMAR EZZAROUALI.</p>
</div>
</div>


</div>
)
}