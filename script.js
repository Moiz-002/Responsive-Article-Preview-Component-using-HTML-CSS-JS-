const share_button = document.querySelector(".share-button");
const share_options = document.querySelector(".share-options");

share_button.addEventListener('click', (event) =>{
    share_options.classList.toggle('hidden');
})