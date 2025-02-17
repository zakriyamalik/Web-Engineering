document.addEventListener("DOMContentLoaded", function() {
    var fullNameInput = document.getElementById("fullname1");
    var greetingMessage = document.createElement("p");
    greetingMessage.id = "greeting";
    greetingMessage.textContent = "Hi there! Please type your name above.";
    fullNameInput.parentNode.insertBefore(greetingMessage, fullNameInput.nextSibling);
  
    var charCountSpan = document.createElement("span");
    charCountSpan.id = "charCount";
    charCountSpan.style.marginLeft = "10px";
    charCountSpan.textContent = "0 characters";
    greetingMessage.parentNode.insertBefore(charCountSpan, greetingMessage.nextSibling);
  
    fullNameInput.addEventListener("input", function() {
      var currentName = fullNameInput.value;
      if (currentName.trim() === "") {
        greetingMessage.textContent = "Hi there! Please type your name above.";
      } else {
        greetingMessage.textContent = "Hello, " + currentName + "! Welcome to the student portal.";
      }
      var count = currentName.length;
      if (count === 1) {
        charCountSpan.textContent = count + " character";
      } else {
        charCountSpan.textContent = count + " characters";
      }
    });
  
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      var errorElements = document.querySelectorAll(".error");
      errorElements.forEach(function(element) {
        element.parentNode.removeChild(element);
      });
  
      var isFormValid = true;
      var requiredFields = [
        { id: "fullname1", label: "Full Name" },
        { id: "Rnum", label: "Roll Number" },
        { id: "cars", label: "Program" },
        { id: "emailAddr", label: "Email Address" },
        { id: "pwd", label: "Password" }
      ];
  
      requiredFields.forEach(function(field) {
        var element = document.getElementById(field.id);
        if (element.value.trim() === "") {
          isFormValid = false;
          var errorSpan = document.createElement("span");
          errorSpan.className = "error";
          errorSpan.style.color = "red";
          errorSpan.textContent = "Oops! " + field.label + " cannot be empty. Please enter a value.";
          element.parentNode.insertBefore(errorSpan, element.nextSibling);
        }
      });
  
      if (!isFormValid) {
        event.preventDefault();
      }
    });
  });
  



  document.addEventListener("DOMContentLoaded", function() {
    var themeLabel = document.createElement("label");
    themeLabel.setAttribute("for", "themeSelect");
    themeLabel.textContent = "Select Profile Theme:";
    var themeSelect = document.createElement("select");
    themeSelect.id = "themeSelect";
    var lightOption = document.createElement("option");
    lightOption.value = "light";
    lightOption.textContent = "Light";
    var darkOption = document.createElement("option");
    darkOption.value = "dark";
    darkOption.textContent = "Dark";
    var blueOption = document.createElement("option");
    blueOption.value = "blue";
    blueOption.textContent = "Blue";
    themeSelect.appendChild(lightOption);
    themeSelect.appendChild(darkOption);
    themeSelect.appendChild(blueOption);
    var container = document.getElementById("div13");
    container.insertBefore(themeLabel, container.firstChild);
    container.insertBefore(themeSelect, themeLabel.nextSibling);
    var toggleButton = document.createElement("button");
    toggleButton.id = "toggleDesc";
    toggleButton.textContent = "Toggle Profile Description";
    var profileDesc = container.querySelector("p");
    container.insertBefore(toggleButton, profileDesc.nextSibling);
    themeSelect.addEventListener("change", function() {
      var selectedTheme = themeSelect.value;
      if (selectedTheme === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      } else if (selectedTheme === "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      } else if (selectedTheme === "blue") {
        document.body.style.backgroundColor = "#3b5998";
        document.body.style.color = "white";
      }
    });
    toggleButton.addEventListener("click", function() {
      if (profileDesc.style.display === "none") {
        profileDesc.style.display = "block";
      } else {
        profileDesc.style.display = "none";
      }
    });
  });

  



  document.addEventListener("DOMContentLoaded", function(){
    var submitBtn = document.getElementById("submit");
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    var messageDiv = document.createElement("div");
    messageDiv.id = "messageDiv";
    var registrationDiv = document.getElementById("div1");
    registrationDiv.appendChild(messageDiv);
  
    var selectedCoursesDiv = document.createElement("div");
    selectedCoursesDiv.id = "selectedCoursesDiv";
    registrationDiv.appendChild(selectedCoursesDiv);
  
    var resetButton = document.createElement("button");
    resetButton.id = "resetButton";
    resetButton.textContent = "Reset Selections";
    registrationDiv.appendChild(resetButton);
  
    var courseMapping = {
      "C1": "AI",
      "C2": "DS",
      "C3": "OOP",
      "C4": "PF"
    };
  
    submitBtn.addEventListener("click", function(e) {
      e.preventDefault();
      messageDiv.innerHTML = "";
      selectedCoursesDiv.innerHTML = "";
      var selectedCourses = [];
      checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
          var courseName = courseMapping[checkbox.value] || checkbox.value;
          selectedCourses.push(courseName);
        }
      });
      if(selectedCourses.length === 0){
        var errorMsg = document.createElement("p");
        errorMsg.style.color = "red";
        errorMsg.textContent = "Please select at least one course.";
        messageDiv.appendChild(errorMsg);
        return;
      }
      var selectedMsg = document.createElement("p");
      selectedMsg.textContent = "Selected Courses: " + selectedCourses.join(", ");
      selectedCoursesDiv.appendChild(selectedMsg);
    });
  
    resetButton.addEventListener("click", function(){
      checkboxes.forEach(function(checkbox){
        checkbox.checked = false;
      });
      messageDiv.innerHTML = "";
      selectedCoursesDiv.innerHTML = "";
    });
  });
  