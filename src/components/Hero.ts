export class Hero {
  render(): string {
    return `
      <div class="hero-bg"></div>
      <div class="container">
          <div class="hero-content">
              <h1 class="hero-title">Creative Full-Stack <span class="hero-highlight">Software</span> Engineer</h1>
               <div class="typing-container">
                  <h2> <span class="typing-text" id="typingText"></span></h2>
              </div>
              <p class="hero-subtitle">Designing intuitive frontend interfaces and scaling secure, high-stability API architectures.</p>
              <a href="#projects" class="btn btn-hero">Inspect Portfolio</a>
          </div>
      </div>
    `;
  }

  init(): void {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    const texts = [
      "Full-Stack Software Engineer",
      "TypeScript & React Developer",
      "API & Integration Specialist",
      "Blockchain & Smart Contract Dev",
      "Distributed Systems Architect"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
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
        setTimeout(type, 2200);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 70 : 110);
      }
    };

    // Start typing animation
    setTimeout(type, 1000);
  }
}
