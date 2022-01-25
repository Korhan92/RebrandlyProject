// Information to reach API
const apiKey = '4da2a3beaaf64841bad16cd6db1df2a5';
const url = 'https://api.rebrandly.com/v1/links';
const inputField = document.getElementById('input')
const button = document.getElementById('shorten')
const responseField = document.getElementById('responseField')




shortenUrl = () => {
    const urlToShorten = inputField.value
    const data = JSON.stringify({ destination: urlToShorten });
    let xhr = new XMLHttpRequest()
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {

        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
    
    }
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey);
    xhr.send(data);
 


}
// page elements

button.addEventListener('click', displayShortUrl )