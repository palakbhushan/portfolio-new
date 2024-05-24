document.addEventListener('DOMContentLoaded', () => {
    const aboutContent = `Enthusiastic Full-Stack Developer and AWS Specialist with two years of hands-on experience. Proficient in JavaScript and MongoDB, adept at resolving challenges and streamlining processes. Skilled in React and Node.js for scalable web application development. Demonstrated ability in AWS deployment and infrastructure management.`;

    const experienceContent = `
        <div class="job">
            <h3>Software Engineer</h3>
            <p>Revfin, Delhi, India | 06/2022 - Present</p>
            <ul>
                <li>Recipient of the Monthly Smasher Award for exceptional contributions.</li>
                <li>Proficient in Node.js and JavaScript for backend development.</li>
                <li>Leveraged AWS services for scalable solutions.</li>
                <li>Reduced loan disbursement process time significantly.</li>
                <li>Refactored intricate legacy fintech code, enhancing system reliability by 20%.</li>
            </ul>
        </div>
    `;

    const projectsContent = `
        <div class="project">
            <h3>Project Name</h3>
            <p>Description of the project and key achievements.</p>
        </div>
    `;

    const certificationsContent = `
        <div class="certification">
            <h3>Certification Name</h3>
            <p>Details about the certification.</p>
        </div>
    `;

    const achievementsContent = `
        <div class="achievement">
            <h3>Achievement Name</h3>
            <p>Description of the achievement.</p>
        </div>
    `;

    document.getElementById('about-content').innerHTML = aboutContent;
    document.getElementById('experience-content').innerHTML = experienceContent;
    document.getElementById('projects-content').innerHTML = projectsContent;
    document.getElementById('certifications-content').innerHTML = certificationsContent;
    document.getElementById('achievements-content').innerHTML = achievementsContent;
});
