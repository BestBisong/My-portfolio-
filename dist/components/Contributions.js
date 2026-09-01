export class Contributions {
    contributions = [
        {
            repoName: 'StellarFraction-contracts',
            role: 'Soroban Smart Contract Developer',
            description: 'Engineered O(1) accumulator dividend distribution algorithms in Rust, multi-property staking pool isolation, and gas-efficient USDC rental payouts on Stellar.',
            tags: ['Rust', 'Soroban', 'Stellar', 'Smart Contracts', 'DeFi'],
            link: 'https://github.com/StellarFraction/StellarFraction-contracts',
            icon: 'fa-solid fa-hotel'
        },
        {
            repoName: 'StellarFraction-frontend',
            role: 'Web3 Frontend Contributor',
            description: 'Built interactive fractional property marketplace, staking pools dashboard, and integrated Freighter/Albedo wallet authentication workflows.',
            tags: ['React', 'TypeScript', 'Tailwind CSS', 'Web3', 'Stellar'],
            link: 'https://github.com/StellarFraction/StellarFraction-frontend',
            icon: 'fa-brands fa-react'
        },
        {
            repoName: 'StellarFraction-backend',
            role: 'Backend & Event Indexer Dev',
            description: 'Created Horizon and Soroban ledger event indexers for property deed token tracking, automated dividend disbursement jobs, and REST endpoints.',
            tags: ['Node.js', 'Express', 'Stellar SDK', 'TypeScript'],
            link: 'https://github.com/StellarFraction/StellarFraction-backend',
            icon: 'fa-solid fa-server'
        },
        {
            repoName: 'soroban-forge',
            role: 'Smart Contract Toolkit Contributor',
            description: 'Enhanced scaffolding, test-harness utilities, and CI pipelines for Soroban smart contracts on the Stellar network.',
            tags: ['Rust', 'Cargo', 'Soroban', 'Stellar'],
            link: 'https://github.com/BestBisong/soroban-forge',
            icon: 'fa-solid fa-hammer'
        },
        {
            repoName: 'tellus-protocol',
            role: 'Parametric Protocol Developer',
            description: 'Built Soroban smart contract logic for decentralized agricultural parametric crop insurance with weather oracle verification triggers.',
            tags: ['Rust', 'Soroban', 'Stellar', 'Oracles'],
            link: 'https://github.com/BestBisong/tellus-protocol',
            icon: 'fa-solid fa-seedling'
        },
        {
            repoName: 'clicked',
            role: 'Core Web3 & Realtime Developer',
            description: 'Engineered real-time chat infrastructure and token payment pipelines for a decentralized community-funding and social messaging platform.',
            tags: ['TypeScript', 'Node.js', 'Socket.IO', 'Web3'],
            link: 'https://github.com/BestBisong/clicked',
            icon: 'fa-solid fa-comments-dollar'
        },
        {
            repoName: 'trust-link-contract',
            role: 'Smart Contract Auditor & Dev',
            description: 'Strengthened security in the escrow module by enforcing strict state machine transitions (Funded → Shipped → Completed) and writing Rust unit tests.',
            tags: ['Rust', 'Solana', 'Soroban', 'Security'],
            link: 'https://github.com/BestBisong/trust-link-contract',
            icon: 'fa-solid fa-shield-halved'
        },
        {
            repoName: 'Guard-CLI',
            role: 'CLI Tool & Security Contributor',
            description: 'Implemented automated code linting and safety analysis routines for inspecting Soroban smart contracts prior to mainnet deployment.',
            tags: ['Rust', 'CLI', 'Soroban', 'Audit'],
            link: 'https://github.com/BestBisong/Guard-CLI',
            icon: 'fa-solid fa-terminal'
        },
        {
            repoName: 'Checkmate-Escrow',
            role: 'Smart Contract Developer',
            description: 'Designed trustless chess wagering escrow contracts on Stellar with automated payouts using real-time match Oracle integrations.',
            tags: ['Rust', 'Soroban', 'Oracles', 'Web3'],
            link: 'https://github.com/BestBisong/Checkmate-Escrow',
            icon: 'fa-solid fa-chess'
        },
        {
            repoName: 'QiuckEx',
            role: 'Protocol & API Optimizer',
            description: 'Developed fast, privacy-focused payment link generation on Stellar with QR support and optional X-Ray shielding for confidential transactions.',
            tags: ['TypeScript', 'Node.js', 'Stellar SDK', 'Privacy'],
            link: 'https://github.com/BestBisong/QiuckEx',
            icon: 'fa-solid fa-qrcode'
        },
        {
            repoName: 'Uzima-Backend',
            role: 'Backend Architect',
            description: 'Architected database models and server-side encryption layers for patient medical record query indexes and XLM professional reward distribution.',
            tags: ['NestJS', 'PostgreSQL', 'Stellar', 'TypeScript'],
            link: 'https://github.com/BestBisong/Uzima-Backend',
            icon: 'fa-solid fa-notes-medical'
        },
        {
            repoName: 'chainVerse-onchain',
            role: 'On-chain Smart Contract Dev',
            description: 'Built decentralized educational certification smart contracts, NFT badge issuance, and DAO governance modules on Stellar.',
            tags: ['Rust', 'Soroban', 'NFTs', 'Web3'],
            link: 'https://github.com/BestBisong/chainVerse-onchain',
            icon: 'fa-solid fa-graduation-cap'
        },
        {
            repoName: 'nester',
            role: 'Protocol & Systems Engineer',
            description: 'Developed DeFi protocol services automating stablecoin yield savings and instant crypto-to-fiat settlements via liquidity routing nodes in Go.',
            tags: ['Go', 'DeFi', 'Fintech', 'Concurrency'],
            link: 'https://github.com/BestBisong/nester',
            icon: 'fa-brands fa-golang'
        },
        {
            repoName: 'fluid',
            role: 'Paymaster & Gas Abstraction Dev',
            description: 'Contributed to gas abstraction services on Stellar, allowing users to transact in preferred tokens while automating underlying XLM fee payments.',
            tags: ['TypeScript', 'Stellar SDK', 'Paymaster', 'Web3'],
            link: 'https://github.com/BestBisong/fluid',
            icon: 'fa-solid fa-droplet'
        },
        {
            repoName: 'escrow-contract',
            role: 'Soroban Milestone Contract Dev',
            description: 'Created multi-party milestone escrow contracts with conditional release locks and dispute timeout protections on Stellar.',
            tags: ['Rust', 'Soroban', 'Escrow', 'Smart Contracts'],
            link: 'https://github.com/BestBisong/escrow-contract',
            icon: 'fa-solid fa-file-contract'
        }
    ];
    render() {
        const cardsHTML = this.contributions.map((item, idx) => {
            const tagsHTML = item.tags.map(tag => `<span class="contribution-tag-pill">${tag}</span>`).join('');
            const orderNum = String(idx + 1).padStart(2, '0');
            return `
        <div class="contribution-card tilt-target">
            <div class="contribution-header">
                <span class="contribution-index">EXHIBIT ${orderNum}</span>
                <div class="contribution-title-wrap">
                    <i class="${item.icon} contribution-icon"></i>
                    <h3 class="contribution-title">${item.repoName}</h3>
                </div>
            </div>
            <div class="contribution-role">${item.role}</div>
            <p class="contribution-desc">${item.description}</p>
            <div class="contribution-tags">
                ${tagsHTML}
            </div>
            <a href="${item.link}" target="_blank" class="contribution-link-museum">
                Explore Repository <i class="fas fa-arrow-right"></i>
            </a>
        </div>
      `;
        }).join('');
        return `
      <div class="container">
          <div class="editorial-header">
              <span class="editorial-archive-label">ARCHIVE — INDEX 05</span>
              <h2 class="section-title">Open Source Archives</h2>
              <p class="editorial-subtitle">Audited contributions, smart contract toolkits, protocol modules, and patches across public decentralized ecosystems.</p>
          </div>
          <div class="contributions-grid">
              ${cardsHTML}
          </div>
      </div>
    `;
    }
    init() {
        // Handled by main.ts
    }
}
