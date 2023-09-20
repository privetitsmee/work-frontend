import React, {useState, useEffect} from 'react'
import s from './Navigation.module.css'
import Modal from './Modal';
import Form from '../Footer/Form';

const Navigation = (props) => {
    const {name, descr} = props
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isModalMenu, setIsModalMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const modalMenuOpen = () => {
    setIsModalMenu(true)
  }
  const modalMenuClose = () => {
    setIsModalMenu(false)
  }

  return (
    <div className={s.home}>

            <div className='container'>

                <ul className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
                    <li className="nav-item">
                        <a className="nav-link " href="#about" aria-current="page">Обо мне</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#why">Почему я?</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link " href="#footer">Контакты</a>
                    </li>
                </ul>
                
        

            <div className={`${s.mobile} ${isMobileMenuOpen ? s.open : ''}`} onClick={() => setIsMobileMenuOpen(toggleMobileMenu)}>
            <div className={s.burger} onClick={toggleMobileMenu}>
              <div className={s.line}></div>
              <div className={s.line}></div>
              <div className={s.line}></div>
            </div>
            <ul className={s.links}>
              <li className={s.item}>
                <a className={s.link} href='#about' aria-current='page'>
                  Обо мне
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href='#why'>
                  Почему я?
                </a>
              </li>
              <li className={s.item}>
                <a className={s.link} href='#footer'>
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        
          <div className={s.flex}>
            <div className={s.content}>
                <div className={s.textButton}>
                <p className={s.text}>{name} </p>
                <p className={s.descr}>{descr}</p>
                <button onClick={modalMenuOpen} className={s.button}>Заказать сайт</button>
                </div>

              <div> 
                <img className={s.desktop} src="./img/home.svg"></img>
              </div>

              </div>


            </div>
                <Modal isOpen={isModalMenu} onClose={modalMenuClose}>
                    <h2 className={s.title}>Оставить заявку</h2>
                    <Form/>
                    <p className={s.accept}>*Нажимая кнопку «Отправить», вы согласны на обработку ваших персональных данных в соответствии с условиями «Политики конфиденциальности».</p>
                </Modal>

      </div>
    </div>
  )
}

export default Navigation
