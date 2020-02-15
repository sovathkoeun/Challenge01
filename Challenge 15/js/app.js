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
// add
const Element_Add = document.querySelector('#add')
        .addEventListener('click', function () {
          const inputValue = INPUT_HTML.value;

          if (inputValue != null) {
            // 1. add the todo
            addTodo(inputValue)
            // 2.  Clear input
            clearInput();
          }
        });

let todoItems = [];
let id = 0;
let data = localStorage.getItem("TODO");
if (data) {
  // 1. Update the list of items
  todoItems = JSON.parse(data);

  // 2. Update the current id
  id = todoItems.length;

  // 3. refresh the view
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
// TODO: get id and return value
function getTodoFromId(id) {
  for(let item of todoItems) {
    if(item.id === id) {
      return  item;
    }
  }
  return null;
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
  }
  LIST_HTML.innerHTML = code;
}

function saveJson() {
   localStorage.setItem("TODO", JSON.stringify(todoItems));
}

document.addEventListener("click", function(event) {
  const elementJob = event.target.attributes.job.value;
  const elementId = parseInt(event.target.id);

  if (elementJob == "complete") {
    completeToDo(elementId);
  } else if (elementJob == "delete") {
    removeToDo(elementId);
  }
});


function completeToDo(id) {
   // 1. Get the TODO from its ID
  let todo = getTodoFromId(id);

  if (todo != null) {
    // 2. Change the status of this todo
    todo.done = !todo.done;

    // 3. Save JSON
    saveJson();

    // 4. refresh html
    updateList();
  }
}	

function removeToDo(id) {
  // 1. Find index todo element from ID
  var index = -1;
  for(let i = 0; i < todoItems.length; i++) {
    if(todoItems[i].id === id){
      index = i;
    }
  }
  // remove
  if(index != -1) {
    todoItems.splice(index, 1);
  }
  saveJson();
  updateList();

}

