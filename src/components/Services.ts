import { Service } from '../types.js';

export class Services {
  private services: Service[] = [
    {
      title: 'Interactive Client Interfaces',
      description: 'Building performant frontend applications with TypeScript and React/Next.js, prioritizing responsive user experience, accessibility, and high-fidelity transitions.',
      iconClass: 'fa-solid fa-laptop-code'
    },
    {
      title: 'Server Architecture & API Design',
      description: 'Designing fault-tolerant REST/GraphQL backend systems, secure authentication middleware, and robust database layers with TypeORM, Spring Boot, and PostgreSQL.',
      iconClass: 'fa-solid fa-server'
    },
    {
      title: 'DevOps & Blockchain Integrations',
      description: 'Orchestrating containerized deployments with Docker/AWS, and developing secure smart contract adapters for Solana and EVM web3 applications.',
      iconClass: 'fa-solid fa-cubes'
    }
  ];

  render(): string {
    const servicesHTML = this.services.map((service, idx) => `
      <div class="service-card-museum">
          <div class="service-index">0${idx + 1} // PROTOCOL</div>
          <h3 class="service-title-museum">${service.title}</h3>
          <p class="service-description-museum">${service.description}</p>
      </div>
    `).join('');

    return `
      <div class="container">
          <div class="editorial-header">
              <h2 class="section-title">Core Disciplines</h2>
              <p class="editorial-subtitle">A specification of engineering capabilities applied to production systems.</p>
          </div>
          <div class="services-grid-museum">
              ${servicesHTML}
          </div>
      </div>
    `;
  }
}
