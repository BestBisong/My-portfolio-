export class Terminal {
  private isOpen = false;

  render(): string {
    return `
      <!-- Floating Console Button -->
      <button class="terminal-toggle-btn" id="terminalToggle" aria-label="Open Command Console">
        <i class="fas fa-terminal"></i>
        <span>BestConsole v1.0.0</span>
      </button>

      <!-- Terminal Modal -->
      <div class="terminal-overlay" id="terminalOverlay">
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="dot close-dot"></span>
              <span class="dot minimize-dot"></span>
              <span class="dot maximize-dot"></span>
            </div>
            <div class="terminal-title">bestbisong@root: ~</div>
            <button class="terminal-close" id="terminalCloseBtn">&times;</button>
          </div>
          <div class="terminal-body" id="terminalBody">
            <div class="terminal-log">
              <p class="console-welcome">Welcome to Bisong Best's Interactive Portfolio Console [Version 1.0.0]</p>
              <p class="console-help-hint">Type <span class="term-highlight">help</span> to view available shell commands.</p>
              <br>
            </div>
            <div class="terminal-input-line">
              <span class="terminal-prompt">bestbisong@root:~$</span>
              <input type="text" class="terminal-input" id="terminalInput" autocomplete="off" spellcheck="false" placeholder="type a command...">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  init(): void {
    const toggleBtn = document.getElementById('terminalToggle');
    const overlay = document.getElementById('terminalOverlay');
    const closeBtn = document.getElementById('terminalCloseBtn');
    const input = document.getElementById('terminalInput') as HTMLInputElement;
    const body = document.getElementById('terminalBody');
    const logContainer = document.querySelector('.terminal-log');

    if (!toggleBtn || !overlay || !closeBtn || !input || !body || !logContainer) return;

    // Toggle terminal visibility
    const toggleTerminal = () => {
      this.isOpen = !this.isOpen;
      overlay.classList.toggle('active', this.isOpen);
      if (this.isOpen) {
        setTimeout(() => input.focus(), 200);
      }
    };

    toggleBtn.addEventListener('click', toggleTerminal);
    closeBtn.addEventListener('click', toggleTerminal);

    // Focus input on body click
    body.addEventListener('click', () => {
      input.focus();
    });

    // Shell command registry
    const commands: { [key: string]: { desc: string; action: (args: string[]) => string } } = {
      help: {
        desc: 'Lists all available commands',
        action: () => {
          return `
Available commands:
  <span class="term-cmd">help</span>          - Show this command list
  <span class="term-cmd">about</span>         - Details about Bisong Best
  <span class="term-cmd">projects</span>      - List major full-stack projects & live deployments
  <span class="term-cmd">contributions</span> - List open-source repository contributions
  <span class="term-cmd">warp [speed]</span>  - Warp the starfield background speed (e.g. warp 15)
  <span class="term-cmd">clear</span>         - Clear the console logs
  <span class="term-cmd">exit</span>          - Close this console window
          `.trim();
        }
      },
      about: {
        desc: 'Information about developer',
        action: () => {
          return `
<span class="term-header">Bisong Best - Full-Stack Engineer & Blockchain Integrations</span>
-----------------------------------------------------------
Bio: Dedicated software engineer building high-stability APIs,
     distributed systems, and Solana/Soroban smart contracts.
Location: Lagos, Nigeria
Email: bestbisong32@gmail.com
Phone: +234 814 068 3459
GitHub: github.com/BestBisong
LinkedIn: linkedin.com/in/best-bisong-a80b7b366
          `.trim();
        }
      },
      projects: {
        desc: 'Lists all projects',
        action: () => {
          return `
<span class="term-header">Curated Exhibits & Live Deployments:</span>
  1. <span class="term-highlight">JARVIS Quant Bot</span>       - Live algorithmic trading system [Python/FastAPI]
  2. <span class="term-highlight">StellarFraction Protocol</span>- Real estate tokenization & O(1) yield [Rust/React]
  3. <span class="term-highlight">AI-Grader Platform</span>     - Exam grading & proctoring suite [NodeJS/Redis]
  4. <span class="term-highlight">Luxury E-Commerce</span>      - High-end shopping storefront & API [React/Node.js]
  5. <span class="term-highlight">Stellar Business Suite</span> - Decentralized invoice & settlement app [React/Soroban]
  6. <span class="term-highlight">Tellus Protocol</span>        - Parametric smart contract protocol [Rust/Soroban]
  7. <span class="term-highlight">Trust-Link Escrow</span>      - Security-audited escrow contract [Rust/Solana]
  8. <span class="term-highlight">PDFX AI Engine</span>          - Document intelligence & Gemini RAG backend [TypeScript]
  9. <span class="term-highlight">Creative Chat Website</span>  - Real-time communication platform [TypeScript/Socket.IO]
          `.trim();
        }
      },
      contributions: {
        desc: 'Lists open source repositories',
        action: () => {
          return `
<span class="term-header">Open Source Archives & Public Repositories:</span>
  - <span class="term-highlight">StellarFraction</span>: Real estate fractionalization, O(1) dividend contracts, & UI.
  - <span class="term-highlight">soroban-forge</span>: Smart contract test harness & CI toolkit for Soroban.
  - <span class="term-highlight">tellus-protocol</span>: Parametric crop insurance protocol on Stellar.
  - <span class="term-highlight">clicked</span>: Real-time chat messaging & token payments Web3 platform.
  - <span class="term-highlight">Guard-CLI</span>: Security audit & linting CLI for Soroban contracts.
  - <span class="term-highlight">Checkmate-Escrow</span>: Trustless chess wagering escrow & Oracle payouts.
  - <span class="term-highlight">QiuckEx</span>: Fast privacy payment link generator with X-Ray shielding.
  - <span class="term-highlight">Uzima-Backend</span>: Healthcare knowledge query indexes & XLM rewards.
  - <span class="term-highlight">chainVerse-onchain</span>: Educational certifications & NFT smart contracts.
  - <span class="term-highlight">nester</span>: DeFi stablecoin yield & crypto-to-fiat settlement engine in Go.
  - <span class="term-highlight">fluid</span>: Gas abstraction & paymaster service on Stellar.
  - <span class="term-highlight">trust-link-contract</span>: State-machine lifecycle security in Rust escrows.
          `.trim();
        }
      },
      warp: {
        desc: 'Accelerates background stars',
        action: (args) => {
          const speed = args[0] ? parseFloat(args[0]) : 18;
          if (isNaN(speed)) {
            return `Warp speed must be a valid number. Try: <span class="term-highlight">warp 20</span>`;
          }
          if ((window as any).triggerStarfieldWarp) {
            (window as any).triggerStarfieldWarp(speed);
            return `Warp speed coefficient set to <span class="term-highlight">${speed}</span>! Check background stars.`;
          }
          return `Starfield warp callback not registered.`;
        }
      },
      clear: {
        desc: 'Clears screen',
        action: () => ''
      },
      exit: {
        desc: 'Exits console',
        action: () => {
          setTimeout(toggleTerminal, 300);
          return 'Closing session...';
        }
      }
    };

    // Command submission handler
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const inputVal = input.value.trim();
        input.value = '';

        if (!inputVal) return;

        // Append user prompt log
        const userLine = document.createElement('p');
        userLine.className = 'terminal-log-line';
        userLine.innerHTML = `<span class="terminal-prompt">bestbisong@root:~$</span> ${inputVal}`;
        logContainer.appendChild(userLine);

        // Parse command & arguments
        const parts = inputVal.split(/\s+/);
        const cmdName = parts[0].toLowerCase();
        const args = parts.slice(1);

        if (cmdName === 'clear') {
          logContainer.innerHTML = '';
        } else if (commands[cmdName]) {
          const result = commands[cmdName].action(args);
          const responseLine = document.createElement('pre');
          responseLine.className = 'terminal-response-line';
          responseLine.innerHTML = result;
          logContainer.appendChild(responseLine);
        } else {
          const errorLine = document.createElement('p');
          errorLine.className = 'terminal-error-line';
          errorLine.innerHTML = `command not found: ${cmdName}. Type <span class="term-highlight">help</span> for commands.`;
          logContainer.appendChild(errorLine);
        }

        // Scroll window to bottom
        body.scrollTop = body.scrollHeight;
      }
    });
  }
}
