import React, {useState} from 'react'
import s from './Footer.module.css'
import axios from 'axios';

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        message: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          // Отправляем данные на сервер
          const response = await axios.post('http://localhost:3001/submit', formData);
    
          if (response.status === 200) {
            // Успешное сообщение о отправке
            console.log('Сообщение успешно отправлено');

            setFormData({
              name: '',
              number: '',
              message: '',
            });

          } else {
            // Обработка ошибки отправки
            console.error('Произошла ошибка при отправке сообщения');
          }
        } catch (error) {
          console.error('Произошла ошибка при отправке сообщения', error);
        }
      };

  return (
    <form action="/netlify/functions/form" className={s.form} id='form'>
                <div className={s.body}>
                    <input name='name' onChange={handleChange} value={formData.name} className={s.input} type="text" placeholder='Ваше имя...'/>
                    <input name='number' onChange={handleChange} value={formData.number} className={s.input} type="number" placeholder='Ваш номер...'/>
                    <textarea name='message' onChange={handleChange} value={formData.message} className={s.textarea} placeholder='Сообщение...'></textarea>
                    <button type='submit' onClick={handleSubmit} className={s.button}>Отправить</button>
                </div>
    </form>
  )
}

export default Form
