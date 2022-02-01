$(document).ready(function () {

    let userInput = []
    let storage = JSON.parse(localStorage.getItem('list'));

    console.log($('#list li'))
    if (storage) {
        userInput = storage;
    } else if (!storage) {
        userInput = []
    }
    $('#list').html(addItem(userInput))

    function addItem() {
        let html = "";
        let idNum = 0;
        userInput.forEach(item => {
            html += `<li class="list-check item${idNum += 1}"><input class="checked item${idNum += 1}" type="checkbox">${item}</li>`
        });
        return html;
    };
    $('#button-add').click(function (e) {
        const listInput = $('#listInput');
        userInput.push(listInput.val());
        console.log(userInput)
        listInput.val(" ")
        localStorage.setItem('list', JSON.stringify(userInput));
        $('#list').html(addItem(userInput))

    })
    $('#listInput').keypress(function (e) {
        if (e.key === 'Enter') {
            $('#button-add').click();
        }
    })

    $('#date').html(function () {
        const lang = navigator.language;
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return new Intl.DateTimeFormat(lang, options).format()
    });

    $('.checked').on('change', function () {
        if (this.checked) {
            $('#list li').css('background-color', 'black')
        } else if (this.checked === false) {
            $('#list li').css('background-color', 'white')
        }
    })

})


function delBtn(collection) {

}


// Event Listeners



