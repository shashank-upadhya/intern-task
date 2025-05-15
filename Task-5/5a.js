document.addEventListener('DOMContentLoaded', () => {
    const skillsData = [
        { name: 'JavaScript (ES6+)' },
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'Django' },
        { name: 'MongoDB' },
        { name: 'Chart.js' },
        { name: 'Tailwind CSS' },
        { name: 'Styled Components' },
        { name: 'Figma' },
        { name: 'ShadCN' },
        { name: 'Git' },
    ];

    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skillsData.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.classList.add('skill-card');
            const heading = document.createElement('h4');
            heading.textContent = skill.name;
            skillCard.appendChild(heading);
            skillsGrid.appendChild(skillCard);
        });
    }

    // Project Details Modal Logic
    const projectLinks = document.querySelectorAll('.project-link');
    const modal = document.getElementById('projectDetailsModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDetails = document.getElementById('modal-details');
    const modalLinks = document.getElementById('modal-links');
    const closeButton = document.querySelector('.close-button');

    const projectDetails = {
        'worldle': {
            title: 'Worldle Clone',
            details: `A daily geography guessing game inspired by Wordle, but focused on countries. Built using LeafletJS for interactive maps and the REST Countries API to fetch country data. Features include guessing based on country shape, distance and direction hints after each guess.`,
            liveDemo: '#', // Replace with your live demo link
            github: '#'   // Replace with your GitHub repository link
        },
        'github-analyzer': {
            title: 'GitHub User Analyzer',
            details: `A web application built with React and styled using ShadCN UI. It allows users to enter a GitHub username and get detailed insights into their profile, including statistics on repositories, languages used, and activity. Visualizations help to understand the data better.`,
            liveDemo: '#',
            github: '#'
        },
        'Cost of Living Analyzer': {
            title: 'Interactive Cost of Living Analyzer (React & Django API) ',
            details: `A dynamic React interface featuring interactive charts (Chart.js) to compare cost of living data fetched from a custom-built Django REST API. Utilized Tailwind CSS for responsive layouts.`,
            liveDemo: '#',
            github: '#'
        },
        'Evaluation of Lossy and Lossless Image Compression Methods': {
            title: 'Evaluation of Lossy and Lossless Image Compression Methods',
            details: `It implements image compression using Huffman coding, aiming to reduce file size by assigning shorter bit codes to more frequent pixel values. It includes standalone scripts for compression/decompression and a GUI for user-friendly interaction with these algorithms.`,
            liveDemo: '#',
            github: '#'
        }
    };

    projectLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const projectId = link.getAttribute('data-project');
            const details = projectDetails[projectId];

            if (details) {
                modalTitle.textContent = details.title;
                modalDetails.textContent = details.details;
                modalLinks.innerHTML = ''; // Clear previous links

                if (details.liveDemo) {
                    const liveDemoLink = document.createElement('a');
                    liveDemoLink.href = details.liveDemo;
                    liveDemoLink.textContent = 'Live Demo';
                    liveDemoLink.target = '_blank';
                    modalLinks.appendChild(liveDemoLink);
                }
                if (details.github) {
                    const githubLink = document.createElement('a');
                    githubLink.href = details.github;
                    githubLink.textContent = 'GitHub';
                    githubLink.target = '_blank';
                    modalLinks.appendChild(githubLink);
                }

                modal.style.display = 'block';
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');

        if (hamburgerBtn && navLinks) {
            hamburgerBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    });

        document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', e => {
        e.preventDefault();
        const key = link.dataset.project;
        const data = projectDetails[key];
        if (data) {
        modalTitle.textContent = data.title;
        modalDetails.innerHTML = `<p>${data.description}</p>`;
        document.getElementById('modal-links').innerHTML = `<a href="${data.link}" target="_blank">View Project</a>`;
        modal.style.display = 'block';
        }
        });
        });

closeButton.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Optional: Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';

            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required';
                isValid = false;
            }

            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                emailError.textContent = 'Invalid email format';
                isValid = false;
            }

            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required';
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});