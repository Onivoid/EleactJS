const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow = null;
function createWindow() {

 mainWindow = new BrowserWindow({
  frame: true,
  width:1000,
  height:600
 });

 mainWindow.loadFile(path.resolve(__dirname,'build/index.html'));

 mainWindow.on('closed', () => {
  if (process.platform !== 'darwin') app.quit();
 });
}
app.on('ready', createWindow);
