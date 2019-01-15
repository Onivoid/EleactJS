const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
let mainWindow = null;

function createWindow() {

    mainWindow = new BrowserWindow({
        show: false,
        frame: false,
        transparent: true,
        width:1000,
        height:600
    });

    mainWindow.loadFile(path.resolve(__dirname,'build/index.html'));

    mainWindow.on('closed', () => {
        if (process.platform !== 'darwin') app.quit();
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    });


}

app.on('ready', () => {
    createWindow();

    ipcMain.on('close', (evt, arg) => {
        app.quit()
    })

    ipcMain.on('minimize', (evt, arg) => {
        mainWindow.minimize();
    })

});