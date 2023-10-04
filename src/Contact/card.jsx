import { useRef } from 'react';
import style from './card.module.css'

import emailjs from 'emailjs-com';
import { useState } from 'react';



export function Card(){

const cardBody =[ style.cardBody ].join(' ')
const forms =[style.forms , 'w-100'].join(' ')
const button =[style.button , 'float-end'].join(' ')
const form = useRef();

const [showFunction1, setShowFunction1] = useState(true);

  const  sendEmail =(e) => {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_vuf2sbo', 'template_yhloevs', form.current, '7H5ocy0GlwCpA7ZFY')
      .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        setShowFunction1(false);
      
      }, (error) => {
         alert("message doesn't sent successfully");
         setShowFunction1(true);
        });
    }
    return (

        <div  className={style.main}>
       {
        showFunction1 === false ? <div class="alert alert-dark" role="alert">
        Message send successfully !!
       </div> 
       : null
       }
        <div className="card">
            <div className={cardBody}>
                <form className='m-5' ref={form}  onSubmit={sendEmail}>
                <h1  className={style.title}>Contact me</h1>
                <p  class="form-text fs-6">feel free to get in touch with me. i'am are always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
           
                <div class="mb-3">
                    <label for="exampleInputName" class="form-label">Your Name</label>
                    <input  type="text"  name="client" required placeholder="Your name" className={forms}  />
                  </div>


                <div class="mb-3">
                    <label for="exampleInputEmail1" required class="form-label">Your Email </label>
                    <input type="email" name="email" placeholder="Your email" className={forms}/>
                    <div id="emailHelp"  class="form-text">We'll never share your email with anyone else.</div>
                  </div>
                
                
                  <div class="mb-3">
                    <label for="Message" class="form-label">Message</label>
                    <textarea  rows="3"  name="message" required placeholder="Your Message" className={forms} i ></textarea>  
                  </div>
                  <button type="submit" class={button}>SEND</button>

                </form>
            </div>
        </div>
    </div>
    )

}