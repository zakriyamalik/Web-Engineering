document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    console.log("themeToggle element:", themeToggle);
    
    if (!themeToggle) {
      console.error("Theme toggle button not found!");
      return;
    }
    
    const toggleIcon = themeToggle.querySelector("i");
    console.log("toggleIcon element:", toggleIcon);
    
    if (!toggleIcon) {
      console.error("Toggle icon not found inside the theme toggle button!");
      return;
    }
  
    console.log("Initial theme:", localStorage.getItem("theme"));
  
    themeToggle.addEventListener("click", () => {
      console.log("Theme toggle button clicked.");
      document.body.classList.toggle("dark-mode");
      console.log("dark-mode active:", document.body.classList.contains("dark-mode"));
  
      if (document.body.classList.contains("dark-mode")) {
        console.log("Switching to dark mode");
        toggleIcon.classList.replace("fa-toggle-off", "fa-toggle-on");
        localStorage.setItem("theme", "dark");
      } else {
        console.log("Switching to light mode");
        toggleIcon.classList.replace("fa-toggle-on", "fa-toggle-off");
        localStorage.setItem("theme", "light");
      }
    });
  console.log("Initial theme:", localStorage.getItem("theme"));
  console.log("Before if statement:", document.body.classList.contains("dark-mode"));
    if (localStorage.getItem("theme") === "dark") {
      console.log("Applying saved dark mode.");
      document.body.classList.add("dark-mode");
      console.log("dark-mode active:", document.body.classList.contains("dark-mode"));
      toggleIcon.classList.replace("fa-toggle-off", "fa-toggle-on");
    }
  });
  