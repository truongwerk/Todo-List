import displayTask from "./display";
import { showTaskForm, taskSubmit } from "./taskForm";
import showSubContent from "./taskFunction";

let myTodo = [];
let mode = "allButton";
let project = ["Coding"];
if (window.localStorage.getItem("myTodo")) {
	myTodo = JSON.parse(window.localStorage.getItem("myTodo"));
}
displayTask(myTodo, mode, project);
taskFunction();

//Change display mode
const menuButton = document.querySelectorAll(".menuButton");
for (let i = 0; i < menuButton.length; i++) {
	menuButton[i].addEventListener("click", function () {
		for (let i = 0; i < menuButton.length; i++) {}
		mode = menuButton[i].id;
		displayTask(myTodo, mode, project);
		taskFunction();
	});
}

//Add task
showTaskForm();
const newTaskForm = document.getElementById("newTaskForm");
newTaskForm.addEventListener("submit", submitNewTodo);
function submitNewTodo() {
	myTodo.push(taskSubmit());
	displayTask(myTodo, mode, project);
	console.table(myTodo);
	taskFunction();
	window.localStorage.setItem("myTodo", JSON.stringify(myTodo));
	console.log(localStorage);
}

//Task function
function taskFunction() {
	const task = document.querySelectorAll(".taskButton");
	task.forEach((element) => {
		showSubContent(element.id[4]);
	});
}
