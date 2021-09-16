// get Element
const skills_holder = document.getElementById('skills');

// ES6

// ES6
const yourSkills = ['Web Development', 'Back-End', 'Front-End'];

// add skills
// yourSkills.push('Dev Ops');

let parent = '<ul>';

yourSkills.forEach((skill) => {
    parent += '<li>' + skill + '</li>';
    console.log(`${skill}`);
});

parent += '</ul>';
skills_holder.innerHTML = parent;