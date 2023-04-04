//Frame Buttons
document.getElementById('min-btn').addEventListener('click', () => { api.send('minimize-app'); });
document.getElementById('max-btn').addEventListener('click', () => { api.send('maximize-app'); });
document.getElementById('close-btn').addEventListener('click', () => { api.send('quit-app'); });

//NAV, server package api buttons
document.addEventListener('DOMContentLoaded', () => {               //server, homepage calls on start
    api.send('server');
});
