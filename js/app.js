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
DATE_HTML.innerHTML = today.toLocaleDateString("en-US", options);

document.addEventListener("keyup", event => {
	if(event.code === 'Enter'){
		const TODOS = InputElement.value;
		if(TODOS != "") {
			console.log(TODOS);
			clearInput();
		}
	}
	
});

function clearInput() {
      InputElement.value = "";
}