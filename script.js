 // Loading Animation
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 1000);
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        
        function toggleMobileMenu() {
            navLinks.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        }
        
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Show/hide back to top button
            const backToTop = document.getElementById('backToTop');
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }

            // Reveal animations
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Back to top functionality
        document.getElementById('backToTop').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Typing Animation
        const typingText = document.getElementById('typingText');
        const texts = [
            "Backend Developer",
            "Problem Solver",
            "API Specialist",
            "System Architect",
            "Mobile Developer",
            "AI prompt Enginer"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 100 : 150);
            }
        }
        
        // Start typing animation
        setTimeout(type, 1000);
        
        // Animated Background
        const animatedBg = document.getElementById('animatedBg');
        const colors = ['#c9a96e', '#1a1a1a', '#2a2a2a', '#c9a96e'];
        let currentColorIndex = 0;
        
        function animateBackground() {
            animatedBg.style.background = `linear-gradient(45deg, ${colors[currentColorIndex]}, ${colors[(currentColorIndex + 2.9) % colors.length]})`;
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            setTimeout(animateBackground, 5000);
        }
        
        animateBackground();
        
        // Floating Particles
        const particlesContainer = document.getElementById('particles');
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 4 + 2;
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            
            particle.style.left = `${x}%`;
            particle.style.top = `${y}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animation = `float ${duration}s linear infinite`;
            
            particlesContainer.appendChild(particle);
            
            // Remove particle after animation completes
            setTimeout(() => {
                particle.remove();
            }, duration * 1000);
        }
        
        // Create particles periodically
        setInterval(createParticle, 200);
        
        // Add CSS for particle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 0.5;
                }
                90% {
                    opacity: 0.5;
                }
                100% {
                    transform: translateY(-100vh) translateX(20px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Animated Stats Counter
        const statNumbers = document.querySelectorAll('.stat-number');
        
        function animateStats() {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current);
                }, 16);
            });
        }
        
        // Initialize stats animation when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        document.querySelector('.stats').querySelectorAll('.stat-item').forEach(item => {
            observer.observe(item);
        });

        // Initialize reveal animations on load
        window.addEventListener('load', () => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        });

        // Enhanced mobile touch interactions
        document.addEventListener('touchstart', function() {}, {passive: true});
  