import React from 'react'
import s from './WhatIDo.module.css'

const WhatIDo = () => {
  return (
    <div id='why' className='container'>
        <div className={s.start}>
            <h1 className={s.title}>Какие услуги я предоставляю <img className={s.img} src='./img/question.svg' alt='question sine'/></h1>
        </div>
        <div className={s.doContent}>
            <div className={s.doBody}>
                <div className={s.doItem}>
                    <span className={s.subtitle}>Сайты блоги и портфолио</span>
                    <p className={s.text}>Создам уникальный веб-сайт для личного бренда, чтобы вы могли поделиться своими мыслями, проектами и достижениями.</p>
                </div>
                <div className={s.doItem}>
                    <span className={s.subtitle}>Корпоративные сайты</span>
                    <p className={s.text}>Разработаю веб-сайты для компаний и организаций, чтобы представить их бренд, продукты и услуги онлайн</p>
                </div>
                <div className={s.doItem}>
                    <span className={s.subtitle}>Новостные порталы</span>
                    <p className={s.text}>Разработаю сайты для публикации новостей и статей с различными разделами и функциональностью.</p>
                </div>
                <div className={s.doItem}>
                    <span className={s.subtitle}>Сайты с интерактивными элементами</span>
                    <p className={s.text}>Добавлю интерактивность к веб-сайтам с помощью анимаций, игр и других элементов, чтобы сделать пользовательский опыт более привлекательным.</p>
                </div>
                <div className={s.doItem}>
                    <span className={s.subtitle}>Техническая пддержка</span>
                    <p className={s.text}>Я всегда готов оказать техническую поддержку и помощь в решении любых вопросов, связанных с вашим проектом.</p>
                </div>
                <div className={s.doItem}>
                    <span className={s.subtitle}>Адаптация и Интеграция</span>
                    <p className={s.text}>Если у вас уже есть существующее веб-приложение или веб-сайт, я помогу его улучшить, оптимизировать и интегрировать новые функции для повышения эффективности.</p>
                </div>
                <div className={s.doItem}>
                    <span className={s.subtitle}>Консультации и Рекомендации</span>
                    <p className={s.text}>Я готов поделиться своими знаниями и опытом, чтобы помочь вам выбрать наилучшие технологические решения для вашего проекта и достичь ваших целей.</p>
                </div>
                <div className={s.doItem}>
                    <span className={s.subtitle}>Обучение и Обучающие материалы</span>
                    <p className={s.text}>Если вам нужно научиться управлять вашим веб-приложением или интерфейсом, я могу создать обучающие материалы и обеспечить необходимую поддержку.А так же предоставить обучающие уроки по разработке веб-сайтов</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatIDo
