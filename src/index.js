document.addEventListener('DOMContentLoaded', () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const c = document.querySelector('input#searchByID');

    fetch(`http://localhost:3000/movies/${c.value}`)
    .then(response => response.json())
    .then(data => {
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');

      title.innerText = data.title;
      summary.innerText = data.summary;
    });
  });
})
