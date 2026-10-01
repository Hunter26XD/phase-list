const phases = [
    {
        day: 1,
        title: "HTML",
        description: "Learn the basics of HTML"
    },
    {
        day: 2,
        title: "CSS",
        description: "Learn CSS Box Model and Flexbox"
    },
    {
        day: 3,
        title: "Git",
        description: "Learn Git basics"
    },
    {
        day: 4,
        title: "GitHub",
        description: "Learn Git remote and GitHub Pages"
    },
    {
        day: 5,
        title: "JavaScript",
        description: "Learn JavaScript basics"
    },
];

const phaseList = document.getElementById("phase-list");

phases.forEach(phase => {
    phaseList.innerHTML += `
        <div class="phase-item">
            <h3>Day ${phase.day} - ${phase.title}</h3>
            <p>${phase.description}</p>
            <button>Complete</button>
        </div>
    `;
});