import { getTodo, setTodo, setProject } from ".";
import addDays from "date-fns/addDays";
export default makeTestTodo;

function makeTestTodo() {
	let moduleTodo = getTodo();
	const loadTestButton = document.getElementById("loadTestButton");
	loadTestButton.addEventListener("click", function () {
		let a = new Date().toISOString().split("T")[0];
		console.log(moduleTodo[0].targetDate);
		console.log(a);
	});
}

let testTodo = [];
function todo(task, targetDate, description, project) {
	this.task = task;
	this.targetDate = targetDate;
	this.description = description;
	this.project = project;
	this.completed = false;
}
