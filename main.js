// get Element
const skills_holder = document.getElementById('skills');

// ES6

// ES6
const yourSkills = ['Web Development', 'Back-End', 'Front-End'];

yourSkills.forEach((skill) => {
    console.log(`${skill}`);
});

const printSkills = yourSkills.map(skill => {
    return skill;
});

skills_holder.innerHTML = yourSkills;