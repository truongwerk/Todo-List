import { getTodo, setTodo, getMode, getProject } from ".";
import taskFunction from "./taskFunction";
import displayTask from "./display";
export default taskForm;

function taskForm() {
	showTaskForm();
	taskSubmit();
}

// Display and hide Task Form
function showTaskForm() {
	const taskForm = document.getElementById("taskForm");
	const addTaskButton = document.getElementById("addTaskButton");
	addTaskButton.addEventListener("click", function () {
		taskForm.style.display = "flex";
	});
	window.addEventListener("click", function (e) {
		if (e.target == taskForm) {
			taskForm.style.display = "none";
		}
	});
}

//Add new todo
function taskSubmit() {
	let moduleTodo = getTodo();
	const newTaskForm = document.getElementById("newTaskForm");
	newTaskForm.addEventListener("submit", function () {
		submitNewTodo(moduleTodo);
	});
}

function submitNewTodo(moduleTodo) {
	moduleTodo.push(newFormValue());
	setTodo(moduleTodo);
	displayTask(moduleTodo, getMode(), getProject());
	taskFunction();
	window.localStorage.setItem("myTodo", JSON.stringify(moduleTodo));
	console.log(localStorage);
}

//function factory
function todo(task, targetDate, description, project) {
	this.task = task;
	this.targetDate = targetDate;
	this.description = description;
	this.project = project;
	this.completed = false;
}

function newFormValue() {
	const task = document.getElementById("inputTask").value;
	const targetDate = document.getElementById("inputDate").value;
	const description = document.getElementById("inputDescription").value;
	const project = document.getElementById("addToProject").value;
	const newTodo = new todo(task, targetDate, description, project);
	const taskForm = document.getElementById("taskForm");
	taskForm.style.display = "none";
	document.getElementById("inputTask").value = null;
	document.getElementById("inputDate").value = null;
	document.getElementById("inputDescription").value = null;
	document.getElementById("addToProject").value = null;
	return newTodo;
}
