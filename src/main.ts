import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Services } from './components/Services.js';
import { Process } from './components/Process.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { Background } from './components/Background.js';
import { Contributions } from './components/Contributions.js';
import { Terminal } from './components/Terminal.js';

document.addEventListener('DOMContentLoaded', () => {
  // Instantiate components
  const headerComponent = new Header();
  const heroComponent = new Hero();
  const aboutComponent = new About();
  const servicesComponent = new Services();
  const processComponent = new Process();
  const projectsComponent = new Projects();
  const contactComponent = new Contact();
  const contributionsComponent = new Contributions();
  const footerComponent = new Footer();
  const backgroundComponent = new Background();
  const terminalComponent = new Terminal();

  // Render components into their mount points
  const headerMount = document.getElementById('header');
  if (headerMount) headerMount.innerHTML = headerComponent.render();

  const heroMount = document.getElementById('home');
  if (heroMount) heroMount.innerHTML = heroComponent.render();

  const aboutMount = document.getElementById('about');
  if (aboutMount) aboutMount.innerHTML = aboutComponent.render();

  const servicesMount = document.getElementById('services');
  if (servicesMount) servicesMount.innerHTML = servicesComponent.render();

  const processMount = document.getElementById('process');
  if (processMount) processMount.innerHTML = processComponent.render();

  const projectsMount = document.getElementById('projects');
  if (projectsMount) projectsMount.innerHTML = projectsComponent.render();

  const contributionsMount = document.getElementById('contributions');
  if (contributionsMount) contributionsMount.innerHTML = contributionsComponent.render();

  const contactMount = document.getElementById('contact');
  if (contactMount) contactMount.innerHTML = contactComponent.render();

  const footerMount = document.getElementById('footer-mount');
  if (footerMount) footerMount.innerHTML = footerComponent.render();

  const terminalMount = document.getElementById('terminal-mount');
  if (terminalMount) terminalMount.innerHTML = terminalComponent.render();

  // Initialize interactive features
  headerComponent.init();
  heroComponent.init();
  aboutComponent.init();
  projectsComponent.init();
  contributionsComponent.init();
  contactComponent.init();
  backgroundComponent.init();
  terminalComponent.init();

  // Initialize 3D Isometric Card Tilt (Wow Factor)
  const init3DTiltEffect = () => {
    const cards = document.querySelectorAll('.tilt-target');
    cards.forEach(card => {
      const htmlCard = card as HTMLElement;
      htmlCard.addEventListener('mousemove', (e) => {
        const rect = htmlCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = ((y - centerY) / centerY) * -12; // tilt angle max 12 deg
        const tiltY = ((x - centerX) / centerX) * 12;
        
        htmlCard.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.04, 1.04, 1.04)`;
        htmlCard.style.transition = 'transform 0.08s ease-out';
      });

      htmlCard.addEventListener('mouseleave', () => {
        htmlCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        htmlCard.style.transition = 'transform 0.4s ease-out';
      });
    });
  };

  // Scroll Reveal Observer
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  };

  // Active Nav Link Scroll Observer
  const initActiveNavObserver = () => {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (!id) return;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });

          // Quietly update the browser address bar URL hash
          if (id !== 'header' && window.location.hash !== `#${id}`) {
            history.replaceState(null, '', `#${id}`);
          }
        }
      });
    }, { threshold: 0.2, rootMargin: '-20% 0px -60% 0px' });

    sections.forEach(sec => navObserver.observe(sec));
  };

  // Delayed trigger to guarantee full component mount renders are completed
  setTimeout(() => {
    init3DTiltEffect();
    initScrollReveal();
    initActiveNavObserver();
  }, 50);
});
