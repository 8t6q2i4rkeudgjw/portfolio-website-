// JavaScript for enhancing your portfolio website

// Handle navigation toggle for mobile view
const navItems = document.querySelector('.nav-items');
const navToggle = document.querySelector('.logo');

navToggle.addEventListener('click', () => {
  navItems.classList.toggle('active');
});

// Scroll to different sections of the page
const links = document.querySelectorAll('nav a');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionID = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionID);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Adjust for fixed nav height
        behavior: 'smooth',
      });
    }
  });
});

// Display project details
const projectDetails = [
  {
    title: 'Job Recommendation System',
    description: 'A machine learning-based system to match resumes with suitable jobs.',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A chat application with additional features like location sharing, multimedia messaging, and audio calling.',
  },
  {
    title: 'Expense Tracker',
    description:
      'A web application to track expenses built using JavaScript, SCSS, and a modern UI.',
  },
  {
    title: 'Audio Calling System',
    description:
      'A GUI-based system for initiating and managing audio calls, ideal for collaborative applications.',
  },
];

const projectsContainer = document.getElementById('projects-container');
if (projectsContainer) {
  projectDetails.forEach((project) => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';

    projectElement.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectsContainer.appendChild(projectElement);
  });
}

// Placeholder for advanced features (e.g., job recommendation system logic, chat functionalities)
document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded and ready!');
  // Add future functionalities here
});
