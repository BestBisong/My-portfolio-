export class Footer {
    render() {
        const year = new Date().getFullYear();
        return `
      <div class="container footer-container-museum">
          <div class="footer-layout-museum">
              <div class="footer-note-museum">
                  <span class="footer-title-museum">Systems Registry Disclaimer</span>
                  <p class="footer-desc-museum">The projects documented in this catalogue represent active server-side implementations, protocol optimizations, and smart contract structures. Frontend client interfaces are simulated or omitted where infrastructure testing is primary.</p>
              </div>
              <div class="footer-links-museum">
                  <span class="footer-title-museum">Connective Handles</span>
                  <div class="footer-social-museum">
                      <a href="https://github.com/BestBisong" target="_blank">GitHub <i class="fa-brands fa-github"></i></a>
                      <a href="https://www.linkedin.com/in/best-bisong-a80b7b366" target="_blank">LinkedIn <i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
              </div>
          </div>
          <div class="footer-copyright-museum">
              <span>&copy; ${year} Bisong Best. All rights reserved.</span>
              <span>Lagos / Nigeria // Platform Version 2.2.0</span>
          </div>
      </div>
    `;
    }
}
