import { Project } from '../types.js';

interface DashboardProject extends Project {
  metric: string;
  businessImpact: string;
}

export class Projects {
  private projects: DashboardProject[] = [
    {
      title: 'JARVIS Quant Bot',
      description: 'An institutional-grade quantitative trading system and live trading bot featuring a 200 SMA regime guard, 3.5% risk management, and automatic telemetry updates via FastAPI.',
      businessImpact: 'Protects investment capital through automated real-time risk calculations and immediate trade executions.',
      link: 'https://github.com/BestBisong/Trade-Bot',
      tags: ['Python', 'FastAPI', 'Docker', 'Systemd'],
      image: 'fas fa-chart-line',
      metric: '99.9% Uptime'
    },
    {
      title: 'StellarFraction Ecosystem',
      description: 'A decentralized real estate fractionalization and USDC rental yield distribution protocol on Stellar, featuring Soroban smart contracts with O(1) dividend accumulators.',
      businessImpact: 'Enables fractional property ownership and automated, gas-efficient USDC dividend payouts directly to stakers.',
      link: 'https://github.com/StellarFraction/StellarFraction-contracts',
      frontendRepo: 'https://github.com/StellarFraction/StellarFraction-frontend',
      backendRepo: 'https://github.com/StellarFraction/StellarFraction-backend',
      tags: ['Rust', 'Soroban', 'Stellar', 'Smart Contracts', 'React'],
      image: 'fas fa-hotel',
      metric: 'O(1) Yield'
    },
    {
      title: 'AI-Grader Platform',
      description: 'A scalable, modular exam grading and live proctoring platform with automated grading, student session saving, and webcam proctoring with AI anomaly detection.',
      businessImpact: 'Reduces grading time for institutions from days to seconds while maintaining online test integrity.',
      link: 'https://github.com/BestBisong/AI-Grader',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Socket.IO', 'Redis'],
      image: 'fas fa-graduation-cap',
      metric: 'Instant Grading'
    },
    {
      title: 'Luxury E-commerce',
      description: 'A high-end e-commerce platform featuring a custom-themed interface, shopping cart management, checkout integrations, and full mobile optimization.',
      businessImpact: 'Delivers a smooth, fast shopping experience to increase sales conversion rates for luxury retail.',
      link: 'https://github.com/BestBisong/Kess-frontend',
      backendRepo: 'https://github.com/BestBisong/Kess-backend',
      tags: ['HTML/CSS', 'JavaScript', 'Node.js', 'React'],
      image: 'fas fa-gem',
      metric: 'Secure Checkout'
    },
    {
      title: 'Stellar Business Suite (SIP)',
      description: 'A decentralized invoice management and B2B settlement suite built on Stellar, offering QR invoice dispatch, on-chain reconciliation, and Soroban contract execution.',
      businessImpact: 'Streamlines cross-border invoicing with instantaneous settlement and minimal transaction fees.',
      link: 'https://github.com/BestBisong/sip-frontend',
      backendRepo: 'https://github.com/BestBisong/sip-backend',
      tags: ['TypeScript', 'React', 'Stellar SDK', 'Soroban'],
      image: 'fas fa-file-invoice-dollar',
      metric: 'Instant Settle'
    },
    {
      title: 'Tellus Protocol',
      description: 'An open-source parametric crop insurance smart contract prototype built on Stellar using Soroban, automating underwriting and weather-oracle claim triggers.',
      businessImpact: 'Enables automated disaster micro-insurance payouts to agricultural producers upon verified weather triggers.',
      link: 'https://github.com/BestBisong/tellus-protocol',
      tags: ['Rust', 'Soroban', 'Stellar', 'Smart Contracts'],
      image: 'fas fa-seedling',
      metric: 'Crop Insurance'
    },
    {
      title: 'Trust-Link Escrow',
      description: 'A secure blockchain escrow smart contract built in Rust, enforcing strict state transitions and eliminating shipment phase vulnerabilities.',
      businessImpact: 'Secures peer-to-peer commerce payments, releasing funds only when verification protocols are met.',
      link: 'https://github.com/BestBisong/trust-link-contract',
      tags: ['Rust', 'Solana', 'Smart Contracts', 'Web3'],
      image: 'fas fa-shield-halved',
      metric: 'Audited Logic'
    },
    {
      title: 'PDFX AI Engine',
      description: 'A powerful backend API for PDF manipulation and AI-powered document interactions. Supports operations like merging, signing, page management, and Gemini-based RAG chat with caching.',
      businessImpact: 'Automates document workflows and lets users chat directly with lengthy PDF guides to pull key facts.',
      link: 'https://github.com/Skilvora-X/pdfX-backend',
      tags: ['Node.js', 'TypeScript', 'Prisma', 'Gemini API', 'RAG'],
      image: 'fas fa-file-pdf',
      metric: 'Gemini RAG'
    },
    {
      title: 'Creative Chatting Website',
      description: 'A minimalist real-time communication platform built with room isolation, active user presence states, and customizable text channels.',
      businessImpact: 'Enables real-time, low-latency collaboration between remote teams inside secure chat environments.',
      link: 'https://github.com/BestBisong/clicked',
      tags: ['TypeScript', 'Node.js', 'Socket.IO', 'Web3'],
      image: 'fas fa-comments',
      metric: '<15ms Latency'
    }
  ];

