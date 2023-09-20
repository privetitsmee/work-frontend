import React from 'react'
import s from './About.module.css'

const About = () => {
  return (
    <div className={s.about}>
        <div className='container'>
            <h1 className={s.title} id='about'>Давайте знакомиться!</h1>

            <div className={s.body}>

              <p className={s.text}>Добро пожаловать! Меня зовут Влад, я фронтенд-разработчик, специализирующийся на создании выдающихся веб-приложений и интерфейсов. Мое вдохновение - воплощать в жизнь ваши концепции и идеи, обеспечивая при этом высший уровень функциональности и производительности.</p>

            </div>

            <div className={s.stack}>
                <h2 className={s.subtitle}>Мой стэк технологий:</h2>
                <div className={s.bodyImg}>
                  <img className={s.img} src="./img/html.svg" alt="html" /> 
                  <img className={s.img} src="./img/css.svg" alt="css" />
                  <img className={s.img} src="./img/js.svg" alt="js" />
                  <img className={s.img} src="./img/react.svg" alt="react" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default About
