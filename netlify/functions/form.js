import fetch from 'node-fetch';

const telegramToken = '6605316205:AAGtyrTHiUEnY0ipJ2rqrxQSp_aHVSSDfOg';
const chatId = '-1001833739048'; 

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { name, number, message } = JSON.parse(event.body);

  const telegramMessage = `
    *Новое сообщение от посетителя:*
    *Имя:* ${name}
    *Номер:* ${number}
    *Сообщение:* ${message}
  `;

  try {
    await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    return {
      statusCode: 200,
      body: 'Сообщение успешно отправлено на Telegram',
    };
  } catch (error) {
    console.error('Произошла ошибка при отправке сообщения на Telegram:', error);
    return {
      statusCode: 500,
      body: 'Произошла ошибка при отправке сообщения',
    };
  }
};