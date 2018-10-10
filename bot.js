var token = process.env.HEROKU_TOKEN ;//'688362524:AAG8GLPncBRbZtApF7uOK8rEe4u9EXbOCw4';

const Bot = require('node-telegram-bot-api');
let bot;
if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}



//# $HEROKU_URL

console.log('bot server started...');

// hello command
bot.onText(/^\/say_hello (.+)$/, function (msg, match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
    // reply sent!
  });
});

// sum command
bot.onText(/^\/sum((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i) {
    result += (+i || 0);
  })
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});

//Rasm Jo'natish
bot.onText(/\/photo/, msg =>{
    bot.sendPhoto(msg.chat.id,'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',{
        caption:'Izoh'
    })
})

if ((msg.text !== '/start')||(msg.text !== '/photo')){
    bot.sendMessage(msg.chat.id, msg.text)
}
