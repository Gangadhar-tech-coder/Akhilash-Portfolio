document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. LOADER SCREEN
       ========================================================================== */
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        // Allow the loading animation to play for a brief period
        setTimeout(() => {
            if (loader) {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }
            // Initialize animations after loader disappears
            initScrollAnimations();
        }, 1200);
    });

    // Fallback: in case window load doesn't trigger quickly
    setTimeout(() => {
        if (loader && loader.style.opacity !== '0') {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            initScrollAnimations();
        }
    }, 3000);


    /* ==========================================================================
       2. CUSTOM CURSOR & MOUSE GLOW
       ========================================================================== */
    const cursorDot = document.querySelector('.custom-cursor');
    const cursorGlow = document.querySelector('.custom-cursor-glow');

    document.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Position the custom cursor elements
        if (cursorDot) {
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
        }

        if (cursorGlow) {
            // Slight lag effect achieved via transition in CSS or GSAP
            cursorGlow.style.left = `${posX}px`;
            cursorGlow.style.top = `${posY}px`;
        }
    });

    // Add hover states for interactive items
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, .cert-card, .tab-btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursorDot) cursorDot.classList.add('zoom');
            if (cursorGlow) cursorGlow.classList.add('zoom');
        });
        el.addEventListener('mouseleave', () => {
            if (cursorDot) cursorDot.classList.remove('zoom');
            if (cursorGlow) cursorGlow.classList.remove('zoom');
        });
    });


    /* ==========================================================================
       3. SCROLL PROGRESS BAR & BACK TO TOP BUTTON
       ========================================================================== */
    const scrollProgress = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');
    const progressCircle = document.querySelector('.progress-ring-circle');
    
    let radius, circumference;
    if (progressCircle) {
        radius = progressCircle.r.baseVal.value;
        circumference = radius * 2 * Math.PI;
        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = circumference;
    }

    const updateScrollIndicators = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        // Update progress bar width
        if (scrollProgress) {
            scrollProgress.style.width = `${scrollPercent}%`;
        }

        // Show/hide Back To Top Button
        if (backToTopBtn) {
            if (scrollTop > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Update Back To Top Circle progress
        if (progressCircle) {
            const offset = circumference - (scrollPercent / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
        }
    };

    window.addEventListener('scroll', updateScrollIndicators);

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    /* ==========================================================================
       4. THEME TOGGLE (DARK/LIGHT MODE)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // Check default or stored theme preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-sun';
        }
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-moon';
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('dark-theme')) {
                // Switch to light
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
                if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
            } else {
                // Switch to dark
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
            }
        });
    }


    /* ==========================================================================
       5. TYPED.JS INTERACTIVE SUBTITLES
       ========================================================================== */
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                'AI/ML Engineer',
                'Full Stack Developer',
                'Python Developer',
                'Problem Solver',
                'Tech Enthusiast'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: false
        });
    }


    /* ==========================================================================
       6. PARTICLES.JS BACKGROUND CONFIG
       ========================================================================== */
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 55,
                    "density": {
                        "enable": true,
                        "value_area": 850
                    }
                },
                "color": {
                    "value": "#10B981"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.2,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.5,
                        "opacity_min": 0.05,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1.5,
                        "size_min": 0.8,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 140,
                    "color": "#10B981",
                    "opacity": 0.12,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.8,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 150,
                        "line_linked": {
                            "opacity": 0.35
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }


    /* ==========================================================================
       7. GSAP SCROLLTRIGGER ANIMATIONS
       ========================================================================== */
    function initScrollAnimations() {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Stats Counter Animation
        const statSection = document.getElementById('stats-section');
        if (statSection) {
            const counters = statSection.querySelectorAll('.stat-number');
            
            gsap.from(counters, {
                scrollTrigger: {
                    trigger: statSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                duration: 2.0,
                opacity: 0,
                y: 20,
                stagger: 0.15,
                ease: 'power3.out',
                onStart: () => {
                    counters.forEach(counter => {
                        const target = parseFloat(counter.getAttribute('data-target'));
                        const isDecimal = counter.getAttribute('data-decimal') === 'true';
                        
                        let startVal = 0;
                        const duration = 2000; // 2 seconds
                        const stepTime = 30; // ms between updates
                        const totalSteps = duration / stepTime;
                        const stepVal = target / totalSteps;
                        
                        let currentStep = 0;
                        const interval = setInterval(() => {
                            currentStep++;
                            const currentVal = stepVal * currentStep;
                            
                            if (currentStep >= totalSteps) {
                                counter.textContent = isDecimal ? target.toFixed(2) : Math.floor(target) + '+';
                                clearInterval(interval);
                            } else {
                                counter.textContent = isDecimal ? currentVal.toFixed(2) : Math.floor(currentVal) + '+';
                            }
                        }, stepTime);
                    });
                }
            });
        }

        // Skills progress fill animation
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const progressFills = skillsSection.querySelectorAll('.skill-progress-fill');
            
            gsap.to(progressFills, {
                scrollTrigger: {
                    trigger: skillsSection,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                width: function(index, target) {
                    return target.getAttribute('data-progress');
                },
                duration: 1.5,
                ease: 'power2.out',
                stagger: 0.05
            });
        }

        // Timeline line reveal animation
        const timelineLine = document.querySelector('.timeline-line');
        if (timelineLine) {
            gsap.fromTo(timelineLine, 
                { height: '0%' },
                {
                    height: '100%',
                    scrollTrigger: {
                        trigger: '.timeline',
                        start: 'top 70%',
                        end: 'bottom 80%',
                        scrub: true
                    }
                }
            );
        }

        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 50
            });
        }
    }


    /* ==========================================================================
       8. SKILLS TAB FILTERING
       ========================================================================== */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const skillCards = document.querySelectorAll('.skill-card-wrapper');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all tabs, add to clicked
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            skillCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });


    /* ==========================================================================
       9. GITHUB API INTEGRATION
       ========================================================================== */
    const githubUser = 'BOGALA-AKHILASH-REDDY';
    const githubLoading = document.getElementById('github-loading');
    const githubContent = document.getElementById('github-content');
    
    // Elements to populate
    const githubAvatar = document.getElementById('github-avatar');
    const githubReposCount = document.getElementById('github-repos-count');
    const githubFollowersCount = document.getElementById('github-followers-count');
    const githubFollowingCount = document.getElementById('github-following-count');
    const githubReposList = document.getElementById('github-repos-list');
    const heatmapGrid = document.getElementById('heatmap-grid');

    const fetchGitHubData = async () => {
        try {
            // Fetch User Details
            const userResponse = await fetch(`https://api.github.com/users/${githubUser}`);
            if (!userResponse.ok) throw new Error('Failed to fetch user details');
            const userData = await userResponse.json();

            // Fetch Repositories
            const reposResponse = await fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=6`);
            if (!reposResponse.ok) throw new Error('Failed to fetch user repositories');
            const reposData = await reposResponse.json();

            // Populate user UI
            if (githubAvatar) githubAvatar.src = userData.avatar_url;
            if (githubReposCount) githubReposCount.textContent = userData.public_repos;
            if (githubFollowersCount) githubFollowersCount.textContent = userData.followers;
            if (githubFollowingCount) githubFollowingCount.textContent = userData.following;

            // Populate repository UI
            if (githubReposList) {
                githubReposList.innerHTML = '';
                // Take top 3 repositories
                const featuredRepos = reposData.slice(0, 3);
                
                featuredRepos.forEach(repo => {
                    const repoCard = document.createElement('div');
                    repoCard.className = 'github-repo-card';
                    repoCard.innerHTML = `
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-name-link">
                            <i class="fa-solid fa-book-bookmark"></i> ${repo.name}
                        </a>
                        <p class="repo-desc">${repo.description || 'No description provided.'}</p>
                        <div class="repo-meta">
                            <span class="repo-lang">
                                <span class="lang-dot" style="background-color: ${getLangColor(repo.language)}"></span>
                                ${repo.language || 'Plain'}
                            </span>
                            <span class="repo-stars">
                                <i class="fa-solid fa-star"></i> ${repo.stargazers_count}
                            </span>
                        </div>
                    `;
                    githubReposList.appendChild(repoCard);
                });
            }

            // Reveal content
            if (githubLoading) githubLoading.classList.add('hide');
            if (githubContent) githubContent.classList.remove('hide');

            // Generate Heatmap
            generateHeatmap();

        } catch (error) {
            console.error('GitHub API error, loading mock state:', error);
            loadMockGitHubData();
        }
    };

    // Helper for language dot colors
    const getLangColor = (lang) => {
        const colors = {
            'Python': '#3572A5',
            'JavaScript': '#f1e05a',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'Java': '#b07219',
            'C': '#555555'
        };
        return colors[lang] || '#10B981';
    };

    // Fallback: Populate static data if API limit exceeded or offline
    const loadMockGitHubData = () => {
        if (githubAvatar) githubAvatar.src = 'assets/profile.jpg';
        if (githubReposCount) githubReposCount.textContent = '12';
        if (githubFollowersCount) githubFollowersCount.textContent = '8';
        if (githubFollowingCount) githubFollowingCount.textContent = '14';

        if (githubReposList) {
            githubReposList.innerHTML = `
                <div class="github-repo-card">
                    <a href="https://github.com/BOGALA-AKHILASH-REDDY" target="_blank" rel="noopener noreferrer" class="repo-name-link">
                        <i class="fa-solid fa-book-bookmark"></i> Blood-Donation-App
                    </a>
                    <p class="repo-desc">Responsive React web app connecting blood donors with local recipients in real-time.</p>
                    <div class="repo-meta">
                        <span class="repo-lang"><span class="lang-dot" style="background-color: #f1e05a"></span>JavaScript</span>
                        <span class="repo-stars"><i class="fa-solid fa-star"></i> 2</span>
                    </div>
                </div>
                <div class="github-repo-card">
                    <a href="https://github.com/BOGALA-AKHILASH-REDDY" target="_blank" rel="noopener noreferrer" class="repo-name-link">
                        <i class="fa-solid fa-book-bookmark"></i> Image-Cryptography
                    </a>
                    <p class="repo-desc">Advanced image security system utilizing hybrid AES, RSA, and chaotic encryption algorithms in Python.</p>
                    <div class="repo-meta">
                        <span class="repo-lang"><span class="lang-dot" style="background-color: #3572A5"></span>Python</span>
                        <span class="repo-stars"><i class="fa-solid fa-star"></i> 3</span>
                    </div>
                </div>
                <div class="github-repo-card">
                    <a href="https://github.com/BOGALA-AKHILASH-REDDY" target="_blank" rel="noopener noreferrer" class="repo-name-link">
                        <i class="fa-solid fa-book-bookmark"></i> Smart-Attendance-System
                    </a>
                    <p class="repo-desc">Real-time attendance registration system using OpenCV, Dlib facial tracking, and automated spreadsheets.</p>
                    <div class="repo-meta">
                        <span class="repo-lang"><span class="lang-dot" style="background-color: #3572A5"></span>Python</span>
                        <span class="repo-stars"><i class="fa-solid fa-star"></i> 4</span>
                    </div>
                </div>
            `;
        }

        if (githubLoading) githubLoading.classList.add('hide');
        if (githubContent) githubContent.classList.remove('hide');
        generateHeatmap();
    };

    // Helper to generate a realistic looking contribution heatmap grid (52 weeks x 7 days)
    const generateHeatmap = () => {
        if (!heatmapGrid) return;
        heatmapGrid.innerHTML = '';
        
        // Generate grid of 24 weeks (168 cells) for fit on card layouts
        const totalWeeks = 32;
        const totalDays = 7;
        
        for (let w = 0; w < totalWeeks; w++) {
            for (let d = 0; d < totalDays; d++) {
                const cell = document.createElement('div');
                cell.className = 'heatmap-cell';
                
                // Realistic commit distribution: weekends lower, weekdays slightly higher
                let level = 0;
                const rand = Math.random();
                
                if (d === 0 || d === 6) { // Weekends
                    if (rand > 0.85) level = 1;
                    else if (rand > 0.95) level = 2;
                } else { // Weekdays
                    if (rand > 0.90) level = 4;
                    else if (rand > 0.70) level = 3;
                    else if (rand > 0.45) level = 2;
                    else if (rand > 0.20) level = 1;
                }
                
                cell.classList.add(`level-${level}`);
                
                // Add tooltip-like titles
                const dateOffset = (totalWeeks - w) * 7 + (7 - d);
                const date = new Date();
                date.setDate(date.getDate() - dateOffset);
                const commits = level === 0 ? 'No' : level * 2 + Math.floor(Math.random() * 2);
                cell.title = `${commits} contributions on ${date.toDateString()}`;
                
                heatmapGrid.appendChild(cell);
            }
        }
    };

    fetchGitHubData();


    /* ==========================================================================
       11. CONTACT FORM HANDLING (FORMSPREE AJAX)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Set sending state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            }
            if (formStatus) {
                formStatus.className = 'form-status';
                formStatus.textContent = '';
            }

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success state
                    contactForm.reset();
                    if (formStatus) {
                        formStatus.className = 'form-status success';
                        formStatus.textContent = 'Thank you! Your message was sent successfully.';
                    }
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        if (formStatus) {
                            formStatus.className = 'form-status error';
                            formStatus.textContent = data.errors.map(err => err.message).join(', ');
                        }
                    } else {
                        throw new Error('Server returned error response');
                    }
                }
            } catch (err) {
                console.error('Contact Form error:', err);
                if (formStatus) {
                    formStatus.className = 'form-status error';
                    formStatus.textContent = 'Oops! There was a problem submitting your form. Please try again.';
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
                }
            }
        });
    }


    /* ==========================================================================
       12. MOBILE NAVIGATION DRAWER
       ========================================================================== */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('active');
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', !isOpen);
        });

        // Close menu when clicking nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }


    /* ==========================================================================
       13. HEADER NAVIGATION SCROLL EFFECT (AUTO-HIDE/REVEAL)
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (navbar) {
            if (currentScrollY > 100 && currentScrollY > lastScrollY) {
                // Scrolling down, hide navbar
                navbar.classList.add('nav-hidden');
            } else {
                // Scrolling up, show navbar
                navbar.classList.remove('nav-hidden');
            }
        }
        
        lastScrollY = currentScrollY;
    });

    // Populate Current Year in Footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});
