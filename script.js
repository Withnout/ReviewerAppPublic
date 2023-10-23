const serverURL = 'http://192.168.1.6:3000'

async function postRequest(route='', body={}){
    try {
        const response = await fetch(route, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if (!response.ok) {
            document.getElementById('result').innerText = 'error'
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        document.getElementById('result').innerText = JSON.stringify(data)
        return data
    } catch (err) {
        console.log(err)
    }   
}