# Telegram Bot with Adonis API

This API was created with AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Clone the repo and then run `yarn install`.


### Environment

Copy the file .env.example and rename it to .env, then change the variables to what you're going to use.

The main variables are:
BOT_KEY - The key telegram will provide you whenever you create your bot.
CHANNEL_ID - They channel id you created on Telegram.

#### Production

In order to get the app running you'll have to run `adonis serve --dev`

##### Endpoint

The API has only one endpoint, and it's `/sendMessage`, which receives the message, and you must send it as a POST.
<img src="https://github.com/RaFaTEOLI/telegram-bot/blob/master/endpoint.png?raw=true" width="400">
