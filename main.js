const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const nameButtons = document.getElementById('name-buttons');
 
nameForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = nameInput.value;
    if (!name)  return;
    const button = document.createElement('button');
    button.innerText = name;
    nameButtons.appendChild(button);
    nameInput.value = '';
});
 

 nameButtons.addEventListener('click', function(e) {
    if (e.target.matches('button')) {
      console.log(` you clicked ${e.target.innerText}  `);
    }
  });