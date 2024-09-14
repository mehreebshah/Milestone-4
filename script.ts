const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const resumeHTML = `
        <h1><b>Editable Resume</b></h1>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong><span contenteditable = "true"> ${name}</span></p>
        <p><strong>Email:</strong><span contenteditable = "true"> ${email}</span></p>
        <p><strong>Phone:</strong><span contenteditable = "true"> ${phone}</span></p>
       
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        
        <h3>Work Experience</h3>
        <p contenteditable="true">${workExperience}</p>
        
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});
