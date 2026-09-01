export type Locale = 'en' | 'de'

export const translations = {
  en: {
    // ── Navigation ──
    nav: {
      cta: 'Book Demo',
      lang: 'DE',
      agentic: 'Agentic Commerce',
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
      sub: 'LumAIa unifies strategy, production, and campaign optimization in one system. Not a stack of tools, not a traditional agency – an infrastructure that translates the expertise of a top agency into software. The result: 10\u00d7 faster campaigns, 70% lower costs, 100% brand safety.',
      cta_primary: 'Book a demo',
      cta_secondary: 'Explore the modules',
      microcopy: 'No credit card. Free demo session. Reply within 48 hours.',
      stats: [
        { value: '90%', label: 'Time Saved' },
        { value: '10\u00d7', label: 'ROI Increase' },
        { value: '70%', label: 'Cost Reduction' },
        { value: '48h', label: 'Brief to Launch' },
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
      copyright: '\u00a9 2026 LumAIa by iundf Dewave AG',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Imprint', href: '/imprint' },
        { label: 'Terms', href: '/legal/terms' },
        { label: 'Contact', href: '/contact' },
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
      title: 'Privacy',
      title_em: 'Policy',
      last_updated: 'Last updated: March 2026',
    },

    // ── Imprint Page ──
    imprint: {
      label: 'Imprint',
      title: 'Legal',
      title_em: 'Notice',
      company: 'iundf Dewave AG',
      address: 'Switzerland',
      email: 'hello@lumaia.ai',
      vat: 'VAT ID',
      register: 'Commercial Register',
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
            { value: '95%', label: 'time saved compared to a traditional shoot' },
            { value: '10\u00d7', label: 'ROI increase through scalable content' },
            { value: '70%', label: 'cost reduction per product image set' },
            { value: '100%', label: 'brand safety through the Campaign Engineer Gate' },
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
      meta_title: 'Terms of Service \u2013 LumAIa',
      meta_desc: 'Terms of service for LumAIa by iundf Dewave AG.',
      label: 'Legal',
      title: 'Terms of',
      title_em: 'Service',
      comingSoon: 'Terms of service are being prepared and will be published shortly.',
      contactCta: 'Contact',
      privacyCta: 'Privacy',
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

  de: {
    // ── Navigation ──
    nav: {
      cta: 'Demo buchen',
      lang: 'EN',
      agentic: 'Agentic Commerce',
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
      sub: 'LumAIa vereint Strategie, Produktion und Kampagnen-Optimierung im Marketing in einem System. Keine Tool-Sammlung, keine klassische Agentur \u2013 eine Infrastruktur, die die Erfahrung einer Top-Agentur in Software \u00fcbersetzt. Das Ergebnis: 10\u00d7 schnellere Kampagnen, 70% tiefere Kosten, 100% Markensicherheit.',
      cta_primary: 'Demo buchen',
      cta_secondary: 'Module entdecken',
      microcopy: 'Keine Kreditkarte. Kostenlose Demo-Session. Antwort innert 48 Stunden.',
      stats: [
        { value: '90%', label: 'Zeitersparnis' },
        { value: '10\u00d7', label: 'ROI-Steigerung' },
        { value: '70%', label: 'Kostenreduktion' },
        { value: '48h', label: 'Briefing bis Launch' },
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
      copyright: '\u00a9 2026 LumAIa by iundf Dewave AG',
      links: [
        { label: 'Datenschutz', href: '/privacy' },
        { label: 'Impressum', href: '/imprint' },
        { label: 'AGB', href: '/legal/terms' },
        { label: 'Kontakt', href: '/contact' },
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
      title: 'Daten',
      title_em: 'schutz',
      last_updated: 'Zuletzt aktualisiert: M\u00e4rz 2026',
    },

    // ── Imprint Page ──
    imprint: {
      label: 'Impressum',
      title: 'Impressum',
      title_em: '',
      company: 'iundf Dewave AG',
      address: 'Schweiz',
      email: 'hello@lumaia.ai',
      vat: 'MwSt-Nummer',
      register: 'Handelsregister',
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
            { value: '95%', label: 'Zeitersparnis gegen\u00fcber klassischem Shooting' },
            { value: '10\u00d7', label: 'ROI-Steigerung durch skalierbaren Content' },
            { value: '70%', label: 'Kostensenkung pro Produktbild-Set' },
            { value: '100%', label: 'Brand Safety durch den Campaign Engineer Gate' },
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
      meta_desc: 'Allgemeine Gesch\u00e4ftsbedingungen f\u00fcr LumAIa von iundf Dewave AG.',
      label: 'Rechtliches',
      title: 'Allgemeine',
      title_em: 'Gesch\u00e4ftsbedingungen',
      comingSoon: 'Die AGB werden derzeit erstellt und in K\u00fcrze ver\u00f6ffentlicht.',
      contactCta: 'Kontakt',
      privacyCta: 'Datenschutz',
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
