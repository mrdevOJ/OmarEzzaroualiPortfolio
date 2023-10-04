import style from './card.module.css'

export function Card(){
    return(

       
        <div class={style.containers} id='#'>
         <div  class={style.wrapper}>
           <div  class={style.bannerimage}> </div>
           <h1 className='fs-3'>OMAR EZZAROUALI</h1>
           <p>Web Developper <br/>
             Front end & back end</p>
          </div>
          <a  class={style.outline} href="#Contact">Hire Me</a>
            </div>
     
    )
}