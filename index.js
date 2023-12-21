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

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

    }
    input.value = '';
    saveData()
})

list.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveData()
    } else if(event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveData()
    } else {
        false;
    }
})