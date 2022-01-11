import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import isSameWeek from "date-fns/isSameWeek";
export default displayTask;

function displayTask(myTodo, mode, project) {
	const task = document.getElementById("task");
	const menuButton = document.querySelectorAll(".menuButton");
	for (let i = 0; i < menuButton.length; i++) {
		menuButton[i].style.color = null;
		menuButton[i].style.borderColor = null;
	}
	let highlightButton = document.getElementById(mode);
	if (highlightButton == null) {
		highlightButton = document.getElementById("allButton");
		mode = "allButton";
	}
	highlightButton.style.color = "red";
	highlightButton.style.borderColor = "orange";
	removeAllChildNodes(task);
	switch (mode) {
		case "allButton":
			displayAll(myTodo);
			break;
		case "todayButton":
			displayToday(myTodo);
			break;
		case "thisWeekButton":
			displayThisWeek(myTodo);
			break;
		default:
			displayProjectTask(myTodo, project[mode.slice(7)]);
			break;
	}
}

//Display mode All
function displayAll(myTodo) {
	for (let i = 0; i < myTodo.length; i++) {
		displayEachTask(myTodo[i], i);
	}
}

//Display mode today
function displayToday(myTodo) {
	for (let i = 0; i < myTodo.length; i++) {
		if (new Date().getDate() == new Date(myTodo[i].targetDate).getDate()) {
			displayEachTask(myTodo[i], i);
		}
	}
}

//Display mode week
function displayThisWeek(myTodo) {
	for (let i = 0; i < myTodo.length; i++) {
		if (isSameWeek(new Date(), new Date(myTodo[i].targetDate))) {
			displayEachTask(myTodo[i], i);
		}
	}
}

//Display Project
function displayProjectTask(myTodo, project) {
	for (let i = 0; i < myTodo.length; i++) {
		if (myTodo[i].project == project) {
			displayEachTask(myTodo[i], i);
		}
	}
}

//Remove old task
function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

// Display  Each Task
function displayEachTask(todo, i) {
	let taskButton = document.createElement("div");
	taskButton.className = "taskButton";
	taskButton.dataset.task = i;
	taskButton.id = "task" + i;
	task.appendChild(taskButton);

	// Create main content
	let mainContent = document.createElement("div");
	mainContent.className = "mainContent";
	mainContent.id = "task" + i + "Main";
	taskButton.appendChild(mainContent);

	let taskComplete = document.createElement("img");
	taskComplete.className = "completeIcon";
	taskComplete.id = "task" + i + "Complete";
	taskComplete.dataset.task = i;
	if (todo.completed == true) {
		taskComplete.src = "images/checkIcon.svg";
		taskComplete.alt = "checkIcon";
		taskButton.style.borderColor = "green";
	} else {
		taskComplete.src = "images/uncheckIcon.svg";
		taskComplete.alt = "uncheckIcon";
	}
	mainContent.appendChild(taskComplete);

	let taskProject = document.createElement("p");
	taskProject.className = "taskProject";
	taskProject.id = "task" + i + "Project";
	taskProject.innerText = todo.project;
	mainContent.append(taskProject);

	let taskContent = document.createElement("p");
	taskContent.className = "taskContent";
	taskContent.id = "task" + i + "Content";
	taskContent.innerHTML = todo.task;
	mainContent.appendChild(taskContent);

	//Due date, overdue
	let taskDueDate = document.createElement("p");
	taskDueDate.className = "taskDueDate";
	taskDueDate.id = "task" + i + "DueDate";

	let dueDate = differenceInCalendarDays(new Date(todo.targetDate), new Date());
	if (dueDate > 1 && todo.completed == false) {
		taskDueDate.innerText = dueDate + "days";
	}
	if (dueDate == 0 && todo.completed == false) {
		taskDueDate.innerText = "Today";
		taskButton.style.borderColor = "#FF8C00";
	}
	if (dueDate == 1 && todo.completed == false) {
		taskDueDate.innerText = "Tomorrow";
		taskButton.style.borderColor = "	#FFFF66";
	}
	if (dueDate < 0 && todo.completed == false) {
		taskDueDate.innerText = dueDate + "days";
		taskButton.style.borderColor = "red";
	}

	mainContent.appendChild(taskDueDate);

	let deleteIcon = document.createElement("img");
	deleteIcon.className = "deleteIcon";
	deleteIcon.id = "task" + i + "Delete";
	deleteIcon.dataset.task = i;
	deleteIcon.src = "images/deleteIcon.svg";
	deleteIcon.alt = "deleteIcon";
	mainContent.appendChild(deleteIcon);

	// Create sub content
	let subContent = document.createElement("div");
	subContent.className = "subContent";
	subContent.id = "task" + i + "Sub";
	taskButton.appendChild(subContent);

	let targetEdit = document.createElement("div");
	targetEdit.className = "targetEdit";
	subContent.appendChild(targetEdit);

	let taskTargetDate = document.createElement("p");
	taskTargetDate.id = "task" + i + "TargetDate";
	// yyyy-mm-dd --> dd-mm-yyyy
	if (todo.targetDate != "") {
		let d = todo.targetDate;
		taskTargetDate.innerText =
			"Target Date: " +
			d[8] +
			d[9] +
			"-" +
			d[5] +
			d[6] +
			"-" +
			d[0] +
			d[1] +
			d[2] +
			d[3];
	} else {
		taskTargetDate.innerText = "Target Date: None";
	}
	targetEdit.appendChild(taskTargetDate);

	let editIcon = document.createElement("img");
	editIcon.className = "editIcon";
	editIcon.id = "task" + i + "Edit";
	editIcon.dataset.task = i;
	editIcon.src = "images/editIcon.svg";
	editIcon.alt = "editIcon";
	targetEdit.appendChild(editIcon);

	let taskDescription = document.createElement("p");
	taskDescription.id = "task" + i + "Description";
	taskDescription.innerText = "Description: " + todo.description;
	subContent.appendChild(taskDescription);
}
