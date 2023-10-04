import style from './phone.module.css'


export function Phone(){

    const call=[style.call,'text-center p-1'].join(' ')

    return(

        <div className={call} >
            <h4>Call me</h4>
                <img src="https://th.bing.com/th/id/R.bc75940d3e5b36c4f13c783d53e9dfa3?rik=blCdoaRWE0ZaDg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_97207.png&ehk=hXLvYsMoh3IwQfR7dLia7IIHKltdbT%2bLEkxDeP0v%2fsg%3d&risl=&pid=ImgRaw&r=0"  />
           <h6>+212 659209333</h6>                  
        </div>
    )
}