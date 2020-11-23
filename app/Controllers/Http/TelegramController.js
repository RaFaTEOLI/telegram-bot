"use strict";

const Axios = use("axios");
const Env = use("Env");

class TelegramController {
  async send({ request, response }) {
    const message = request.body.message;

    await Axios.get(
      `https://api.telegram.org/bot${Env.getOrFail(
        "BOT_KEY"
      )}/sendMessage?chat_id=${Env.getOrFail("CHANNEL_ID")}&text=${message}`
    );

    return response.json({ response: "Your message was sent!" });
  }
}

module.exports = TelegramController;
