import displayTask from "./display";
import taskForm from "./form";
import taskFunction from "./taskFunction";
export const getTodo = () => myTodo;
export const setTodo = (newTodo) => (myTodo = newTodo);
export const getProject = () => project;
export const setProject = (newProject) => (project = newProject);
export const getMode = () => mode;
export const setMode = (newMode) => (mode = newMode);

//Load data
let myTodo = [];
let mode = "allButton";
let project = ["Coding"];
if (window.localStorage.getItem("myTodo")) {
	myTodo = JSON.parse(window.localStorage.getItem("myTodo"));
}
if (window.localStorage.getItem("project")) {
	project = JSON.parse(window.localStorage.getItem("project"));
}

// First display
displayTask(myTodo, mode, project);
taskFunction();
changeMode(myTodo);

//Add task
taskForm();

//Change display mode
function changeMode(myTodo) {
	const menuButton = document.querySelectorAll(".menuButton");
	for (let i = 0; i < menuButton.length; i++) {
		menuButton[i].addEventListener("click", function () {
			for (let i = 0; i < menuButton.length; i++) {}
			mode = menuButton[i].id;
			displayTask(myTodo, mode, project);
			taskFunction();
		});
	}
}
