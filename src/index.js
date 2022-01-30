import displayTask from "./display";
import taskForm from "./form";
import taskFunction from "./taskFunction";
import projectFunction from "./project";
export const getTodo = () => myTodo;
export const setTodo = (newTodo) => (myTodo = newTodo);
export const getProject = () => project;
export const setProject = (newProject) => (project = newProject);
export const getMode = () => mode;
export default changeMode;

//Load data
let myTodo = [];
let mode = "allButton";
let project = [];
if (window.localStorage.getItem("myTodo")) {
	myTodo = JSON.parse(window.localStorage.getItem("myTodo"));
}
if (window.localStorage.getItem("project")) {
	project = JSON.parse(window.localStorage.getItem("project"));
}

// First display
taskForm();
displayTask(myTodo, mode, project);
taskFunction();
projectFunction();
changeMode();
mobileMenu();

//Change display mode
function changeMode() {
	const menuButton = document.querySelectorAll(".menuButton");
	for (let i = 0; i < menuButton.length; i++) {
		menuButton[i].addEventListener("click", function () {
			mode = menuButton[i].id;
			displayTask(myTodo, mode, project);
			taskFunction();
		});
	}
}

function mobileMenu() {
	const tabButton = document.getElementById("tabButton");
	const menu = document.getElementById("menu");
	tabButton.addEventListener("click", function () {
		if (menu.style.display == "none") {
			menu.setAttribute("style", "display:flex");
		} else {
			menu.setAttribute("style", "display:none");
		}
	});
}
