const input = document.getElementById('input-box');
const button = document.getElementById('btn');
const list = document.getElementById('list-container');

button.addEventListener('click', function addTask() {
    if(input.value === '') {
        alert('Write something!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);

        let editButton = document.createElement('button');
        editButton.innerHTML = '&#x270E';
        editButton.className = 'edit-btn';
        li.appendChild(editButton);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
})

list.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    } else if(event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
    } else if (event.target.classList.contains('edit-btn')) {
        editTask(event.target.parentElement);
    } else {
        false;
    }
})

function editTask(li) {
    const currentText = li.firstChild.textContent;
    const newText = prompt('Edit task:', currentText);

    if (newText !== null) {
        li.firstChild.textContent = newText;
    }
}