
import style from './about.module.css';
import { AboutTitle } from './titleAbout';

export default function About(){

    return( <div className='container'>
<AboutTitle />
        <div className={style.about}>
<p className='border-end border-2 p-2 fs-5 border-dark'>Hi there, I'm Omar Ezzarouali and I was born in 1999. <br></br> I completed my baccalaureate in Physics Science in 2018, and continued my studies at the University Mohammed V Rabat in the same specialization.<br></br> However, in 2021 I decided to switch my focus <br></br> to Web Development, and I graduated in 2023 <br></br> as a Technical Web Developer. </p>


        <p  className='p-2'>I am an accomplished full-stack developer with a diverse skill set. Proficient in both MERN (MongoDB, Express.js, React.js, Node.js) and XAMPP (cross-platform Apache, MariaDB, PHP, Perl) stacks, I bring a comprehensive approach to web application development. With a keen eye for both frontend and backend intricacies, I have a track record of delivering robust and user-friendly solutions. My experience enables me to seamlessly navigate through the entire development lifecycle, from concept to deployment. I am adept at crafting scalable, efficient, and secure applications, ensuring they meet the highest industry standards. Beyond technical prowess, I am a collaborative team player with excellent problem-solving abilities, allowing me to excel in dynamic development environments. I look forward to leveraging my expertise to tackle new challenges and contribute to innovative projects</p>
        </div></div>
    )
}