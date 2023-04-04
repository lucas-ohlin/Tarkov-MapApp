const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(

    "api", {

        //Send the data between the two channels safely
        send: (channel, data) => {

            // whitelist channels
            let validChannels = ["minimize-app","maximize-app","quit-app",
                                "server"];

            if (validChannels.includes(channel)) 
                ipcRenderer.send(channel, data); 

        },
        //Recieve data between the two channels safely
        receive: (channel, data) => {

            let validChannels = [];
            
            if (validChannels.includes(channel)) 
                ipcRenderer.on(channel, data)
            
        }

    }

);