  render(): string {
    const projectsHTML = this.projects.map((project, idx) => {
      const tagsHTML = project.tags.map(tag => `<span class="project-tag-pill">${tag}</span>`).join('');
      const orderNum = String(idx + 1).padStart(2, '0');

      let actionButtonsHTML = '';
      if (project.frontendRepo && project.backendRepo) {
        actionButtonsHTML = `
          <div class="repo-dual-buttons">
            <a href="${project.link}" target="_blank" class="btn btn-museum">Contracts Repo</a>
            <a href="${project.frontendRepo}" target="_blank" class="btn btn-museum">Frontend Repo</a>
            <a href="${project.backendRepo}" target="_blank" class="btn btn-museum">Backend Repo</a>
          </div>
        `;
      } else if (project.backendRepo) {
        actionButtonsHTML = `
          <div class="repo-dual-buttons">
            <a href="${project.link}" target="_blank" class="btn btn-museum">Frontend Repo</a>
            <a href="${project.backendRepo}" target="_blank" class="btn btn-museum">Backend Repo</a>
          </div>
        `;
      } else {
        actionButtonsHTML = `
          <a href="${project.link}" target="_blank" class="btn btn-museum">Inspect Repository</a>
        `;
      }

      return `
        <div class="project-card tilt-target">
            <div class="project-dashboard-header">
                <span class="project-catalog-num">PLATE NODE // ${orderNum}</span>
                <span class="project-metric-badge">${project.metric}</span>
            </div>
            
            <div class="project-card-info">
                <h3 class="project-title">${project.title}</h3>
                
                <p class="project-description">
                    <span class="editorial-label">Architecture</span>
                    ${project.description}
                </p>
                
                <p class="project-business-impact">
                    <span class="editorial-label">Outcome</span>
                    ${project.businessImpact}
                </p>
                
                <div class="project-tags-container">
                  ${tagsHTML}
                </div>
                
                ${actionButtonsHTML}
            </div>
        </div>
      `;
    }).join('');

    return `
      <div class="container">
          <div class="editorial-header">
              <h2 class="section-title">Curated Exhibits</h2>
              <p class="editorial-subtitle">A selective collection of systems architectures, protocol nodes, custom caching indices, and backend engines.</p>
          </div>
          <div class="projects-grid">
              ${projectsHTML}
          </div>
      </div>
    `;
  }

  init(): void {
    // Handled by main.ts
  }
}
