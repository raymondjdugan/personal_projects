const addItemBtn = document.getElementById('button-add');
const input = document.getElementById("listInput");
const ulEl = document.getElementById('list');


function addItem(userToDo) {

    const listLength = document.getElementById('list').children.length;
    console.log(listLength)

    const listItem = `
        <li class="list-item">
            <div class="form-check ml-1">
                <input class="form-check-input " type="checkbox" id="list${listLength + 1}">
                    <label class="form-check-label" for="list${listLength + 1}">
                        ${userToDo}
                    </label>
            </div>
        </li>`

    ulEl.insertAdjacentHTML("afterbegin", listItem);
}

addItemBtn.addEventListener('click', function getInputValue(e) {
    e.preventDefault();

    let inputValue = input.value;

    addItem(inputValue)

    input.value = '';


})

input.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addItemBtn.click();
    }
});


