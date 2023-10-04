import style from './email.module.css'




export function Email(){

    const mail =[style.mail,'text-center p-1'].join(' ')
    return(

        

        <div className={mail}>         
                   <h4>Mail me</h4>

                <img src="https://th.bing.com/th/id/R.8f6ee1084a03955b9430728213c1d6c5?rik=TY2Qm%2bHX3%2bG6wg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2femail-transparent-icon%2femail-transparent-icon-15.png&ehk=4FYxafmAPk%2fzdMqgkt5cQ07DLutPbsyzjtHTt0pzF1M%3d&risl=&pid=ImgRaw&r=0"  />
                <h6>Omarezarouali70@gmail.com</h6>                  

    </div>
    )
}