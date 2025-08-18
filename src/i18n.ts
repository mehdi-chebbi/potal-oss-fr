import type { Lang } from './utils/lang';

type Dict = Record<string, string>;

const en: Dict = {
  // Navbar
  'nav.about': 'About Us',
  'nav.login': 'Login',
  'nav.logout': 'Logout',
  'nav.dashboard.rh': 'HR Management',
  'nav.dashboard.admin': 'Administration',
  'nav.switch.to_en': 'English',
  'nav.switch.to_fr': 'Français',

  // Home hero
  'home.hero.badge': 'Founded 1992 • Based in Tunis since 2000',
  'home.hero.title1': 'Sahara and Sahel',
  'home.hero.title2': 'Observatory',
  'home.hero.subtitle': "Creating partnerships to address water resources management and implement international agreements on land degradation, biodiversity and climate change in Africa.",
  'home.hero.cta': 'View Current Opportunities',

  // Home list
  'home.section.badge': 'Career Opportunities',
  'home.section.title': 'Current Opportunities',
  'home.section.subtitle': "Help us build a resilient and sustainable future for Africa's drylands.",
  'home.filters.title': 'Filter Opportunities',
  'home.filters.toggle.show': 'Show Filters',
  'home.filters.toggle.hide': 'Hide Filters',
  'home.filters.search.label': 'Search',
  'home.filters.search.placeholder': 'Search opportunities...',
  'home.filters.type.label': 'Type',
  'home.filters.type.all': 'All Types',
  'home.filters.country.label': 'Country',
  'home.filters.country.all': 'All Countries',
  'home.filters.department.label': 'Department',
  'home.filters.department.all': 'All Departments',
  'home.filters.status.label': 'Status',
  'home.filters.status.ongoing': 'Ongoing',
  'home.filters.status.closed': 'Closed',
  'home.filters.clearAll': 'Clear All Filters',
  'home.filters.active.search': 'Search',
  'home.filters.active.type': 'Type',
  'home.filters.active.country': 'Country',
  'home.filters.active.department': 'Department',
  'home.filters.active.status': 'Status',
  'home.showing': 'Showing',
  'home.of': 'of',
  'home.opportunities': 'opportunities',
  'home.noresults.title': 'No opportunities match your filters',
  'home.noresults.subtitle': 'Try adjusting your filter criteria or check back later for new opportunities',
  'home.noresults.clear': 'Clear Filters',
  'home.cta.badge': 'Join the Movement',
  'home.cta.title': 'Be Part of the Change',
  'home.cta.subtitle': 'Work with a pan-African organization at the forefront of climate resilience and sustainable development.',
  'home.cta.explore': 'Explore Open Positions',

  // About
  'about.badge': 'International Organization • African Vocation',
  'about.title': 'About the OSS',
  'about.p1': 'The Sahara and Sahel Observatory (OSS) is an international organization with an African vocation, founded in 1992 and based in Tunis since 2000. It mainly works on creating and supporting partnerships to jointly address the challenges related to water resources management, as well as the implementation of international agreements on land degradation, biodiversity and climate change in Africa.',
  'about.p2': 'Today, the OSS has 28 African and 7 non-African member countries. In addition, the Organization collaborates with 12 entities representatives of West, East and North Africa, as well as several UN agencies and non-governmental Organizations.',
  'about.p3': 'Our mission is to help African member countries sustainably manage their natural resources, with focus on arid, semi-arid and dry sub-humid areas of Africa in a particularly disadvantageous climate change context.',
  'about.p4': 'OSS develops concepts and methodologies for environmental monitoring, natural resources management and climate change adaptation, based on our four scientific programs: Land, Water, Climate, and Biodiversity.',
  'about.card1.title': 'Our Mission',
  'about.card1.item1': 'Implementation of multilateral agreements on land degradation, biodiversity and climate change',
  'about.card1.item2': 'Promotion of regional and international initiatives addressing environmental challenges',
  'about.card1.item3': 'Alignment of approaches and unification of methodologies for sustainable land and water management',
  'about.card2.title': 'Our Impact',
  'about.card2.item1': 'Accredited by Green Climate Fund & Adaptation Fund',
  'about.card2.item2': '12+ regional partnerships across Africa',

  // OfferCard
  'offer.expires': 'Closes:',
  'offer.expired': 'Expired',
  'offer.reference': 'Reference',
  'offer.country': 'Country',
  'offer.department': 'Department',
  'offer.project': 'Project',
  'offer.learnMore': 'Learn More',
  'offer.downloadTdr': 'Download TDR (PDF)'
};

