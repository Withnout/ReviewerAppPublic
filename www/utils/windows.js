function initialWindow(windowID) {
    document.getElementById(windowID).style.display = 'flex'
}

function initialTab(tabName) {
    const tabID = tabName + 'Tab'
    const tabButtonID = tabName + 'Button'

    document.getElementById(tabID).style.display = 'flex'
    document.getElementById(tabButtonID).style.borderTop = '4px solid var(--primary)'
}

function gotoTab(tabName) {
    // Button
    const tabButtonID = tabName + 'Button'
    const tabButton = document.getElementById(tabButtonID)
    tabButton.style.borderTop = '4px solid var(--primary)'

    document.querySelectorAll('.navbarButton').forEach(btn => {
        if (btn.id != tabButtonID)
            btn.style.borderTop = '1px solid gray'
    })

    // Tab
    const tabID = tabName + 'Tab'
    document.querySelectorAll('.tab').forEach(tab => {
        tab.style.display = 'none'
    })
    document.getElementById(tabID).style.display = 'flex'
}
function generateID() {
    const length = 16
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
    }
    return result;
}


function writeData() {
    localStorage.setItem('userID', generateID())
}
function readData() {
    document.getElementById('localStorage').innerText = JSON.stringify(localStorage)
}
function deleteData() {
    localStorage.removeItem('userID')
}
