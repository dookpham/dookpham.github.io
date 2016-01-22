var nameBtn = document.getElementById("name");
var projectBtn = document.getElementById("projects");
var articlesBtn = document.getElementById("articles");
var nameGroup = document.getElementById("about-group");
var projectGroup = document.getElementById("project-group");
var articlesGroup = document.getElementById("articles-group");
var currentTab = "name";

nameBtn.style.color = "#EEE";
projectGroup.style.display = "none";
articlesGroup.style.display = "none";

nameBtn.addEventListener("click", function() {
  if (currentTab != "name") {
    currentTab = "name";
    projectGroup.style.display = "none";
    nameGroup.style.display = "";
    articlesGroup.style.display = "none";
    articlesBtn.style.color = "";
    nameBtn.style.color = "#EEE";
    projectBtn.style.color = "";
  }
});

projectBtn.addEventListener("click", function() {
  if (currentTab != "project") {
    currentTab = "project";
    projectGroup.style.display = "";
    nameGroup.style.display = "none";
    articlesGroup.style.display = "none";
    articlesBtn.style.color = "";
    nameBtn.style.color = "";
    projectBtn.style.color = "#EEE";
  }
});

articlesBtn.addEventListener("click", function() {
  if (currentTab != "articles") {
    currentTab = "articles";
    articlesGroup.style.display = "";
    projectGroup.style.display = "none";
    nameGroup.style.display = "none";
    articlesBtn.style.color = "#EEE";
    nameBtn.style.color = "";
    projectBtn.style.color = "";
  }
});