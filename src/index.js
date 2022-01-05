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
