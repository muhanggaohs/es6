// get Element
const skills_holder = document.getElementById('skills');

// ES6

// ES6
const yourSkills = ['Web Development', 'Back-End', 'Front-End'];

// filter
const myPrimarySkill = yourSkills.filter(skill => {
    return skill === "Web Development";
});

skills_holder.innerHTML = myPrimarySkill;