# inspirobot-proxy

A teeny tiny proxy server that accepts a POST request and then proxies it over to http://inspirobot.me/ as a GET

It will then send back the image URL from inspirobot in it's response.

Created mainly for Slack since the apps slash commands only seem to send a POST request out to whatever server you tell it.

# Usage
Feel free to clone and create your own heroku proxy server for your app. It's already 100% heroku ready, just push it up and then make your app hit the heroku url you created.
