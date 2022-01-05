// Display and hide Task Form
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

let myTodo = [];

// Add Task
function todo(task, targetDate, description, project) {
	this.task = task;
	this.targetDate = targetDate;
	this.description = description;
	this.project = project;
}

const newTaskForm = document.getElementById("newTaskForm");
newTaskForm.addEventListener("submit", submitNewTodo);
function submitNewTodo() {
	const task = document.getElementById("inputTask").value;
	const targetDate = document.getElementById("inputDate").value;
	const description = document.getElementById("inputDescription").value;
	const project = document.getElementById("addToProject").value;
	const newTodo = new todo(task, targetDate, description, project);
	myTodo.push(newTodo);
	taskForm.style.display = "none";
	document.getElementById("inputTask").value = null;
	document.getElementById("inputDate").value = null;
	document.getElementById("inputDescription").value = null;
	document.getElementById("addToProject").value = null;
	console.table(myTodo);
}
