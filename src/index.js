import displayTask from "./display";
import { showTaskForm, taskSubmit } from "./taskForm";
export default myTodo;

let myTodo = [];
let mode = "allButton";

//Change display mode
const menuButton = document.querySelectorAll(".menuButton");
for (let i = 0; i < menuButton.length; i++) {
	menuButton[i].addEventListener("click", function () {
		for (let i = 0; i < menuButton.length; i++) {
			menuButton[i].style.color = null;
			menuButton[i].style.borderColor = null;
		}
		mode = menuButton[i].id;
		menuButton[i].style.color = "red";
		menuButton[i].style.borderColor = "orange";
		displayTask(myTodo, mode);
	});
}

//Add task
showTaskForm();
const newTaskForm = document.getElementById("newTaskForm");
newTaskForm.addEventListener("submit", submitNewTodo);
function submitNewTodo() {
	myTodo.push(taskSubmit());
	displayTask(myTodo, mode);
	console.table(myTodo);
}
