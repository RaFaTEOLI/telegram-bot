'use strict';

const Axios = use('axios');
const Env = use('Env');

class TelegramController {
  send ({ request, response }) {
    const message = request.body.message;

    Axios.get(`https://api.telegram.org/bot${Env.getOrFail('BOT_KEY')}/sendMessage?chat_id=${Env.getOrFail('CHANNEL_ID')}&text=${message}`).then((result) => {
      return response.send(view, JSON.parse(result));
    });
  }
}

module.exports = TelegramController;
