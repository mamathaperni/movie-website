
document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    // Delete movie
    list.addEventListener('click', (e) => {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.remove(); 
        }
    });

    // Add movie
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Creating elements
        const value = addForm.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // Add text content 
        movieName.textContent = value;
        deleteBtn.textContent = 'delete';

        // Add classes
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

        // Append to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        // Clear the input field after adding the movie
        addForm.querySelector('input[type="text"]').value = '';
    });
});
