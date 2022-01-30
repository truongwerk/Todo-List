import { getTodo, setTodo, getProject, getMode } from ".";
import displayTask from "./display";
export default taskFunction;

//Task function
function taskFunction() {
	let moduleTodo = getTodo();
	const task = document.querySelectorAll(".taskButton");
	task.forEach((element) => {
		showSubContent(element.dataset.task);
	});
	deleteTask(moduleTodo);
	completeTask(moduleTodo);
	editTask();
}

//Show and hide sub content
function showSubContent(i) {
	const taskContent = document.getElementById("task" + i + "Content");
	const taskDueDate = document.getElementById("task" + i + "DueDate");
	const subContent = document.getElementById("task" + i + "Sub");
	taskContent.onclick = show;
	taskDueDate.onclick = show;
	function show() {
		if (subContent.className == "subContent") {
			subContent.className = "subContentShow";
		} else {
			subContent.className = "subContent";
		}
	}
}

//Delete task
function deleteTask(moduleTodo) {
	const deleteIcon = document.querySelectorAll(".deleteIcon");
	deleteIcon.forEach((element) => {
		element.onclick = function () {
			moduleTodo.splice(element.dataset.task, 1);
			setTodo(moduleTodo);
			window.localStorage.setItem("myTodo", JSON.stringify(moduleTodo));
			displayTask(moduleTodo, getMode(), getProject());
			taskFunction();
		};
	});
}

//complete task
function completeTask(moduleTodo) {
	const completeIcon = document.querySelectorAll(".completeIcon");
	completeIcon.forEach((element) => {
		element.onclick = function () {
			if (moduleTodo[element.dataset.task].completed == false) {
				moduleTodo[element.dataset.task].completed = true;
			} else {
				moduleTodo[element.dataset.task].completed = false;
			}
			setTodo(moduleTodo);
			window.localStorage.setItem("myTodo", JSON.stringify(moduleTodo));
			displayTask(moduleTodo, getMode(), getProject());
			taskFunction();
		};
	});
}

function editTask() {
	const editForm = document.getElementById("editForm");
	const editIcon = document.querySelectorAll(".editIcon");
	editIcon.forEach((element) => {
		element.onclick = function () {
			updateEditForm(element.dataset.task);
			editForm.style.display = "flex";
		};
	});
	window.onclick = function (e) {
		if (e.target == editForm) {
			editForm.style.display = "none";
		}
	};
}

function updateEditForm(i) {
	let moduleTodo = getTodo();
	const editTask = document.getElementById("editTask");
	editTask.value = moduleTodo[i].task;
	const editDate = document.getElementById("editDate");
	editDate.value = moduleTodo[i].targetDate;
	const editDescription = document.getElementById("editDescription");
	editDescription.value = moduleTodo[i].description;
	const editProject = document.getElementById("editProject");
	updateProject(moduleTodo[i].project);
	const editTaskForm = document.getElementById("editTaskForm");
	editTaskForm.onsubmit = function () {
		moduleTodo[i].task = editTask.value;
		moduleTodo[i].targetDate = editDate.value;
		moduleTodo[i].description = editDescription.value;
		moduleTodo[i].project = editProject.value;
		setTodo(moduleTodo);
		window.localStorage.setItem("myTodo", JSON.stringify(moduleTodo));
		displayTask(moduleTodo, getMode(), getProject());
		taskFunction();
		document.getElementById("editForm").style.display = "none";
		return false;
	};
}

//Update project
function updateProject(oldProject) {
	let moduleProject = getProject();
	const editProject = document.getElementById("editProject");
	removeAllChildNodes();
	for (let i = 0; i < moduleProject.length; i++) {
		const project = document.createElement("option");
		project.value = moduleProject[i];
		project.innerText = moduleProject[i];
		project.classList = "projectEdit";
		editProject.appendChild(project);
	}
	editProject.value = oldProject;
}
function removeAllChildNodes() {
	const project = document.querySelectorAll(".projectEdit");
	project.forEach((element) => {
		element.parentNode.removeChild(element);
	});
}
