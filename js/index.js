var nameBtn = document.getElementById("name");
var projectBtn = document.getElementById("projects");
var nameGroup = document.getElementById("about-group");
var projectGroup = document.getElementById("project-group");
var currentTab = "name";

nameBtn.style.color = "#EEE";
projectGroup.style.display = "none";

nameBtn.addEventListener("click", function() {
  if (currentTab != "name") {
    currentTab = "name";
    projectGroup.style.display = "none";
    nameGroup.style.display = "";
    nameBtn.style.color = "#EEE";
    projectBtn.style.color = "";
  }
});

projectBtn.addEventListener("click", function() {
  if (currentTab != "project") {
    currentTab = "project";
    projectGroup.style.display = "";
    nameGroup.style.display = "none";
    nameBtn.style.color = "";
    projectBtn.style.color = "#EEE";
  }
});