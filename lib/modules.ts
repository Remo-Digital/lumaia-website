export interface Module {
  slug: string
  phase: 'plan' | 'build' | 'publish' | 'report-learn'
  status: 'live' | 'coming-soon'
  name: { de: string; en: string }
  description: { de: string; en: string }
  tag: { de: string; en: string }
  url: string
}

export const phases = {
  plan: { de: 'Plan', en: 'Plan', color: '#7be89f' },
  build: { de: 'Build', en: 'Build', color: '#4fc1a8' },
  publish: { de: 'Publish', en: 'Publish', color: '#0e9cb0' },
  'report-learn': { de: 'Report & Learn', en: 'Report & Learn', color: '#7c3aed' },
} as const

export const modules: Module[] = [
  // ── Plan Phase ──
  {
    slug: 'briefing-agent',
    phase: 'plan',
    status: 'coming-soon',
    name: { de: 'Briefing Agent', en: 'Briefing Agent' },
    description: {
      de: 'Eintrittspunkt der Wertschöpfungskette – validiertes, strukturiertes Briefing als Fundament jeder Kampagne.',
      en: 'Entry point of the value chain – validated, structured briefing as the foundation of every campaign.',
    },
    tag: { de: 'Briefing', en: 'Briefing' },
    url: '/plattform/plan/briefing-agent',
  },
  {
    slug: 'market-audience-intelligence',
    phase: 'plan',
    status: 'coming-soon',
    name: { de: 'Market & Audience Intelligence Agent', en: 'Market & Audience Intelligence Agent' },
    description: {
      de: 'Markt-, Wettbewerbs- und GEO/SEO-Analyse – datengetriebene Grundlage für jede Strategie.',
      en: 'Market, competitive, and GEO/SEO analysis – data-driven foundation for every strategy.',
    },
    tag: { de: 'Marktanalyse', en: 'Market Analysis' },
    url: '/plattform/plan/market-audience-intelligence',
  },
  {
    slug: 'persona-architect',
    phase: 'plan',
    status: 'coming-soon',
    name: { de: 'Persona Architect', en: 'Persona Architect' },
    description: {
      de: 'Datengetriebene Personas – präzise Zielgruppenprofile als Basis für Kommunikation und Kreation.',
      en: 'Data-driven personas – precise audience profiles as the basis for communication and creation.',
    },
    tag: { de: 'Personas', en: 'Personas' },
    url: '/plattform/plan/persona-architect',
  },
  {
    slug: 'media-strategy',
    phase: 'plan',
    status: 'coming-soon',
    name: { de: 'Media Strategy Agent', en: 'Media Strategy Agent' },
    description: {
      de: 'Kanal-Logik und Funnel-Design – die richtige Botschaft auf dem richtigen Kanal.',
      en: 'Channel logic and funnel design – the right message on the right channel.',
    },
    tag: { de: 'Strategie', en: 'Strategy' },
    url: '/plattform/plan/media-strategy',
  },
  {
    slug: 'media-planning',
    phase: 'plan',
    status: 'coming-soon',
    name: { de: 'Media Planning Agent', en: 'Media Planning Agent' },
    description: {
      de: 'Budgetierter Mediaplan – optimale Verteilung der Ressourcen über alle Kanäle.',
      en: 'Budgeted media plan – optimal distribution of resources across all channels.',
    },
    tag: { de: 'Mediaplanung', en: 'Media Planning' },
    url: '/plattform/plan/media-planning',
  },
  {
    slug: 'production-planning',
    phase: 'plan',
    status: 'coming-soon',
    name: { de: 'Production Planning Agent', en: 'Production Planning Agent' },
    description: {
      de: 'Produktionsbrief für die Build-Phase – strukturierte Übergabe von Strategie an Kreation.',
      en: 'Production brief for the Build phase – structured handover from strategy to creation.',
    },
    tag: { de: 'Produktion', en: 'Production' },
    url: '/plattform/plan/production-planning',
  },

  // ── Build Phase ──
  {
    slug: 'creative-concept',
    phase: 'build',
    status: 'coming-soon',
    name: { de: 'Creative Concept & Key Visual Agent', en: 'Creative Concept & Key Visual Agent' },
    description: {
      de: 'Leitidee und Key Visuals – kreative Konzepte, die Ihre Marke visuell zum Leben erwecken.',
      en: 'Core idea and key visuals – creative concepts that bring your brand to life visually.',
    },
    tag: { de: 'Kreation', en: 'Creative' },
    url: '/plattform/build/creative-concept',
  },
  {
    slug: 'media-asset-studio',
    phase: 'build',
    status: 'coming-soon',
    name: { de: 'Media Asset Studio', en: 'Media Asset Studio' },
    description: {
      de: 'Massenproduktion kanalfertiger Formate – hunderte Varianten in Minuten statt Wochen.',
      en: 'Mass production of channel-ready formats – hundreds of variants in minutes instead of weeks.',
    },
    tag: { de: 'Assets', en: 'Assets' },
    url: '/plattform/build/media-asset-studio',
  },
  {
    slug: 'landing-page-agent',
    phase: 'build',
    status: 'coming-soon',
    name: { de: 'Landing Page Agent', en: 'Landing Page Agent' },
    description: {
      de: 'Landingpages generieren und deployen – conversion-optimiert und brand-konsistent.',
      en: 'Generate and deploy landing pages – conversion-optimized and brand-consistent.',
    },
    tag: { de: 'Landingpages', en: 'Landing Pages' },
    url: '/plattform/build/landing-page-agent',
  },
  {
    slug: 'email-agent',
    phase: 'build',
    status: 'coming-soon',
    name: { de: 'Email Agent', en: 'Email Agent' },
    description: {
      de: 'Versandfertige E-Mails – personalisiert, getestet und bereit für den Versand.',
      en: 'Ready-to-send emails – personalized, tested, and ready to ship.',
    },
    tag: { de: 'E-Mail', en: 'Email' },
    url: '/plattform/build/email-agent',
  },
  {
    slug: 'content-copy-agent',
    phase: 'build',
    status: 'coming-soon',
    name: { de: 'Content & Copy Agent', en: 'Content & Copy Agent' },
    description: {
      de: 'Zentrale Copy-Engine – keyword-optimierte Texte in Ihrer Markensprache.',
      en: 'Central copy engine – keyword-optimized texts in your brand voice.',
    },
    tag: { de: 'Content', en: 'Content' },
    url: '/plattform/build/content-copy-agent',
  },
  {
    slug: 'product-asset-studio',
    phase: 'build',
    status: 'live',
    name: { de: 'Product Asset Studio', en: 'Product Asset Studio' },
    description: {
      de: 'KI-generierte Produktbilder mit Fidelity-Scoring und C2PA-Herkunftsnachweis – EU-AI-Act-konform.',
      en: 'AI-generated product images with Fidelity Scoring and C2PA provenance – EU AI Act compliant.',
    },
    tag: { de: 'Produktbilder', en: 'Product Images' },
    url: '/plattform/product-asset-studio',
  },

  // ── Publish Phase ──
  {
    slug: 'campaign-activation',
    phase: 'publish',
    status: 'coming-soon',
    name: { de: 'Campaign Activation Agent', en: 'Campaign Activation Agent' },
    description: {
      de: 'Kampagnen-Setup und -Launch über alle Kanäle – automatisiert und fehlerfrei.',
      en: 'Campaign setup and launch across all channels – automated and error-free.',
    },
    tag: { de: 'Aktivierung', en: 'Activation' },
    url: '/plattform/publish/campaign-activation',
  },
  {
    slug: 'autonomous-optimization',
    phase: 'publish',
    status: 'coming-soon',
    name: { de: 'Autonomous Optimization Agent', en: 'Autonomous Optimization Agent' },
    description: {
      de: 'Varianten-Testing und autonome Budget-Umschichtung – rund um die Uhr, ohne manuellen Eingriff.',
      en: 'Variant testing and autonomous budget reallocation – around the clock, without manual intervention.',
    },
    tag: { de: 'Optimierung', en: 'Optimization' },
    url: '/plattform/publish/autonomous-optimization',
  },
  {
    slug: 'campaign-health-monitor',
    phase: 'publish',
    status: 'coming-soon',
    name: { de: 'Campaign Health Monitor', en: 'Campaign Health Monitor' },
    description: {
      de: 'Fatigue- und Anomalie-Erkennung – Probleme erkennen, bevor sie Performance kosten.',
      en: 'Fatigue and anomaly detection – spot problems before they cost performance.',
    },
    tag: { de: 'Monitoring', en: 'Monitoring' },
    url: '/plattform/publish/campaign-health-monitor',
  },

  // ── Report & Learn Phase ──
  {
    slug: 'attribution-ai',
    phase: 'report-learn',
    status: 'coming-soon',
    name: { de: 'Attribution AI', en: 'Attribution AI' },
    description: {
      de: 'Touchpoint-Attribution – verstehen, welche Berührungspunkte wirklich konvertieren.',
      en: 'Touchpoint attribution – understand which touchpoints actually convert.',
    },
    tag: { de: 'Attribution', en: 'Attribution' },
    url: '/plattform/report-learn/attribution-ai',
  },
  {
    slug: 'executive-dashboard',
    phase: 'report-learn',
    status: 'coming-soon',
    name: { de: 'Executive Dashboard Agent', en: 'Executive Dashboard Agent' },
    description: {
      de: 'Management-Summaries – klare Reports ohne Zahlendschungel.',
      en: 'Management summaries – clear reports without the number soup.',
    },
    tag: { de: 'Dashboard', en: 'Dashboard' },
    url: '/plattform/report-learn/executive-dashboard',
  },
  {
    slug: 'learning-engine',
    phase: 'report-learn',
    status: 'coming-soon',
    name: { de: 'Learning Engine', en: 'Learning Engine' },
    description: {
      de: 'Flywheel – Lernsignal fliesst direkt zurück in Strategie und Produktion.',
      en: 'Flywheel – learning signal flows directly back into strategy and production.',
    },
    tag: { de: 'Lernen', en: 'Learning' },
    url: '/plattform/report-learn/learning-engine',
  },
  {
    slug: 'geo-visibility-monitor',
    phase: 'report-learn',
    status: 'coming-soon',
    name: { de: 'GEO Visibility & Performance Monitor', en: 'GEO Visibility & Performance Monitor' },
    description: {
      de: 'Sichtbarkeit in Antwort-Engines – messen, wie Ihre Marke in KI-Ergebnissen performt.',
      en: 'Visibility in answer engines – measure how your brand performs in AI results.',
    },
    tag: { de: 'GEO/AEO', en: 'GEO/AEO' },
    url: '/plattform/report-learn/geo-visibility-monitor',
  },
]

export function getModulesByPhase(phase: Module['phase']) {
  return modules.filter(m => m.phase === phase)
}

export function getModuleBySlug(slug: string) {
  return modules.find(m => m.slug === slug)
}
