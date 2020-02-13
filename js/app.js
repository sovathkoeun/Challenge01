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

document.addEventListener("keyup", event => {
	if (event.code == "Enter") {
    const inputValue = INPUT_HTML.value;

    if (inputValue != null) {
       // 1. add the todo
    // TODO: call addTodo function
      addTodO(inputValue);
    // 2.  Clear input
      clearInput();
    }
  }
});

function clearInput() {
	INPUT_HTML.value = "";
}

function addTodO(todoName) {
  console.log(todoName);
	// TODO: console todoName
}