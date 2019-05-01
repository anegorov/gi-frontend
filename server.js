//Install express server
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/gi-front'));

function detectBot(userAgent){
    const bots = [
      'googlebot',
      'bingbot',
      'yandexbot',
      'duckduckbot',
      'slurp',
      'twitterbot',
      'pinterest',
      'vkshare', 
      'yandexaccessibilitybot',   
      'yandexmetrika',   
      'yandexscreenshotbot',   
      'yandexblogs',   
      'yandeximages'   
    ];
  
    const agent = userAgent.toLowerCase()
  
    for(const bot of bots){
      if(agent.indexOf(bot) > -1){
        console.log('bot detected',bot,agent)
        return true
      }
    }
  
    console.log('not bots found')
    return false
  }

app.get('/*', function(req,res) {

const isBot = detectBot(req.headers['user-agent']);
    if(isBot) {
        // res.send('This is bot');
    fetch(`https://guidein.herokuapp.com/render/domik-i-polka-svoimi-rukami.html`)
      .then(res => res.text())
      .then(body => {
      res.send(body.toString());
      });
    }else{
        res.sendFile(path.join(__dirname, '/dist/gi-front/index.html'));
    }
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);