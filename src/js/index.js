//cd C:\Users\Lucas\Desktop\codemappar\tarkovApp\tarkov-app\src\js

const { app, ipcMain, BrowserWindow } = require('electron');
const path = require('path');

// import 'bender.woff'

if (require('electron-squirrel-startup')) 
  	app.quit();

//Application creation
const createWindow = () => {

	//Window creation
	const mainWindow = new BrowserWindow({

		//Window Specs
		width: 800,
		height: 630,
		minWidth: 800,
		minHeight: 630,

		//Other options for the application
		frame: false,
		webPreferences: {

			preload: path.join(__dirname, 'preload.js'),
			enableRemoteModule: true,
			nodeIntegration: false,
			      
    	}
		

  	}); 

	//Load file from index.html
	mainWindow.loadFile(path.join(__dirname, '../index.html'));
	mainWindow.webContents.openDevTools(); //devtools for use if needed

	//Quit the application
	ipcMain.on('quit-app', () => {

		app.quit();

	});

	//Maximize/unmazimize the application
	ipcMain.on('maximize-app', () => {

		if (!mainWindow.isMaximized()) 
			mainWindow.maximize();       
		else 
			mainWindow.unmaximize();

	});

	//Minimize application
	ipcMain.on('minimize-app', () => {

		mainWindow.minimize();    
		
	});
	
};

//When the application is ready
app.on('ready', createWindow);

app.on('window-all-closed', () => {

	if (process.platform !== 'darwin') 
		app.quit();

});

app.on('activate', () => {

  	if (mainWindow === null) createWindow();

});