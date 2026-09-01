export class About {
  private skillMatrix = [
    { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Rust', 'Go', 'Python', 'Java', 'SQL'] },
    { category: 'Frameworks', items: ['React', 'NestJS', 'Express', 'Spring Boot', 'FastAPI', 'Next.js'] },
    { category: 'Cloud & Infrastructure', items: ['PostgreSQL', 'Redis', 'Docker', 'Solana Web3', 'Stellar Network', 'AWS'] }
  ];

  private getYearsActive(): number {
    const start = new Date(2022, 5, 1); // June 1, 2022 (Month is 0-indexed: 5 is June)
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    const m = now.getMonth() - start.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < start.getDate())) {
      years--;
    }
    return Math.max(4, years); // Minimum 4, dynamically counting up
  }

  render(): string {
    const matrixHTML = this.skillMatrix.map(row => {
      const itemsHTML = row.items.map(item => `<span class="matrix-pill">${item}</span>`).join('');
      return `
        <div class="matrix-row">
            <span class="matrix-category">${row.category}</span>
            <div class="matrix-items">${itemsHTML}</div>
        </div>
      `;
    }).join('');

    return `
      <div class="container">
          <div class="about-grid">
              <div class="about-editorial-column">
                  <span class="editorial-archive-label">BIOGRAPHY — INDEX 02</span>
                  <h2 class="section-title">The Engineering Philosophy</h2>
                  <p class="about-bio-text">
                      I build high-performance full-stack web applications and robust distributed ledger integrations. My practice is centered on solid frontend user experiences, structural backend integrity, and secure network layers—delivering systems that are highly responsive and reliable under load.
                  </p>
                  <p class="about-bio-text">
                      By prioritizing interactive frontend design, clean interface contracts, and thorough automated test suites, I deliver end-to-end applications that bridge complex backend logic with smooth user workflows.
                  </p>
                  
                  <div class="stats-editorial">
                       <div class="stat-item-museum">
                           <span class="stat-number-museum" data-count="20">0</span>
                           <span class="stat-label-museum">Systems Audited</span>
                       </div>
                       <div class="stat-item-museum">
                           <span class="stat-number-museum" data-count="10">0</span>
                           <span class="stat-label-museum">Open Source Projects</span>
                       </div>
                       <div class="stat-item-museum">
                           <span class="stat-number-museum" data-count="${this.getYearsActive()}">0</span>
                           <span class="stat-label-museum">Years Active</span>
                       </div>
                  </div>
              </div>
              
              <div class="about-profile-column">
                  <div class="profile-image-container">
                      <img src="assest/image1.jpeg" alt="Bisong Best Profile" class="profile-img-museum">
                      <div class="profile-caption">Bisong Best — Portfolio catalog photo, active archive.</div>
                  </div>
                  
                  <div class="skills-matrix-container">
                      <span class="editorial-archive-label">CAPABILITY MATRIX</span>
                      <div class="skills-matrix">
                          ${matrixHTML}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
  }

  init(): void {
    const statNumbers = document.querySelectorAll('.stat-number-museum');
    if (statNumbers.length === 0) return;

    const animateStats = () => {
      statNumbers.forEach(stat => {
        const targetAttr = stat.getAttribute('data-count');
        if (!targetAttr) return;
        const target = parseInt(targetAttr);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          stat.textContent = Math.floor(current).toString();
        }, 16);
      });
    };

    const statsContainer = document.querySelector('.stats-editorial');
    if (statsContainer) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(statsContainer);
    }
  }
}
