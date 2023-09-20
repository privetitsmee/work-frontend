import React, { useState } from 'react'
import s from './Footer.module.css'
import axios  from 'axios'
import Form from './Form'

const Footer = () => {
  return (
    <footer id='footer' className={s.footer}>
     <div className='container'>
        <h1>Связь со мной</h1>
        <div className={s.wrapper}>
           <Form/>
            <div className={s.connect}>
                <div className={s.text}>
                    <p className={s.message}>Оставьте заявку, или свяжитесь со мной любым для вас способом !</p>
                    <p className={s.message}>vladwebdeveloper1@gmail.com</p>
                    <p className={s.message}>Пн-Сб: 8:00 - 21:00</p>
                    <p className={s.message}>Вс - выходной</p>
                </div>
            </div>
        </div>

     </div>
    </footer>
  )
}

export default Footer
