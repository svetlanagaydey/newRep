
const button = document.querySelector('.button');
const resultField = document.querySelector('.result-field');

button.addEventListener('click', function() {
    let inputData = document.querySelector('.input-text').value;
    const urlForSearch = `https://api.github.com/users/${inputData}`;
    fetch(urlForSearch)

    .then((res) => res.json())
    .then((data) => createCard(data))
    
    //.catch((error) => console.log('what da fuck', error)) 
    //document.querySelector('.input-text').innerHTML='';
})

function createCard(data) {
    const resultBlock = document.createElement('div');
    resultBlock.classList.add('result-item');
    const htmlResult = `
        <a href="${data.url}">
            <img src="${data.avatar_url}" alt="avatar">
            <p class="userName">${data.login}</p>
            <p class="reposNumber"> have ${data.public_repos} public reposytories</p>
        </a>    
    `
    resultBlock.innerHTML = htmlResult;
    resultField.appendChild(resultBlock);
    console.log(data.avatar_url);
}


