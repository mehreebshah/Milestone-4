var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n        <h1><b>Editable Resume</b></h1>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong><span contenteditable = \"true\"> ".concat(name, "</span></p>\n        <p><strong>Email:</strong><span contenteditable = \"true\"> ").concat(email, "</span></p>\n        <p><strong>Phone:</strong><span contenteditable = \"true\"> ").concat(phone, "</span></p>\n       \n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        \n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\">").concat(workExperience, "</p>\n        \n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
