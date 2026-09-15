export interface Module {
  slug: string
  phase: 'plan' | 'build' | 'publish' | 'report-learn'
  status: 'live' | 'coming-soon'
  name: { 'de-ch': string; 'en-ch': string }
  description: { 'de-ch': string; 'en-ch': string }
  tag: { 'de-ch': string; 'en-ch': string }
  url: string
}

export const phases = {
  plan: { 'de-ch': 'Plan', 'en-ch': 'Plan', color: '#7be89f' },
  build: { 'de-ch': 'Build', 'en-ch': 'Build', color: '#4fc1a8' },
  publish: { 'de-ch': 'Publish', 'en-ch': 'Publish', color: '#0e9cb0' },
  'report-learn': { 'de-ch': 'Report & Learn', 'en-ch': 'Report & Learn', color: '#7c3aed' },
} as const

export const modules: Module[] = [
  // ── Plan Phase ──
  {
    slug: 'briefing-agent',
    phase: 'plan',
    status: 'coming-soon',
    name: { 'de-ch': 'Briefing Agent', 'en-ch': 'Briefing Agent' },
    description: {
      'de-ch': 'Eintrittspunkt der Wertschöpfungskette – validiertes, strukturiertes Briefing als Fundament jeder Kampagne.',
      'en-ch': 'Entry point of the value chain – validated, structured briefing as the foundation of every campaign.',
    },
    tag: { 'de-ch': 'Briefing', 'en-ch': 'Briefing' },
    url: '/plattform/plan/briefing-agent',
  },
  {
    slug: 'market-audience-intelligence',
    phase: 'plan',
    status: 'coming-soon',
    name: { 'de-ch': 'Market & Audience Intelligence Agent', 'en-ch': 'Market & Audience Intelligence Agent' },
    description: {
      'de-ch': 'Markt-, Wettbewerbs- und GEO/SEO-Analyse – datengetriebene Grundlage für jede Strategie.',
      'en-ch': 'Market, competitive, and GEO/SEO analysis – data-driven foundation for every strategy.',
    },
    tag: { 'de-ch': 'Marktanalyse', 'en-ch': 'Market Analysis' },
    url: '/plattform/plan/market-audience-intelligence',
  },
  {
    slug: 'persona-architect',
    phase: 'plan',
    status: 'coming-soon',
    name: { 'de-ch': 'Persona Architect', 'en-ch': 'Persona Architect' },
    description: {
      'de-ch': 'Datengetriebene Personas – präzise Zielgruppenprofile als Basis für Kommunikation und Kreation.',
      'en-ch': 'Data-driven personas – precise audience profiles as the basis for communication and creation.',
    },
    tag: { 'de-ch': 'Personas', 'en-ch': 'Personas' },
    url: '/plattform/plan/persona-architect',
  },
  {
    slug: 'media-strategy',
    phase: 'plan',
    status: 'coming-soon',
    name: { 'de-ch': 'Media Strategy Agent', 'en-ch': 'Media Strategy Agent' },
    description: {
      'de-ch': 'Kanal-Logik und Funnel-Design – die richtige Botschaft auf dem richtigen Kanal.',
      'en-ch': 'Channel logic and funnel design – the right message on the right channel.',
    },
    tag: { 'de-ch': 'Strategie', 'en-ch': 'Strategy' },
    url: '/plattform/plan/media-strategy',
  },
  {
    slug: 'media-planning',
    phase: 'plan',
    status: 'coming-soon',
    name: { 'de-ch': 'Media Planning Agent', 'en-ch': 'Media Planning Agent' },
    description: {
      'de-ch': 'Budgetierter Mediaplan – optimale Verteilung der Ressourcen über alle Kanäle.',
      'en-ch': 'Budgeted media plan – optimal distribution of resources across all channels.',
    },
    tag: { 'de-ch': 'Mediaplanung', 'en-ch': 'Media Planning' },
    url: '/plattform/plan/media-planning',
  },
  {
    slug: 'production-planning',
    phase: 'plan',
    status: 'coming-soon',
    name: { 'de-ch': 'Production Planning Agent', 'en-ch': 'Production Planning Agent' },
    description: {
      'de-ch': 'Produktionsbrief für die Build-Phase – strukturierte Übergabe von Strategie an Kreation.',
      'en-ch': 'Production brief for the Build phase – structured handover from strategy to creation.',
    },
    tag: { 'de-ch': 'Produktion', 'en-ch': 'Production' },
    url: '/plattform/plan/production-planning',
  },

  // ── Build Phase ──
  {
    slug: 'creative-concept',
    phase: 'build',
    status: 'coming-soon',
    name: { 'de-ch': 'Creative Concept & Key Visual Agent', 'en-ch': 'Creative Concept & Key Visual Agent' },
    description: {
      'de-ch': 'Leitidee und Key Visuals – kreative Konzepte, die Ihre Marke visuell zum Leben erwecken.',
      'en-ch': 'Core idea and key visuals – creative concepts that bring your brand to life visually.',
    },
    tag: { 'de-ch': 'Kreation', 'en-ch': 'Creative' },
    url: '/plattform/build/creative-concept',
  },
  {
    slug: 'media-asset-studio',
    phase: 'build',
    status: 'coming-soon',
    name: { 'de-ch': 'Media Asset Studio', 'en-ch': 'Media Asset Studio' },
    description: {
      'de-ch': 'Massenproduktion kanalfertiger Formate – hunderte Varianten in Minuten statt Wochen.',
      'en-ch': 'Mass production of channel-ready formats – hundreds of variants in minutes instead of weeks.',
    },
    tag: { 'de-ch': 'Assets', 'en-ch': 'Assets' },
    url: '/plattform/build/media-asset-studio',
  },
  {
    slug: 'landing-page-agent',
    phase: 'build',
    status: 'coming-soon',
    name: { 'de-ch': 'Landing Page Agent', 'en-ch': 'Landing Page Agent' },
    description: {
      'de-ch': 'Landingpages generieren und deployen – conversion-optimiert und brand-konsistent.',
      'en-ch': 'Generate and deploy landing pages – conversion-optimized and brand-consistent.',
    },
    tag: { 'de-ch': 'Landingpages', 'en-ch': 'Landing Pages' },
    url: '/plattform/build/landing-page-agent',
  },
  {
    slug: 'email-agent',
    phase: 'build',
    status: 'coming-soon',
    name: { 'de-ch': 'Email Agent', 'en-ch': 'Email Agent' },
    description: {
      'de-ch': 'Versandfertige E-Mails – personalisiert, getestet und bereit für den Versand.',
      'en-ch': 'Ready-to-send emails – personalized, tested, and ready to ship.',
    },
    tag: { 'de-ch': 'E-Mail', 'en-ch': 'Email' },
    url: '/plattform/build/email-agent',
  },
  {
    slug: 'content-copy-agent',
    phase: 'build',
    status: 'coming-soon',
    name: { 'de-ch': 'Content & Copy Agent', 'en-ch': 'Content & Copy Agent' },
    description: {
      'de-ch': 'Zentrale Copy-Engine – keyword-optimierte Texte in Ihrer Markensprache.',
      'en-ch': 'Central copy engine – keyword-optimized texts in your brand voice.',
    },
    tag: { 'de-ch': 'Content', 'en-ch': 'Content' },
    url: '/plattform/build/content-copy-agent',
  },
  {
    slug: 'product-asset-studio',
    phase: 'build',
    status: 'live',
    name: { 'de-ch': 'Product Asset Studio', 'en-ch': 'Product Asset Studio' },
    description: {
      'de-ch': 'KI-generierte Produktbilder mit Fidelity-Scoring und C2PA-Herkunftsnachweis – EU-AI-Act-konform.',
      'en-ch': 'AI-generated product images with Fidelity Scoring and C2PA provenance – EU AI Act compliant.',
    },
    tag: { 'de-ch': 'Produktbilder', 'en-ch': 'Product Images' },
    url: '/plattform/product-asset-studio',
  },

  // ── Publish Phase ──
  {
    slug: 'campaign-activation',
    phase: 'publish',
    status: 'coming-soon',
    name: { 'de-ch': 'Campaign Activation Agent', 'en-ch': 'Campaign Activation Agent' },
    description: {
      'de-ch': 'Kampagnen-Setup und -Launch über alle Kanäle – automatisiert und fehlerfrei.',
      'en-ch': 'Campaign setup and launch across all channels – automated and error-free.',
    },
    tag: { 'de-ch': 'Aktivierung', 'en-ch': 'Activation' },
    url: '/plattform/publish/campaign-activation',
  },
  {
    slug: 'autonomous-optimization',
    phase: 'publish',
    status: 'coming-soon',
    name: { 'de-ch': 'Autonomous Optimization Agent', 'en-ch': 'Autonomous Optimization Agent' },
    description: {
      'de-ch': 'Varianten-Testing und autonome Budget-Umschichtung – rund um die Uhr, ohne manuellen Eingriff.',
      'en-ch': 'Variant testing and autonomous budget reallocation – around the clock, without manual intervention.',
    },
    tag: { 'de-ch': 'Optimierung', 'en-ch': 'Optimization' },
    url: '/plattform/publish/autonomous-optimization',
  },
  {
    slug: 'campaign-health-monitor',
    phase: 'publish',
    status: 'coming-soon',
    name: { 'de-ch': 'Campaign Health Monitor', 'en-ch': 'Campaign Health Monitor' },
    description: {
      'de-ch': 'Fatigue- und Anomalie-Erkennung – Probleme erkennen, bevor sie Performance kosten.',
      'en-ch': 'Fatigue and anomaly detection – spot problems before they cost performance.',
    },
    tag: { 'de-ch': 'Monitoring', 'en-ch': 'Monitoring' },
    url: '/plattform/publish/campaign-health-monitor',
  },

  // ── Report & Learn Phase ──
  {
    slug: 'attribution-ai',
    phase: 'report-learn',
    status: 'coming-soon',
    name: { 'de-ch': 'Attribution AI', 'en-ch': 'Attribution AI' },
    description: {
      'de-ch': 'Touchpoint-Attribution – verstehen, welche Berührungspunkte wirklich konvertieren.',
      'en-ch': 'Touchpoint attribution – understand which touchpoints actually convert.',
    },
    tag: { 'de-ch': 'Attribution', 'en-ch': 'Attribution' },
    url: '/plattform/report-learn/attribution-ai',
  },
  {
    slug: 'executive-dashboard',
    phase: 'report-learn',
    status: 'coming-soon',
    name: { 'de-ch': 'Executive Dashboard Agent', 'en-ch': 'Executive Dashboard Agent' },
    description: {
      'de-ch': 'Management-Summaries – klare Reports ohne Zahlendschungel.',
      'en-ch': 'Management summaries – clear reports without the number soup.',
    },
    tag: { 'de-ch': 'Dashboard', 'en-ch': 'Dashboard' },
    url: '/plattform/report-learn/executive-dashboard',
  },
  {
    slug: 'learning-engine',
    phase: 'report-learn',
    status: 'coming-soon',
    name: { 'de-ch': 'Learning Engine', 'en-ch': 'Learning Engine' },
    description: {
      'de-ch': 'Flywheel – Lernsignal fliesst direkt zurück in Strategie und Produktion.',
      'en-ch': 'Flywheel – learning signal flows directly back into strategy and production.',
    },
    tag: { 'de-ch': 'Lernen', 'en-ch': 'Learning' },
    url: '/plattform/report-learn/learning-engine',
  },
  {
    slug: 'geo-visibility-monitor',
    phase: 'report-learn',
    status: 'coming-soon',
    name: { 'de-ch': 'GEO Visibility & Performance Monitor', 'en-ch': 'GEO Visibility & Performance Monitor' },
    description: {
      'de-ch': 'Sichtbarkeit in Antwort-Engines – messen, wie Ihre Marke in KI-Ergebnissen performt.',
      'en-ch': 'Visibility in answer engines – measure how your brand performs in AI results.',
    },
    tag: { 'de-ch': 'GEO/AEO', 'en-ch': 'GEO/AEO' },
    url: '/plattform/report-learn/geo-visibility-monitor',
  },
]

export function getModulesByPhase(phase: Module['phase']) {
  return modules.filter(m => m.phase === phase)
}

export function getModuleBySlug(slug: string) {
  return modules.find(m => m.slug === slug)
}
