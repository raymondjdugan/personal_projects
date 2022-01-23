const addItemBtn = document.getElementById('button-add');
const listInput = document.getElementById("listInput");
const listContainer = document.getElementById('list');
const removeBtn = document.getElementsByTagName("img");

let userInput = [];

function addItem(userToDo) {

    listContainer.innerHTML = '';

    userToDo.forEach(item => {

        const arrayLength = userToDo.length;

        const listItem = `
                  <li class="list-item">
                <div class="form-check d-flex ml-1">
                    <input class="form-check-input" type="checkbox" id="list${arrayLength + 1}">
                    <label class="form-check-label mr-auto" for="list${arrayLength + 1}">
                        ${item}
                    </label>
                        <img class="mr-2 " id="removeBtn" src="img/dash-circle.svg" alt="">
                </div>
            </li>`

        listContainer.insertAdjacentHTML("afterbegin", listItem);
    })
}

function delBtn(collection) {

}


// Event Listeners
addItemBtn.addEventListener('click', function getInputValue(e) {
    e.preventDefault();

    userInput.push(listInput.value);
    addItem(userInput);

    listInput.value = '';
    let labelValue = document.getElementsByTagName('label');
    console.log(removeBtn);
})

listInput.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addItemBtn.click();
    }
});



