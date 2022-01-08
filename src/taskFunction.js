export default showSubContent;



//Show and hide sub content
function showSubContent(i) {
	const taskContent = document.getElementById("task" + i + "Content");
	const subContent = document.getElementById("task" + i + "Sub");
	taskContent.addEventListener("click", function () {
		if (subContent.style.display == "none") {
			subContent.style.display = "block";
		} else {
			subContent.style.display = "none";
		}
	});
}
