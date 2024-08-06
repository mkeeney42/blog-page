const modeBtn = document.querySelector('#toggle')

function lightDark(mode){
    let icon;
    if (mode === 'light'){
        icon = '☀️';
    }
    else{
        icon = '🌒';
    }
    modeBtn.textContent = icon;
    document.body.classList= mode;
    console.log(mode)

}
function handleModeToggle(){
    const mode = localStorage.getItem('mode') || 'dark'
    let nextMode;
    if(mode === 'light'){
        nextMode = 'dark'
    }
    else{
        nextMode = 'light'
    }
    console.log('nextMode', nextMode)
    lightDark(nextMode)
    localStorage.setItem('mode', nextMode);
}

modeBtn.addEventListener('click', handleModeToggle)