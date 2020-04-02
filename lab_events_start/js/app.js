
const handleFormSubmit = function (event) {
  event.preventDefault();

  const readingList = document.querySelector('#reading-list');

  const titleField = event.target.title.value;
  const authorField = event.target.author.value;
  const category = event.target.category.value;

  const newListItem = document.createElement('li');
  newListItem.textContent = `${titleField}, ${authorField}, ${category}`
  readingList.appendChild(newListItem);
}



document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

});
