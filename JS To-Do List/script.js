$().ready(function () {
    let userInput = []
    let storage = JSON.parse(localStorage.getItem('list'));
    if (storage) {
        userInput = storage;
    } else if (!storage) {
        userInput = []
    }

    const storeList = function (){
        localStorage.setItem('list', JSON.stringify(userInput));
    }

    const addItem = function () {
        let html = "";
        let idNum = 0;
        userInput.forEach(item => {
            html += `<li class="list-check">
                    <input class="checked item" type="checkbox"><span>${item}</span>
                      <button id="btn${idNum + 1}" class="deleteBtn"><i class="far fa-minus-square" id=""></i></button>
                    </li>`
        });
        return html;
    }
    $('#list').html(addItem(userInput))

    $('#button-add-todo').click(function (e) {
        e.preventDefault()
        const listInput = $('#listInput');
        console.log(listInput.val().length)
        if (listInput.val().length <= 0) {
            alert('Nothing to add')
        } else {
            userInput.push(listInput.val().charAt(0).toUpperCase() + listInput.val().slice(1));
            listInput.val(" ")
            storeList()
        }
        $('#list').empty().html(addItem(userInput))
        location.reload();
    })

    $('#listInput').keypress(function (e) {
        if (e.key === 'Enter') {
            $('#button-add-todo').click();
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

    $('#list .checked').on('change', function () {
        const index = $('.checked').index(this)
        if (this.checked) {
            $('#list li').eq(index).css('background-color', 'green')
        } else if (this.checked === false) {
            $('#list li').css('background-color', 'white')
        }
    })
    $('.deleteBtn').click(function () {
        const deleteBtnIndex = $('.deleteBtn').index(this)
        $('#list li').eq(deleteBtnIndex).remove()
        userInput.splice(deleteBtnIndex,1)
        storeList()
    })
})



