const DATE_HTML = document.querySelector("#date");
const LIST_HTML = document.querySelector("#list");
const INPUT_HTML = document.querySelector("#input");

const CHECK_STYLE = "fa-check-circle";
const UNCHECK_STYLE = "fa-circle-thin";
const LINE_THOUGH_STYLE = "lineThrough";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const today = new Date();
DATE_HTML.innerHTML = today.toLocaleString("en-US", options);

let todoItems = [];
let id = 0;
// get value from local storage
let data = localStorage.getItem("TODO");
// check if data not empty
if (data) {
  // covert to json
  todoItems = JSON.parse(data);
    // update current id
  id = todoItems.length;
    // update HTML
      updateList();
}

document.addEventListener("keyup", event => {
	if (event.code === "Enter") {
    const inputValue = INPUT_HTML.value;

    if (inputValue != null) {
      // 1. add the todo
      addTodo(inputValue)
      // 2.  Clear input
      clearInput();
    }
  }
});

function clearInput() {
	INPUT_HTML.value = "";
}

function addTodo(todoName) {
  //1. push value to array
  todoItems.push({name: todoName, id : id, done: false});
  //2. Increment id
  id++;
  //3. save JSON
  saveJson() 
  // 4. update html
	updateList();
}

function updateList() {
  let code = "";
  for(let item of todoItems) {
    code += `<li class="item">
        <i class="fa ${item.done ? CHECK_STYLE : UNCHECK_STYLE} co" job="complete" id="${item.id}"></i>
        <p class="text ${item.done ? LINE_THOUGH_STYLE: "" }">${item.name}</p>
        <i class="fa fa-trash-o de" job="delete" id="${item.id}"></i>
    </li>`;
  LIST_HTML.innerHTML = code;
  
  }
}

function saveJson() {
   localStorage.setItem("TODO", JSON.stringify(todoItems));
}