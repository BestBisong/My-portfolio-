export class Header {
  render(): string {
    return `
      <div class="container nav-container">
          <a href="#" class="logo">BisongBest — <span>Portfolio</span></a>
          <nav>
              <ul class="nav-links">
                  <li><a href="#home" class="nav-link active"><span class="nav-num">01</span> Introduction</a></li>
                  <li><a href="#about" class="nav-link"><span class="nav-num">02</span> Profile</a></li>
                  <li><a href="#services" class="nav-link"><span class="nav-num">03</span> Capability</a></li>
                  <li><a href="#projects" class="nav-link"><span class="nav-num">04</span> Systems</a></li>
                  <li><a href="#contributions" class="nav-link"><span class="nav-num">05</span> Contributions</a></li>
                  <li><a href="#contact" class="nav-link"><span class="nav-num">06</span> Dispatch</a></li>
              </ul>
          </nav>
          <button class="mobile-menu-btn" aria-label="Toggle mobile menu">
              <i class="fas fa-bars"></i>
          </button>
      </div>
    `;
  }

  init(): void {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    if (!mobileMenuBtn || !navLinks || !mobileMenuOverlay) return;

    const toggleMobileMenu = () => {
      navLinks.classList.toggle('active');
      mobileMenuOverlay.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    };

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

    // Header scroll background effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (!header) return;
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}
