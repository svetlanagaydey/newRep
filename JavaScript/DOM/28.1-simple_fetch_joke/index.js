const showJoke = () => {
    console.log("helo");
    fetch('https://api.jokes.one/jod', {
            headers: {
              Accept: 'application/json',
            }
    })
    .then((res) => res.json())
    .then ((data) => {
        console.log(data);
        let joke = `
            <h2 class="joke-title">${data.contents.jokes[0].joke.title}</h2>
            <div class="joke-body">${data.contents.jokes[0].joke.text}</div>`
        document.querySelector('.joke-field').innerHTML = joke;
    })
    .catch((e) => (document.querySelector('.joke-field').textContent = 'try again'));


}

const button = document.querySelector('#butt')
button.addEventListener('click', showJoke);
