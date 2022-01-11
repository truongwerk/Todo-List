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
}

//Show and hide sub content
function showSubContent(i) {
	const taskContent = document.getElementById("task" + i + "Content");
	const taskDueDate = document.getElementById("task" + i + "DueDate");
	const subContent = document.getElementById("task" + i + "Sub");
	taskContent.addEventListener("click", show);
	taskDueDate.addEventListener("click", show);
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
		element.addEventListener("click", function () {
			moduleTodo.splice(element.dataset.task, 1);
			setTodo(moduleTodo);
			window.localStorage.setItem("myTodo", JSON.stringify(moduleTodo));
			displayTask(moduleTodo, getMode(), getProject());
			taskFunction();
		});
	});
}

//complete task
function completeTask(moduleTodo) {
	const completeIcon = document.querySelectorAll(".completeIcon");
	completeIcon.forEach((element) => {
		element.addEventListener("click", function () {
			if (moduleTodo[element.dataset.task].completed == false) {
				moduleTodo[element.dataset.task].completed = true;
			} else {
				moduleTodo[element.dataset.task].completed = false;
			}
			window.localStorage.setItem("myTodo", JSON.stringify(moduleTodo));
			displayTask(moduleTodo, getMode(), getProject());
			setTodo(moduleTodo);
			taskFunction();
		});
	});
}
