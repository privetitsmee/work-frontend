import fetch from 'node-fetch';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
const corsOptions = {
  origin: 'https://main--stalwart-phoenix-a575dc.netlify.app/', // Замените на URL вашего сайта на Netlify
  methods: 'POST', // Укажите методы, которые вы разрешаете
};
app.use(cors(corsOptions));
app.use(cors());

const telegramToken = '6605316205:AAGtyrTHiUEnY0ipJ2rqrxQSp_aHVSSDfOg';
const chatId = '-1001833739048'; // Используйте Chat ID из предыдущего шага

app.post('/submit', (req, res) => {
  const { name, number, message } = req.body;

  const telegramMessage = `
    *Новое сообщение от посетителя:*
    *Имя:* ${name}
    *Номер:* ${number}
    *Сообщение:* ${message}
  `;

  fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: telegramMessage,
      parse_mode: 'Markdown',
    }),
  })
    .then((response) => response.json())
    .then(() => {
      res.send('Сообщение успешно отправлено на Telegram');
    })
    .catch((error) => {
      console.error('Произошла ошибка при отправке сообщения на Telegram:', error);
      res.status(500).send('Произошла ошибка при отправке сообщения');
    });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});