const fr: Dict = {
  // Navbar
  'nav.about': 'À propos',
  'nav.login': 'Se connecter',
  'nav.logout': 'Se déconnecter',
  'nav.dashboard.rh': 'Gestion RH',
  'nav.dashboard.admin': 'Administration',
  'nav.switch.to_en': 'English',
  'nav.switch.to_fr': 'Français',

  // Home hero
  'home.hero.badge': 'Fondé en 1992 • Basé à Tunis depuis 2000',
  'home.hero.title1': 'Observatoire du Sahara et du Sahel',
  'home.hero.title2': '',
  'home.hero.subtitle': "Créer des partenariats pour gérer les ressources en eau et mettre en œuvre les accords internationaux sur la dégradation des terres, la biodiversité et le changement climatique en Afrique.",
  'home.hero.cta': 'Voir les opportunités actuelles',

  // Home list
  'home.section.badge': 'Opportunités de carrière',
  'home.section.title': 'Opportunités en cours',
  'home.section.subtitle': "Aidez-nous à construire un avenir résilient et durable pour les zones sèches d'Afrique.",
  'home.filters.title': 'Filtrer les opportunités',
  'home.filters.toggle.show': 'Afficher les filtres',
  'home.filters.toggle.hide': 'Masquer les filtres',
  'home.filters.search.label': 'Recherche',
  'home.filters.search.placeholder': 'Rechercher des opportunités...',
  'home.filters.type.label': 'Type',
  'home.filters.type.all': 'Tous les types',
  'home.filters.country.label': 'Pays',
  'home.filters.country.all': 'Tous les pays',
  'home.filters.department.label': 'Département',
  'home.filters.department.all': 'Tous les départements',
  'home.filters.status.label': 'Statut',
  'home.filters.status.ongoing': 'En cours',
  'home.filters.status.closed': 'Clôturé',
  'home.filters.clearAll': 'Effacer tous les filtres',
  'home.filters.active.search': 'Recherche',
  'home.filters.active.type': 'Type',
  'home.filters.active.country': 'Pays',
  'home.filters.active.department': 'Département',
  'home.filters.active.status': 'Statut',
  'home.showing': 'Affichage',
  'home.of': 'sur',
  'home.opportunities': 'opportunités',
  'home.noresults.title': 'Aucune opportunité ne correspond à vos filtres',
  'home.noresults.subtitle': 'Essayez d’ajuster vos critères de filtre ou revenez plus tard',
  'home.noresults.clear': 'Effacer les filtres',
  'home.cta.badge': 'Rejoignez le mouvement',
  'home.cta.title': 'Faites partie du changement',
  'home.cta.subtitle': "Travaillez avec une organisation panafricaine à l'avant-garde de la résilience climatique et du développement durable.",
  'home.cta.explore': 'Explorer les offres',

  // About
  'about.badge': 'Organisation internationale • Vocation africaine',
  'about.title': "À propos de l'OSS",
  'about.p1': "L'Observatoire du Sahara et du Sahel (OSS) est une organisation internationale à vocation africaine, fondée en 1992 et basée à Tunis depuis 2000. Elle œuvre principalement à la création et à l'appui de partenariats pour relever conjointement les défis liés à la gestion des ressources en eau, ainsi qu'à la mise en œuvre des accords internationaux sur la dégradation des terres, la biodiversité et le changement climatique en Afrique.",
  'about.p2': "Aujourd'hui, l'OSS compte 28 pays africains et 7 non africains membres. En outre, l'Organisation collabore avec 12 entités représentant l'Afrique de l'Ouest, de l'Est et du Nord, ainsi qu'avec plusieurs agences onusiennes et des organisations non gouvernementales.",
  'about.p3': "Notre mission est d'aider les pays membres africains à gérer durablement leurs ressources naturelles, en mettant l'accent sur les zones arides, semi-arides et subhumides sèches d'Afrique, dans un contexte de changement climatique particulièrement défavorable.",
  'about.p4': "L'OSS développe des concepts et des méthodologies pour le suivi environnemental, la gestion des ressources naturelles et l'adaptation au changement climatique, basés sur nos quatre programmes scientifiques : Terre, Eau, Climat et Biodiversité.",
  'about.card1.title': 'Notre mission',
  'about.card1.item1': 'Mise en œuvre des accords multilatéraux sur la dégradation des terres, la biodiversité et le changement climatique',
  'about.card1.item2': "Promotion d'initiatives régionales et internationales face aux défis environnementaux",
  'about.card1.item3': "Alignement des approches et unification des méthodologies pour la gestion durable des terres et de l'eau",
  'about.card2.title': 'Notre impact',
  'about.card2.item1': 'Accrédité par le Fonds vert pour le climat et le Fonds d’adaptation',
  'about.card2.item2': '12+ partenariats régionaux en Afrique',

  // OfferCard
  'offer.expires': 'Clôture :',
  'offer.expired': 'Expirée',
  'offer.reference': 'Référence',
  'offer.country': 'Pays',
  'offer.department': 'Département',
  'offer.project': 'Projet',
  'offer.learnMore': 'En savoir plus',
  'offer.downloadTdr': 'Télécharger TDR (PDF)'
};

const dicts: Record<Lang, Dict> = { en, fr };

export const t = (lang: Lang, key: string): string => {
  const d = dicts[lang] ?? en;
  return d[key] ?? key;
};

