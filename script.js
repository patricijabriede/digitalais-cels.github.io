document.addEventListener('DOMContentLoaded', function() {
    // Dark mode functionality
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Check for saved theme preference or respect OS setting
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');

    // If the user previously selected a theme, use it
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        darkModeToggle.checked = true;
    } else if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        darkModeToggle.checked = false;
    } else {
        // If no saved preference, use system preference
        if (prefersDarkScheme.matches) {
            document.body.setAttribute('data-theme', 'dark');
            darkModeToggle.checked = true;
        }
    }

    // Listen for toggle changes
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Navigation functionality
    // Get all navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');

    // Add click event listener to each button
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the page id from the data attribute
            const pageId = this.getAttribute('data-page');

            // Remove active class from all pages and buttons
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });

            navButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button and corresponding page
            this.classList.add('active');
            document.getElementById(pageId).classList.add('active');

            // Scroll to top when changing pages
            window.scrollTo(0, 0);
        });
    });

    // Initialize the timeline visualization on the Mans stāsts page
    function initializeTimeline() {
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            // Example timeline data - this would be replaced with real data
            const timelineEvents = [
                { year: '2022', event: 'Sākums universitātē' },
                { year: '2022', event: 'Sāku interesēties par digitālajām prasmēm' },
                { year: '2023', event: 'Nācās izbaudīt, ko sniedz tiešsaistes studijas' },
                { year: '2024', event: 'Paplašināju zināšanas par to, ko sniedz rīki' },
                { year: '2025', event: 'Sāku palīdzēt kursabiedriem apgūt digitālos rīkus un izveidoju šo vietni kā daļu no studiju projekta' }
            ];

            // Create timeline visualization
            const timelineHtml = `
                <h4>Pieredzes laika līnija</h4>
                <div class="timeline-wrapper">
                    ${timelineEvents.map(event => `
                        <div class="timeline-item">
                            <div class="timeline-year">${event.year}</div>
                            <div class="timeline-connector"></div>
                            <div class="timeline-content">${event.event}</div>
                        </div>
                    `).join('')}
                </div>
            `;

            timeline.innerHTML = timelineHtml;
        }
    }

    // Initialize example content for personal experiences
    function initializePersonalInfo() {
        const personalInfo = document.querySelector('.personal-info');
        if (personalInfo) {
            const experiences = [
                'Attālināto studiju platformu izmantošana',
                'Digitālo resursu efektīva pielietošana',
                'E-studiju vides apgūšana',
                'Tiešsaistes sadarbība ar pasniedzējiem'
            ];

            const experienceHtml = `
                <h4>Personīgās pieredzes par digitālās vides priekšrocībām</h4>
                <ul class="experience-list">
                    ${experiences.map(exp => `
                        <li>${exp}</li>
                    `).join('')}
                </ul>
            `;

            personalInfo.innerHTML = experienceHtml;
        }
    }

    // Initialize digital journey stages
    function initializeJourneyStages() {
        const experience = document.querySelector('.experience');
        if (experience) {
            const stages = [
                'Sākotnējā iepazīšanās ar digitālajiem rīkiem',
                'Pamata prasmju attīstīšana',
                'Digitālo platformu aktīva izmantošana',
                'Jaunu rīku apgūšana un integrēšana'
            ];

            const stagesHtml = `
                <h4>Mana digitālā ceļojuma posmi</h4>
                <div class="stages-wrapper">
                    ${stages.map((stage, index) => `
                        <div class="stage-item">
                            <div class="stage-number">${index + 1}</div>
                            <div class="stage-content">${stage}</div>
                        </div>
                    `).join('')}
                </div>
            `;

            experience.innerHTML = stagesHtml;
        }
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add CSS for journey stages dynamically
    const style = document.createElement('style');
    style.textContent = `
        .stages-wrapper {
            margin-top: 20px;
        }

        .stage-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            padding: 10px;
            border-radius: 8px;
            background-color: var(--background-secondary);
            transition: background-color 0.3s;
        }

        .stage-number {
            width: 30px;
            height: 30px;
            background-color: var(--background-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
            color: var(--text-primary);
            transition: background-color 0.3s, color 0.3s;
        }

        .stage-content {
            flex-grow: 1;
            color: var(--text-primary);
            transition: color 0.3s;
        }

        .experience-list li {
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
            color: var(--text-primary);
            transition: color 0.3s;
        }

        .experience-list li:before {
            content: '•';
            position: absolute;
            left: 0;
            color: var(--text-secondary);
            transition: color 0.3s;
        }
    `;
    document.head.appendChild(style);

    // Initialize all content sections
    initializeTimeline();
    initializePersonalInfo();
    initializeJourneyStages();
});
