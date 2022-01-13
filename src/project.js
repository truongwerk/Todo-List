import { getTodo, setTodo, getProject, setProject } from ".";
import changeMode from ".";
import displayTask from "./display";
export default projectFunction;

function projectFunction() {
	showTaskProject();
	projectSubmit();
	displayProject();
}

//Add project
function showTaskProject() {
	const projectForm = document.getElementById("projectForm");
	const addProjectButton = document.getElementById("addProjectButton");
	addProjectButton.addEventListener("click", function () {
		projectForm.style.display = "flex";
	});
	window.addEventListener("click", function (e) {
		if (e.target == projectForm) {
			projectForm.style.display = "none";
		}
	});
}

function projectSubmit() {
	let moduleProject = getProject();
	const newProjectForm = document.getElementById("newProjectForm");
	newProjectForm.addEventListener("submit", function () {
		const project = document.getElementById("inputProject").value;
		let overlaps = false;
		for (let i = 0; i < moduleProject.length; i++) {
			if (project == moduleProject[i]) {
				overlaps = true;
			}
		}
		if (overlaps) {
			alert("That project already exists");
			document.getElementById("inputProject").value = null;
		} else {
			moduleProject.push(project);
			setProject(moduleProject);
			window.localStorage.setItem("project", JSON.stringify(moduleProject));
			document.getElementById("inputProject").value = null;
			projectForm.style.display = "none";
			displayProject();
		}
	});
}

function displayProject() {
	let moduleProject = getProject();
	const project = document.getElementById("project");
	removeAllChildNodes(project);
	for (let i = 0; i < moduleProject.length; i++) {
		const projectButton = document.createElement("div");
		projectButton.className = "menuButton projectButton";
		projectButton.id = "project" + i;
		project.appendChild(projectButton);
		const projectIcon = document.createElement("img");
		projectIcon.className = "menuIcon";
		projectIcon.src = "images/projectIcon.svg";
		projectIcon.alt = "projectIcon";
		projectButton.appendChild(projectIcon);
		const projectContent = document.createElement("p");
		projectContent.className = "menuText";
		projectContent.innerText = moduleProject[i];
		projectButton.appendChild(projectContent);
		const projectDeleteIcon = document.createElement("img");
		projectDeleteIcon.className = "projectDeleteIcon";
		projectDeleteIcon.dataset.project = i;
		projectDeleteIcon.src = "images/deleteIcon.svg";
		projectButton.appendChild(projectDeleteIcon);
	}
	changeMode();
	projectDelete();
}

function projectDelete() {
	const deleteIcon = document.querySelectorAll(".projectDeleteIcon");
	deleteIcon.forEach((element) => {
		element.addEventListener("click", function () {
			let moduleTodo = getTodo();
			let moduleProject = getProject();
			if (
				confirm("Delete " + moduleProject[element.dataset.project] + "?") ==
				true
			) {
				for (let i = 0; i < moduleTodo.length; i++) {
					if (moduleTodo[i].project == moduleProject[element.dataset.project]) {
						moduleTodo.splice(i, 1);
					}
				}
				moduleProject.splice(element.dataset.project, 1);
				setProject(moduleProject);
				setTodo(moduleTodo);
				window.localStorage.setItem("myTodo", JSON.stringify(moduleTodo));
				window.localStorage.setItem("project", JSON.stringify(moduleProject));
				displayProject();
			}
		});
	});
}

//Remove old project
function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
