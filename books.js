document.addEventListener('DOMContentLoaded', function () {

    function getStatus() {
        const radios = document.querySelectorAll('input[name="status"]');
        for (let radio of radios) {
            if (radio.checked) {
                return radio.value;
            }
        }
    }

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        if (!this.checkValidity()) {
            alert('Please ensure all required fields are filled out!');
            return;
        }

        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let status = getStatus();

        let newRow = document.createElement('tr');

        newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${pages}</td>
        <td>${status}</td>
        <td><button class="delete-btn">X</button></td>
    `;

        document.querySelector('tbody').appendChild(newRow);

        newRow.querySelector('.delete-btn').addEventListener('click', function () {
            newRow.remove();
        });

        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        const radios = document.querySelectorAll('input[name="status"]');
        for (let radio of radios) {
            radio.checked = false;
        }
    });
});
