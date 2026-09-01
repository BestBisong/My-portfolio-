export class Contact {
    render() {
        return `
      <div class="container">
          <div class="editorial-header">
              <h2 class="section-title">Establish Connection</h2>
              <p class="editorial-subtitle">Initiate communication channels for systems auditing, architectural consultation, or team integration.</p>
          </div>
          
          <div class="contact-content-museum">
              <div class="contact-info-museum">
                  <span class="editorial-archive-label">CONTACT INDEX</span>
                  
                  <div class="contact-card-museum contact-action" id="contactEmail">
                      <div class="contact-header-museum">
                          <span class="contact-label-museum">01 // EMAIL</span>
                          <span class="contact-value-museum">bestbisong32@gmail.com</span>
                      </div>
                  </div>
                  
                  <div class="contact-card-museum contact-action" id="contactPhone">
                      <div class="contact-header-museum">
                          <span class="contact-label-museum">02 // TELEPHONE</span>
                          <span class="contact-value-museum">+234 814 068 3459</span>
                      </div>
                  </div>
                  
                  <div class="contact-card-museum contact-action" id="contactGithub">
                      <div class="contact-header-museum">
                          <span class="contact-label-museum">03 // REPOSITORIES</span>
                          <span class="contact-value-museum">github.com/BestBisong</span>
                      </div>
                  </div>
                  
                  <div class="contact-card-museum contact-action" id="contactLinkedin">
                      <div class="contact-header-museum">
                          <span class="contact-label-museum">04 // NETWORK</span>
                          <span class="contact-value-museum">linkedin.com/in/best-bisong-a80b7b366</span>
                      </div>
                  </div>
                  
                  <div class="contact-card-museum">
                      <div class="contact-header-museum">
                          <span class="contact-label-museum">05 // LOCATION</span>
                          <span class="contact-value-museum">Lagos, Nigeria // UTC+1</span>
                      </div>
                  </div>
              </div>
              
              <div class="contact-form-container-museum">
                  <span class="editorial-archive-label">TRANSMIT DISPATCH</span>
                  <form class="contact-form-museum" id="contactForm">
                      <div class="form-group-museum">
                          <label class="form-label-museum">NAME</label>
                          <input type="text" class="form-input-museum" placeholder="Enter Full Name" name="Name" id="senderName" required autocomplete="name">
                      </div>
                      <div class="form-group-museum">
                          <label class="form-label-museum">EMAIL ADDRESS</label>
                          <input type="email" class="form-input-museum" placeholder="Enter Email Address" name="Email" id="senderEmail" required autocomplete="email">
                      </div>
                      <div class="form-group-museum">
                          <label class="form-label-museum">SUBJECT</label>
                          <input type="text" class="form-input-museum" placeholder="Reason for Inquiry" name="subject" id="inquirySubject" required>
                      </div>
                      <div class="form-group-museum">
                          <label class="form-label-museum">MESSAGE BODY</label>
                          <textarea class="form-textarea-museum" rows="4" placeholder="Draft message here..." name="Message" id="messageBody" required></textarea>
                      </div>
                      <button type="submit" class="btn btn-museum btn-submit-museum" id="submitBtn">
                          <i class="fas fa-paper-plane"></i> Transmit Payload
                      </button>
                      <div id="formStatus" class="form-status-message"></div>
                  </form>
              </div>
          </div>
      </div>
    `;
    }
    init() {
        const contactEmail = document.getElementById('contactEmail');
        const contactPhone = document.getElementById('contactPhone');
        const contactGithub = document.getElementById('contactGithub');
        const contactLinkedin = document.getElementById('contactLinkedin');
        const contactForm = document.getElementById('contactForm');
        const formStatus = document.getElementById('formStatus');
        if (contactEmail) {
            contactEmail.addEventListener('click', () => {
                window.location.href = 'mailto:bestbisong32@gmail.com';
            });
        }
        if (contactPhone) {
            contactPhone.addEventListener('click', () => {
                window.location.href = 'tel:+2348140683459';
            });
        }
        if (contactGithub) {
            contactGithub.addEventListener('click', () => {
                window.open('https://github.com/BestBisong', '_blank');
            });
        }
        if (contactLinkedin) {
            contactLinkedin.addEventListener('click', () => {
                window.open('https://www.linkedin.com/in/best-bisong-a80b7b366', '_blank');
            });
        }
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const submitBtn = document.getElementById('submitBtn');
                const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '<i class="fas fa-paper-plane"></i> Transmit Payload';
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> Transmitting Dispatch...`;
                }
                if (formStatus) {
                    formStatus.className = 'form-status-message status-loading';
                    formStatus.style.display = 'block';
                    formStatus.innerHTML = `Encrypting and dispatching transmission to mail relay...`;
                }
                const nameInput = document.getElementById('senderName');
                const emailInput = document.getElementById('senderEmail');
                const subjectInput = document.getElementById('inquirySubject');
                const messageInput = document.getElementById('messageBody');
                const name = nameInput ? nameInput.value.trim() : '';
                const email = emailInput ? emailInput.value.trim() : '';
                const subject = subjectInput ? subjectInput.value.trim() : 'New Portfolio Inquiry';
                const message = messageInput ? messageInput.value.trim() : '';
                let isDispatched = false;
                // Channel 1: Formspree Relay
                try {
                    const formspreeResponse = await fetch('https://formspree.io/f/mqaynbqv', {
                        method: 'POST',
                        body: JSON.stringify({
                            name,
                            email,
                            subject,
                            message,
                            _replyto: email
                        }),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    });
                    if (formspreeResponse.ok) {
                        isDispatched = true;
                    }
                }
                catch (err) {
                    console.warn('Formspree dispatch channel unavailable, switching to secondary relay...', err);
                }
                // Channel 2: FormSubmit Direct Endpoint (Direct to bestbisong32@gmail.com)
                if (!isDispatched) {
                    try {
                        const fallbackResponse = await fetch('https://formsubmit.co/ajax/bestbisong32@gmail.com', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify({
                                name,
                                email,
                                subject: `[Portfolio Dispatch] ${subject}`,
                                message,
                                _replyto: email,
                                _template: 'table',
                                _captcha: 'false'
                            })
                        });
                        if (fallbackResponse.ok) {
                            isDispatched = true;
                        }
                    }
                    catch (err) {
                        console.error('All dispatch relays failed', err);
                    }
                }
                if (isDispatched) {
                    if (formStatus) {
                        formStatus.className = 'form-status-message status-success';
                        formStatus.innerHTML = `<i class="fas fa-check-circle"></i> Transmission dispatched successfully. Message routed to bestbisong32@gmail.com. I will respond to your email promptly.`;
                    }
                    contactForm.reset();
                }
                else {
                    if (formStatus) {
                        formStatus.className = 'form-status-message status-error';
                        formStatus.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Transmission relay encountered an anomaly. Please send an email directly to <a href="mailto:bestbisong32@gmail.com" class="direct-mail-link">bestbisong32@gmail.com</a>.`;
                    }
                }
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnHTML;
                }
            });
        }
    }
}
