const { app, BrowserWindow, shell } = require('electron');

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

  mainWindow.webContents.on('new-window', (e, url) => {
    shell.openExternal(url);
    e.preventDefault();
  });

  mainWindow.once('closed', () => {
    mainWindow = null;

    app.quit();
  });
});
