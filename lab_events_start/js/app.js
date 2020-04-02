
const handleFormSubmit = function (event) {
  event.preventDefault();

  const resultParagrah = document.querySelector('#reading-list');

  const title = event.target.title.value;
  const author = event.target.author.value;

  resultParagraph.textContent = `${title}`;
  resultParagraph.textContent = `${author}`;
}

const handleSelectChange = function (event) {
  const resultParagrah = document.querySelector('#reading-list');
  resultParagrah.textContent = event.target.value;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const select = document.querySelector('#category');
  select.addEventListener('change', handleSelectChange);
});
