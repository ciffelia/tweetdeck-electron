const { app, BrowserWindow } = require('electron');

let mainWindow;

app.once('ready', () => {
  mainWindow = new BrowserWindow({
    title: 'TweetDeck',
    width: 1280, height: 800,
    webPreferences: {
      nodeIntegration: false
    }
  });

  mainWindow.loadURL('https://tweetdeck.twitter.com/');

  mainWindow.once('closed', () => {
    mainWindow = null;

    app.quit();
  });
});
