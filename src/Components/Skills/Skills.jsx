import React from 'react'
import s from './Skills.module.css'

const Skills = () => {
  return (
    
        <div className={s.skills}>
            <div className='container'>
                <h1 className={s.title}>Почему выбирают меня? <img src='./img/what.png' alt='smile'/></h1>

                <div className={s.whyMe}>
                    <div className={s.whyContainer}>
                        <div className={s.whyBody}>
                            <h5 className={s.subtitle}>Экспертиза:</h5>
                            <p className={s.text}>Я - профессионал с глубоким знанием фронтенд-разработки и многолетним опытом в создании успешных проектов.</p>
                        </div>
                    </div>
                    <div className={s.whyContainer}>
                        <div className={s.whyBody}>
                            <h5 className={s.subtitle}>Индивидуальный подход:</h5>
                            <p className={s.text}>Я готов адаптировать мои навыки и знания под ваши уникальные требования и цели</p>
                        </div>
                    </div>
                    <div className={s.whyContainer}>
                        <div className={s.whyBody}>
                            <h5 className={s.subtitle}>Качество:</h5>
                            <p className={s.text}> Каждая строчка кода, которую я пишу, стремится к высшему качеству и надежности.</p>
                        </div>
                    </div>
                    <div className={s.whyContainer}>
                        <div className={s.whyBody}>
                            <h5 className={s.subtitle}>Своеверменность:</h5>
                            <p className={s.text}> Соблюдение сроков - для меня приоритет.</p>
                        </div>
                    </div>
                </div>
                
        </div>
    </div>
  )
}

export default Skills
