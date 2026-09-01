export class Process {
    steps = [
        {
            stepNumber: 1,
            title: 'Blueprint & Schema Design',
            description: 'Mapping transactional constraints, database schema normalizations, and API interface boundaries using clean architectural blueprints.'
        },
        {
            stepNumber: 2,
            title: 'Scaffolding & Test Suites',
            description: 'Scaffolding modular server modules, stubbing downstream network protocols, and writing automated suite tests for 100% path coverage.'
        },
        {
            stepNumber: 3,
            title: 'Infrastructure Deployment',
            description: 'Orchestrating container services, securing reverse proxy configurations, and setting up persistent deployment scripts.'
        },
        {
            stepNumber: 4,
            title: 'Telemetry & Profiling',
            description: 'Integrating execution trace monitors, auditing hot code paths, and deploying Redis cache systems to minimize request latencies.'
        }
    ];
    render() {
        const stepsHTML = this.steps.map(step => `
      <div class="process-card-museum">
          <div class="process-num-museum">STAGE 0${step.stepNumber}</div>
          <h3 class="process-title-museum">${step.title}</h3>
          <p class="process-desc-museum">${step.description}</p>
      </div>
    `).join('');
        return `
      <div class="container">
          <div class="editorial-header">
              <h2 class="section-title">Execution Model</h2>
              <p class="editorial-subtitle">The standard lifecycle framework applied to every engineering engagement.</p>
          </div>
          <div class="process-grid-museum">
              ${stepsHTML}
          </div>
      </div>
    `;
    }
}
