export default showSubContent;

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
