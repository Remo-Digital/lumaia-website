export type Locale = 'en-ch' | 'de-ch'

export const translations = {
  'en-ch': {
    // ── Navigation ──
    nav: {
      cta: 'Book Demo',
      lang: 'DE',
      agentic: 'Use Case',
      solution: 'Solution',
      platform: 'Platform',
      useCases: 'Use Cases',
      blog: 'Blog',
      pricing: 'Pricing',
      contact: 'Contact',
      banner: 'New: Product Asset Studio – Brand-safe AI product images for your online shop.',
      bannerCta: 'Learn more',
    },

    // ── Homepage Hero ──
    hero: {
      label: 'Agentic Agency Platform',
      h1: 'The ',
      h1_em: 'Agentic Agency Platform',
      h1_2: 'for E-Commerce',
      sub: 'AI shopping agents from Google, OpenAI, and Perplexity are already making autonomous purchases today \u2013 evaluating your product line based on criteria that traditional product photos were never designed to meet. If your catalog isn\u2019t fully machine-readable, you won\u2019t even make the recommendation list. LumAIa makes your product data and images GEO-ready \u2013 at the scale of your entire catalog.',
      cta_primary: 'Book a demo',
      cta_secondary: 'Explore the modules',
      microcopy: 'No credit card. Free demo session.',
      stats: [
        { value: '100%', label: 'Agent-Ready' },
        { value: '100%', label: 'Brand Safety' },
        { value: '\u221e', label: 'Infinite Scalability' },
        { value: '90%', label: 'Cost Reduction' },
      ],
    },

    // ── Trust Logos ──
    trustLogos: {
      title: 'Trusted by',
    },

    // ── Problem Section ──
    problem: {
      label: 'The Challenge',
      title: 'Why traditional marketing hits its',
      title_em: 'limits',
      intro: 'Marketing in 2026 demands more output, more personalization, and strict compliance \u2013 more than any team can handle manually. This is not a skill problem. It is a structural one.',
      items: [
        'Campaigns take weeks instead of days \u2013 the market will not wait.',
        'Agency costs climb while ROI turns into a gamble.',
        'Email ping-pong and meetings replace decisions.',
        'Every step of growth demands new headcount \u2013 scaling becomes the ceiling.',
        'More than 100 touchpoints can no longer be run by hand.',
      ],
      conclusion: 'Traditional agencies are no longer part of the solution. They are the bottleneck.',
      quote: '\u201cQuality no longer takes weeks \u2013 it takes the right architecture.\u201d',
    },

    // ── Four Phases ──
    fourPhases: {
      label: 'The Platform',
      title: 'Four phases,',
      title_em: 'one system',
      sub: 'LumAIa covers the entire agency value chain \u2013 as one continuous system, not a set of separate tools. Each phase hands its result to the next. Nothing slips through the cracks.',
      phases: [
        { num: '01', title: 'Plan', desc: 'Strategic thinking at the campaign level: market analysis, personas, media strategy, budget plan. Data-driven and structured \u2013 before a single asset is produced.' },
        { num: '02', title: 'Build', desc: 'Asset creation in seconds: banners, copy, visuals, landing pages, emails \u2013 consistent in your brand voice, for every channel. For shops with thousands of products, Product Asset Studio handles image production.' },
        { num: '03', title: 'Publish', desc: 'Campaigns go live automatically. Autonomous budget control and real-time optimization run within the parameters you define \u2013 no manual intervention, around the clock.' },
        { num: '04', title: 'Report & Learn', desc: 'Every campaign makes the next one better. Attribution in plain language, management reports without the number soup, and a learning signal that flows straight back into strategy and production.' },
      ],
      modulesLink: 'All 19 modules at a glance:',
      modulesLinkText: 'Go to the platform overview',
    },

    // ── Demo CTA (mid-page) ──
    demoCta: {
      title: 'Ready to see it for yourself?',
      sub: 'See in 20 minutes what LumAIa would look like for your brand. No pitch, no boilerplate deck \u2013 a demo tailored to your context.',
      cta: 'Book a demo',
    },

    // ── Agentic Commerce Teaser ──
    agenticTeaser: {
      title: 'Agentic Commerce: get your online shop ready for the AI-agent era',
      p1: 'AI agents like ChatGPT, Gemini, and Perplexity already shop on behalf of consumers \u2013 without a human guiding every step. Most online shops are neither discoverable nor trustworthy enough for these agents, and fall short of the standard.',
      p2: 'With Product Asset Studio, LumAIa makes online shops agent-ready: a single product image becomes a complete, verified asset set \u2013 EU AI Act compliant and with C2PA provenance \u2013 the foundation for a shop that is visible not only to people, but to agents too.',
      link1: 'Understand Agentic Commerce',
      link2: 'More use cases',
    },

    // ── Trust Architecture ──
    trustArch: {
      title: 'Trust is built in,',
      title_em: 'not bolted on',
      sub: 'Every campaign, every asset runs through the same trust architecture \u2013 before it reaches your customer:',
      items: [
        { title: 'Integration Hub', desc: 'One data source for your entire marketing chain, from PIM/DAM to analytics. No data silos, no manual exports.' },
        { title: 'Brand and Compliance Guards', desc: 'Automatic checks against brand guidelines and legal requirements. Every asset, every time.' },
        { title: 'Campaign Engineer Gate', desc: 'Experienced marketing professionals validate what the system should not decide alone. People stay in control where it matters.' },
      ],
      conclusion: 'That is the difference between a tool and an agency.',
    },

    // ── Product Asset Studio Teaser ──
    pasTeaser: {
      title: 'From one product image to a complete asset set',
      p1: 'Product Asset Studio turns a single product photo into hero, lifestyle, detail, and micro-rotation assets — brand-safe, EU AI Act compliant, and with C2PA provenance.',
      p2: 'No photo shoot required. Catalog-ready images in minutes, rated with a Fidelity Score so nothing goes live without passing quality checks.',
      link: 'Discover Product Asset Studio',
    },

    // ── Testimonials ──
    testimonials: {
      title: 'What our customers say',
      items: [
        { quote: '[Customer quote placeholder \u2013 pending approval]', name: '[Name]', role: '[Role]', company: '[Company]' },
        { quote: '[Customer quote placeholder \u2013 pending approval]', name: '[Name]', role: '[Role]', company: '[Company]' },
      ],
      note: 'No anonymous quotes. Full name, role, and company required.',
    },

    // ── Comparison ──
    comparison: {
      label: 'Comparison',
      title: 'LumAIa vs. the traditional agency',
      headers: ['Criterion', 'Traditional Agency', 'LumAIa Agentic Agency'],
      rows: [
        { label: 'Campaign launch', agency: '4\u20138 weeks', lumaia: '<24 hours' },
        { label: 'Cost per campaign', agency: 'CHF 50,000\u2013150,000', lumaia: 'From CHF 39/month' },
        { label: 'Scalability', agency: 'Limited by headcount', lumaia: 'Unlimited' },
        { label: 'Brand compliance', agency: 'Manual, error-prone', lumaia: '100% \u2013 Campaign Engineer Gate' },
        { label: 'A/B testing', agency: 'Manual, time-consuming', lumaia: 'Automated, in real time' },
        { label: 'AEO optimization', agency: 'Not available', lumaia: 'Natively integrated' },
        { label: 'Learning effect', agency: 'Depends on staff', lumaia: 'Continuous, systemic' },
      ],
    },

    // ── Pricing Teaser ──
    pricingTeaser: {
      title: 'Transparent pricing, no fine print',
      headers: ['', 'Self-Serve (e.g. Product Asset Studio)', 'Pilot Partner (Agentic Agency)'],
      rows: [
        { label: 'Access', col1: 'Individual modules', col2: 'All modules' },
        { label: 'Pricing model', col1: 'From CHF 39/month, cancel monthly', col2: '12-month fixed price' },
        { label: 'Getting started', col1: 'Instant, no call required', col2: 'After a demo' },
        { label: 'Who it is for', col1: 'Teams with a clearly defined need', col2: 'Teams that want the full system' },
      ],
      link: 'View pricing',
    },

    // ── FAQ ──
    faq: {
      label: 'FAQ',
      title: 'Frequently asked',
      title_em: 'questions',
      items: [
        { q: 'Is LumAIa a tool or an agency?', a: 'LumAIa is an AI platform that automates the work of an agency \u2013 with professionals in the background who review every critical decision.' },
        { q: 'How do you ensure brand safety and legal compliance?', a: 'Through the Campaign Engineer Gate: every asset first passes automatic brand and compliance guards. Anything they cannot clearly resolve is reviewed by a person. Nothing is published without review.' },
        { q: 'How quickly is LumAIa up and running?', a: 'From brief to first launch typically takes 48 hours. Pilot partners receive onboarding and setup as part of their fixed-price package.' },
        { q: 'Which channels are supported?', a: 'Meta (Facebook/Instagram), Google Ads, TikTok, Display/Programmatic, SEO/AEO, Email/Newsletter, CMS integration.' },
        { q: 'What does LumAIa cost?', a: 'Self-serve modules like Product Asset Studio start at CHF 39/month, cancelable monthly. Pilot partners receive a 12-month fixed price with full module access. All details at lumaia.studio/pricing.' },
        { q: 'What does "Pilot Partner" mean?', a: 'A pilot partner secures early, full access to all modules at a guaranteed fixed price \u2013 and shapes the development of LumAIa directly. The number of pilot partner spots is limited.' },
      ],
    },

    // ── Blog Teaser ──
    blogTeaser: {
      title: 'Go deeper on the LumAIa blog',
      sub: 'More on Agentic Commerce, AI visibility in answer engines, and the future of marketing on the LumAIa blog.',
      link: 'Go to the blog',
      posts: [
        { title: 'Blog article placeholder 1', slug: '#' },
        { title: 'Blog article placeholder 2', slug: '#' },
        { title: 'Blog article placeholder 3', slug: '#' },
      ],
    },

    // ── CTA Final ──
    cta: {
      label: 'Get Started',
      title: 'Become a pilot partner',
      title_em: 'before your competition does',
      sub: 'Secure 12 months at a guaranteed fixed price, full module access, and direct influence on the development of LumAIa.',
      ctaButton: 'Book a demo',
    },

    // ── Footer ──
    footer: {
      copyright: '\u00a9 2026 LumAIa by Dewave GmbH',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Terms', href: '/legal/terms' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Imprint', href: '/imprint' },
      ],
      platform: 'Platform',
      useCases: 'Use Cases',
      company: 'Company',
    },

    // ── Contact Page ──
    contact: {
      label: 'Contact',
      title: 'Get in',
      title_em: 'touch',
      sub: 'Have a question or want to learn more about LumAIa? We\'d love to hear from you.',
      info: {
        email_label: 'Email',
        email_value: 'hello@lumaia.ai',
        location_label: 'Location',
        location_value: 'Switzerland',
        response_label: 'Response Time',
        response_value: 'Within 48 hours',
      },
      formId: '4a6a06b0-4008-43cd-a2ec-f4d6978022d2',
      consentText: 'I have read and accept the',
      privacyLabel: 'Privacy Policy',
    },

    // ── Privacy Page ──
    privacy: {
      label: 'Privacy Policy',
      title: 'Privacy ',
      title_em: 'Policy',
      intro: 'Responsible Entity: LumAIa by Dewave GmbH, Bahnhofstrasse 59, 6312 Steinhausen, Switzerland\nData Protection Contact: privacy(@)lumaia.studio',
      version: 'Version: 1.0 · As of: 08.09.2026',
      translationNote: 'Important Note: This is a machine-translated version of the Privacy Policy. In the event of any discrepancies, disputes, or legal matters, the German language version shall prevail exclusively.',
      sections: [
        { title: '1. Overview and Scope', paragraphs: [
          'We take the protection of your personal data seriously. This Privacy Policy informs you about which personal data we process when you use our website www.LumAIa.ch, our Software-as-a-Service platform "LumAIa" (the Agentic Agency OS), and in the context of communication, marketing, and support, as well as for what purposes, on what legal basis, and to whom we disclose it.',
          'This policy applies to all processing operations for which we are the data controller. For personal data that our customers upload to the platform and that we process on their behalf, the customers are the controllers and we act as the data processor – see Section 3.',
          'The Swiss Federal Act on Data Protection (FADP) and, to the extent applicable, the EU General Data Protection Regulation (GDPR) govern these practices. Terms such as "processing" are used interchangeably under both laws.',
        ]},
        { title: '2. Controller and Contact', paragraphs: [
          'Controller: LumAIa by Dewave GmbH, Bahnhofstrasse 59, 6312 Steinhausen, Switzerland\nData Protection Inquiries: privacy@lumaia.studio\nData Protection Officer / Advisor: Remo Girard',
        ]},
        { title: '3. Dual Role: Own Processing vs. Processing on Behalf of Customers', paragraphs: [
          'a) We as Controller: For data relating to website visitors, prospective clients, contact persons of our customers, job applicants, and user accounts (registration, billing, support, security), we determine the purposes and means ourselves. This Privacy Policy applies fully to these processing operations.',
          'b) We as Data Processor: Content uploaded by customers to the platform or connected via interfaces – such as customer lists, CRM data, image material depicting individuals, or campaign data – is processed by us exclusively in accordance with the customer\u2019s instructions on the basis of a Data Processing Agreement (DPA). For information and to exercise data subject rights regarding such data, individuals should contact the respective customer. If we receive an access or deletion request concerning such data, we will forward it immediately to the customer.',
        ]},
        { title: '4. Data We Process', paragraphs: [
          'Master and Contact Data: First and last name, company, position, business address, email address, phone number, language.',
          'Account and Usage Data: Username, role and permissions, time of registration, login timestamps, booked modules and plans, number of seats, credit consumption, created projects and assets (metadata), support history.',
          'Contract and Payment Data: Contract contents and term, invoice and payment details, payment method, payment status, reminders. Full payment card details are processed exclusively by our payment service provider (Stripe); we only receive a token, card type, the last four digits, and the expiration date.',
          'Technical Data: IP address, date and time of access, requested pages and resources, HTTP status codes, data volume transferred, referrer URL, browser type and version, operating system, device type, screen resolution, language settings, error and security logs.',
          'Behavioral and Analytics Data: Interactions with our website and platform, accessed features, click and scroll behavior, session recordings and heatmaps (see Section 8 regarding Smartlook), opening and click rates of our emails.',
          'Communication Data: Content of emails, contact forms, support tickets, chat histories, notes on conversations and appointments, recordings of online meetings (only with prior information and consent).',
          'Content and AI Data: Prompts, briefings, and uploads entered by users, as well as the resulting outputs (texts, images, videos, evaluations). These may contain personal data if users input or upload such data.',
          'Application Data: Application documents, CV, references, interview notes (only for applications to our company).',
          'We primarily collect personal data directly from you. Additionally, we may collect data from publicly accessible sources (websites, commercial registries, LinkedIn), from customers, intermediaries, or cooperation partners, and automatically when you visit our services.',
        ]},
        { title: '5. Purposes and Legal Bases', paragraphs: [
          'We process personal data for the following purposes:',
          'Provision and operation of the platform, user management, support – Legal Basis: Art. 6(1)(b) GDPR (Performance of contract) / Contract performance, Art. 31(2)(a) FADP',
          'Billing, payment processing, credit and fraud checks – Legal Basis: Art. 6(1)(b) and (f) GDPR / Legitimate interest in secured payment',
          'Security, abuse and attack detection, logging – Legal Basis: Art. 6(1)(f) GDPR / Legitimate interest in system security',
          'Improvement and development of the platform, product analytics – Legal Basis: Art. 6(1)(f) GDPR; Art. 6(1)(a) for non-essential cookies / Consent where required',
          'Direct marketing to B2B clients, newsletter, events – Legal Basis: Art. 6(1)(f) or (a) GDPR upon consent / Comply with Art. 3 UWG; opt-out possible at any time',
          'Compliance with legal obligations (accounting, VAT, reporting) – Legal Basis: Art. 6(1)(c) GDPR / Legal obligation',
          'Legal enforcement and defense against claims – Legal Basis: Art. 6(1)(f) GDPR / Legitimate interest',
          'Application procedures – Legal Basis: Art. 6(1)(b), Art. 88 GDPR / Pre-contractual relationship',
          'Where we request your consent, you may revoke it at any time with effect for the future (datenschutz@LumAIa.ch or via cookie settings). The lawfulness of processing conducted prior to revocation remains unaffected.',
        ]},
        { title: '6. Cookies and Similar Technologies', paragraphs: [
          'We use cookies and similar technologies (Local Storage, pixels, SDKs) on our website and platform.',
          'Essential Cookies: Enable login, session management, load balancing, security, and storage of your cookie preferences. They are required for operation and set without consent.',
          'Analytics and Performance Cookies: Help us understand usage and improve our services. They are set only after your consent in the cookie banner.',
          'Marketing Cookies: Used to measure and control advertising and are set only with your consent.',
          'You can adjust your choices at any time via the Cookie Settings and delete or block cookies in your browser settings. If essential cookies are blocked, parts of our services may not function.',
        ]},
        { title: '7. Data Sharing and Processors', paragraphs: [
          'We share personal data with:',
          'Service providers and data processors supporting our operations (hosting, AI services, email dispatch, analytics, payment processing, support tools, accounting) – see the table in Section 8. They are contractually bound to process data only according to our instructions and maintain adequate security;',
          'Advisors and authorities (attorneys, auditors, insurers, tax and regulatory authorities, courts), to the extent necessary or required by law;',
          'Acquirers or investors in the context of corporate transactions, subject to confidentiality.',
          'We do not sell personal data.',
        ]},
        { title: '8. Service Providers and Sub-Processors', paragraphs: [
          'Below are the services used in operating and marketing LumAIa. This list is kept up to date; changes are communicated pursuant to the DPA.',
          'Google Cloud Platform / Vertex AI – Google Ireland Ltd., IE / Google LLC, USA – Hosting, computing power, image/text generation, asset storage – EU/CH regions, potentially USA',
          'Google Workspace – Google Ireland Ltd., IE – Internal communication, documents, calendars – EU, potentially USA',
          'Supabase – Supabase, Inc., USA – Database, user authentication, asset storage – EU (Frankfurt/Zurich) recommended',
          'Stripe – Stripe Payments Europe Ltd., IE / Stripe, Inc., USA – Payment processing, subscription management, fraud prevention – EU and USA',
          'Customer.io – Peaberry Software, Inc., USA – Transactional emails, onboarding sequences, newsletters – USA',
          'Smartlook – Smartlook s.r.o., CZ (Cisco Group) – Usage analytics, heatmaps, error diagnostics via pseudonymized session recordings – EU (Czech Republic), intra-group transfers to USA possible',
          'Regarding Smartlook: Session recordings reproduce interactions with our interface. Smartlook is configured to mask input fields and sensitive areas so that no passwords, payment data, or sensitive personal data are captured. Usage occurs only upon your consent in the cookie banner.',
        ]},
        { title: '9. International Data Transfers', paragraphs: [
          'Personal data may be transferred to countries outside Switzerland and the EEA, particularly the USA, if service providers operate infrastructure or provide support there. Not all of these countries possess data protection laws recognized as adequate by the Swiss Federal Council or the European Commission.',
          'In such cases, we base the transfer on: Standard Contractual Clauses (SCCs) in the version approved by the EU Commission, incorporating adaptations recognized by the Swiss FDPIC, supplemented by technical and organizational measures; where applicable, the recipient\u2019s certification under the EU-U.S. Data Privacy Framework and its Swiss-U.S. Extension; in individual cases, your explicit consent or statutory exceptions (Art. 17 FADP, Art. 49 GDPR).',
          'You may request a copy of the applied safeguards at datenschutz@LumAIa.ch.',
        ]},
        { title: '10. Data Retention and Deletion', paragraphs: [
          'We retain personal data for as long as necessary to fulfill the stated purposes, and beyond that, as required by statutory retention duties or to defend against claims.',
          'Account and Contract Data: Duration of contract and 10 years thereafter (commercial and tax retention duties, Art. 958f CO)',
          'Invoice and Payment Data: 10 years',
          'Customer Content on Platform: Contract duration, export available for 30 days thereafter, deletion within 90 days',
          'Server and Security Logs: 90 days; retained until resolution in case of security incidents',
          'Session Recordings (Smartlook): 3 months',
          'Newsletter / Marketing Data: Until revocation; suppressed on a suppression list thereafter to honor opt-out',
          'Contact Inquiries (no contract): 24 months',
          'Application Data: 6 months after completion of hiring process; longer upon consent',
          'Upon expiration of these periods, data is deleted or anonymized. Backup copies may persist until regular rotation cycles complete.',
        ]},
        { title: '11. Data Security', paragraphs: [
          'We implement appropriate technical and organizational measures (TOMs) to protect personal data against unauthorized access, loss, and misuse. These include transmission encryption (TLS) and storage encryption, role-based access control based on least privilege, multi-factor authentication for administrative accounts, logging and monitoring, regular backups, segregation of production and test environments, employee training, and contractual obligations for all service providers.',
          'Despite diligent measures, no internet transmission is entirely secure. In the event of a high-risk data breach, we will notify the competent authorities and affected individuals in accordance with Art. 24 FADP and Arts. 33–34 GDPR.',
        ]},
        { title: '12. Automated Individual Decision-Making and AI Usage', paragraphs: [
          'The platform generates AI-driven suggestions (texts, images, budget, and channel recommendations). These suggestions are reviewed and approved by human users; they do not trigger automated individual decision-making producing legal effects or significantly affecting data subjects pursuant to Art. 21 FADP / Art. 22 GDPR.',
          'For payment processing and fraud prevention, our payment service provider may conduct automated risk assessments. If this results in a declined transaction, you may contact us to request a manual review.',
          'Inputs entered into the platform are not used by us to train general third-party AI models. For deployed model providers, we utilize configurations and contractual terms that exclude the use of inputs for model training purposes.',
        ]},
        { title: '13. Your Rights', paragraphs: [
          'Under the FADP and – where applicable – GDPR, you have the following rights: Access to your personal data processed by us; Rectification of inaccurate data; Erasure or destruction of data; Restriction of processing; Objection to processing based on legitimate interests, particularly direct marketing; Data Portability in a structured, commonly used electronic format; Revocation of granted consent with effect for the future; Lodge a Complaint with a supervisory authority.',
          'To exercise your rights, please contact datenschutz@LumAIa.ch. To prevent abuse, we may verify your identity. We will respond within 30 days; for complex requests, we will notify you of an extension.',
          'Supervisory Authorities: Switzerland – Federal Data Protection and Information Commissioner (FDPIC), Bern, edoeb.admin.ch. EU/EEA – The data protection authority of your place of residence or work.',
        ]},
        { title: '14. Website Visits, Newsletters, Social Media, and Applications', paragraphs: [
          'Server Logs: Visiting our website generates technical log data as specified in Section 4. This is necessary for infrastructure provision and security (legitimate interest).',
          'Contact Forms and Demo Requests: We use your information to process requests and follow up. In a B2B context, where permissible, we may send follow-up information regarding similar products. You can opt out of these communications at any time.',
          'Newsletters: Dispatched via Customer.io. Registrations are confirmed via Double Opt-In. We track open and click rates to optimize content. Every email contains an unsubscribe link.',
          'Social Media: Profiles hosted on networks are governed by the privacy policies of the respective platforms. We process messages, posts, and analytics received on these platforms for communication and reach measurement. Third-party content embedded on our site (e.g., videos, map services) loads only upon your consent.',
          'Applications: Candidate data is processed solely to evaluate suitability for employment. Access is restricted to HR and involved hiring managers.',
        ]},
        { title: '15. Amendments to this Privacy Policy', paragraphs: [
          'We may revise this Privacy Policy to reflect changes in our processing practices, integrated services, or applicable law. The current version published on our website shall apply. Registered users will be notified of material changes via email or platform announcements.',
        ]},
      ],
    },

    // ── Imprint Page ──
    imprint: {
      label: 'Imprint',
      title: 'Legal',
      title_em: 'Notice',
      company: 'Company',
      address: 'Address',
      uid: 'Company Number (UID)',
      responsible: 'Responsible for content',
    },

    // ── Pricing Page ──
    pricingPage: {
      meta_title: 'Pricing \u2013 LumAIa',
      meta_desc: 'Transparent pricing for LumAIa. Starter from CHF\u00a039/seat/month, Pro from CHF\u00a069/seat/month. Agency and Enterprise plans available.',
      label: 'Pricing',
      title: 'Transparent pricing,',
      title_em: 'no fine print',
      trialBadge: '30-day free trial \u2013 no credit card required.',
      compareBtn: 'Compare all features',
      compareBtnClose: 'Hide comparison',
      plans: [
        {
          id: 'starter',
          label: 'Starter',
          target: 'Solo practitioners, local SMEs',
          price: 'CHF 39',
          priceSub: '/ seat / month',
          desc: 'All modules unlocked. Ideal for individuals and small teams with a clearly defined need.',
          features: [
            'All modules unlocked',
            '250 LumAIa Credits/seat included',
            '1 brand',
            'Bulk batch up to 10 (Product Asset Studio)',
            'AI Chat & Docs support',
            'Basic integration',
          ],
          cta: 'Start 30-day free trial',
          ctaHref: '/signup',
          highlight: false,
          trial: true,
        },
        {
          id: 'pro',
          label: 'Pro',
          badge: 'Most popular',
          target: 'E-Commerce & SME teams',
          price: 'CHF 69',
          priceSub: '/ seat / month',
          desc: 'More credits, more brands, unlimited batch production. For teams that scale regularly.',
          features: [
            'All modules unlocked',
            '400 LumAIa Credits/seat incl. (2\u00d7 rollover)',
            'Up to 3 brands (+CHF\u00a0119/month each)',
            'Unlimited bulk batch (Product Asset Studio)',
            'Verified domains',
            'Commerce integration',
            'AI Chat & Docs support',
          ],
          cta: 'Start 30-day free trial',
          ctaHref: '/signup',
          highlight: true,
          trial: true,
        },
        {
          id: 'agency',
          label: 'Agency',
          target: 'Agency partners',
          price: 'CHF\u00a0499',
          priceSub: 'per month',
          priceSub2: 'each additional seat CHF\u00a079',
          desc: 'Unlimited brands, pay-per-use credits and agency tools for client mandates.',
          features: [
            'All modules unlocked',
            '1 seat included',
            'Unlimited brands (+CHF\u00a0149/month each)',
            'Unlimited bulk batch (Product Asset Studio)',
            'Pay-per-use credits',
            'SSO + REST API',
            'Enterprise integration',
            'Campaign Engineer on request (CHF\u00a0180/h)',
            'Verified domains',
            'Email support',
          ],
          cta: 'Book demo',
          ctaHref: '/contact',
          highlight: false,
          trial: false,
        },
        {
          id: 'enterprise',
          label: 'Enterprise',
          target: 'Large enterprises, multi-brand',
          price: 'On request',
          priceSub: '',
          desc: 'Individual terms, 3 campaign engineers included, priority support and custom SLA.',
          features: [
            'All modules unlocked',
            'Unlimited brands',
            'Pay-per-use credits',
            'SSO + REST API',
            'Enterprise integration',
            'Priority email support',
            'Custom SLA',
          ],
          cta: 'Get in touch',
          ctaHref: '/contact',
          highlight: false,
          trial: false,
        },
      ],
      compareTable: {
        title: 'Feature comparison',
        headers: ['Feature', 'Starter', 'Pro', 'Agency', 'Enterprise'],
        rows: [
          { label: 'Price/seat/month', cols: ['CHF 39', 'CHF 69', 'CHF 79', '\u2013'] },
          { label: 'Platform licence', cols: ['\u2013', '\u2013', 'CHF 499/month', 'On request'] },
          { label: 'Credits/seat/month', cols: ['250 LC', '400 LC', 'Pay per use', 'Pay per use'] },
          { label: 'Credit rollover', cols: ['\u2013', '2\u00d7', '\u2013', '\u2013'] },
          { label: '30-day free trial', cols: ['\u2713', '\u2713', '\u2013', '\u2013'] },
          { label: 'Brands incl.', cols: ['1', '1', '1', '1'] },
          { label: 'Max. brands', cols: ['1', '3', 'Unlimited', 'Unlimited'] },
          { label: 'Add\'l brand/month', cols: ['\u2013', 'CHF 119', 'CHF 149', 'CHF 149'] },
          { label: 'Bulk batch (PAS)', cols: ['up to 10', 'Unlimited', 'Unlimited', 'Unlimited'] },
          { label: 'All modules', cols: ['\u2713', '\u2713', '\u2713', '\u2713'] },
          { label: 'Verified domains', cols: ['\u2013', '\u2713', '\u2713', '\u2713'] },
          { label: 'SSO', cols: ['\u2013', '\u2013', '\u2713', '\u2713'] },
          { label: 'REST API', cols: ['\u2013', '\u2013', '\u2713', '\u2713'] },
          { label: 'Integration', cols: ['Basic', 'Commerce', 'Enterprise', 'Enterprise'] },
          { label: 'Campaign Engineer', cols: ['\u2013', '\u2013', 'CHF 180/h', '\u2013'] },
          { label: 'Support', cols: ['AI Chat & Docs', 'AI Chat & Docs', 'Email', 'Priority Email'] },
        ],
      },
      credits: {
        label: 'LumAIa Credits',
        title: 'What does an asset cost?',
        intro: 'LumAIa Credits are the unit for AI production in LumAIa. Starter and Pro plans include credits in the subscription \u2013 no counting, no surprises. With LumAIa you save at least 90% compared to traditional production.',
        disclaimer: '* Approximate reference values. Traditional costs are based on market prices for professional product photography and image editing.',
        assets: [
          { name: 'Hero Shot', credits: '25 LC', traditional: 'CHF 150\u2013400' },
          { name: 'Lifestyle Image Set', credits: '50 LC', traditional: 'CHF 300\u2013800' },
          { name: 'Micro-Rotation', credits: '20 LC', traditional: 'CHF 100\u2013250' },
          { name: 'Detailed Close-up', credits: '35 LC', traditional: 'CHF 120\u2013300' },
        ],
      },
      faqTeaserText: 'Still have questions? Clarify all details directly in a conversation.',
      faqTeaserContact: 'Get in touch',
    },

    // ── Platform Page ──
    platformPage: {
      meta_title: 'Platform Overview \u2013 LumAIa',
      meta_desc: 'Explore all 19 modules of the LumAIa Agentic Agency Platform \u2013 from strategic planning to campaign optimization.',
      label: 'The Platform',
      title: 'All 19 modules',
      title_em: 'at a glance',
      sub: 'LumAIa covers the entire agency value chain in four phases. Each module is designed to work standalone or as part of the complete system.',
      comingSoon: 'Coming soon',
      live: 'Live',
    },

    // ── Use Cases Page ──
    useCasesPage: {
      meta_title: 'Use Cases \u2013 LumAIa',
      meta_desc: 'Discover how LumAIa solves real marketing challenges \u2013 from Agentic Commerce to campaign scaling.',
      label: 'Use Cases',
      title: 'What LumAIa solves',
      title_em: 'concretely',
      sub: 'Real challenges, solved with a system \u2013 not with more headcount.',
      cases: [
        { title: 'Agentic Commerce', desc: 'Make your online shop ready for AI shopping agents.', href: '/use-cases/agentic-commerce', badge: 'Featured' },
        { title: 'Product Launch at Record Speed', desc: '50 new products, cross-channel campaign in 48 hours instead of 4 weeks.', href: '#', badge: 'Coming soon' },
        { title: 'ROAS Maximization', desc: 'Detect ad fatigue, create new variants, shift budget to winners \u2013 24/7.', href: '#', badge: 'Coming soon' },
        { title: 'Regional Campaign Scaling', desc: '100 locations, 100% individualized \u2013 from 30 days to 48 hours.', href: '#', badge: 'Coming soon' },
        { title: 'AEO Dominance', desc: 'Optimize for answer engines before it becomes the standard.', href: '#', badge: 'Coming soon' },
      ],
    },

    // ── Agentic Commerce Use Case Page ──
    agenticCommerce: {
      meta_title: 'Agentic Commerce: Is Your Online Shop Ready? | LumAIa',
      meta_desc: 'AI agents already shop for consumers. Find out whether your online shop is ready \u2013 and how Product Asset Studio solves it. Read now.',
      h1: 'What Is Agentic Commerce \u2013 And Is Your Online Shop Ready for It?',
      heroAlt: 'An AI agent shopping in an online shop on behalf of a consumer',
      directAnswer: 'Agentic commerce is the act of shopping through autonomous AI agents like ChatGPT, Gemini, or Perplexity, without a human guiding every step. The agent searches, compares, and buys on behalf of the consumer. Whether your online shop is even considered comes down to three prerequisites \u2013 more on those below.',
      toc: [
        'How do AI agents actually shop?',
        'Why does this matter now?',
        'How do I know if my online shop is agent-ready?',
        'What are examples of AI-to-AI commerce?',
        'The three prerequisites for agentic commerce',
        'Traditional online shop vs. agent-ready online shop',
        'The solution: Product Asset Studio',
      ],
      sections: {
        howAgentsShop: {
          title: 'How do AI agents actually shop?',
          intro: 'An AI agent does not shop like a human. It does not open a website, does not scroll through categories, and is not swayed by a banner. Instead, it accesses product data directly through structured interfaces and open protocols, compares it, and completes the purchase.',
          protocolsIntro: 'Five protocols shape this process:',
          protocols: [
            { name: 'ACP', full: 'Agentic Commerce Protocol', desc: 'An open standard that lets agents handle purchase processes directly, connected to checkout and payment providers.' },
            { name: 'UCP', full: 'Universal Commerce Protocol', desc: 'A standard that structures product data so different agents can read it consistently.' },
            { name: 'MCP', full: 'Model Context Protocol', desc: 'The technical foundation through which AI models access external data sources and tools in a controlled way.' },
            { name: 'AP2', full: 'Agent Payments Protocol', desc: 'An open standard that lets agents trigger payments securely and with authorization on behalf of the consumer.' },
            { name: 'A2A', full: 'Agent-to-Agent Protocol', desc: 'A standard for direct communication between agents, through which an assistant agent and a merchant agent exchange requests, offers, and confirmations.' },
          ],
          conclusion: 'For you as a shop operator, this means: it is not the prettiest storefront that wins, but the product catalog an agent can reliably read, understand, and classify as trustworthy.',
        },
        whyNow: {
          title: 'Why does this matter now?',
          p1: 'The infrastructure for agentic commerce is not emerging in a few years \u2013 it is emerging now. Major commerce platforms and payment providers have begun opening their online shops and product catalogs to AI agents.',
          p2: 'Here is the problem: if you are not agent-ready today, you do not lose quality \u2013 you lose visibility. An agent that finds three comparable products but can only reliably read and verify two of them will simply not suggest the third. For the consumer, in that moment, it does not exist.',
          p3: 'And unlike traditional search engine optimization, there is no second page here where you can still be found. The agent makes a selection \u2013 often just a single recommendation. If you are not in that selection, you do not exist.',
          p4: 'That is the real urgency: this is not about catching a trend early. It is about not becoming invisible while buying behavior shifts.',
        },
        selfCheck: {
          title: 'How do I know if my online shop is agent-ready?',
          intro: 'A quick self-check. Every question you hesitate on marks a starting point \u2013 not a verdict.',
          items: [
            'Is your product data stored in a structured way (Schema.org, clean, complete attributes), or does it exist only as body text and images?',
            'Do your product images have verifiable provenance (for example C2PA), or could an agent classify them as potentially misleading or unverifiable?',
            'Do your images meet current requirements, such as the EU AI Act on labeling AI-generated content?',
            'Is your shop technically accessible to agents and crawlers, or do robots.txt rules or a purely JavaScript-based rendering block access unintentionally?',
          ],
          conclusion: 'The more often you hesitate, the bigger the blind spot \u2013 and the bigger the opportunity in fixing it.',
        },
        examples: {
          title: 'What are examples of AI-to-AI commerce?',
          p1: 'Imagine a consumer asks their personal AI assistant: \u201cFind me a gift for under 100 francs, deliverable by Friday.\u201d The assistant queries several merchant agents at once for price, availability, and delivery time, compares them, and completes the purchase with the best-fitting provider \u2013 without the consumer ever visiting an online shop.',
          p2: 'On the other side is your shop agent, answering that request: it returns structured product data, verified images, and reliable availability. If that dialogue between the machines does not happen \u2013 because your data is incomplete or your images are not verifiable \u2013 your product drops out of the selection.',
          p3: 'Visibility is no longer decided only at the moment a human clicks \u201cBuy,\u201d but already in the conversation between two agents that the human never gets to see.',
        },
        prerequisites: {
          title: 'The three prerequisites for agentic commerce',
          intro: 'For your online shop to be visible and selectable to agents, three things are needed:',
          items: [
            { title: 'Structured product data', desc: 'Machine-readable, complete, standardized (Schema.org, clean attributes).' },
            { title: 'Compliant image assets', desc: 'With provenance (C2PA), EU AI Act compliant, without misleading representation.' },
            { title: 'Technical accessibility', desc: 'Open interfaces, crawler access, connection to the relevant protocols.' },
          ],
          conclusion: 'The first and third prerequisites are familiar to many from traditional technical optimization. The second \u2013 compliant, verifiable image assets \u2013 is new and most often overlooked. This is exactly where Product Asset Studio comes in.',
        },
        comparisonTable: {
          title: 'Traditional online shop vs. agent-ready online shop',
          rows: [
            { label: 'Product data', traditional: 'Body text, inconsistent', agentReady: 'Structured, Schema.org' },
            { label: 'Image provenance', traditional: 'Not verifiable', agentReady: 'C2PA manifest, EU AI Act compliant' },
            { label: 'Discoverability', traditional: 'Optimized for humans', agentReady: 'Optimized for humans and agents' },
            { label: 'Visibility to agents', traditional: 'Random to nonexistent', agentReady: 'Predictable' },
          ],
        },
        solution: {
          title: 'The solution: Product Asset Studio',
          p1: 'Of the three prerequisites, one is especially demanding \u2013 and most often underestimated: compliant, verifiable image assets at the volume a real product catalog requires.',
          p2: 'Product Asset Studio handles exactly this part. From a single product image, it creates a complete, verified asset set \u2013 each image rated with a Fidelity Score and equipped with a C2PA provenance record. This makes your product images not only appealing to humans, but traceable and trustworthy to agents.',
          p3: 'That is the image-asset side of agent-readiness \u2013 automated, compliant, and scalable.',
          cta: 'Explore Product Asset Studio',
        },
      },
      conclusion: 'Agentic commerce is not a future scenario but an infrastructure already taking shape. Online shops that are not agent-ready today do not lose quality \u2013 but they lose visibility, exactly where buying decisions are increasingly made. The first, often overlooked step begins with your product images.',
      tldr: [
        'Agentic commerce means shopping through autonomous AI agents (ChatGPT, Gemini, Perplexity), without individual human steps.',
        'Agents often choose only one recommendation \u2013 if you are not agent-ready, you do not show up.',
        'An agent-ready online shop needs three things: structured data, compliant image assets, technical accessibility.',
        'Product Asset Studio delivers the image-asset side: verified assets with a Fidelity Score and C2PA record.',
      ],
      author: {
        name: 'Remo Girard',
        role: 'Co-Founder of LumAIa',
        bio: 'Remo Girard is Co-Founder of LumAIa and CEO of iundf Dewave, a Swiss digital and AI transformation agency for SMEs. He has worked for years on e-commerce, custom AI solutions, GEO/AEO, and the agentic web, and guides Swiss companies through the shift to AI-powered marketing and commerce.',
      },
      faq: [
        { q: 'Which platforms count as agentic commerce?', a: 'Primarily AI assistants with shopping functions like ChatGPT, Gemini, and Perplexity, as well as agent-capable commerce and payment platforms.' },
        { q: 'What happens if my online shop is not agent-ready?', a: 'At first, nothing visible \u2013 but you are simply not considered for a growing share of agent-driven purchases, because the agent cannot reliably read or verify your products.' },
        { q: 'Is a good product image enough on its own?', a: 'No. Image assets are one of three prerequisites. Without structured data and technical accessibility, even the best image remains undiscoverable to an agent.' },
        { q: 'What is the difference between SEO and agent-readiness?', a: 'Traditional SEO optimizes for human search with multiple results pages. Agent-readiness optimizes for machine selection, where often only a single recommendation remains.' },
        { q: 'Is Product Asset Studio EU AI Act compliant?', a: 'Yes. The generated image assets are designed for the labeling and provenance requirements and are equipped with a C2PA provenance record.' },
      ],
    },

    // ── Product Asset Studio Page ──
    pas: {
      meta_title: 'Product Asset Studio \u2013 Brand-Safe AI Product Images',
      meta_desc: 'Create brand-safe product images for your online shop \u2013 EU AI Act compliant & C2PA-verified. Start fast, free, and without a credit card.',
      h1: 'Product Asset Studio: Brand-safe product images for your online shop from a single image.',
      heroAlt: 'Product Asset Studio generates a complete asset set from a single product image',
      directOffer: 'Product Asset Studio turns a single product image into a complete set of hero, lifestyle, detail, and micro-rotation assets \u2013 each rated with a Fidelity Score and equipped with a C2PA provenance record. The generated assets fully match your brand guidelines, ensuring they stay consistent and on-brand. You get catalog-ready, compliant images without a single new photo shoot.',
      cta: 'Start for free',
      ctaMicro: 'No credit card required \u2013 first assets in minutes.',
      trustLayer: 'Built by the iundf Group \u2013 25+ years of experience in marketing, communication, and software development. Every generated image receives a Fidelity Score as a measurable, traceable quality metric. No image goes live before it has passed the Campaign Engineer Gate.',
      sections: {
        whyDifferent: {
          title: 'Why your product images are suddenly judged differently',
          p1: 'AI shopping agents from Google, OpenAI, and Perplexity already shop autonomously today \u2013 they compare products, build carts, and complete purchases, entirely without a traditional search query. In doing so, they assess your assortment by criteria that classic product photos were never built for.',
          p2: 'The problem: a single cut-out is no longer enough. If lifestyle images, detail shots, or clean provenance are missing, your product gets suggested less often \u2013 or not at all. At the same time, traditional photo shoots are expensive, slow, and barely scalable across large assortments.',
          deepLink: 'Go deeper: how agentic commerce works and how to tell whether your shop is ready',
        },
        whatIs: {
          title: 'What Product Asset Studio is',
          desc: 'Product Asset Studio is an AI module that generates a complete, EU AI Act compliant image asset set from an existing product image and your existing product data \u2013 including Fidelity Scoring and a C2PA provenance record. From your existing imagery, it automatically creates the visuals that both convince customers in the shop and are read correctly by shopping agents.',
        },
        assetTypes: {
          title: 'Four asset types from a single image',
          intro: 'From one source image, Product Asset Studio generates four kinds of assets \u2013 exactly the ones a modern online shop and AI search require:',
          types: [
            { title: 'Lifestyle Images', desc: 'From product name and description, fitting lifestyle and in-use images are created \u2013 where previously only a cut-out existed. Your product is shown in real use.' },
            { title: 'Hero Shots', desc: 'Clean, consistent product photos on white \u2013 automatically generated, even for white-label products. Ideal as the main image for shop and feed.' },
            { title: 'Detailed Close-ups', desc: 'Detail shots and quality enhancement up to 4K from existing imagery \u2013 without a new shoot. Materials and craftsmanship become visible.' },
            { title: 'Micro-Rotation', desc: 'Your product from multiple angles \u2013 automatically generated, for a full all-around view without a 360-degree rig.' },
          ],
        },
        googleStandard: {
          title: 'The Google standard: 13 attributes for agentic inventory readiness',
          intro: 'For a product to be considered by AI agents at all, Google defines 13 essential attributes \u2013 grouped into three categories. Product Asset Studio fully covers the most important one.',
          prio1: 'Priority 1 \u2013 product images: high quality, lifestyle, additional. This is exactly where Product Asset Studio comes in, delivering all required image types automatically.',
          otherGroups: [
            { title: 'Product Basics', desc: 'Title, description, GTIN, precise product name, unique identifier.' },
            { title: 'Fulfillment', desc: 'Free shipping, shipping speed, return policy, complete delivery information.' },
            { title: 'Differentiators', desc: 'Product ratings, sale price, product type, product highlights, scannable feature lists.' },
          ],
        },
        howItWorks: {
          title: 'How it works',
          steps: [
            'Upload your product image and product data \u2013 from PIM/DAM/shop or manually.',
            'Product Asset Studio generates the complete asset set (lifestyle, hero, detail, micro-rotation).',
            'Each image is rated with a Fidelity Score: GREEN, Yellow, or RED.',
            'GREEN is released automatically. For Yellow or RED, a Campaign Engineer reviews the image manually (Campaign Engineer Gate).',
            'The finished, compliant assets are ready for download or direct integration \u2013 .webp, up to 4K.',
          ],
        },
        example1: {
          title: 'Example: one product image becomes six',
          before: 'Starting point: a product page with a single cut-out \u2013 here a bistro set from the online shop.',
          after: 'Product Asset Studio identifies the missing lifestyle images and, based on product name and description, generates the matching visuals. It also improves resolution and proportions and shows the product from new angles.',
        },
        example2: {
          title: 'Example: perfect cut-outs and quality enhancement',
          cutout: 'From a single image, Product Asset Studio creates clean product photos \u2013 and the matching in-use images along with them.',
          upscaling: 'Product Asset Studio improves image quality through upscaling \u2013 up to 4K, without a new shoot.',
          note: 'Generated images are approved by the Campaign Engineer before going live.',
        },
        results: {
          title: 'What this means for your online shop',
          items: [
            { value: '100%', label: 'Agent-Ready' },
            { value: '100%', label: 'Brand Safety' },
            { value: '\u221e', label: 'Infinite Scalability' },
            { value: '90%', label: 'Cost Reduction' },
          ],
          conclusion: 'The result: your online shop is ready for agentic commerce.',
        },
        audience: {
          title: 'Who Product Asset Studio is for',
          forWhom: 'For e-commerce and DTC brands with thousands of products that want to supply their catalogs with image assets at scale and in compliance.',
          notFor: 'Not the right fit if: you need a single, fully art-directed hero campaign image shot by a real photographer. A traditional production is better suited for that.',
        },
      },
      faq: [
        { q: 'How quickly do I get my assets?', a: 'Usually within a few minutes per product.' },
        { q: 'What happens with a Yellow or RED Fidelity Score?', a: 'A Campaign Engineer reviews the image manually before it is released. Nothing goes live unchecked.' },
        { q: 'Is it compatible with my PIM/DAM or shop?', a: 'Yes, via the Integration Hub connection. Existing imagery and product data are taken over directly.' },
        { q: 'Do I need new product photos or a shoot?', a: 'No. Product Asset Studio works with your existing imagery \u2013 even with a single cut-out.' },
        { q: 'Do I need a credit card to start?', a: 'No.' },
      ],
    },

    // ── Blog Page ──
    blogPage: {
      meta_title: 'Blog \u2013 LumAIa',
      meta_desc: 'Insights on Agentic Commerce, AI visibility, and the future of marketing.',
      label: 'Blog',
      title: 'Insights &',
      title_em: 'perspectives',
      sub: 'On Agentic Commerce, AI visibility in answer engines, and the future of marketing.',
      comingSoon: 'Blog articles coming soon. Stay tuned.',
      readArticle: 'Read article',
      contactCta: 'Get in touch',
    },

    // ── Signup Page ──
    signupPage: {
      meta_title: 'Sign Up \u2013 LumAIa Product Asset Studio',
      meta_desc: 'Create your free Product Asset Studio account. No credit card required.',
      label: 'Sign Up',
      title: 'Create your',
      title_em: 'free account',
      sub: 'Start using Product Asset Studio in minutes. No credit card required.',
      comingSoon: 'Self-serve signup will be available soon. In the meantime, book a demo to get started.',
      cta: 'Book a demo instead',
      noCreditCard: 'No credit card. Free demo session.',
    },

    // ── Legal Terms Page ──
    termsPage: {
      meta_title: 'General Terms and Conditions \u2013 LumAIa',
      meta_desc: 'General Terms and Conditions (GTC) for the use of LumAIa by iundf Dewave GmbH.',
      label: 'Legal',
      title: 'General Terms and',
      title_em: 'Conditions',
      contactCta: 'Contact',
      privacyCta: 'Privacy',
      intro: 'LumAIa by iundf Dewave GmbH, Bahnhofstrasse 59, 6312 Steinhausen, Switzerland, UID CHE-162.124.947 (hereinafter "LumAIa")',
      version: 'Version: 1.0 \u00b7 As of: 06.09.2026 \u00b7 Valid from: 08.09.2026',
      translationNote: 'Important Note: This is a machine-translated version of the General Terms and Conditions. In the event of any discrepancies, disputes, or legal matters, the original German version shall prevail exclusively.',
      sections: [
        { title: '1. Scope and Subject Matter of the Contract', paragraphs: [
          '1.1 These GTC govern the use of the Software-as-a-Service solution "LumAIa" (hereinafter "Platform"), including all modules, interfaces, documentation, and associated services by the customer (hereinafter "Customer").',
          '1.2 The Platform is provided exclusively to companies, self-employed individuals, public authorities, and other organizations that enter into the contract within the scope of their professional or commercial activity. Contracting with consumers is excluded. By registering, the Customer confirms that they are not acting as a consumer.',
          '1.3 The Platform is a tool to support product, marketing, communication, and media processes. It includes, in particular, modules for media strategy, digital campaigns, publishing, media and reporting, as well as asset and brand management. The specific scope of services depends on the booked plan (STARTER, PRO, AGENCY), the booked modules, and the service description at https://lumaia.studio/en-ch/platform.',
          '1.4 In the event of contradictions, the following order of precedence applies: (a) Data Processing Agreement (DPA) on data protection issues, (b) these GTC, (c) service description and documentation.',
          '1.5 Deviating or supplementary terms and conditions of the Customer, specifically purchasing conditions, shall only apply if LumAIa expressly agrees to them in writing. The unreserved provision of services does not constitute agreement.',
        ]},
        { title: '2. Conclusion of Contract, Registration, and Account', paragraphs: [
          '2.1 The contract is concluded upon completion of the online registration and activation of the account by LumAIa or upon actual use of the Platform by the Customer, whichever occurs first.',
          '2.2 The Customer ensures that the data provided during registration is complete and accurate, and keeps it up to date. The person acting during registration confirms that they are authorized to represent the Customer.',
          '2.3 Access credentials must be treated confidentially and may not be passed on to third parties. Named-user licenses (Seats) are assigned to a specific natural person and cannot be used simultaneously by multiple people. A Seat can be transferred to another person in the event of personnel changes, but not repeatedly to circumvent license fees. Sharing Seats among multiple people is prohibited.',
          '2.4 The Customer is responsible for all actions taken through their accounts. In case of suspected misuse or compromise, LumAIa must be informed immediately (legal(at)lumaia.studio).',
        ]},
        { title: '3. Rights of Use', paragraphs: [
          '3.1 LumAIa grants the Customer, for the duration of the contract, a non-exclusive, non-transferable, and non-sublicensable right to use the booked modules to the agreed extent (plan, number of Seats, number of Brands, storage, Credits) for their own business purposes. The Customer does not receive a copy of the software; use takes place exclusively via the access points provided by LumAIa.',
          '3.2 In particular, the following are impermissible: (a) reverse engineering, decompilation, or disassembly, unless imperatively permitted by law; (b) circumvention of technical usage, credit, or security restrictions; (c) sub-renting or providing access to third parties outside the Customer\u2019s own organization; (d) automated reading of the Platform (scraping or data extraction) beyond the documented interfaces; (e) use of the Platform or its outputs to develop or train competing AI or software products; (f) attempts to extract, reconstruct, or replicate underlying models, model weights, parameters, or system instructions; (g) load, penetration, or security testing without prior written consent.',
          '3.3 LumAIa may use feedback, suggestions for improvement, and error reports from the Customer free of charge, indefinitely, and without attribution to further develop the Platform. Rights to the Customer\u2019s content or data are not transferred thereby.',
        ]},
        { title: '4. Use by Agencies and Service Providers (AGENCY Plan)', paragraphs: [
          '4.1 Under the AGENCY plan, the Customer may also use the Platform for work on behalf of its own clients. For this purpose, it creates a separate Brand within its account for each client. The number of allowed Brands depends on the booked plan; additional Brands will be billed according to the price list.',
          '4.2 The Customer remains at all times the sole contractual partner of LumAIa. No contractual relationship arises between LumAIa and the Customer\u2019s clients. The Customer is responsible for ensuring compliance with these GTC by all of its users.',
          '4.3 The Customer acts towards its own clients in its own name and for its own account. It shall not make any commitments to them that go beyond this contract and shall indemnify LumAIa against claims arising from such additional commitments.',
          '4.4 Under data protection law, the Customer is generally a data processor towards its own clients, and LumAIa is a sub-processor. The Customer ensures that sub-commissioning LumAIa is permissible. Details are regulated in the DPA.',
        ]},
        { title: '5. Customer Content, AI Inputs, and AI Outputs', paragraphs: [
          '5.1 "Customer Content" means all data, text, images, videos, trademarks, logos, product information, brand guidelines, and other content that the Customer or its users bring into the Platform or connect via interfaces ("Input"). Customer Content remains the property or legal ownership of the Customer or its licensors.',
          '5.2 The Customer grants LumAIa the geographically unrestricted, non-exclusive right to store, reproduce, modify, transmit to sub-processors deployed according to Section 7, and process Customer Content to the extent necessary to perform the contractual services, troubleshoot, ensure security, and comply with legal obligations. This right ends with the deletion of the content or upon expiry of the retention periods pursuant to Section 13.6.',
          '5.3 Rights to Customer Content. The Customer represents and warrants that it possesses all necessary rights to the Customer Content, in particular copyright, trademark, personal, image, and data protection rights, and that the submission and processing do not infringe third-party rights or statutory provisions.',
          '5.4 Processing Rights for Third-Party Material. The Customer acknowledges that the Platform automatically modifies, combines, adapts, and transforms submitted content into derivative works. The rights required under Section 5.3 must therefore explicitly include the processing, alteration, transformation, AI-supported processing, and intended use of the resulting outputs. This applies in particular to image, video, and text material from suppliers, manufacturers, distributors, stock agencies, photographers, models, or other third parties. The Customer shall note in particular that licenses for manufacturer and supplier material are often restricted to unmodified reproduction and do not cover processing or AI-supported further processing. Checking and acquiring these rights is the sole responsibility of the Customer. LumAIa is under no obligation to verify the rights status of submitted content and assumes no responsibility for it.',
          '5.5 "AI Outputs" (Output) are the results generated by the Platform, including text, images, videos, subtitles, metadata, media plans, and analytics. To the extent LumAIa can acquire rights to AI Outputs, it grants the Customer, upon full payment of the respective fees, an unrestricted as to time, place, and content, transferable right to use the AI Outputs generated for it. This grant of rights refers only to LumAIa\u2019s contributions and does not expand the Customer\u2019s rights to the submitted Customer Content.',
          '5.6 The Customer acknowledges that (a) depending on the jurisdiction, AI Outputs may not be eligible for copyright protection, (b) identical or similar outputs may be generated for other users and LumAIa can therefore not guarantee exclusivity, and (c) AI Outputs may be incorrect, incomplete, outdated, misleading, or legally problematic ("hallucinations").',
          '5.7 Customer\u2019s Duty to Inspect. The Customer is obligated to review and approve AI Outputs in terms of content, compliance (specifically unfair competition, trademark, copyright, medical product, financial, and food advertising law), and factual accuracy before any external use, particularly prior to publication, ad deployment, or sharing with third parties. Automated brand-safety and compliance filters on the Platform are tools and do not replace this review.',
          '5.8 LumAIa does not use Customer Content to train third-party general AI models. It may use aggregated, anonymized usage statistics that cannot be traced back to the Customer for the purpose of improving, capacity planning, and securing the Platform.',
        ]},
        { title: '6. Acceptable Use', paragraphs: [
          '6.1 The Customer may not use the Platform to generate, store, or distribute content that (a) is unlawful, misleading, discriminatory, glorifies violence, pornographic, or harmful to minors; (b) infringes third-party rights; (c) contains malware; (d) constitutes unsolicited mass communications (spam); (e) deceptively depicts real individuals without their consent (deepfakes); or (f) contains special categories of personal data without a sufficient legal basis.',
          '6.2 The Customer agrees to comply with the platform guidelines of the respective ad channels (e.g., Google, Meta, LinkedIn, TikTok) as well as applicable labeling requirements for AI-generated content when creating and serving promotional assets. LumAIa provides technical tools for this purpose, in particular labeling functions and provenance tracking for generated assets. These tools do not relieve the Customer of the duty to independently verify and comply with the labeling regulations applicable in the respective target market and channel.',
          '6.3 In the event of a reasonable suspicion of a material violation, a threat to system security, or unlawful use, LumAIa may block affected content and temporarily restrict access in whole or in part. It shall inform the Customer immediately and, as far as possible, choose the least intrusive appropriate measure. Further rights under Section 13 remain reserved.',
        ]},
        { title: '7. Subcontractors and Third-Party Providers', paragraphs: [
          '7.1 LumAIa is entitled to engage subcontractors and third-party cloud, AI, and infrastructure services to perform the services. The providers engaged are listed in the Privacy Policy or the DPA and kept up to date there.',
          '7.2 The Customer acknowledges that functions of the Platform depend on third-party services (in particular AI models, ad platform APIs, payment services). Changes, price adjustments, discontinuations, or outages of such third-party services may affect the functional scope. LumAIa will endeavor to provide functionally equivalent replacements; there is no entitlement to a specific technology or model.',
          '7.3 If the Customer connects its own third-party accounts (e.g., ad accounts, analytics, shop systems) to the Platform, the terms of the respective third-party provider shall additionally apply to those accounts. The Customer is responsible for obtaining the necessary permissions and authorizations.',
        ]},
        { title: '8. Prices, Credits, and Invoicing', paragraphs: [
          '8.1 Remuneration consists of (a) a license fee per module and billing period, (b) fees for user Seats, (c) any fees per additional Brand, (d) storage and add-on options, and (e) AI Credits. The applicable prices are derived from the price list valid at the time.',
          '8.2 All prices are stated in Swiss Francs (CHF) and exclude value-added tax (VAT) as well as any foreign taxes and duties.',
          '8.3 Credits. AI services are billed using LumAIa Credits (LC). Credit consumption per service type is set out in the applicable Credit Table displayed on the Platform. The handling of unused credits included in a plan depends on the booked plan:\n(a) Starter: Included Credits are credited at the beginning of each billing period (month) and expire at the end of the period if unused. No rollover to the subsequent period takes place.\n(b) Pro: Included Credits are credited at the beginning of each billing period (month). Unused Credits roll over to the subsequent period (Rollover); the total balance rolled over is capped at a maximum of twice (2x) the monthly included Credit volume. Any Credits beyond this threshold expire.\n(c) Agency: Usage is billed based on consumption (Pay-per-Use); consumption is invoiced in arrears according to the Credit Table and price list. There is no included, periodically expiring Credit allowance.\nAdditionally purchased Credit packages (Top-ups) expire 12 months after purchase. Expired Credits are non-refundable, non-transferable, and non-replaceable. Credits are not legal tender, cannot be paid out, are non-tradable, and cannot be transferred to third parties.',
          '8.4 LumAIa may adjust the Credit valuation of individual services if the underlying costs of the AI services change. Adjustments will be announced 30 days in advance and do not apply retroactively to already purchased Top-up packages.',
          '8.5 If the available Credits are exhausted in plans with an included Credit allowance (Starter, Pro), credit-dependent features will be suspended until additional Credits are purchased. The Customer can activate automatic Top-ups in the account settings; in this case, Top-ups are automatically billed according to the chosen configuration. For plans with consumption-based billing (Agency, Pay-per-Use), no suspension occurs; consumption is billed retrospectively pursuant to Section 8.3(c).',
          '8.6 Excess Usage. If more Seats, Brands, or storage space are used than booked, LumAIa is entitled to bill for the excess usage from the time it arose according to the price list and will inform the Customer accordingly.',
          '8.7 Invoicing takes place in advance for each billing period. Payments are due within 30 days of the invoice date without deduction. Usage-based items are billed in arrears.',
          '8.8 Payments can be made via the payment service provider Stripe (credit card, direct debit) or by invoice/bank transfer. In the case of credit card payments, the Customer authorizes recurring charges for the agreed term.',
          '8.9 Default. In the event of late payment, default interest of 5 percent per annum is owed; LumAIa may also charge reminder fees of CHF 120 per notice. If a due payment remains outstanding after a written reminder and a grace period of 10 days, LumAIa may suspend access until full payment is received; the obligation to pay for the agreed term remains unaffected.',
          '8.10 Price Adjustments. LumAIa may adjust prices with effect from the next renewal period by notifying the Customer at least 30 days prior to the end of the current term. If the total price increases by more than 10 percent as a result, the Customer may terminate the affected component of the contract at the end of the current term without cost. Adjustments due to statutory levies or taxes are possible at any time.',
          '8.11 Offsetting against counterclaims is permitted only to the extent that such claims are undisputed or have been established by a final court judgment. Unless expressly stated otherwise in these GTC, fees already paid will not be refunded.',
        ]},
        { title: '9. Availability, Support, and Modifications', paragraphs: [
          '9.1 LumAIa provides services with the care of a professional provider according to state-of-the-art standards. It operates the Platform with the goal of high availability but does not guarantee a specific availability quota under these GTC. Binding availability and response guarantees are subject to individual agreements.',
          '9.2 Planned maintenance windows will be performed outside of business hours (Europe/Zurich time zone) whenever possible and announced at least 48 hours in advance. Emergency measures to counter acute security risks are permitted at any time without prior notice.',
          '9.3 Support is provided to the extent specified for the booked plan and via the channels provided. Details regarding support hours and response targets in the service description are service targets and not binding guarantees. Services necessitated by improper use, Customer Content, third-party systems, or custom adaptations requested by the Customer are not covered by support; such services may be billed on a time-and-materials basis according to the price list.',
          '9.4 LumAIa continuously develops the Platform. It may add, modify, and, subject to a 60-day notice period, discontinue essential functions, provided that the overall contractual utility is not significantly impaired thereby. If a function essential to the Customer is discontinued without replacement, the Customer may terminate the affected component of the contract effective as of the date the change takes effect and receive a pro-rata refund of prepaid, unused fees.',
        ]},
        { title: '10. Warranty and Defects', paragraphs: [
          '10.1 LumAIa warrants that the Platform substantially performs the functions set forth in the service description during the term of the contract. The Customer shall report defects promptly upon discovery with a comprehensible description.',
          '10.2 LumAIa shall remedy reported defects within a reasonable period through remediation or by providing an equivalent workaround. If this fails after two unsuccessful remediation attempts within a reasonable period, the Customer may reasonably reduce the remuneration for the affected part of the service or terminate the affected component of the contract as of the end of the current month.',
          '10.3 Excluded from the warranty are impairments resulting from (a) Customer Content or improper use, (b) hardware, software, networks, or third-party services not provided by LumAIa, (c) unauthorized third-party intervention, or (d) use contrary to the documentation.',
          '10.4 No Guarantee of Results. LumAIa owes the provision of the Platform, not a specific marketing, reach, ranking, revenue, or ROI success. Statements regarding time savings, cost reductions, or effectiveness are non-binding estimates based on experience and not guarantees. In particular, there is no warranty that AI Outputs are accurate, complete, up to date, free of third-party rights, or fit for a particular purpose.',
          '10.5 To the maximum extent permitted by law, any further warranties, representations, and conditions, express or implied, are excluded.',
        ]},
        { title: '11. Liability', paragraphs: [
          '11.1 LumAIa is liable without limitation for personal injury as well as for damage caused by intentional misconduct or gross negligence. Mandatory statutory liability provisions remain unaffected.',
          '11.2 In all other respects, LumAIa\u2019s liability per claim and in the aggregate per contract year is limited to the amount of remuneration actually paid by the Customer in the twelve months preceding the event giving rise to the claim for the affected service, up to a maximum of CHF 10,000.',
          '11.3 To the extent permitted by law, liability for indirect damages and consequential damages \u2013 specifically lost profits, lost savings, loss of production, loss of reputation, loss of data, third-party claims, and costs for replacement procurement \u2013 is excluded.',
          '11.4 LumAIa is not liable for damage arising from (a) the use of AI Outputs without the review owed under Section 5.7, (b) Customer Content and its legality, in particular missing processing rights under Section 5.4, (c) outages or changes to third-party services pursuant to Section 7, (d) actions of the Customer\u2019s users, and (e) loss of data to the extent that the Customer failed to carry out reasonable back-ups.',
          '11.5 Indemnification by the Customer. The Customer shall indemnify and hold LumAIa harmless against third-party claims arising from Customer Content or the use of the Platform by the Customer or its users violating third-party rights or statutory provisions, including reasonable legal defense costs. This includes in particular claims by suppliers, manufacturers, stock agencies, photographers, depicted individuals, or other rights holders asserting that submitted material was modified, processed further, or published without the necessary processing or usage rights.',
          '11.6 IP Indemnification by LumAIa. If a claim is brought against the Customer alleging that contractual use of the Platform itself (excluding Customer Content and AI Outputs) infringes a third-party intellectual property right in Switzerland or the EEA, LumAIa shall defend the Customer at its own expense, provided the Customer informs LumAIa immediately, cedes control of the proceedings to LumAIa, and reasonably cooperates. LumAIa may, at its option, modify the Platform, replace it, or terminate the affected component of the contract and refund prepaid fees on a pro-rata basis.',
        ]},
        { title: '12. Data Protection, Confidentiality, and Security', paragraphs: [
          '12.1 The processing of personal data is governed by the Privacy Policy and, to the extent LumAIa processes personal data on behalf of the Customer, by the Data Processing Agreement (DPA). The DPA forms an integral part of this contract and, in the event of conflicts, takes precedence over these GTC on data protection matters.',
          '12.2 The Customer is responsible for the lawfulness of the personal data it submits, in particular for having the necessary legal basis, informing the data subjects, and the admissibility of transferring data to LumAIa.',
          '12.3 Both parties shall treat the confidential information of the other party as confidential during the term of the contract and for two years thereafter, use it solely for contract performance, and disclose it only to employees and agents who need it for contract performance and are subject to an equivalent duty of confidentiality. Excluded is information that is publicly known, independently developed, or required to be disclosed by law or official order; in the latter case, the disclosing party shall notify the other party in advance to the extent legally permissible.',
          '12.4 LumAIa maintains appropriate technical and organizational measures to protect data (encryption in transit and at rest, access controls, logging, backups, disaster recovery). Details are set out in the DPA and the security documentation.',
          '12.5 LumAIa may reference the Customer as a reference customer and use its logo for this purpose subject to prior written consent. Consent may be revoked at any time with effect for the future.',
        ]},
        { title: '13. Term and Termination', paragraphs: [
          '13.1 The contract commences upon activation of access and runs for the initial term selected upon booking.',
          '13.2 The contract automatically renews for successive periods of equal duration unless terminated in text form by either party with a notice period of one month (for monthly subscriptions: 30 days) prior to the end of the current term.',
          '13.3 A reduction of modules, Seats, or Brands takes effect no earlier than the end of the current term. Upgrades are possible at any time and will be charged on a pro-rata basis.',
          '13.4 Either party may terminate the contract for cause with immediate effect, in particular if (a) the other party fails to perform a material contractual obligation despite a written warning and a 15-day grace period, (b) bankruptcy or composition proceedings are opened against the other party or it becomes insolvent, (c) the Customer severely breaches Section 3.2 or Section 6, or (d) continuation becomes legally impermissible for LumAIa.',
          '13.5 Upon termination of the contract, all rights of use granted to the Customer expire, with the exception of the rights to AI Outputs already obtained under Section 5.5. Unused Credits expire without refund.',
          '13.6 Data Export and Deletion. The Customer may download its Customer Content during the term of the contract and for 30 days following contract termination via the Platform\u2019s export functions. Thereafter, Customer Content will be deleted within 90 days, provided no statutory retention obligations apply; backups will be overwritten according to regular rotation cycles. Individual export support or migration assistance may be agreed upon a time-and-materials basis.',
          '13.7 Sections 5.3 to 5.8, 8 (for outstanding claims), 11, 12.3, 13.5 to 13.7, and 15 shall survive the termination of the contract.',
        ]},
        { title: '14. Amendments to these GTC', paragraphs: [
          '14.1 LumAIa may amend these GTC to reflect changes in the legal situation, technology, or service offerings. It shall inform the Customer in text form (e.g., via email or notice within the Platform) at least 30 days prior to the effective date.',
          '14.2 If the Customer does not object in text form prior to the effective date, the amended GTC shall be deemed accepted. In the event of an objection, the previous GTC shall continue to apply until the end of the current term; LumAIa may in this case terminate the contract as of the end of the current term. Attention will be explicitly drawn to these legal consequences in the notification.',
        ]},
        { title: '15. Miscellaneous Provisions', paragraphs: [
          '15.1 Force Majeure. Neither party shall be liable for non-performance due to events beyond its reasonable control (including natural disasters, war, epidemics, strikes, official actions, widespread power, network, or cloud outages, large-scale cyberattacks). Performance obligations are suspended for the duration of the event; if it lasts longer than 60 days, either party may terminate the affected component of the contract.',
          '15.2 Assignment. The Customer may only assign the contract with the prior written consent of LumAIa. LumAIa may transfer the contract to an affiliated company or legal successor as part of a restructuring, merger, or transfer of the relevant business unit; it shall inform the Customer accordingly.',
          '15.3 No Employment or Partnership. The parties are independent contracting parties. No employment, mandate, partnership, or agency relationship is created beyond the subject matter of this contract.',
          '15.4 Export Control and Sanctions. The Customer confirms that it and its users are not listed on relevant sanctions lists and will not use the Platform in violation of applicable export control or sanctions regulations.',
          '15.5 Text Form. Notifications must be made in text form (email to the addresses on file in the account is sufficient), unless written form is explicitly required.',
          '15.6 Severability. Should individual provisions be invalid or unenforceable, the remaining contract shall remain valid. The invalid provision shall be replaced by a valid provision that comes closest to the economic purpose of the original provision.',
          '15.7 Applicable Law and Language. Substantive Swiss law shall apply exclusively, to the exclusion of conflict-of-law rules and the United Nations Convention on Contracts for the International Sale of Goods (CISG). This English version of the General Terms and Conditions is a machine translation provided for convenience purposes only. In the event of any conflict, discrepancy, or dispute arising out of or in connection with these GTC, the German language version shall be solely binding and authoritative.',
          '15.8 Place of Jurisdiction. The exclusive place of jurisdiction for all disputes arising out of or in connection with this contract is Zug, Switzerland. LumAIa remains entitled to bring action at the Customer\u2019s registered seat. Prior to initiating formal proceedings, the parties shall attempt to reach an amicable settlement at the executive management level for a period of 30 days.',
        ]},
      ],
    },

    // ── Module Coming Soon ──
    moduleComingSoon: {
      status: 'Coming Soon',
      backToOverview: 'Back to platform overview',
      intro: 'This module is currently in development and will be available soon.',
      ctaTitle: 'Want early access?',
      ctaSub: 'Become a pilot partner and be among the first to use this module.',
      cta: 'Book a demo',
    },
  },

  'de-ch': {
    // ── Navigation ──
    nav: {
      cta: 'Demo buchen',
      lang: 'EN',
      agentic: 'Use Case',
      solution: 'Lösung',
      platform: 'Plattform',
      useCases: 'Use Cases',
      blog: 'Blog',
      pricing: 'Preise',
      contact: 'Kontakt',
      banner: 'Neu: Product Asset Studio \u2013 Brand-konforme KI-Produktbilder f\u00fcr Ihren Onlineshop.',
      bannerCta: 'Mehr erfahren',
    },

    // ── Homepage Hero ──
    hero: {
      label: 'Agentic Agency Plattform',
      h1: 'Die ',
      h1_em: 'Agentic Agency Plattform',
      h1_2: 'f\u00fcr E-Commerce',
      sub: 'KI-Shopping-Agenten von Google, OpenAI und Perplexity kaufen bereits heute autonom ein \u2013 und bewerten Ihr Sortiment nach Kriterien, f\u00fcr die klassische Produktfotos nie gebaut wurden. Wer maschinell nicht vollst\u00e4ndig lesbar ist, erscheint in der Empfehlung gar nicht erst. LumAIa macht Produktdaten und Produktbilder GEO-tauglich \u2013 im Massstab Ihres gesamten Katalogs.',
      cta_primary: 'Demo buchen',
      cta_secondary: 'Module entdecken',
      microcopy: 'Keine Kreditkarte. Kostenlose Demo-Session.',
      stats: [
        { value: '100 %', label: 'Agent-Ready' },
        { value: '100 %', label: 'Brandsafety' },
        { value: '\u221e', label: 'Unbegrenzte Skalierbarkeit' },
        { value: '90 %', label: 'Kostenreduktion' },
      ],
    },

    // ── Trust Logos ──
    trustLogos: {
      title: 'Vertraut von',
    },

    // ── Problem Section ──
    problem: {
      label: 'Die Herausforderung',
      title: 'Warum klassisches Marketing an seine',
      title_em: 'Grenzen st\u00f6sst',
      intro: 'Marketing 2026 verlangt mehr Output, mehr Personalisierung und strikte Compliance \u2013 mehr, als sich manuell bew\u00e4ltigen l\u00e4sst. Das ist kein Kompetenzproblem. Es ist ein strukturelles Problem.',
      items: [
        'Kampagnen brauchen Wochen statt Tage \u2013 der Markt wartet nicht.',
        'Agenturkosten steigen, der ROI wird zum Gl\u00fccksspiel.',
        'E-Mail-Ping-Pong und Meetings ersetzen Entscheidungen.',
        'Jeder Wachstumsschritt verlangt neues Personal \u2013 Skalierung wird zur Grenze.',
        '\u00dcber 100 Touchpoints lassen sich manuell nicht mehr bespielen.',
      ],
      conclusion: 'Klassische Agenturen sind nicht mehr Teil der L\u00f6sung. Sie sind der Engpass.',
      quote: '\u00abQualit\u00e4t braucht keine Wochen mehr \u2013 sie braucht die richtige Architektur.\u00bb',
    },

    // ── Four Phases ──
    fourPhases: {
      label: 'Die Plattform',
      title: 'Vier Phasen,',
      title_em: 'ein System',
      sub: 'LumAIa bildet die gesamte Wertsch\u00f6pfungskette einer Agentur ab \u2013 als durchg\u00e4ngiges System, nicht als Einzeltools. Jede Phase \u00fcbergibt das Ergebnis an die n\u00e4chste. Nichts f\u00e4llt durchs Raster.',
      phases: [
        { num: '01', title: 'Plan', desc: 'Strategisches Denken auf Kampagnen-Ebene: Marktanalyse, Personas, Media-Strategie, Budget-Plan. Datengetrieben und strukturiert \u2013 bevor ein einziges Asset produziert wird.' },
        { num: '02', title: 'Build', desc: 'Asset-Erstellung in Sekunden: Banner, Copy, Visuals, Landingpages, E-Mails \u2013 konsistent in Ihrer Markensprache, f\u00fcr jeden Kanal. F\u00fcr Shops mit Tausenden von Produkten \u00fcbernimmt das Product Asset Studio die Bilderproduktion.' },
        { num: '03', title: 'Publish', desc: 'Kampagnen gehen automatisiert live. Autonome Budget-Steuerung und Echtzeit-Optimierung laufen innerhalb Ihrer definierten Vorgaben \u2013 ohne manuellen Eingriff, rund um die Uhr.' },
        { num: '04', title: 'Report & Learn', desc: 'Jede Kampagne macht die n\u00e4chste besser. Attribution in Klartext, Management-Reports ohne Zahlendschungel, ein Lernsignal, das direkt in Strategie und Produktion zur\u00fcckfliesst.' },
      ],
      modulesLink: 'Alle 19 Module im \u00dcberblick:',
      modulesLinkText: 'Zur Plattform-\u00dcbersicht',
    },

    // ── Demo CTA (mid-page) ──
    demoCta: {
      title: 'Bereit, das selbst zu sehen?',
      sub: 'Sehen Sie in 20 Minuten, wie LumAIa f\u00fcr Ihre Marke aussehen w\u00fcrde. Kein Pitch, kein Standarddeck \u2013 eine Demo auf Ihren Kontext zugeschnitten.',
      cta: 'Demo buchen',
    },

    // ── Agentic Commerce Teaser ──
    agenticTeaser: {
      title: 'Agentic Commerce: Bereite dein Onlineshop f\u00fcr das KI-Agenten Zeitalter vor.',
      p1: 'KI-Agenten wie ChatGPT, Gemini und Perplexity kaufen heute bereits f\u00fcr Konsumenten ein \u2013 ohne dass ein Mensch jeden Schritt begleitet. Die meisten Onlineshops sind f\u00fcr diese Agenten weder auffindbar noch vertrauensw\u00fcrdig genug und entsprechen nicht der Norm.',
      p2: 'Mit Product Asset Studio macht LumAIa Onlineshops agent-ready: Ein Produktbild wird zu einem vollst\u00e4ndigen, gepr\u00fcften Asset-Set, EU-AI Act complient und mit C2PA-Herkunftsnachweis \u2013 die Grundlage daf\u00fcr, dass Ihr Onlineshop nicht nur f\u00fcr Menschen, sondern auch f\u00fcr Agenten sichtbar ist.',
      link1: 'Agentic Commerce verstehen',
      link2: 'Weitere Anwendungsf\u00e4lle',
    },

    // ── Trust Architecture ──
    trustArch: {
      title: 'Vertrauen ist eingebaut,',
      title_em: 'nicht nachtr\u00e4glich',
      sub: 'Jede Kampagne, jedes Asset durchl\u00e4uft dieselbe Vertrauens-Architektur \u2013 bevor es den Kunden erreicht:',
      items: [
        { title: 'Integration Hub', desc: 'Eine Datenquelle f\u00fcr Ihre gesamte Marketing-Kette, von PIM/DAM bis Analytics. Keine Datensilos, keine manuellen Exporte.' },
        { title: 'Brand- und Compliance-Guards', desc: 'Automatische Pr\u00fcfung von Markenrichtlinien und rechtlichen Vorgaben. Jedes Asset, jedes Mal.' },
        { title: 'Campaign Engineer Gate', desc: 'Erfahrene Marketing-Fachleute validieren, was das System nicht allein entscheiden soll. Menschen behalten die Kontrolle dort, wo es z\u00e4hlt.' },
      ],
      conclusion: 'Das ist der Unterschied zwischen einem Tool und einer Agentur.',
    },

    // ── Product Asset Studio Teaser ──
    pasTeaser: {
      title: 'Von einem Produktbild zum vollständigen Asset-Set',
      p1: 'Product Asset Studio verwandelt ein einzelnes Produktfoto in Hero-, Lifestyle-, Detail- und Micro-Rotation-Assets — brand-konform, EU-AI-Act-konform und mit C2PA-Herkunftsnachweis.',
      p2: 'Kein Fotoshooting nötig. Katalogfertige Bilder in Minuten, mit Fidelity-Score bewertet — nichts geht live ohne bestandene Qualitätsprüfung.',
      link: 'Product Asset Studio entdecken',
    },

    // ── Testimonials ──
    testimonials: {
      title: 'Das sagen unsere Kunden',
      items: [
        { quote: '[Kundenzitat Platzhalter \u2013 Freigabe ausstehend]', name: '[Name]', role: '[Rolle]', company: '[Firma]' },
        { quote: '[Kundenzitat Platzhalter \u2013 Freigabe ausstehend]', name: '[Name]', role: '[Rolle]', company: '[Firma]' },
      ],
      note: 'Keine anonymen Zitate. Voller Name, Rolle und Firma erforderlich.',
    },

    // ── Comparison ──
    comparison: {
      label: 'Vergleich',
      title: 'LumAIa im Vergleich zur klassischen Agentur',
      headers: ['Kriterium', 'Klassische Agentur', 'LumAIa Agentic Agency'],
      rows: [
        { label: 'Kampagnen-Launch', agency: '4\u20138 Wochen', lumaia: '<24 Stunden' },
        { label: 'Kosten pro Kampagne', agency: 'CHF 50\u2019000\u2013150\u2019000', lumaia: 'Ab CHF 39/Monat' },
        { label: 'Skalierbarkeit', agency: 'Durch Personal limitiert', lumaia: 'Unbegrenzt' },
        { label: 'Brand-Compliance', agency: 'Manuell, fehleranf\u00e4llig', lumaia: '100% \u2013 Campaign Engineer Gate' },
        { label: 'A/B-Testing', agency: 'Manuell, zeitaufw\u00e4ndig', lumaia: 'Automatisiert, in Echtzeit' },
        { label: 'AEO-Optimierung', agency: 'Nicht verf\u00fcgbar', lumaia: 'Nativ integriert' },
        { label: 'Lerneffekt', agency: 'Abh\u00e4ngig von Mitarbeitenden', lumaia: 'Kontinuierlich, systemisch' },
      ],
    },

    // ── Pricing Teaser ──
    pricingTeaser: {
      title: 'Transparente Preise, kein Kleingedrucktes',
      headers: ['', 'Self-Serve (z.B. Product Asset Studio)', 'Pilot-Partner (Agentic Agency)'],
      rows: [
        { label: 'Zugriff', col1: 'Einzelne Module', col2: 'Alle Module' },
        { label: 'Preismodell', col1: 'Ab CHF 39/Monat, monatlich k\u00fcndbar', col2: '12 Monate Fixpreis' },
        { label: 'Einstieg', col1: 'Sofort, ohne Gespr\u00e4ch', col2: 'Nach Demo' },
        { label: 'F\u00fcr wen', col1: 'Teams mit klar umrissenem Bedarf', col2: 'Teams, die das gesamte System nutzen wollen' },
      ],
      link: 'Preise ansehen',
    },

    // ── FAQ ──
    faq: {
      label: 'FAQ',
      title: 'H\u00e4ufige',
      title_em: 'Fragen',
      items: [
        { q: 'Ist LumAIa ein Tool oder eine Agentur?', a: 'LumAIa ist eine KI-Plattform, die die Arbeit einer Agentur automatisiert \u2013 mit Fachleuten im Hintergrund, die jede kritische Entscheidung pr\u00fcfen.' },
        { q: 'Wie stellen Sie Markensicherheit und rechtliche Konformit\u00e4t sicher?', a: '\u00dcber den Campaign Engineer Gate: Jedes Asset durchl\u00e4uft zuerst automatische Brand- und Compliance-Guards. Was diese nicht eindeutig kl\u00e4ren k\u00f6nnen, pr\u00fcft ein Mensch. Keine Ver\u00f6ffentlichung ohne Pr\u00fcfung.' },
        { q: 'Wie schnell ist LumAIa einsatzbereit?', a: 'Von Briefing bis erstem Launch vergehen in der Regel 48 Stunden. Pilot-Partner erhalten Onboarding und Einrichtung als Teil ihres Fixpreis-Pakets.' },
        { q: 'Welche Kan\u00e4le werden unterst\u00fctzt?', a: 'Meta (Facebook/Instagram), Google Ads, TikTok, Display/Programmatic, SEO/AEO, E-Mail/Newsletter, CMS-Integration.' },
        { q: 'Was kostet LumAIa?', a: 'Self-Serve-Module wie Product Asset Studio sind ab CHF 39/Monat verf\u00fcgbar, monatlich k\u00fcndbar. Pilot-Partner erhalten einen 12-monatigen Fixpreis mit vollem Modul-Zugriff. Alle Details unter lumaia.studio/pricing.' },
        { q: 'Was bedeutet \u00abPilot-Partner\u00bb?', a: 'Ein Pilot-Partner sichert sich fr\u00fchen, vollen Zugriff auf alle Module zu einem garantierten Fixpreis \u2013 und wirkt direkt an der Weiterentwicklung von LumAIa mit. Die Anzahl Pilot-Partner-Pl\u00e4tze ist begrenzt.' },
      ],
    },

    // ── Blog Teaser ──
    blogTeaser: {
      title: 'Vertiefung im LumAIa-Blog',
      sub: 'Mehr zu Agentic Commerce, KI-Sichtbarkeit in Antwort-Engines und der Zukunft des Marketings finden Sie im LumAIa-Blog.',
      link: 'Zum Blog',
      posts: [
        { title: 'Blog-Artikel Platzhalter 1', slug: '#' },
        { title: 'Blog-Artikel Platzhalter 2', slug: '#' },
        { title: 'Blog-Artikel Platzhalter 3', slug: '#' },
      ],
    },

    // ── CTA Final ──
    cta: {
      label: 'Jetzt starten',
      title: 'Werden Sie Pilot-Partner',
      title_em: 'bevor es Ihre Konkurrenz tut',
      sub: 'Sichern Sie sich 12 Monate garantierten Festpreis, vollen Modul-Zugriff und direkten Einfluss auf die Entwicklung von LumAIa.',
      ctaButton: 'Demo buchen',
    },

    // ── Footer ──
    footer: {
      copyright: '\u00a9 2026 LumAIa by Dewave GmbH',
      links: [
        { label: 'Kontakt', href: '/contact' },
        { label: 'AGB', href: '/legal/terms' },
        { label: 'Datenschutz', href: '/privacy' },
        { label: 'Impressum', href: '/imprint' },
      ],
      platform: 'Plattform',
      useCases: 'Use Cases',
      company: 'Unternehmen',
    },

    // ── Contact Page ──
    contact: {
      label: 'Kontakt',
      title: 'Schreiben Sie',
      title_em: 'uns',
      sub: 'Haben Sie eine Frage oder m\u00f6chten Sie mehr \u00fcber LumAIa erfahren? Wir freuen uns von Ihnen zu h\u00f6ren.',
      info: {
        email_label: 'E-Mail',
        email_value: 'hello@lumaia.ai',
        location_label: 'Standort',
        location_value: 'Schweiz',
        response_label: 'Antwortzeit',
        response_value: 'Innerhalb von 48 Stunden',
      },
      formId: 'ad72af02-88e1-495f-a8b5-c6ae0cf1b99a',
      consentText: 'Ich habe die',
      privacyLabel: 'Datenschutzerkl\u00e4rung gelesen und akzeptiere sie',
    },

    // ── Privacy Page ──
    privacy: {
      label: 'Datenschutz',
      title: 'Datenschutz',
      title_em: 'erklärung',
      intro: 'Verantwortliche Stelle: LumAIa by Dewave GmbH, Bahnhofstrasse 59, 6312 Steinhausen, Schweiz\nKontakt Datenschutz: privacy(@)lumaia.studio',
      version: 'Version: 1.0 · Stand: 08.09.2026',
      sections: [
        { title: '1. Überblick und Geltungsbereich', paragraphs: [
          'Wir nehmen den Schutz Ihrer Personendaten ernst. Diese Datenschutzerklärung informiert darüber, welche Personendaten wir bei der Nutzung unserer Website www.LumAIa.ch, unserer Software-as-a-Service-Plattform «LumAIa» (das Agentic Agency OS) sowie im Rahmen von Kommunikation, Marketing und Support bearbeiten, zu welchen Zwecken, auf welcher Rechtsgrundlage und an wen wir sie weitergeben.',
          'Sie gilt für alle Bearbeitungen, für die wir Verantwortliche sind. Für Personendaten, die unsere Kundinnen und Kunden in die Plattform einbringen und die wir in deren Auftrag bearbeiten, sind die Kunden Verantwortliche und wir Auftragsverarbeiterin – dazu Abschnitt 3.',
          'Massgeblich sind das Schweizer Datenschutzgesetz (DSG) und, soweit anwendbar, die EU-Datenschutz-Grundverordnung (DSGVO). Wir verwenden Begriffe wie «Bearbeitung» (DSG) und «Verarbeitung» (DSGVO) gleichbedeutend.',
        ]},
        { title: '2. Verantwortliche Stelle und Kontakt', paragraphs: [
          'Verantwortliche: LumAIa by Dewave GmbH, Bahnhofstrasse 59, 6312 Steinhausen, Schweiz\nKontakt Datenschutz: privacy(@)lumaia.studio\nDatenschutzbeauftragter: Remo Girard',
        ]},
        { title: '3. Zwei Rollen: eigene Bearbeitungen und Bearbeitung im Kundenauftrag', paragraphs: [
          'a) Wir als Verantwortliche. Für Daten von Website-Besuchenden, Interessenten, Kontaktpersonen unserer Kunden, Bewerbenden und Nutzerkonten (Registrierung, Abrechnung, Support, Sicherheit) bestimmen wir Zwecke und Mittel selbst. Für diese Bearbeitungen gilt die vorliegende Erklärung vollumfänglich.',
          'b) Wir als Auftragsverarbeiterin. Inhalte, die Kunden in die Plattform hochladen oder über Schnittstellen verbinden – z. B. Kundenlisten, CRM-Daten, Bildmaterial mit abgebildeten Personen, Kampagnendaten – bearbeiten wir ausschliesslich nach Weisung des Kunden auf Grundlage eines Auftragsverarbeitungsvertrags (AVV/DPA). Für Informationen und die Wahrnehmung von Rechten in Bezug auf diese Daten wenden sich betroffene Personen an den jeweiligen Kunden. Erreicht uns ein Auskunfts- oder Löschbegehren zu solchen Daten, leiten wir es unverzüglich an den Kunden weiter.',
        ]},
        { title: '4. Welche Daten wir bearbeiten', paragraphs: [
          'Bestands- und Kontaktdaten: Vor- und Nachname, Firma, Funktion, Geschäftsadresse, E-Mail-Adresse, Telefonnummer, Sprache.',
          'Konto- und Nutzungsdaten: Benutzername, Rolle und Berechtigungen, Zeitpunkt der Registrierung, Login-Zeitpunkte, gebuchte Module und Tarife, Anzahl Seats, Credit-Verbrauch, erstellte Projekte und Assets (Metadaten), Support-Verlauf.',
          'Vertrags- und Zahlungsdaten: Vertragsinhalte und -laufzeit, Rechnungs- und Zahlungsdaten, Zahlungsmethode, Zahlungsstatus, Mahnungen. Vollständige Kartendaten werden ausschliesslich bei unserem Zahlungsdienstleister (Stripe) bearbeitet; wir erhalten davon nur einen Token, den Kartentyp, die letzten vier Ziffern und das Ablaufdatum.',
          'Technische Daten: IP-Adresse, Datum und Zeit des Zugriffs, aufgerufene Seiten und Ressourcen, HTTP-Statuscodes, übertragene Datenmenge, Referrer, Browsertyp und -version, Betriebssystem, Gerätetyp, Bildschirmauflösung, Spracheinstellung, Fehler- und Sicherheitsprotokolle.',
          'Verhaltens- und Analysedaten: Interaktionen mit unserer Website und der Plattform, aufgerufene Funktionen, Klick- und Scrollverhalten, Sitzungsaufzeichnungen und Heatmaps (siehe Abschnitt 8 zu Smartlook), Öffnungs- und Klickraten unserer E-Mails.',
          'Kommunikationsdaten: Inhalt von E-Mails, Kontaktformularen, Support-Tickets, Chat-Verläufen, Notizen zu Gesprächen und Terminen, Aufzeichnungen von Online-Meetings (nur mit vorheriger Information und Einwilligung).',
          'Inhalts- und KI-Daten: Von Nutzern eingegebene Prompts, Briefings und Uploads sowie die daraus generierten Ausgaben (Texte, Bilder, Videos, Auswertungen). Diese können Personendaten enthalten, wenn Nutzer solche eingeben oder hochladen.',
          'Bewerbungsdaten: Bewerbungsunterlagen, Lebenslauf, Zeugnisse, Interviewnotizen (nur bei Bewerbungen bei uns).',
          'Personendaten erhalten wir in erster Linie von Ihnen selbst. Ergänzend können wir Daten aus öffentlich zugänglichen Quellen (Websites, Handelsregister, LinkedIn), von Kunden, von Vermittlern oder Kooperationspartnern sowie automatisch beim Besuch unserer Angebote erheben.',
        ]},
        { title: '5. Zwecke und Rechtsgrundlagen', paragraphs: [
          'Wir bearbeiten Personendaten zu folgenden Zwecken:',
          'Bereitstellung und Betrieb der Plattform, Nutzerverwaltung, Support – Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) / Art. 31 Abs. 2 lit. a DSG',
          'Abrechnung, Zahlungsabwicklung, Bonitäts- und Betrugsprüfung – Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. f DSGVO / Berechtigtes Interesse an gesicherter Zahlung',
          'Sicherheit, Missbrauchs- und Angriffserkennung, Protokollierung – Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO / Berechtigtes Interesse an Systemsicherheit',
          'Verbesserung und Weiterentwicklung der Plattform, Produktanalytik – Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO, bei nicht notwendigen Cookies Art. 6 Abs. 1 lit. a / Einwilligung, wo erforderlich',
          'Direktmarketing an Geschäftskunden, Newsletter, Events – Rechtsgrundlage: Art. 6 Abs. 1 lit. f bzw. lit. a bei Einwilligung / Art. 3 UWG beachten; Abmeldung jederzeit möglich',
          'Erfüllung gesetzlicher Pflichten (Buchführung, MWST, Auskunftspflichten) – Rechtsgrundlage: Art. 6 Abs. 1 lit. c DSGVO / Gesetzliche Pflicht',
          'Rechtsdurchsetzung und Verteidigung gegen Ansprüche – Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO / Berechtigtes Interesse',
          'Bewerbungsverfahren – Rechtsgrundlage: Art. 6 Abs. 1 lit. b, Art. 88 DSGVO / Vorvertragliches Verhältnis',
          'Soweit wir eine Einwilligung einholen, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen (datenschutz@LumAIa.ch oder über die Cookie-Einstellungen). Die Rechtmässigkeit bereits erfolgter Bearbeitungen bleibt unberührt.',
        ]},
        { title: '6. Cookies und ähnliche Technologien', paragraphs: [
          'Wir setzen auf unserer Website und in der Plattform Cookies und vergleichbare Technologien (Local Storage, Pixel, SDKs) ein.',
          'Notwendige Cookies ermöglichen Login, Sitzungsverwaltung, Lastverteilung, Sicherheit und die Speicherung Ihrer Cookie-Präferenzen. Sie sind für den Betrieb erforderlich und werden ohne Einwilligung gesetzt.',
          'Analyse- und Komfort-Cookies helfen uns, Nutzung zu verstehen und die Angebote zu verbessern. Sie werden erst nach Ihrer Einwilligung im Cookie-Banner gesetzt.',
          'Marketing-Cookies dienen der Messung und Steuerung von Werbung und werden nur mit Ihrer Einwilligung gesetzt.',
          'Sie können Ihre Auswahl jederzeit über die Cookie-Einstellungen anpassen und Cookies in Ihrem Browser löschen oder blockieren. Werden notwendige Cookies blockiert, funktionieren Teile unserer Angebote nicht.',
        ]},
        { title: '7. Weitergabe von Daten und Auftragsverarbeiter', paragraphs: [
          'Wir geben Personendaten weiter an:',
          'Dienstleister und Auftragsverarbeiter, die uns beim Betrieb unterstützen (Hosting, KI-Dienste, E-Mail-Versand, Analytik, Zahlungsabwicklung, Support-Tools, Buchhaltung) – siehe die Tabelle in Abschnitt 8. Diese sind vertraglich verpflichtet, Daten nur nach unseren Weisungen zu bearbeiten und angemessen zu schützen;',
          'Berater und Behörden (Anwältinnen, Revisionsstelle, Versicherungen, Steuer- und Aufsichtsbehörden, Gerichte), soweit erforderlich oder gesetzlich vorgeschrieben;',
          'Erwerber oder Investoren im Rahmen von Unternehmenstransaktionen, unter Wahrung der Vertraulichkeit.',
          'Wir verkaufen Personendaten nicht.',
        ]},
        { title: '8. Eingesetzte Dienste und Unterauftragsverarbeiter', paragraphs: [
          'Nachstehend die Dienste, die bei Betrieb und Vermarktung von LumAIa eingesetzt werden. Die Liste wird aktuell gehalten; Änderungen kommunizieren wir gemäss AVV.',
          'Google Cloud Platform / Vertex AI – Google Ireland Limited, Dublin, IE / Google LLC, USA – Hosting, Rechenleistung, Bild- und Textgenerierung, Speicherung von Assets – EU/CH-Regionen, ggf. USA',
          'Google Workspace – Google Ireland Limited, Dublin, IE – Interne Kommunikation, Dokumente, Termine – EU, ggf. USA',
          'Supabase – Supabase, Inc., USA – Speicherung von Konto-, Projekt- und Inhaltsdaten, Login – EU (Frankfurt/Zürich) empfohlen',
          'Stripe – Stripe Payments Europe Ltd., Dublin, IE / Stripe, Inc., USA – Zahlungsabwicklung, Abonnementverwaltung, Betrugsprävention – EU und USA',
          'Customer.io – Peaberry Software, Inc., USA – Transaktions-E-Mails, Onboarding-Sequenzen, Newsletter – USA',
          'Smartlook – Smartlook s.r.o., Brno, Tschechien (Teil der Cisco-Gruppe) – Analyse der Nutzung, Heatmaps, Fehlerdiagnose über pseudonymisierte Sitzungsaufzeichnungen – EU (Tschechien), Konzerntransfers in die USA möglich',
          'Zu Smartlook im Besonderen: Sitzungsaufzeichnungen zeichnen Interaktionen mit unserer Oberfläche nach. Wir haben Smartlook so konfiguriert, dass Eingabefelder und sensible Bereiche maskiert werden und keine Passwörter, Zahlungsdaten oder besonders schützenswerte Daten erfasst werden. Der Einsatz erfolgt nur nach Ihrer Einwilligung im Cookie-Banner.',
        ]},
        { title: '9. Übermittlung ins Ausland', paragraphs: [
          'Personendaten können in Länder ausserhalb der Schweiz und des EWR übermittelt werden, insbesondere in die USA, sofern Dienstleister dort Infrastruktur betreiben oder Support leisten. Nicht alle diese Länder verfügen über eine vom Schweizer Bundesrat bzw. der EU-Kommission als angemessen anerkannte Datenschutzgesetzgebung.',
          'In solchen Fällen stützen wir die Übermittlung ab auf: die EU-Standardvertragsklauseln in der von der EU-Kommission genehmigten Fassung, mit den vom EDÖB anerkannten Anpassungen für die Schweiz, ergänzt um technische und organisatorische Zusatzmassnahmen; soweit einschlägig die Zertifizierung des Empfängers unter dem EU-U.S. Data Privacy Framework und dessen Swiss-U.S.-Erweiterung; in Einzelfällen Ihre ausdrückliche Einwilligung oder eine der weiteren gesetzlichen Ausnahmen (Art. 17 DSG, Art. 49 DSGVO).',
          'Eine Kopie der jeweiligen Garantien können Sie bei datenschutz@LumAIa.ch anfordern.',
        ]},
        { title: '10. Aufbewahrung und Löschung', paragraphs: [
          'Wir bewahren Personendaten so lange auf, wie es für die genannten Zwecke erforderlich ist, und darüber hinaus, soweit gesetzliche Pflichten oder die Verteidigung gegen Ansprüche es verlangen.',
          'Konto- und Vertragsdaten: Vertragsdauer und danach 10 Jahre (handels- und steuerrechtliche Aufbewahrungspflicht, Art. 958f OR)',
          'Rechnungs- und Zahlungsdaten: 10 Jahre',
          'Kundeninhalte in der Plattform: Vertragsdauer, danach Export während 30 Tagen, Löschung innert 90 Tagen',
          'Server- und Sicherheitsprotokolle: 90 Tage, bei Sicherheitsvorfällen bis zur Aufklärung',
          'Sitzungsaufzeichnungen (Smartlook): 3 Monate',
          'Newsletter-/Marketingdaten: Bis zum Widerruf, danach Sperrliste zur Beachtung des Widerrufs',
          'Kontaktanfragen ohne Vertragsabschluss: 24 Monate',
          'Bewerbungsdaten: 6 Monate nach Verfahrensabschluss, bei Einwilligung länger',
          'Nach Ablauf löschen oder anonymisieren wir die Daten. In Backups können Daten bis zum Ablauf der regulären Rotationszyklen fortbestehen.',
        ]},
        { title: '11. Datensicherheit', paragraphs: [
          'Wir treffen angemessene technische und organisatorische Massnahmen, um Personendaten vor unbefugtem Zugriff, Verlust und Missbrauch zu schützen, insbesondere: Verschlüsselung der Übertragung (TLS) und der gespeicherten Daten, rollenbasierte Zugriffskontrolle nach dem Grundsatz der minimalen Berechtigung, Mehrfaktor-Authentifizierung für administrative Zugänge, Protokollierung und Überwachung, regelmässige Backups, Trennung von Produktiv- und Testumgebungen, Schulung der Mitarbeitenden und vertragliche Verpflichtung aller Dienstleister.',
          'Trotz sorgfältiger Massnahmen kann keine Übertragung über das Internet vollständig sicher sein. Bei einer Datensicherheitsverletzung mit hohem Risiko informieren wir die zuständigen Behörden und die betroffenen Personen gemäss Art. 24 DSG bzw. Art. 33 f. DSGVO.',
        ]},
        { title: '12. Automatisierte Entscheidungen und KI-Einsatz', paragraphs: [
          'Die Plattform generiert KI-gestützte Vorschläge (Texte, Bilder, Budget- und Kanalempfehlungen). Diese Vorschläge werden von Nutzern geprüft und freigegeben; sie führen zu keinen automatisierten Einzelentscheidungen mit Rechtsfolgen oder erheblicher Beeinträchtigung für betroffene Personen im Sinne von Art. 21 DSG bzw. Art. 22 DSGVO.',
          'Bei Zahlungs- und Betrugsprüfungen kann unser Zahlungsdienstleister automatisierte Risikobewertungen vornehmen; führt dies zur Ablehnung einer Transaktion, können Sie sich an uns wenden und eine manuelle Prüfung verlangen.',
          'Eingaben in die Plattform werden von uns nicht zum Training allgemeiner KI-Modelle verwendet. Bei eingesetzten Modellanbietern nutzen wir, soweit verfügbar, Konfigurationen und Vertragszusagen, die eine Verwendung der Eingaben zu Trainingszwecken ausschliessen.',
        ]},
        { title: '13. Ihre Rechte', paragraphs: [
          'Sie haben nach DSG und – soweit anwendbar – DSGVO folgende Rechte: Auskunft über die zu Ihrer Person bearbeiteten Daten; Berichtigung unrichtiger Daten; Löschung bzw. Vernichtung von Daten; Einschränkung der Bearbeitung; Widerspruch gegen Bearbeitungen, die auf berechtigten Interessen beruhen, insbesondere gegen Direktmarketing; Datenherausgabe und -übertragung in einem gängigen elektronischen Format; Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft; Beschwerde bei einer Aufsichtsbehörde.',
          'Richten Sie Ihr Anliegen an datenschutz@LumAIa.ch. Zur Verhinderung von Missbrauch können wir Ihre Identität überprüfen. Wir antworten innert 30 Tagen; bei komplexen Anliegen informieren wir über eine Verlängerung.',
          'Aufsichtsbehörden: Schweiz – Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB), Bern, edoeb.admin.ch. EU/EWR – die Datenschutzbehörde Ihres Aufenthalts- oder Arbeitsorts.',
        ]},
        { title: '14. Website-Besuch, Newsletter, Social Media und Bewerbungen', paragraphs: [
          'Server-Logs. Beim Besuch unserer Website werden technische Daten gemäss Abschnitt 4 protokolliert. Dies ist zur Bereitstellung und Sicherheit erforderlich (berechtigtes Interesse).',
          'Kontaktformulare und Demo-Anfragen. Ihre Angaben nutzen wir zur Bearbeitung der Anfrage und für damit zusammenhängende Rückfragen sowie – bei geschäftlichem Kontext und soweit zulässig – für Folgeinformationen zu vergleichbaren Angeboten. Sie können solchen Informationen jederzeit widersprechen.',
          'Newsletter und Produktinformationen. Der Versand erfolgt über Customer.io. Anmeldungen bestätigen wir per Double-Opt-in. Wir messen Öffnungen und Klicks, um Inhalte zu verbessern und Interessen zu berücksichtigen. Jede Nachricht enthält einen Abmeldelink; die Abmeldung ist jederzeit kostenlos möglich.',
          'Social Media und Berufsnetzwerke. Auf Profilen bei LinkedIn, Instagram u. a. bearbeiten die jeweiligen Plattformen Daten in eigener Verantwortung nach ihren Bestimmungen. Wir bearbeiten Beiträge, Nachrichten und Statistiken, die wir dort erhalten, zur Kommunikation und Reichweitenmessung. Auf unserer Website eingebettete Inhalte Dritter (z. B. Videos, Kartendienste) laden wir erst nach Ihrer Einwilligung.',
          'Bewerbungen. Bewerbungsunterlagen bearbeiten wir ausschliesslich zur Beurteilung der Eignung und zur Durchführung des Verfahrens. Zugriff haben nur die am Verfahren beteiligten Personen.',
        ]},
        { title: '15. Änderungen dieser Datenschutzerklärung', paragraphs: [
          'Wir können diese Datenschutzerklärung anpassen, wenn sich unsere Bearbeitungen, die eingesetzten Dienste oder die Rechtslage ändern. Es gilt die auf unserer Website publizierte Fassung. Bei wesentlichen Änderungen informieren wir registrierte Nutzerinnen und Nutzer zusätzlich per E-Mail oder Hinweis in der Plattform.',
        ]},
      ],
    },

    // ── Imprint Page ──
    imprint: {
      label: 'Impressum',
      title: 'Impressum',
      title_em: '',
      company: 'Unternehmen',
      address: 'Adresse',
      uid: 'Unternehmens-Nr (UID)',
      responsible: 'Verantwortlich f\u00fcr den Inhalt',
    },

    // ── Pricing Page ──
    pricingPage: {
      meta_title: 'Preise \u2013 LumAIa',
      meta_desc: 'Transparente Preise f\u00fcr LumAIa. Starter ab CHF\u00a039/Seat/Monat, Pro ab CHF\u00a069/Seat/Monat. Agency- und Enterprise-Pl\u00e4ne verf\u00fcgbar.',
      label: 'Preise',
      title: 'Transparente Preise,',
      title_em: 'kein Kleingedrucktes',
      trialBadge: '30 Tage kostenlos testen \u2013 keine Kreditkarte erforderlich.',
      compareBtn: 'Alle Features vergleichen',
      compareBtnClose: 'Vergleich schliessen',
      plans: [
        {
          id: 'starter',
          label: 'Starter',
          target: 'Solo, Praxen, lokale KMU',
          price: 'CHF 39',
          priceSub: '/ Seat / Monat',
          desc: 'Alle Module freigeschaltet. Ideal f\u00fcr Einzelpersonen und kleine Teams mit klar umrissenem Bedarf.',
          features: [
            'Alle Module freigeschaltet',
            '250 LumAIa Credits/Seat inkl.',
            '1 Brand',
            'Bulk-Batch bis 10 (Product Asset Studio)',
            'Support via AI Chat & Docs',
            'Basic-Integration',
          ],
          cta: '30 Tage kostenlos testen',
          ctaHref: '/signup',
          highlight: false,
          trial: true,
        },
        {
          id: 'pro',
          label: 'Pro',
          badge: 'Empfohlen',
          target: 'E-Commerce & KMU-Teams',
          price: 'CHF 69',
          priceSub: '/ Seat / Monat',
          desc: 'Mehr Credits, mehr Brands, unlimitierte Batch-Produktion. F\u00fcr Teams, die regelm\u00e4ssig skalieren.',
          features: [
            'Alle Module freigeschaltet',
            '400 LumAIa Credits/Seat inkl. (2\u00d7 Rollover)',
            'Bis 3 Brands (+CHF\u00a0119/Monat pro weitere)',
            'Unlimited Bulk-Batch (Product Asset Studio)',
            'Verified Domains',
            'Commerce-Integration',
            'Support via AI Chat & Docs',
          ],
          cta: '30 Tage kostenlos testen',
          ctaHref: '/signup',
          highlight: true,
          trial: true,
        },
        {
          id: 'agency',
          label: 'Agency',
          target: 'Agentur-Partner',
          price: 'CHF\u00a0499',
          priceSub: 'pro Monat',
          priceSub2: 'jeder weitere Sitz CHF\u00a079',
          desc: 'Unlimitierte Brands, Pay-per-Use Credits und Agentur-Tools f\u00fcr Kunden-Mandate.',
          features: [
            'Alle Module freigeschaltet',
            '1 Sitz inklusive',
            'Unlimitierte Brands (+CHF\u00a0149/Monat pro weitere)',
            'Unlimited Bulk-Batch (Product Asset Studio)',
            'Pay-per-Use Credits',
            'SSO + REST API',
            'Enterprise-Integration',
            'Campaign Engineer auf Anfrage (CHF\u00a0180/h)',
            'Verified Domains',
            'E-Mail-Support',
          ],
          cta: 'Demo buchen',
          ctaHref: '/contact',
          highlight: false,
          trial: false,
        },
        {
          id: 'enterprise',
          label: 'Enterprise',
          target: 'Large Enterprise, Multi-Brand',
          price: 'Auf Anfrage',
          priceSub: '',
          desc: 'Individuelle Konditionen, 3 Campaign Engineers inklusive, Priority-Support und individuelle SLA.',
          features: [
            'Alle Module freigeschaltet',
            'Unlimitierte Brands',
            'Pay-per-Use Credits',
            'SSO + REST API',
            'Enterprise-Integration',
            'Priority E-Mail-Support',
            'Individuelle SLA',
          ],
          cta: 'Kontakt aufnehmen',
          ctaHref: '/contact',
          highlight: false,
          trial: false,
        },
      ],
      compareTable: {
        title: 'Feature-Vergleich',
        headers: ['Feature', 'Starter', 'Pro', 'Agency', 'Enterprise'],
        rows: [
          { label: 'Preis/Seat/Monat', cols: ['CHF 39', 'CHF 69', 'CHF 79', '\u2013'] },
          { label: 'Plattformlizenz', cols: ['\u2013', '\u2013', 'CHF 499/Monat', 'Auf Anfrage'] },
          { label: 'Credits/Seat/Monat', cols: ['250 LC', '400 LC', 'Pay per use', 'Pay per use'] },
          { label: 'Credit Rollover', cols: ['\u2013', '2\u00d7', '\u2013', '\u2013'] },
          { label: '30-Tage Free Trial', cols: ['\u2713', '\u2713', '\u2013', '\u2013'] },
          { label: 'Inkl. Brands', cols: ['1', '1', '1', '1'] },
          { label: 'Max. Brands', cols: ['1', '3', 'Unlimitiert', 'Unlimitiert'] },
          { label: 'Weitere Brand/Monat', cols: ['\u2013', 'CHF 119', 'CHF 149', 'CHF 149'] },
          { label: 'Bulk-Batch (PAS)', cols: ['bis 10', 'Unlimitiert', 'Unlimitiert', 'Unlimitiert'] },
          { label: 'Alle Module', cols: ['\u2713', '\u2713', '\u2713', '\u2713'] },
          { label: 'Verified Domains', cols: ['\u2013', '\u2713', '\u2713', '\u2713'] },
          { label: 'SSO', cols: ['\u2013', '\u2013', '\u2713', '\u2713'] },
          { label: 'REST API', cols: ['\u2013', '\u2013', '\u2713', '\u2713'] },
          { label: 'Integration', cols: ['Basic', 'Commerce', 'Enterprise', 'Enterprise'] },
          { label: 'Campaign Engineer', cols: ['\u2013', '\u2013', 'CHF 180/h', '\u2013'] },
          { label: 'Support', cols: ['AI Chat & Docs', 'AI Chat & Docs', 'E-Mail', 'Priority E-Mail'] },
        ],
      },
      credits: {
        label: 'LumAIa Credits',
        title: 'Was kostet ein Asset?',
        intro: 'LumAIa Credits sind die Einheit f\u00fcr die KI-Produktion in LumAIa. Starter- und Pro-Pl\u00e4ne enthalten Credits im Abo \u2013 ohne Z\u00e4hlen, ohne \u00dcberraschungen. Mit LumAIa sparen Sie mindestens 90\u00a0% gegen\u00fcber traditioneller Produktion.',
        disclaimer: '* Ungef\u00e4hre Richtwerte. Traditionelle Kosten basieren auf Marktpreisen f\u00fcr professionelle Produkt-Fotografie und Bildbearbeitung.',
        assets: [
          { name: 'Hero Shot', credits: '25 LC', traditional: 'CHF 150\u2013400' },
          { name: 'Lifestyle-Image Set', credits: '50 LC', traditional: 'CHF 300\u2013800' },
          { name: 'Micro-Rotation', credits: '20 LC', traditional: 'CHF 100\u2013250' },
          { name: 'Detailed Close-up', credits: '35 LC', traditional: 'CHF 120\u2013300' },
        ],
      },
      faqTeaserText: 'Noch Fragen? Alle Details direkt im Gespr\u00e4ch kl\u00e4ren.',
      faqTeaserContact: 'Kontakt aufnehmen',
    },

    // ── Platform Page ──
    platformPage: {
      meta_title: 'Plattform-\u00dcbersicht \u2013 LumAIa',
      meta_desc: 'Alle 19 Module der LumAIa Agentic Agency Plattform im \u00dcberblick \u2013 von der strategischen Planung bis zur Kampagnen-Optimierung.',
      label: 'Die Plattform',
      title: 'Alle 19 Module',
      title_em: 'im \u00dcberblick',
      sub: 'LumAIa bildet die gesamte Wertsch\u00f6pfungskette einer Agentur in vier Phasen ab. Jedes Modul funktioniert eigenst\u00e4ndig oder als Teil des Gesamtsystems.',
      comingSoon: 'In K\u00fcrze',
      live: 'Live',
    },

    // ── Use Cases Page ──
    useCasesPage: {
      meta_title: 'Use Cases \u2013 LumAIa',
      meta_desc: 'Entdecken Sie, wie LumAIa reale Marketing-Herausforderungen l\u00f6st \u2013 von Agentic Commerce bis Kampagnen-Skalierung.',
      label: 'Use Cases',
      title: 'Was LumAIa',
      title_em: 'konkret l\u00f6st',
      sub: 'Echte Herausforderungen, gel\u00f6st mit einem System \u2013 nicht mit mehr Personal.',
      cases: [
        { title: 'Agentic Commerce', desc: 'Machen Sie Ihren Onlineshop bereit f\u00fcr KI-Shopping-Agenten.', href: '/use-cases/agentic-commerce', badge: 'Featured' },
        { title: 'Produktlaunch in Rekordzeit', desc: '50 neue Produkte, Cross-Channel-Kampagne in 48 Stunden statt 4 Wochen.', href: '#', badge: 'In K\u00fcrze' },
        { title: 'ROAS-Maximierung', desc: 'Ad Fatigue erkennen, neue Varianten erstellen, Budget auf Gewinner umschichten \u2013 24/7.', href: '#', badge: 'In K\u00fcrze' },
        { title: 'Regionale Kampagnen-Skalierung', desc: '100 Standorte, 100% individualisiert \u2013 von 30 Tagen auf 48 Stunden.', href: '#', badge: 'In K\u00fcrze' },
        { title: 'AEO-Dominanz', desc: 'F\u00fcr Answer Engines optimieren, bevor es zum Standard wird.', href: '#', badge: 'In K\u00fcrze' },
      ],
    },

    // ── Agentic Commerce Use Case Page ──
    agenticCommerce: {
      meta_title: 'Agentic Commerce: Ist Ihr Onlineshop bereit? | LumAIa',
      meta_desc: 'KI-Agenten kaufen heute f\u00fcr Konsumenten ein. Erfahren Sie, ob Ihr Onlineshop daf\u00fcr bereit ist \u2013 und wie Product Asset Studio das l\u00f6st. Jetzt lesen.',
      h1: 'Was ist Agentic Commerce \u2013 und ist Ihr Onlineshop bereit daf\u00fcr?',
      heroAlt: 'Ein KI-Agent kauft im Auftrag eines Konsumenten in einem Onlineshop ein',
      directAnswer: 'Agentic Commerce bezeichnet den Einkauf durch autonome KI-Agenten wie ChatGPT, Gemini oder Perplexity, ohne dass ein Mensch jeden Schritt begleitet. Der Agent sucht, vergleicht und kauft im Auftrag des Konsumenten. Ob Ihr Onlineshop dabei \u00fcberhaupt ber\u00fccksichtigt wird, entscheidet sich an drei Voraussetzungen \u2013 dazu weiter unten mehr.',
      toc: [
        'Wie kaufen KI-Agenten \u00fcberhaupt ein?',
        'Warum ist das jetzt relevant?',
        'Woran erkenne ich, ob mein Onlineshop agent-ready ist?',
        'Was sind Beispiele f\u00fcr AI-to-AI Commerce?',
        'Die drei Voraussetzungen f\u00fcr Agentic Commerce',
        'Klassischer Onlineshop vs. agent-ready Onlineshop',
        'Die L\u00f6sung: Product Asset Studio',
      ],
      sections: {
        howAgentsShop: {
          title: 'Wie kaufen KI-Agenten \u00fcberhaupt ein?',
          intro: 'Ein KI-Agent kauft nicht wie ein Mensch. Er \u00f6ffnet keine Website, scrollt nicht durch Kategorien und l\u00e4sst sich nicht von einem Banner \u00fcberzeugen. Stattdessen greift er \u00fcber strukturierte Schnittstellen und offene Protokolle direkt auf Produktdaten zu, vergleicht sie und schliesst den Kauf ab.',
          protocolsIntro: 'F\u00fcnf Protokolle pr\u00e4gen diesen Ablauf:',
          protocols: [
            { name: 'ACP', full: 'Agentic Commerce Protocol', desc: 'Ein offener Standard, der es Agenten erlaubt, Kaufprozesse direkt abzuwickeln, angebunden an Checkout- und Zahlungsanbieter.' },
            { name: 'UCP', full: 'Universal Commerce Protocol', desc: 'Ein Standard, der Produktdaten so strukturiert, dass sie von unterschiedlichen Agenten einheitlich gelesen werden k\u00f6nnen.' },
            { name: 'MCP', full: 'Model Context Protocol', desc: 'Die technische Grundlage, \u00fcber die KI-Modelle kontrolliert auf externe Datenquellen und Werkzeuge zugreifen.' },
            { name: 'AP2', full: 'Agent Payments Protocol', desc: 'Ein offener Standard, der es Agenten erlaubt, Zahlungen im Auftrag des Konsumenten sicher und autorisiert auszul\u00f6sen.' },
            { name: 'A2A', full: 'Agent-to-Agent Protocol', desc: 'Ein Standard f\u00fcr die direkte Kommunikation zwischen Agenten, \u00fcber den etwa ein Assistent-Agent und ein H\u00e4ndler-Agent Anfragen, Angebote und Best\u00e4tigungen austauschen.' },
          ],
          conclusion: 'F\u00fcr Sie als Shop-Betreiber bedeutet das: Nicht das sch\u00f6nste Schaufenster gewinnt, sondern der Produktkatalog, den ein Agent zuverl\u00e4ssig lesen, verstehen und als vertrauensw\u00fcrdig einstufen kann.',
        },
        whyNow: {
          title: 'Warum ist das jetzt relevant?',
          p1: 'Die Infrastruktur f\u00fcr Agentic Commerce entsteht nicht in einigen Jahren \u2013 sie entsteht jetzt. Grosse Handelsplattformen und Zahlungsanbieter haben begonnen, ihre Onlineshops und Produktkataloge f\u00fcr KI-Agenten zu \u00f6ffnen.',
          p2: 'Das Problem dabei: Wer heute nicht agent-ready ist, verliert nicht an Qualit\u00e4t \u2013 aber an Sichtbarkeit. Ein Agent, der drei vergleichbare Produkte findet, aber nur zwei davon zuverl\u00e4ssig lesen und verifizieren kann, wird das dritte schlicht nicht vorschlagen. F\u00fcr den Konsumenten existiert es in diesem Moment nicht.',
          p3: 'Und anders als bei klassischer Suchmaschinenoptimierung gibt es hier keine zweite Seite, auf der man noch gefunden wird. Der Agent trifft eine Auswahl \u2013 oft nur eine einzige Empfehlung. Wer nicht in dieser Auswahl ist, findet nicht statt.',
          p4: 'Das ist die eigentliche Dringlichkeit: Es geht nicht darum, einen Trend fr\u00fch mitzunehmen. Es geht darum, nicht unsichtbar zu werden, w\u00e4hrend sich das Kaufverhalten verschiebt.',
        },
        selfCheck: {
          title: 'Woran erkenne ich, ob mein Onlineshop agent-ready ist?',
          intro: 'Ein kurzer Selbstcheck. Bei jeder Frage, bei der Sie z\u00f6gern, liegt ein Ansatzpunkt \u2013 kein Urteil.',
          items: [
            'Sind Ihre Produktdaten strukturiert hinterlegt (Schema.org, saubere, vollst\u00e4ndige Attribute) oder liegen sie nur als Fliesstext und Bild vor?',
            'Haben Ihre Produktbilder einen nachvollziehbaren Herkunftsnachweis (zum Beispiel C2PA), oder k\u00f6nnten sie von einem Agenten als potenziell irref\u00fchrend oder nicht verifizierbar eingestuft werden?',
            'Entsprechen Ihre Bilder den geltenden Vorgaben, etwa dem EU AI Act zur Kennzeichnung KI-generierter Inhalte?',
            'Ist Ihr Shop technisch f\u00fcr Agenten und Crawler zug\u00e4nglich, oder blockieren robots.txt-Regeln oder eine rein JavaScript-basierte Darstellung den Zugriff unbeabsichtigt?',
          ],
          conclusion: 'Je \u00f6fter Sie z\u00f6gern, desto gr\u00f6sser der blinde Fleck \u2013 und desto gr\u00f6sser die Chance, die in der Behebung liegt.',
        },
        examples: {
          title: 'Was sind Beispiele f\u00fcr AI-to-AI Commerce?',
          p1: 'Stellen Sie sich vor, ein Konsument bittet seinen pers\u00f6nlichen KI-Assistenten: \u00abFinde mir ein Geschenk f\u00fcr unter 100 Franken, lieferbar bis Freitag.\u00bb Der Assistent fragt bei mehreren H\u00e4ndler-Agenten gleichzeitig Preis, Verf\u00fcgbarkeit und Lieferzeit ab, gleicht sie ab und schliesst den Kauf beim passendsten Anbieter ab \u2013 ohne dass der Konsument je einen Onlineshop besucht.',
          p2: 'Auf der anderen Seite steht Ihr Shop-Agent, der diese Anfrage beantwortet: Er liefert strukturierte Produktdaten, gepr\u00fcfte Bilder und verl\u00e4ssliche Verf\u00fcgbarkeiten zur\u00fcck. Findet dieser Dialog zwischen den Maschinen nicht statt \u2013 weil Ihre Daten unvollst\u00e4ndig oder Ihre Bilder nicht verifizierbar sind \u2013 f\u00e4llt Ihr Produkt aus der Auswahl.',
          p3: 'Sichtbarkeit entscheidet sich damit nicht mehr nur im Moment, in dem ein Mensch auf \u00abKaufen\u00bb klickt, sondern schon im Gespr\u00e4ch zwischen zwei Agenten, das der Mensch nie zu sehen bekommt.',
        },
        prerequisites: {
          title: 'Die drei Voraussetzungen f\u00fcr Agentic Commerce',
          intro: 'Damit Ihr Onlineshop f\u00fcr Agenten sichtbar und w\u00e4hlbar wird, braucht es drei Dinge:',
          items: [
            { title: 'Strukturierte Produktdaten', desc: 'Maschinenlesbar, vollst\u00e4ndig, standardisiert (Schema.org, saubere Attribute).' },
            { title: 'Konforme Bild-Assets', desc: 'Mit Herkunftsnachweis (C2PA), EU-AI-Act-konform, ohne irref\u00fchrende Darstellung.' },
            { title: 'Technische Zug\u00e4nglichkeit', desc: 'Offene Schnittstellen, Crawler-Freigabe, Anbindung an die relevanten Protokolle.' },
          ],
          conclusion: 'Die erste und dritte Voraussetzung sind vielen aus der klassischen technischen Optimierung vertraut. Die zweite \u2013 konforme, verifizierbare Bild-Assets \u2013 ist neu und wird am h\u00e4ufigsten \u00fcbersehen. Genau hier setzt Product Asset Studio an.',
        },
        comparisonTable: {
          title: 'Klassischer Onlineshop vs. agent-ready Onlineshop',
          rows: [
            { label: 'Produktdaten', traditional: 'Fliesstext, uneinheitlich', agentReady: 'Strukturiert, Schema.org' },
            { label: 'Bild-Herkunft', traditional: 'Nicht nachvollziehbar', agentReady: 'C2PA-Manifest, EU-AI-Act-konform' },
            { label: 'Auffindbarkeit', traditional: 'F\u00fcr Menschen optimiert', agentReady: 'F\u00fcr Menschen und Agenten optimiert' },
            { label: 'Sichtbarkeit bei Agenten', traditional: 'Zuf\u00e4llig bis nicht vorhanden', agentReady: 'Planbar' },
          ],
        },
        solution: {
          title: 'Die L\u00f6sung: Product Asset Studio',
          p1: 'Von den drei Voraussetzungen ist eine besonders anspruchsvoll \u2013 und wird am h\u00e4ufigsten untersch\u00e4tzt: konforme, verifizierbare Bild-Assets in der Menge, die ein realer Produktkatalog verlangt.',
          p2: 'Product Asset Studio \u00fcbernimmt genau diesen Teil. Aus einem einzigen Produktbild entsteht ein vollst\u00e4ndiges, gepr\u00fcftes Asset-Set \u2013 jedes Bild mit einem Fidelity-Score bewertet und mit einem C2PA-Herkunftsnachweis versehen. So werden Ihre Produktbilder nicht nur f\u00fcr Menschen ansprechend, sondern f\u00fcr Agenten nachvollziehbar und vertrauensw\u00fcrdig.',
          p3: 'Das ist die Bild-Asset-Seite der Agent-Readiness \u2013 automatisiert, konform und skalierbar.',
          cta: 'Product Asset Studio entdecken',
        },
      },
      conclusion: 'Agentic Commerce ist kein Zukunftsszenario, sondern eine Infrastruktur, die bereits entsteht. Onlineshops, die heute nicht agent-ready sind, verlieren nicht an Qualit\u00e4t \u2013 aber an Sichtbarkeit, dort wo zunehmend Kaufentscheidungen fallen. Der erste, oft \u00fcbersehene Schritt beginnt bei den Produktbildern.',
      tldr: [
        'Agentic Commerce bedeutet Einkauf durch autonome KI-Agenten (ChatGPT, Gemini, Perplexity), ohne menschliche Einzelschritte.',
        'Agenten w\u00e4hlen oft nur eine Empfehlung \u2013 wer nicht agent-ready ist, findet nicht statt.',
        'Ein agent-ready Onlineshop braucht drei Dinge: strukturierte Daten, konforme Bild-Assets, technische Zug\u00e4nglichkeit.',
        'Product Asset Studio liefert die Bild-Asset-Seite: gepr\u00fcfte Assets mit Fidelity-Score und C2PA-Nachweis.',
      ],
      author: {
        name: 'Remo Girard',
        role: 'Co-Founder von LumAIa',
        bio: 'Remo Girard ist Co-Founder von LumAIa und CEO von iundf Dewave, einer Schweizer Digital- und KI-Transformationsagentur f\u00fcr KMU. Er besch\u00e4ftigt sich seit Jahren mit E-Commerce, Custom-AI-L\u00f6sungen, GEO/AEO und dem agentischen Web und begleitet Schweizer Unternehmen beim \u00dcbergang zu KI-gest\u00fctztem Marketing und Commerce.',
      },
      faq: [
        { q: 'Welche Plattformen z\u00e4hlen zu Agentic Commerce?', a: 'Aktuell vor allem KI-Assistenten mit Einkaufsfunktion wie ChatGPT, Gemini und Perplexity sowie agentenf\u00e4hige Handels- und Zahlungsplattformen.' },
        { q: 'Was passiert, wenn mein Onlineshop nicht agent-ready ist?', a: 'Zun\u00e4chst nichts Sichtbares \u2013 aber Sie werden f\u00fcr einen wachsenden Teil der agentengest\u00fctzten K\u00e4ufe schlicht nicht ber\u00fccksichtigt, weil der Agent Ihre Produkte nicht zuverl\u00e4ssig lesen oder verifizieren kann.' },
        { q: 'Reicht ein gutes Produktbild allein?', a: 'Nein. Bild-Assets sind eine von drei Voraussetzungen. Ohne strukturierte Daten und technische Zug\u00e4nglichkeit bleibt auch das beste Bild f\u00fcr einen Agenten unauffindbar.' },
        { q: 'Was ist der Unterschied zwischen SEO und Agent-Readiness?', a: 'Klassisches SEO optimiert f\u00fcr die menschliche Suche mit mehreren Ergebnisseiten. Agent-Readiness optimiert f\u00fcr die maschinelle Auswahl, bei der oft nur eine einzige Empfehlung \u00fcbrig bleibt.' },
        { q: 'Ist Product Asset Studio EU-AI-Act-konform?', a: 'Ja. Die erzeugten Bild-Assets sind auf die Kennzeichnungs- und Nachweispflichten ausgelegt und werden mit einem C2PA-Herkunftsnachweis versehen.' },
      ],
    },

    // ── Product Asset Studio Page ──
    pas: {
      meta_title: 'Product Asset Studio \u2013 Brand-konforme KI-Produktbilder',
      meta_desc: 'Erstellen Sie Brand-konforme Produktbilder f\u00fcr Ihren Onlineshop \u2013 EU-AI-Act konform & C2PA-Nachweis. Schnell, kostenlos & ohne Kreditkarte starten.',
      h1: 'Product Asset Studio: Brand-konforme Produktbilder f\u00fcr Ihren Onlineshop aus einem einzigen Bild.',
      heroAlt: 'Aus einem Produktbild erzeugt Product Asset Studio ein vollst\u00e4ndiges Asset-Set',
      directOffer: 'Product Asset Studio verwandelt ein einzelnes Produktbild in ein vollst\u00e4ndiges Set aus Hero-, Lifestyle-, Detail- und Micro-Rotation-Assets \u2013 jedes mit Fidelity-Score bewertet und mit C2PA-Herkunftsnachweis versehen. Die generierten Assets entsprechen vollst\u00e4ndig den Brand-Guidelines, um sicherzustellen, dass sie konsistent und markenkonform sind. Sie erhalten katalogfertige, konforme Bilder, ohne ein einziges neues Fotoshooting.',
      cta: 'Jetzt kostenlos starten',
      ctaMicro: 'Keine Kreditkarte n\u00f6tig \u2013 erste Assets in Minuten.',
      trustLayer: 'Entwickelt von der iundf-Gruppe \u2013 25+ Jahre Erfahrung in Marketing und Kommunikation und Softwareentwicklung. Jedes generierte Bild erh\u00e4lt einen Fidelity-Score als messbare, nachvollziehbare Qualit\u00e4tskennzahl. Kein Bild geht live, bevor es den Campaign Engineer Gate passiert hat.',
      sections: {
        whyDifferent: {
          title: 'Warum Ihre Produktbilder pl\u00f6tzlich anders bewertet werden',
          p1: 'KI-Shopping-Agenten von Google, OpenAI und Perplexity kaufen heute bereits autonom ein \u2013 sie vergleichen Produkte, bauen Warenk\u00f6rbe und schliessen K\u00e4ufe ab, ganz ohne klassische Sucheingabe. Dabei bewerten sie Ihr Sortiment nach Kriterien, f\u00fcr die klassische Produktfotos nie gebaut wurden.',
          p2: 'Das Problem: Ein einzelner Freisteller reicht daf\u00fcr nicht mehr. Fehlen Lifestyle-Bilder, Detailaufnahmen oder eine saubere Herkunft, wird Ihr Produkt seltener vorgeschlagen \u2013 oder gar nicht. Gleichzeitig sind klassische Fotoshootings teuer, langsam und bei grossen Sortimenten kaum skalierbar.',
          deepLink: 'Vertiefung: Wie Agentic Commerce funktioniert und woran Sie erkennen, ob Ihr Shop bereit ist',
        },
        whatIs: {
          title: 'Was Product Asset Studio ist',
          desc: 'Product Asset Studio ist ein KI-Modul, das aus einem vorhandenen Produktbild und Ihren bestehenden Produktdaten ein vollst\u00e4ndiges, EU-AI-Act-konformes Bild-Asset-Set erzeugt \u2013 inklusive Fidelity-Scoring und C2PA-Herkunftsnachweis. Aus vorhandenem Bildmaterial entstehen automatisch die Bildwelten, die sowohl Kundinnen und Kunden im Shop \u00fcberzeugen als auch von Shopping-Agenten korrekt gelesen werden.',
        },
        assetTypes: {
          title: 'Vier Asset-Typen aus einem einzigen Bild',
          intro: 'Aus einem Ausgangsbild erzeugt Product Asset Studio vier Arten von Assets \u2013 genau die, die ein moderner Onlineshop und die KI-Suche verlangen:',
          types: [
            { title: 'Lifestyle Images', desc: 'Aus Produktname und Beschreibung entstehen passende Lifestyle- und Anwendungsbilder \u2013 dort, wo bisher nur ein Freisteller existierte. Ihr Produkt wird im echten Einsatz gezeigt.' },
            { title: 'Hero Shots', desc: 'Klare, konsistente Produktfotos auf Weiss \u2013 automatisch generiert, auch f\u00fcr White-Label-Produkte. Ideal als Hauptbild f\u00fcr Shop und Feed.' },
            { title: 'Detailed Close-ups', desc: 'Detailaufnahmen und Qualit\u00e4ts-Enhancement bis 4K aus bestehendem Bildmaterial \u2013 ohne neues Shooting. Materialien und Verarbeitung werden sichtbar.' },
            { title: 'Micro-Rotation', desc: 'Ihr Produkt aus mehreren Winkeln \u2013 automatisch erzeugt, f\u00fcr eine vollst\u00e4ndige Rundum-Ansicht ohne 360-Grad-Rig.' },
          ],
        },
        googleStandard: {
          title: 'Der Google-Standard: 13 Attribute f\u00fcr Agentic Inventory Readiness',
          intro: 'Damit ein Produkt von KI-Agenten \u00fcberhaupt ber\u00fccksichtigt wird, definiert Google 13 essentielle Attribute \u2013 gegliedert in drei Gruppen. Product Asset Studio deckt die wichtigste davon vollst\u00e4ndig ab.',
          prio1: 'Prio 1 \u2013 Produktbilder: High Quality, Lifestyle, Additional. Genau hier setzt Product Asset Studio an und liefert alle geforderten Bildtypen automatisiert.',
          otherGroups: [
            { title: 'Product Basics', desc: 'Title, Description, GTIN, pr\u00e4zise Produktbezeichnung, eindeutiger Identifikator.' },
            { title: 'Fulfillment', desc: 'Free Shipping, Shipping Speed, Return Policy, vollst\u00e4ndige Lieferinformationen.' },
            { title: 'Differentiators', desc: 'Product Ratings, Sale Price, Product Type, Product Highlights, scannbare Feature-Listen.' },
          ],
        },
        howItWorks: {
          title: 'So funktioniert es',
          steps: [
            'Produktbild und Produktdaten hochladen \u2013 aus PIM/DAM/Shop oder manuell.',
            'Product Asset Studio erzeugt das vollst\u00e4ndige Asset-Set (Lifestyle, Hero, Detail, Micro-Rotation).',
            'Jedes Bild wird mit einem Fidelity-Score bewertet: GREEN, Yellow oder RED.',
            'Bei GREEN erfolgt die automatische Freigabe. Bei Yellow oder RED pr\u00fcft ein Campaign Engineer das Bild manuell (Campaign Engineer Gate).',
            'Die fertigen, konformen Assets stehen zum Download oder zur direkten Anbindung bereit \u2013 .webp, bis 4K.',
          ],
        },
        example1: {
          title: 'Beispiel: Aus einem Produktbild werden sechs',
          before: 'Ausgangslage: eine Produktseite mit einem einzigen Freisteller \u2013 hier ein Bistro-Set aus dem Onlineshop.',
          after: 'Product Asset Studio identifiziert die fehlenden Lifestyle-Bilder und erzeugt auf Basis von Produktname und Beschreibung die passenden Bildwelten. Zus\u00e4tzlich verbessert es Aufl\u00f6sung und Gr\u00f6ssenverh\u00e4ltnisse und zeigt das Produkt aus neuen Winkeln.',
        },
        example2: {
          title: 'Beispiel: Perfekte Freisteller und Qualit\u00e4tsaufwertung',
          cutout: 'Freistellung (weisser Hintergrund): Aus einem einzigen Bild erzeugt Product Asset Studio klare Produktfotos \u2013 und die passenden Anwendungsbilder gleich mit.',
          upscaling: 'Upscaling und Enhancement: Product Asset Studio verbessert die Bildqualit\u00e4t durch Upscaling \u2013 bis 4K, ohne neues Shooting.',
          note: 'Generierte Bilder werden vor der Live-Schaltung durch den Campaign Engineer freigegeben.',
        },
        results: {
          title: 'Was das f\u00fcr Ihren Onlineshop bedeutet',
          items: [
            { value: '100 %', label: 'Agent-Ready' },
            { value: '100 %', label: 'Brandsafety' },
            { value: '\u221e', label: 'Unbegrenzte Skalierbarkeit' },
            { value: '90 %', label: 'Kostenreduktion' },
          ],
          conclusion: 'Das Ergebnis: Ihr Onlineshop ist bereit f\u00fcr Agentic Commerce.',
        },
        audience: {
          title: 'F\u00fcr wen Product Asset Studio gemacht ist',
          forWhom: 'F\u00fcr E-Commerce- und DTC-Marken mit tausenden von Produkten, die ihre Kataloge skalierbar und konform mit Bild-Assets versorgen wollen.',
          notFor: 'Nicht das Richtige f\u00fcr Sie, wenn: Sie ein einzelnes, vollst\u00e4ndig art-direktes Hero-Kampagnenbild mit einem echten Fotografen brauchen. Daf\u00fcr eignet sich eine klassische Produktion besser.',
        },
      },
      faq: [
        { q: 'Wie schnell erhalte ich meine Assets?', a: 'In der Regel innerhalb weniger Minuten pro Produkt.' },
        { q: 'Was passiert bei einem Yellow- oder RED-Fidelity-Score?', a: 'Ein Campaign Engineer pr\u00fcft das Bild manuell, bevor es freigegeben wird. Nichts geht ungepr\u00fcft live.' },
        { q: 'Ist das mit meinem PIM/DAM oder Shop kompatibel?', a: 'Ja, \u00fcber die Integration-Hub-Anbindung. Bestehendes Bildmaterial und Produktdaten werden direkt \u00fcbernommen.' },
        { q: 'Brauche ich neue Produktfotos oder ein Shooting?', a: 'Nein. Product Asset Studio arbeitet mit Ihrem vorhandenen Bildmaterial \u2013 auch mit einem einzigen Freisteller.' },
        { q: 'Brauche ich eine Kreditkarte zum Start?', a: 'Nein.' },
      ],
    },

    // ── Blog Page ──
    blogPage: {
      meta_title: 'Blog \u2013 LumAIa',
      meta_desc: 'Insights zu Agentic Commerce, KI-Sichtbarkeit und der Zukunft des Marketings.',
      label: 'Blog',
      title: 'Insights &',
      title_em: 'Perspektiven',
      sub: 'Zu Agentic Commerce, KI-Sichtbarkeit in Antwort-Engines und der Zukunft des Marketings.',
      comingSoon: 'Blog-Artikel erscheinen in K\u00fcrze. Bleiben Sie dran.',
      readArticle: 'Artikel lesen',
      contactCta: 'Kontakt aufnehmen',
    },

    // ── Signup Page ──
    signupPage: {
      meta_title: 'Registrieren \u2013 LumAIa Product Asset Studio',
      meta_desc: 'Erstellen Sie Ihr kostenloses Product Asset Studio Konto. Keine Kreditkarte erforderlich.',
      label: 'Registrieren',
      title: 'Erstellen Sie Ihr',
      title_em: 'kostenloses Konto',
      sub: 'Starten Sie mit Product Asset Studio in wenigen Minuten. Keine Kreditkarte erforderlich.',
      comingSoon: 'Die Self-Serve-Registrierung wird in K\u00fcrze verf\u00fcgbar sein. Buchen Sie in der Zwischenzeit eine Demo.',
      cta: 'Stattdessen Demo buchen',
      noCreditCard: 'Keine Kreditkarte. Kostenlose Demo-Session.',
    },

    // ── Legal Terms Page ──
    termsPage: {
      meta_title: 'AGB \u2013 LumAIa',
      meta_desc: 'Allgemeine Gesch\u00e4ftsbedingungen (AGB) f\u00fcr die Nutzung von LumAIa durch iundf Dewave GmbH.',
      label: 'Rechtliches',
      title: 'Allgemeine',
      title_em: 'Gesch\u00e4ftsbedingungen',
      contactCta: 'Kontakt',
      privacyCta: 'Datenschutz',
      intro: 'LumAIa by iundf Dewave GmbH, Bahnhofstrasse 59, 6312 Steinhausen, Schweiz, UID CHE-162.124.947 (nachfolgend \u00abLumAIa\u00bb)',
      version: 'Version: 1.0 \u00b7 Stand: 06.09.2026 \u00b7 G\u00fcltig ab: 08.09.2026',
      sections: [
        { title: '1. Geltungsbereich und Vertragsgegenstand', paragraphs: [
          '1.1 Diese AGB regeln die Nutzung der Software-as-a-Service-L\u00f6sung \u00abLumAIa\u00bb (nachfolgend \u00abPlattform\u00bb) einschliesslich aller Module, Schnittstellen, Dokumentationen und zugeh\u00f6rigen Leistungen durch die Kundin oder den Kunden (nachfolgend \u00abKunde\u00bb).',
          '1.2 Die Plattform wird ausschliesslich Unternehmen, Selbst\u00e4ndigerwerbenden, Beh\u00f6rden und anderen Organisationen zur Verf\u00fcgung gestellt, die den Vertrag im Rahmen ihrer beruflichen oder gewerblichen T\u00e4tigkeit abschliessen. Ein Vertragsabschluss mit Konsumentinnen und Konsumenten ist ausgeschlossen. Der Kunde best\u00e4tigt mit der Registrierung, nicht als Konsument zu handeln.',
          '1.3 Die Plattform ist ein Werkzeug zur Unterst\u00fctzung von Produkt-, Marketing-, Kommunikations- und Mediaprozessen. Sie umfasst insbesondere Module f\u00fcr Media-Strategie, digitale Kampagnen, Publishing, Media und Reporting sowie Asset- und Brand-Management. Der konkrete Leistungsumfang ergibt sich aus dem gebuchten Tarif (STARTER, PRO, AGENCY), den gebuchten Modulen und der Leistungsbeschreibung auf https://lumaia.studio/de-ch/plattform.',
          '1.4 Bei Widerspr\u00fcchen gilt folgende Rangordnung: (a) Auftragsverarbeitungsvertrag (AVV/DPA) in datenschutzrechtlichen Fragen, (b) diese AGB, (c) Leistungsbeschreibung und Dokumentation.',
          '1.5 Abweichende oder erg\u00e4nzende Bedingungen des Kunden, namentlich Einkaufsbedingungen, gelten nur, wenn die LumAIa ihnen schriftlich ausdr\u00fccklich zustimmt. Die widerspruchslose Leistungserbringung stellt keine Zustimmung dar.',
        ]},
        { title: '2. Vertragsschluss, Registrierung und Konto', paragraphs: [
          '2.1 Der Vertrag kommt zustande durch Abschluss der Online-Registrierung und Freischaltung des Kontos durch die LumAIa oder durch tats\u00e4chliche Nutzung der Plattform durch den Kunden, je nachdem, was zuerst eintritt.',
          '2.2 Der Kunde stellt sicher, dass die bei der Registrierung angegebenen Daten vollst\u00e4ndig und richtig sind, und h\u00e4lt sie aktuell. Die zur Registrierung handelnde Person best\u00e4tigt, zur Vertretung des Kunden befugt zu sein.',
          '2.3 Zugangsdaten sind vertraulich zu behandeln und d\u00fcrfen nicht an Dritte weitergegeben werden. Named-User-Lizenzen (Seats) sind einer bestimmten nat\u00fcrlichen Person zugeordnet und nicht gleichzeitig von mehreren Personen nutzbar. Ein Seat kann bei personellem Wechsel auf eine andere Person \u00fcbertragen werden, jedoch nicht wiederholt zur Umgehung von Lizenzgeb\u00fchren. Das Teilen von Seats mit mehreren Personen ist verboten.',
          '2.4 Der Kunde ist f\u00fcr alle Handlungen verantwortlich, die \u00fcber seine Konten erfolgen. Bei Verdacht auf Missbrauch oder Kompromittierung ist die LumAIa unverz\u00fcglich zu informieren (legal(at)lumaia.studio).',
        ]},
        { title: '3. Nutzungsrechte', paragraphs: [
          '3.1 Die LumAIa r\u00e4umt dem Kunden f\u00fcr die Vertragsdauer ein nicht exklusives, nicht \u00fcbertragbares und nicht unterlizenzierbares Recht ein, die gebuchten Module im vereinbarten Umfang (Tarif, Anzahl Seats, Anzahl Brands, Speicher, Credits) f\u00fcr eigene Gesch\u00e4ftszwecke zu nutzen. Der Kunde erh\u00e4lt keine Kopie der Software; die Nutzung erfolgt ausschliesslich \u00fcber die von der LumAIa bereitgestellten Zug\u00e4nge.',
          '3.2 Nicht zul\u00e4ssig sind insbesondere: (a) Reverse Engineering, Dekompilierung oder Disassemblierung, soweit nicht gesetzlich zwingend erlaubt; (b) Umgehung technischer Nutzungs-, Credit- oder Sicherheitsbeschr\u00e4nkungen; (c) Weitervermietung oder Bereitstellung des Zugangs an Dritte ausserhalb der eigenen Organisation; (d) automatisiertes Auslesen der Plattform (Scraping oder Data Extraction) \u00fcber die dokumentierten Schnittstellen hinaus; (e) Nutzung der Plattform oder ihrer Ausgaben zur Entwicklung oder zum Training konkurrierender KI- oder Software-Produkte; (f) Versuche, die zugrunde liegenden Modelle, Modellgewichte, Parameter oder Systemanweisungen zu extrahieren, zu rekonstruieren oder nachzubilden; (g) Belastungs-, Penetrations- oder Sicherheitstests ohne vorherige schriftliche Zustimmung.',
          '3.3 Feedback, Verbesserungsvorschl\u00e4ge und Fehlermeldungen des Kunden darf die LumAIa unentgeltlich, unbefristet und ohne Nennungspflicht zur Weiterentwicklung der Plattform verwenden. Rechte an den Inhalten oder Daten des Kunden werden dadurch nicht \u00fcbertragen.',
        ]},
        { title: '4. Nutzung durch Agenturen und Dienstleister (AGENCY-Tarif)', paragraphs: [
          '4.1 Im AGENCY-Tarif darf der Kunde die Plattform auch f\u00fcr Arbeiten im Auftrag seiner eigenen Kunden nutzen. Er legt daf\u00fcr innerhalb seines Kontos pro Kunde einen eigenen Brand an. Die Anzahl zul\u00e4ssiger Brands ergibt sich aus dem gebuchten Tarif; zus\u00e4tzliche Brands werden gem\u00e4ss Preisliste verrechnet.',
          '4.2 Der Kunde bleibt in jedem Fall alleiniger Vertragspartner der LumAIa. Es entsteht kein Vertragsverh\u00e4ltnis zwischen der LumAIa und den Kunden des Kunden. Der Kunde ist f\u00fcr die Einhaltung dieser AGB durch alle seine Nutzer verantwortlich.',
          '4.3 Der Kunde tritt gegen\u00fcber seinen eigenen Kunden im eigenen Namen und auf eigene Rechnung auf. Er \u00fcbernimmt ihnen gegen\u00fcber keine Zusagen, die \u00fcber den vorliegenden Vertrag hinausgehen, und stellt die LumAIa von Anspr\u00fcchen frei, die aus solchen weitergehenden Zusagen entstehen.',
          '4.4 Datenschutzrechtlich ist der Kunde gegen\u00fcber seinen eigenen Kunden in der Regel Auftragsverarbeiter und die LumAIa Unterauftragsverarbeiterin. Der Kunde stellt sicher, dass die Weiterbeauftragung der LumAIa zul\u00e4ssig ist. Details regelt der AVV.',
        ]},
        { title: '5. Inhalte des Kunden, KI-Eingaben und -Ausgaben', paragraphs: [
          '5.1 \u00abKundeninhalte\u00bb sind alle Daten, Texte, Bilder, Videos, Marken, Logos, Produktinformationen, Brand Guidelines und sonstigen Inhalte, die der Kunde oder seine Nutzer in die Plattform einbringen oder \u00fcber Schnittstellen verbinden (\u00abInput\u00bb). Kundeninhalte bleiben im Eigentum bzw. in der Rechtsinhaberschaft des Kunden oder seiner Lizenzgeber.',
          '5.2 Der Kunde r\u00e4umt der LumAIa das r\u00e4umlich unbeschr\u00e4nkte, nicht exklusive Recht ein, Kundeninhalte zu speichern, zu vervielf\u00e4ltigen, zu bearbeiten, an die gem\u00e4ss Ziffer 7 eingesetzten Unterauftragsverarbeiter zu \u00fcbermitteln und zu verarbeiten, soweit dies zur Erbringung der vertraglichen Leistungen, zur Fehlerbehebung, zur Sicherstellung der Sicherheit und zur Erf\u00fcllung gesetzlicher Pflichten erforderlich ist. Dieses Recht endet mit der L\u00f6schung der Inhalte bzw. mit Ablauf der Aufbewahrungsfristen nach Ziffer 13.6.',
          '5.3 Rechte an Kundeninhalten. Der Kunde sichert zu, \u00fcber alle erforderlichen Rechte an den Kundeninhalten zu verf\u00fcgen, insbesondere Urheber-, Marken-, Pers\u00f6nlichkeits-, Bild- und Datenschutzrechte, und dass die Einbringung und Verarbeitung keine Rechte Dritter und keine gesetzlichen Bestimmungen verletzt.',
          '5.4 Bearbeitungsrechte bei Material Dritter. Der Kunde nimmt zur Kenntnis, dass die Plattform eingebrachte Inhalte automatisiert ver\u00e4ndert, kombiniert, umgestaltet und in abgeleitete Werke \u00fcberf\u00fchrt. Die nach Ziffer 5.3 erforderlichen Rechte m\u00fcssen daher ausdr\u00fccklich auch die Bearbeitung, Ver\u00e4nderung, Umgestaltung und KI-gest\u00fctzte Verarbeitung sowie die beabsichtigte Verwendung der daraus entstehenden Ergebnisse umfassen. Dies gilt namentlich f\u00fcr Bild-, Video- und Textmaterial von Lieferanten, Herstellern, Distributoren, Bildagenturen, Fotografen, Modellen oder anderen Dritten. Der Kunde beachtet insbesondere, dass Lizenzen f\u00fcr Hersteller- und Lieferantenmaterial h\u00e4ufig auf die unver\u00e4nderte Wiedergabe beschr\u00e4nkt sind und eine Bearbeitung oder KI-gest\u00fctzte Weiterverarbeitung nicht abdecken. Die Pr\u00fcfung und Beschaffung dieser Rechte liegt ausschliesslich beim Kunden. Die LumAIa ist nicht verpflichtet, den Rechtestatus eingebrachter Inhalte zu pr\u00fcfen, und \u00fcbernimmt hierf\u00fcr keine Verantwortung.',
          '5.5 \u00abKI-Ausgaben\u00bb (Output) sind die von der Plattform generierten Ergebnisse, insbesondere Texte, Bilder, Videos, Untertitel, Meta-Daten, Mediapl\u00e4ne und Auswertungen. Soweit die LumAIa Rechte an KI-Ausgaben erlangen kann, r\u00e4umt sie dem Kunden mit vollst\u00e4ndiger Bezahlung der jeweiligen Geb\u00fchren das zeitlich, r\u00e4umlich und inhaltlich unbeschr\u00e4nkte, \u00fcbertragbare Nutzungsrecht an den f\u00fcr ihn generierten KI-Ausgaben ein. Diese Rechtseinr\u00e4umung bezieht sich nur auf die Beitr\u00e4ge der LumAIa und erweitert die Rechte des Kunden an den eingebrachten Kundeninhalten nicht.',
          '5.6 Der Kunde nimmt zur Kenntnis, dass (a) KI-Ausgaben je nach Rechtsordnung urheberrechtlich m\u00f6glicherweise nicht schutzf\u00e4hig sind, (b) gleiche oder \u00e4hnliche Ausgaben auch f\u00fcr andere Nutzer entstehen k\u00f6nnen und die LumAIa daher keine Exklusivit\u00e4t zusichern kann, und (c) KI-Ausgaben fehlerhaft, unvollst\u00e4ndig, veraltet, irref\u00fchrend oder rechtlich problematisch sein k\u00f6nnen (\u00abHalluzinationen\u00bb).',
          '5.7 Pr\u00fcfpflicht des Kunden. Der Kunde ist verpflichtet, KI-Ausgaben vor jeder externen Verwendung, insbesondere vor Publikation, Werbeschaltung oder Weitergabe an Dritte, inhaltlich, rechtlich (namentlich Lauterkeits-, Marken-, Urheber-, Heilmittel-, Finanz- und Lebensmittelwerberecht) und faktisch zu pr\u00fcfen und freizugeben. Automatisierte Brand-Safety- und Compliance-Filter der Plattform sind Hilfsmittel und ersetzen diese Pr\u00fcfung nicht.',
          '5.8 Die LumAIa nutzt Kundeninhalte nicht zum Training fremder allgemeiner KI-Modelle. Sie kann aggregierte, anonymisierte und nicht auf den Kunden r\u00fcckf\u00fchrbare Nutzungsstatistiken zur Verbesserung, Kapazit\u00e4tsplanung und Sicherheit der Plattform verwenden.',
        ]},
        { title: '6. Zul\u00e4ssige Nutzung (Acceptable Use)', paragraphs: [
          '6.1 Der Kunde darf die Plattform nicht nutzen, um Inhalte zu erzeugen, zu speichern oder zu verbreiten, die (a) rechtswidrig, irref\u00fchrend, diskriminierend, gewaltverherrlichend, pornografisch oder f\u00fcr Minderj\u00e4hrige sch\u00e4dlich sind; (b) Rechte Dritter verletzen; (c) Schadsoftware enthalten; (d) unerw\u00fcnschte Massenkommunikation (Spam) darstellen; (e) reale Personen ohne deren Einwilligung in irref\u00fchrender Weise darstellen (Deepfakes) oder (f) besonders sch\u00fctzenswerte Personendaten ohne ausreichende Rechtsgrundlage enthalten.',
          '6.2 Der Kunde verpflichtet sich, bei der Erstellung und Ausspielung von Werbemitteln die Plattformrichtlinien der jeweiligen Werbekan\u00e4le (z. B. Google, Meta, LinkedIn, TikTok) sowie geltende Kennzeichnungspflichten f\u00fcr KI-generierte Inhalte einzuhalten. Die LumAIa stellt hierf\u00fcr technische Hilfsmittel bereit, insbesondere Kennzeichnungsfunktionen und Herkunftsnachweise f\u00fcr generierte Assets. Diese Hilfsmittel entlasten den Kunden nicht von der Pflicht, die im jeweiligen Zielmarkt und Kanal geltenden Kennzeichnungsvorschriften eigenverantwortlich zu pr\u00fcfen und einzuhalten.',
          '6.3 Bei begr\u00fcndetem Verdacht auf einen erheblichen Verstoss, auf Gef\u00e4hrdung der Systemsicherheit oder auf rechtswidrige Nutzung kann die LumAIa betroffene Inhalte sperren und den Zugang ganz oder teilweise vor\u00fcbergehend einschr\u00e4nken. Sie informiert den Kunden unverz\u00fcglich und w\u00e4hlt, soweit m\u00f6glich, die mildeste geeignete Massnahme. Weitergehende Rechte nach Ziffer 13 bleiben vorbehalten.',
        ]},
        { title: '7. Unterauftragnehmer und Drittanbieter', paragraphs: [
          '7.1 Die LumAIa ist berechtigt, zur Leistungserbringung Unterauftragnehmer und Cloud-, KI- sowie Infrastrukturdienste Dritter einzusetzen. Die eingesetzten Anbieter sind in der Datenschutzerkl\u00e4rung bzw. im AVV aufgef\u00fchrt und werden dort aktuell gehalten.',
          '7.2 Der Kunde nimmt zur Kenntnis, dass Funktionen der Plattform von Leistungen Dritter abh\u00e4ngen (insbesondere KI-Modelle, Werbeplattform-APIs, Zahlungsdienste). \u00c4nderungen, Preisanpassungen, Einstellungen oder Ausf\u00e4lle solcher Drittleistungen k\u00f6nnen den Funktionsumfang beeinflussen. Die LumAIa wird um funktions\u00e4quivalenten Ersatz bem\u00fcht sein; ein Anspruch auf eine bestimmte Technologie oder ein bestimmtes Modell besteht nicht.',
          '7.3 Verbindet der Kunde eigene Drittkonten (z. B. Werbekonten, Analytics, Shopsysteme) mit der Plattform, gelten f\u00fcr diese Konten zus\u00e4tzlich die Bedingungen des jeweiligen Drittanbieters. Der Kunde ist f\u00fcr die erforderlichen Berechtigungen und Freigaben verantwortlich.',
        ]},
        { title: '8. Preise, Credits, Rechnungsstellung', paragraphs: [
          '8.1 Die Verg\u00fctung setzt sich zusammen aus (a) einer Lizenzgeb\u00fchr pro Modul und Abrechnungsperiode, (b) Geb\u00fchren f\u00fcr Nutzer-Seats, (c) allf\u00e4lligen Geb\u00fchren pro zus\u00e4tzlichen Brand, (d) Speicher- und Zusatzoptionen sowie (e) KI-Credits. Die massgeblichen Preise ergeben sich aus der jeweils g\u00fcltigen Preisliste.',
          '8.2 Alle Preise verstehen sich in Schweizer Franken (CHF) und exklusive Mehrwertsteuer sowie allf\u00e4lliger ausl\u00e4ndischer Steuern und Abgaben.',
          '8.3 Credits. KI-Leistungen werden \u00fcber Lumaia Credits (LC) abgerechnet. Der Credit-Verbrauch je Leistungsart ergibt sich aus der jeweils g\u00fcltigen, in der Plattform ausgewiesenen Credit-Tabelle. Die Handhabung nicht verbrauchter, im Tarif inkludierter Credits richtet sich nach dem gebuchten Tarif:\n(a) Starter: Inkludierte Credits werden zu Beginn jeder Abrechnungsperiode (Monat) gutgeschrieben und verfallen am Ende der Periode, soweit sie nicht verbraucht wurden. Ein \u00dcbertrag in die Folgeperiode findet nicht statt.\n(b) Pro: Inkludierte Credits werden zu Beginn jeder Abrechnungsperiode (Monat) gutgeschrieben. Nicht verbrauchte Credits werden in die Folgeperiode \u00fcbertragen (Rollover); das insgesamt \u00fcbertragene Guthaben ist auf h\u00f6chstens das Zweifache (2x) der pro Periode inkludierten Credit-Menge begrenzt. Dar\u00fcber hinausgehende Credits verfallen.\n(c) Agency: Die Nutzung wird verbrauchsabh\u00e4ngig abgerechnet (Pay-per-Use); der Verbrauch wird nachsch\u00fcssig gem\u00e4ss Credit-Tabelle und Preisliste in Rechnung gestellt. Ein inkludiertes, periodisch verfallendes Credit-Kontingent besteht nicht.\nZus\u00e4tzlich erworbene Credit-Pakete (Top-ups) verfallen 12 Monate nach Kauf. Verfallene Credits werden nicht zur\u00fcckverg\u00fctet, \u00fcbertragen oder ersetzt. Credits sind kein Zahlungsmittel, nicht auszahlbar, nicht handelbar und nicht auf Dritte \u00fcbertragbar.',
          '8.4 Die LumAIa kann die Credit-Bewertung einzelner Leistungen anpassen, wenn sich die Kosten der zugrunde liegenden KI-Dienste \u00e4ndern. Anpassungen werden 30 Tage im Voraus angek\u00fcndigt und gelten nicht r\u00fcckwirkend f\u00fcr bereits erworbene Top-up-Pakete.',
          '8.5 Sind bei Tarifen mit inkludiertem Credit-Kontingent (Starter, Pro) die verf\u00fcgbaren Credits aufgebraucht, werden credit-pflichtige Funktionen bis zum Erwerb weiterer Credits ausgesetzt. Der Kunde kann in den Kontoeinstellungen eine automatische Nachbuchung aktivieren; in diesem Fall werden Top-ups gem\u00e4ss der gew\u00e4hlten Konfiguration automatisch verrechnet. Bei Tarifen mit verbrauchsabh\u00e4ngiger Abrechnung (Agency, Pay-per-Use) erfolgt keine Aussetzung; der Verbrauch wird nach Ziffer 8.3(c) nachverrechnet.',
          '8.6 \u00dcberschreitungen. Werden mehr Seats, Brands oder mehr Speicher genutzt als gebucht, ist die LumAIa berechtigt, die Mehrnutzung ab dem Zeitpunkt ihres Entstehens gem\u00e4ss Preisliste nachzuverrechnen, und wird den Kunden dar\u00fcber informieren.',
          '8.7 Die Rechnungsstellung erfolgt im Voraus pro Abrechnungsperiode. Zahlungen sind innert 30 Tagen ab Rechnungsdatum ohne Abzug f\u00e4llig. Nutzungsabh\u00e4ngige Positionen werden nachsch\u00fcssig abgerechnet.',
          '8.8 Zahlungen k\u00f6nnen \u00fcber den Zahlungsdienstleister Stripe (Karte, Direktbelastung) oder per Rechnung bzw. Bank\u00fcberweisung erfolgen. Bei Kartenzahlung autorisiert der Kunde die wiederkehrende Belastung f\u00fcr die vereinbarte Laufzeit.',
          '8.9 Verzug. Bei Zahlungsverzug ist ein Verzugszins von 5 Prozent pro Jahr geschuldet; die LumAIa kann zudem Mahnspesen von je CHF 120 erheben. Bleibt eine f\u00e4llige Zahlung nach schriftlicher Mahnung und Ansetzung einer Nachfrist von 10 Tagen aus, kann die LumAIa den Zugang bis zur vollst\u00e4ndigen Zahlung sperren; die Zahlungspflicht f\u00fcr die vereinbarte Laufzeit bleibt bestehen.',
          '8.10 Preisanpassung. Die LumAIa kann die Preise mit Wirkung ab dem n\u00e4chsten Verl\u00e4ngerungszeitraum durch Mitteilung mindestens 30 Tage vor Ablauf der laufenden Laufzeit anpassen. Erh\u00f6ht sich der Gesamtpreis dadurch um mehr als 10 Prozent, kann der Kunde den betroffenen Vertragsbestandteil bis zum Ende der laufenden Laufzeit ohne Kostenfolge k\u00fcndigen. Anpassungen aufgrund gesetzlicher Abgaben oder Steuern sind jederzeit m\u00f6glich.',
          '8.11 Eine Verrechnung mit Gegenforderungen ist nur zul\u00e4ssig, soweit diese unbestritten oder gerichtlich festgestellt sind. Bereits bezahlte Geb\u00fchren werden ausser in den in diesen AGB ausdr\u00fccklich genannten F\u00e4llen nicht zur\u00fcckerstattet.',
        ]},
        { title: '9. Verf\u00fcgbarkeit, Support und \u00c4nderungen', paragraphs: [
          '9.1 Die LumAIa erbringt die Leistungen mit der Sorgfalt eines fachkundigen Anbieters nach dem Stand der Technik. Sie betreibt die Plattform mit dem Ziel einer hohen Verf\u00fcgbarkeit, sichert jedoch im Rahmen dieser AGB keine bestimmte Verf\u00fcgbarkeitsquote zu. Verbindliche Verf\u00fcgbarkeits- und Reaktionszusagen bleiben individuellen Vereinbarungen vorbehalten.',
          '9.2 Geplante Wartungsfenster werden nach M\u00f6glichkeit ausserhalb der Gesch\u00e4ftszeiten (Zeitzone Europe/Zurich) durchgef\u00fchrt und mindestens 48 Stunden im Voraus angek\u00fcndigt. Notfallmassnahmen zur Abwehr akuter Sicherheitsrisiken sind jederzeit ohne Vorank\u00fcndigung zul\u00e4ssig.',
          '9.3 Support wird in dem f\u00fcr den gebuchten Tarif vorgesehenen Umfang und \u00fcber die daf\u00fcr vorgesehenen Kan\u00e4le geleistet. Angaben zu Supportzeiten und Reaktionszielen in der Leistungsbeschreibung sind Serviceziele und keine Zusicherung. Nicht vom Support gedeckt sind Leistungen, die durch unsachgem\u00e4sse Nutzung, Kundeninhalte, Drittsysteme oder vom Kunden gew\u00fcnschte Sonderanpassungen bedingt sind; solche Leistungen k\u00f6nnen nach Aufwand gem\u00e4ss Preisliste verrechnet werden.',
          '9.4 Die LumAIa entwickelt die Plattform laufend weiter. Sie darf Funktionen erg\u00e4nzen, \u00e4ndern und, unter Einhaltung einer Ank\u00fcndigungsfrist von 60 Tagen, wesentliche Funktionen einstellen, sofern der vertraglich vereinbarte Gesamtnutzen dadurch nicht erheblich beeintr\u00e4chtigt wird. Wird eine f\u00fcr den Kunden wesentliche Funktion ersatzlos eingestellt, kann er den betroffenen Vertragsbestandteil auf den Wirksamkeitszeitpunkt der \u00c4nderung k\u00fcndigen und erh\u00e4lt vorausbezahlte, nicht genutzte Geb\u00fchren pro rata zur\u00fcck.',
        ]},
        { title: '10. Gew\u00e4hrleistung und M\u00e4ngel', paragraphs: [
          '10.1 Die LumAIa gew\u00e4hrleistet, dass die Plattform w\u00e4hrend der Vertragsdauer die in der Leistungsbeschreibung genannten Funktionen im Wesentlichen erf\u00fcllt. Der Kunde meldet M\u00e4ngel unverz\u00fcglich nach Entdeckung mit nachvollziehbarer Beschreibung.',
          '10.2 Die LumAIa behebt gemeldete M\u00e4ngel innert angemessener Frist durch Nachbesserung oder Bereitstellung eines gleichwertigen Workarounds. Gelingt dies nach zwei erfolglosen Nachbesserungsversuchen innerhalb einer angemessenen Frist nicht, kann der Kunde die Verg\u00fctung f\u00fcr den betroffenen Leistungsteil angemessen herabsetzen oder den betroffenen Vertragsbestandteil auf Ende des laufenden Monats k\u00fcndigen.',
          '10.3 Von der Gew\u00e4hrleistung ausgenommen sind Beeintr\u00e4chtigungen, die auf (a) Kundeninhalte oder unsachgem\u00e4sse Nutzung, (b) nicht von der LumAIa bereitgestellte Hard- oder Software, Netzwerke oder Drittdienste, (c) unbefugte Eingriffe Dritter oder (d) Nutzung entgegen der Dokumentation zur\u00fcckgehen.',
          '10.4 Keine Zusage bez\u00fcglich Ergebnissen. Die LumAIa schuldet die Bereitstellung der Plattform, nicht einen bestimmten Marketing-, Reichweiten-, Ranking-, Umsatz- oder ROI-Erfolg. Angaben zu Zeitersparnis, Kostensenkung oder Wirkung sind unverbindliche Erfahrungswerte und keine Zusicherung. Insbesondere wird nicht gew\u00e4hrleistet, dass KI-Ausgaben richtig, vollst\u00e4ndig, aktuell, frei von Rechten Dritter oder f\u00fcr einen bestimmten Zweck geeignet sind.',
          '10.5 Soweit gesetzlich zul\u00e4ssig, sind weitergehende Gew\u00e4hrleistungen, Zusicherungen und Bedingungen, ausdr\u00fccklich oder implizit, ausgeschlossen.',
        ]},
        { title: '11. Haftung', paragraphs: [
          '11.1 Die LumAIa haftet unbeschr\u00e4nkt f\u00fcr Personensch\u00e4den sowie f\u00fcr Sch\u00e4den aus absichtlichem oder grobfahrl\u00e4ssigem Verhalten. Zwingende gesetzliche Haftungstatbest\u00e4nde bleiben unber\u00fchrt.',
          '11.2 Im \u00dcbrigen ist die Haftung der LumAIa pro Schadenfall und insgesamt pro Vertragsjahr beschr\u00e4nkt auf die H\u00f6he der vom Kunden in den zw\u00f6lf Monaten vor dem schadensausl\u00f6senden Ereignis f\u00fcr die betroffene Leistung tats\u00e4chlich bezahlten Verg\u00fctung, h\u00f6chstens jedoch CHF 10\u2019000.',
          '11.3 Ausgeschlossen ist, soweit gesetzlich zul\u00e4ssig, die Haftung f\u00fcr indirekte Sch\u00e4den und Folgesch\u00e4den, namentlich entgangenen Gewinn, entgangene Einsparungen, Produktionsausfall, Reputations- und Datenverluste, Anspr\u00fcche Dritter sowie Kosten f\u00fcr Ersatzbeschaffung.',
          '11.4 Die LumAIa haftet nicht f\u00fcr Sch\u00e4den aus (a) der Verwendung von KI-Ausgaben ohne die nach Ziffer 5.7 geschuldete Pr\u00fcfung, (b) Kundeninhalten und deren Rechtm\u00e4ssigkeit, insbesondere fehlenden Bearbeitungsrechten nach Ziffer 5.4, (c) Ausf\u00e4llen oder \u00c4nderungen von Drittdiensten gem\u00e4ss Ziffer 7, (d) Handlungen von Nutzern des Kunden sowie (e) Datenverlust, soweit der Kunde zumutbare eigene Sicherungen unterlassen hat.',
          '11.5 Freistellung durch den Kunden. Der Kunde stellt die LumAIa von Anspr\u00fcchen Dritter frei, die daraus entstehen, dass Kundeninhalte oder die Nutzung der Plattform durch den Kunden oder seine Nutzer Rechte Dritter oder gesetzliche Bestimmungen verletzen, einschliesslich angemessener Rechtsverfolgungskosten. Dies umfasst insbesondere Anspr\u00fcche von Lieferanten, Herstellern, Bildagenturen, Fotografen, abgebildeten Personen oder anderen Rechteinhabern, die geltend machen, eingebrachtes Material sei ohne die erforderlichen Bearbeitungs- oder Verwendungsrechte ver\u00e4ndert, weiterverarbeitet oder ver\u00f6ffentlicht worden.',
          '11.6 Rechtsm\u00e4ngelfreistellung durch die LumAIa. Wird gegen den Kunden geltend gemacht, die vertragsgem\u00e4sse Nutzung der Plattform selbst (ohne Kundeninhalte und ohne KI-Ausgaben) verletze ein Immaterialg\u00fcterrecht eines Dritten in der Schweiz oder im EWR, verteidigt die LumAIa den Kunden auf eigene Kosten, sofern der Kunde sie unverz\u00fcglich informiert, ihr die Verfahrensf\u00fchrung \u00fcberl\u00e4sst und angemessen mitwirkt. Die LumAIa kann nach ihrer Wahl die Plattform anpassen, ersetzen oder den betroffenen Vertragsbestandteil k\u00fcndigen und vorausbezahlte Geb\u00fchren pro rata zur\u00fcckerstatten.',
        ]},
        { title: '12. Datenschutz, Vertraulichkeit und Sicherheit', paragraphs: [
          '12.1 Die Bearbeitung von Personendaten richtet sich nach der Datenschutzerkl\u00e4rung und, soweit die LumAIa Personendaten im Auftrag des Kunden bearbeitet, nach dem Auftragsverarbeitungsvertrag (AVV/DPA). Der AVV ist integrierender Bestandteil dieses Vertrags und geht bei Widerspr\u00fcchen zu diesen AGB in datenschutzrechtlichen Fragen vor.',
          '12.2 Der Kunde ist f\u00fcr die Rechtm\u00e4ssigkeit der von ihm eingebrachten Personendaten verantwortlich, insbesondere f\u00fcr die erforderliche Rechtsgrundlage, die Information der betroffenen Personen und die Zul\u00e4ssigkeit der \u00dcbermittlung an die LumAIa.',
          '12.3 Beide Parteien behandeln vertrauliche Informationen der anderen Partei w\u00e4hrend der Vertragsdauer und zwei Jahre dar\u00fcber hinaus vertraulich, verwenden sie nur zur Vertragserf\u00fcllung und geben sie nur Mitarbeitenden und Beauftragten weiter, die sie zur Vertragserf\u00fcllung ben\u00f6tigen und einer gleichwertigen Vertraulichkeitspflicht unterliegen. Ausgenommen sind Informationen, die \u00f6ffentlich bekannt sind, unabh\u00e4ngig entwickelt wurden oder aufgrund von Gesetz oder beh\u00f6rdlicher Anordnung offenzulegen sind; im letzteren Fall informiert die offenlegende Partei die andere Partei soweit rechtlich zul\u00e4ssig vorab.',
          '12.4 Die LumAIa unterh\u00e4lt angemessene technische und organisatorische Massnahmen zum Schutz der Daten (Verschl\u00fcsselung in Transit und at Rest, Zugriffskontrolle, Protokollierung, Backups, Notfallplanung). Details sind im AVV bzw. in der Sicherheitsdokumentation beschrieben.',
          '12.5 Die LumAIa darf den Kunden nach vorheriger schriftlicher Zustimmung als Referenz nennen und dessen Logo daf\u00fcr verwenden. Die Zustimmung kann jederzeit f\u00fcr die Zukunft widerrufen werden.',
        ]},
        { title: '13. Laufzeit und Beendigung', paragraphs: [
          '13.1 Der Vertrag beginnt mit der Freischaltung des Zugangs und l\u00e4uft f\u00fcr die bei der Buchung gew\u00e4hlte Erstlaufzeit.',
          '13.2 Der Vertrag verl\u00e4ngert sich automatisch um jeweils eine weitere Laufzeit gleicher Dauer, sofern er nicht von einer Partei mit einer Frist von einem Monat (bei Monatsabonnements: 30 Tagen) auf das Ende der laufenden Laufzeit in Textform gek\u00fcndigt wird.',
          '13.3 Eine Reduktion von Modulen, Seats oder Brands wirkt fr\u00fchestens auf das Ende der laufenden Laufzeit. Eine Erh\u00f6hung ist jederzeit m\u00f6glich und wird pro rata verrechnet.',
          '13.4 Aus wichtigem Grund kann jede Partei den Vertrag mit sofortiger Wirkung k\u00fcndigen, insbesondere wenn (a) die andere Partei eine wesentliche Vertragspflicht trotz schriftlicher Mahnung und Fristansetzung von 15 Tagen nicht erf\u00fcllt, (b) \u00fcber die andere Partei ein Konkurs- oder Nachlassverfahren er\u00f6ffnet wird oder sie zahlungsunf\u00e4hig ist, (c) der Kunde schwerwiegend gegen Ziffer 3.2 oder Ziffer 6 verst\u00f6sst, oder (d) die Fortsetzung f\u00fcr die LumAIa aus rechtlichen Gr\u00fcnden unzul\u00e4ssig w\u00fcrde.',
          '13.5 Mit Beendigung des Vertrags erl\u00f6schen alle Nutzungsrechte des Kunden mit Ausnahme der Rechte an bereits bezogenen KI-Ausgaben gem\u00e4ss Ziffer 5.5. Nicht verbrauchte Credits verfallen ohne R\u00fcckverg\u00fctung.',
          '13.6 Datenexport und L\u00f6schung. Der Kunde kann seine Kundeninhalte w\u00e4hrend der Vertragsdauer und w\u00e4hrend 30 Tagen nach Vertragsende \u00fcber die Exportfunktionen der Plattform herunterladen. Danach werden Kundeninhalte innert 90 Tagen gel\u00f6scht, soweit keine gesetzliche Aufbewahrungspflicht besteht; Backups werden nach den ordentlichen Rotationszyklen \u00fcberschrieben. Ein individueller Exportsupport oder eine Migrationsunterst\u00fctzung kann nach Aufwand vereinbart werden.',
          '13.7 Ziffern 5.3 bis 5.8, 8 (f\u00fcr offene Forderungen), 11, 12.3, 13.5 bis 13.7 und 15 gelten \u00fcber das Vertragsende hinaus.',
        ]},
        { title: '14. \u00c4nderungen dieser AGB', paragraphs: [
          '14.1 Die LumAIa kann diese AGB anpassen, um \u00c4nderungen der Rechtslage, der eingesetzten Technologien oder des Leistungsangebots zu ber\u00fccksichtigen. Sie informiert den Kunden mindestens 30 Tage vor Inkrafttreten in Textform (z. B. per E-Mail oder Hinweis in der Plattform).',
          '14.2 Widerspricht der Kunde nicht bis zum Inkrafttreten in Textform, gelten die ge\u00e4nderten AGB als angenommen. Bei Widerspruch gelten die bisherigen AGB bis zum Ende der laufenden Laufzeit weiter; die LumAIa kann den Vertrag in diesem Fall auf das Ende der laufenden Laufzeit k\u00fcndigen. Auf diese Rechtsfolgen wird in der Mitteilung ausdr\u00fccklich hingewiesen.',
        ]},
        { title: '15. Schlussbestimmungen', paragraphs: [
          '15.1 H\u00f6here Gewalt. Keine Partei haftet f\u00fcr Nichterf\u00fcllung infolge von Ereignissen ausserhalb ihres zumutbaren Einflussbereichs (u. a. Naturereignisse, Krieg, Epidemien, Streik, beh\u00f6rdliche Massnahmen, fl\u00e4chendeckende Strom-, Netz- oder Cloud-Ausf\u00e4lle, Cyberangriffe grossen Ausmasses). Die Leistungspflichten ruhen f\u00fcr die Dauer des Ereignisses; dauert es l\u00e4nger als 60 Tage, kann jede Partei den betroffenen Vertragsbestandteil k\u00fcndigen.',
          '15.2 \u00dcbertragung. Der Kunde kann den Vertrag nur mit vorheriger schriftlicher Zustimmung der LumAIa \u00fcbertragen. Die LumAIa darf den Vertrag im Rahmen einer Umstrukturierung, Fusion oder \u00dcbertragung des betreffenden Gesch\u00e4ftsbereichs auf ein verbundenes Unternehmen oder einen Rechtsnachfolger \u00fcbertragen; sie informiert den Kunden dar\u00fcber.',
          '15.3 Kein Arbeits- oder Gesellschaftsverh\u00e4ltnis. Die Parteien sind unabh\u00e4ngige Vertragspartner. Es entsteht kein Arbeits-, Auftrags-, Gesellschafts- oder Vertretungsverh\u00e4ltnis \u00fcber den Vertragsgegenstand hinaus.',
          '15.4 Exportkontrolle und Sanktionen. Der Kunde best\u00e4tigt, dass er und seine Nutzer nicht auf einschl\u00e4gigen Sanktionslisten stehen und die Plattform nicht in Verletzung anwendbarer Export- oder Sanktionsvorschriften nutzen.',
          '15.5 Textform. Mitteilungen sind in Textform zu erstatten (E-Mail an die im Konto hinterlegten Adressen gen\u00fcgt), soweit nicht ausdr\u00fccklich Schriftlichkeit verlangt wird.',
          '15.6 Teilnichtigkeit. Sollten einzelne Bestimmungen unwirksam oder undurchsetzbar sein, bleibt der \u00fcbrige Vertrag g\u00fcltig. Die unwirksame Bestimmung wird durch eine wirksame ersetzt, die dem wirtschaftlichen Zweck am n\u00e4chsten kommt.',
          '15.7 Anwendbares Recht. Es gilt ausschliesslich schweizerisches materielles Recht unter Ausschluss der Kollisionsnormen und des \u00dcbereinkommens der Vereinten Nationen \u00fcber Vertr\u00e4ge \u00fcber den internationalen Warenkauf (CISG).',
          '15.8 Gerichtsstand. Ausschliesslicher Gerichtsstand f\u00fcr alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist Zug, Schweiz. Die LumAIa bleibt berechtigt, am Sitz des Kunden zu klagen. Die Parteien werden vor Einleitung eines Verfahrens w\u00e4hrend 30 Tagen eine g\u00fctliche Einigung auf F\u00fchrungsebene anstreben.',
        ]},
      ],
    },

    // ── Module Coming Soon ──
    moduleComingSoon: {
      status: 'In K\u00fcrze',
      backToOverview: 'Zur\u00fcck zur Plattform-\u00dcbersicht',
      intro: 'Dieses Modul befindet sich derzeit in der Entwicklung und wird in K\u00fcrze verf\u00fcgbar sein.',
      ctaTitle: 'Fr\u00fchen Zugang sichern?',
      ctaSub: 'Werden Sie Pilot-Partner und geh\u00f6ren Sie zu den Ersten, die dieses Modul nutzen.',
      cta: 'Demo buchen',
    },
  },
} as const
