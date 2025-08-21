import { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export type Language = 'en' | 'fr';

type Translations = Record<string, string>;

const en: Translations = {
  'app.brand.title': 'OSS Opportunities',
  'app.brand.subtitle': 'Sahara and Sahel Observatory',

  'nav.about': 'About Us',
  'nav.login': 'Login',
  'nav.logout': 'Logout',
  'nav.welcome': 'Welcome back,',
  'nav.dashboard': 'Dashboard',
  'nav.hr': 'HR Management',
  'nav.admin': 'Administration',

  'role.admin': 'Administrator',
  'role.rh': 'HR Manager',

  'footer.quickLinks': 'Quick Links',
  'footer.about': 'About OSS',
  'footer.currentOpportunities': 'Current Opportunities',
  'footer.applicationProcess': 'Application Process',
  'footer.contactUs': 'Contact Us',
  'footer.contactInformation': 'Contact Information',
  'footer.location': 'Tunis, Tunisia',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.accessibility': 'Accessibility',
  'footer.copyright': 'All rights reserved.',

  'home.hero.badge': 'Founded 1992 • Based in Tunis since 2000',
  'home.hero.cta': 'View Current Opportunities',
  'home.section.badge': 'Career Opportunities',
  'home.section.title': 'Current Opportunities',
  'home.section.subtitle': "Help us build a resilient and sustainable future for Africa's drylands.",

  'filters.title': 'Filter Opportunities',
  'filters.toggle.show': 'Show Filters',
  'filters.toggle.hide': 'Hide Filters',
  'filters.search': 'Search',
  'filters.search.placeholder': 'Search opportunities...',
  'filters.type': 'Type',
  'filters.type.all': 'All Types',
  'filters.country': 'Country',
  'filters.country.all': 'All Countries',
  'filters.department': 'Department',
  'filters.department.all': 'All Departments',
  'filters.status': 'Status',
  'filters.status.ongoing': 'Ongoing',
  'filters.status.closed': 'Closed',

  'label.reference': 'Reference',
  'label.country': 'Country',
  'label.department': 'Department',
  'label.project': 'Project',
  'label.deadline': 'Deadline',
  'label.documents': 'Documents',
  'label.description': 'Description',

  'offer.expired': 'Expired',
  'offer.closes': 'Closes:',
  'offer.learnMore': 'Learn More',
  'offer.downloadTdr': 'Download TDR (PDF)',
  'offer.downloadTdr.error': 'Failed to download TDR',

  'detail.backToHome': 'Back to Home',
  'detail.backToOpps': 'Back to Opportunities',
  'detail.details': 'Offer Details',
  'detail.notFound.title': 'Offer Not Found',
  'detail.notFound.text': "The offer you're looking for doesn't exist or has been removed.",

  'login.title': 'Login to OSS Platform',
  'login.email': 'Email Address',
  'login.password': 'Password',
  'login.cancel': 'Cancel',
  'login.submit': 'Sign In',
  'login.error.failed': 'Login failed',
  'login.error.network': 'Failed to connect to server',

  'apply.submit.title': 'Submit Application',
  'apply.submitted.title': 'Application Submitted!',
  'apply.submitted.text': 'Thank you for applying.',
  'apply.button': 'Apply Now',

  'about.badge': 'International Organization • African Vocation',
  'about.title': 'About the',
  'about.p1': 'The Sahara and Sahel Observatory (OSS) is an international organization with an African vocation, founded in 1992 and based in Tunis since 2000. It mainly works on creating and supporting partnerships to jointly address the challenges related to water resources management, as well as the implementation of international agreements on land degradation, biodiversity and climate change in Africa.',
  'about.p2': 'Today, the OSS has 28 African and 7 non-African member countries. In addition, the Organization collaborates with 12 entities representatives of West, East and North Africa, as well as several UN agencies and non-governmental Organizations.',
  'about.p3': 'Our mission is to help African member countries sustainably manage their natural resources, with focus on arid, semi-arid and dry sub-humid areas of Africa in a particularly disadvantageous climate change context.',
  'about.p4': 'OSS develops concepts and methodologies for environmental monitoring, natural resources management and climate change adaptation, based on our four scientific programs: Land, Water, Climate, and Biodiversity.',
  'about.mission.title': 'Our Mission',
  'about.mission.item1': 'Implementation of multilateral agreements on land degradation, biodiversity and climate change',
  'about.mission.item2': 'Promotion of regional and international initiatives addressing environmental challenges',
  'about.mission.item3': 'Alignment of approaches and unification of methodologies for sustainable land and water management',
  'about.impact.title': 'Our Impact',
  'about.impact.item1': 'Accredited by Green Climate Fund & Adaptation Fund',
  'about.impact.item2': '12+ regional partnerships across Africa',

  'rh.tabs.offers': 'Offers',
  'rh.tabs.applications': 'Applications',
  'rh.manage.title': 'Manage Offers',
  'rh.manage.subtitle': 'Create, edit, and manage your offers',
  'rh.createNew': 'Create New Offer',
  'rh.filter.offers': 'Filter Offers',
  'rh.filter.applications': 'Filter Applications',
  'rh.toggle.show': 'Show Filters',
  'rh.toggle.hide': 'Hide Filters',
  'rh.search': 'Search',
  'rh.search.offers.placeholder': 'Search offers...',
  'rh.search.applications.placeholder': 'Search applications...',
  'rh.type': 'Type',
  'rh.allTypes': 'All Types',
  'rh.country': 'Country',
  'rh.allCountries': 'All Countries',
  'rh.department': 'Department',
  'rh.allDepartments': 'All Departments',
  'rh.status': 'Status',
  'rh.clearAll': 'Clear All Filters',
  'rh.editOffer': 'Edit Offer',
  'rh.createOffer': 'Create New Offer',
  'rh.table.edit': 'Edit',
  'rh.table.delete': 'Delete',
  'rh.noOffers.title': 'No offers match your filters',
  'rh.noOffers.subtitle': 'Try adjusting your filter criteria or create a new offer',
  'rh.noApplications.title': 'No applications match your filters',
  'rh.noApplications.subtitle': 'Try adjusting your filter criteria or check back later for new applications.',
  'rh.viewDetails': 'View Details',
  'rh.modal.appFrom': 'Application from',
  'rh.modal.appliedFor': 'Applied for:',
  'rh.label.email': 'Email Address',
  'rh.label.phone': 'Phone Number',
  'rh.label.country': 'Country',
  'rh.label.offerType': 'Offer Type',
  'rh.documents.title': 'Application Documents',
  'rh.modal.close': 'Close',
  'rh.error.fetchOffers': 'Failed to fetch offers',
  'rh.error.fetchApplications': 'Failed to fetch applications',
  'rh.error.saveOffer': 'Failed to save offer',
  'rh.alert.fetchDocumentFail': 'Failed to download document',
  'rh.confirm.deleteOffer': 'Delete this offer?',
  'rh.confirm.deleteApplication': 'Delete this application?',
};

const fr: Translations = {
  'app.brand.title': 'OSS Opportunities',
  'app.brand.subtitle': 'Observatoire du Sahara et du Sahel',

  'nav.about': 'À propos',
  'nav.login': 'Se connecter',
  'nav.logout': 'Se déconnecter',
  'nav.welcome': 'Bon retour,',
  'nav.dashboard': 'Tableau de bord',
  'nav.hr': 'Gestion RH',
  'nav.admin': 'Administration',

  'role.admin': 'Administrateur',
  'role.rh': 'Responsable RH',

  'footer.quickLinks': 'Liens rapides',
  'footer.about': "À propos de l'OSS",
  'footer.currentOpportunities': 'Opportunités en cours',
  'footer.applicationProcess': 'Processus de candidature',
  'footer.contactUs': 'Contactez-nous',
  'footer.contactInformation': 'Coordonnées',
  'footer.location': 'Tunis, Tunisie',
  'footer.privacy': 'Politique de confidentialité',
  'footer.terms': "Conditions d’utilisation",
  'footer.accessibility': 'Accessibilité',
  'footer.copyright': 'Tous droits réservés.',

  'home.hero.badge': 'Fondée en 1992 • Basée à Tunis depuis 2000',
  'home.hero.cta': 'Voir les opportunités en cours',
  'home.section.badge': 'Opportunités de carrière',
  'home.section.title': 'Opportunités actuelles',
  'home.section.subtitle': "Aidez-nous à construire un avenir résilient et durable pour les zones arides d’Afrique.",

  'filters.title': 'Filtrer les opportunités',
  'filters.toggle.show': 'Afficher les filtres',
  'filters.toggle.hide': 'Masquer les filtres',
  'filters.search': 'Recherche',
  'filters.search.placeholder': 'Rechercher des opportunités…',
  'filters.type': 'Type',
  'filters.type.all': 'Tous les types',
  'filters.country': 'Pays',
  'filters.country.all': 'Tous les pays',
  'filters.department': 'Département',
  'filters.department.all': 'Tous les départements',
  'filters.status': 'Statut',
  'filters.status.ongoing': 'En cours',
  'filters.status.closed': 'Clôturé',

  'label.reference': 'Référence',
  'label.country': 'Pays',
  'label.department': 'Département',
  'label.project': 'Projet',
  'label.deadline': 'Date limite',
  'label.documents': 'Documents',
  'label.description': 'Description',

  'offer.expired': 'Expiré',
  'offer.closes': 'Clôture :',
  'offer.learnMore': 'En savoir plus',
  'offer.downloadTdr': 'Télécharger TDR (PDF)',
  'offer.downloadTdr.error': 'Échec du téléchargement du TDR',

  'detail.backToHome': "Retour à l’accueil",
  'detail.backToOpps': 'Retour aux opportunités',
  'detail.details': "Détails de l’offre",
  'detail.notFound.title': 'Offre introuvable',
  'detail.notFound.text': "L’offre que vous recherchez n’existe pas ou a été supprimée.",

  'login.title': "Se connecter à la plateforme OSS",
  'login.email': 'Adresse e-mail',
  'login.password': 'Mot de passe',
  'login.cancel': 'Annuler',
  'login.submit': 'Se connecter',
  'login.error.failed': 'Échec de la connexion',
  'login.error.network': 'Échec de la connexion au serveur',

  'apply.submit.title': 'Soumettre la candidature',
  'apply.submitted.title': 'Candidature envoyée !',
  'apply.submitted.text': 'Merci pour votre candidature.',
  'apply.button': 'Postuler maintenant',

  'about.badge': 'Organisation internationale • Vocation africaine',
  'about.title': "À propos de l'",
  'about.p1': "L’Observatoire du Sahara et du Sahel (OSS) est une organisation internationale à vocation africaine, créée en 1992 et basée à Tunis depuis 2000. Elle œuvre principalement à la création et à l’appui de partenariats pour faire face conjointement aux défis liés à la gestion des ressources en eau, ainsi qu’à la mise en œuvre des accords internationaux relatifs à la désertification, à la biodiversité et au changement climatique en Afrique.",
  'about.p2': "Aujourd’hui, l’OSS compte 28 pays africains et 7 pays non africains membres. Par ailleurs, l’Organisation collabore avec 12 entités représentatives de l’Afrique de l’Ouest, de l’Est et du Nord, ainsi qu’avec plusieurs agences onusiennes et organisations non gouvernementales.",
  'about.p3': "Notre mission est d’aider les pays membres africains à gérer durablement leurs ressources naturelles, en mettant l’accent sur les zones arides, semi-arides et subhumides sèches d’Afrique, dans un contexte de changement climatique particulièrement défavorable.",
  'about.p4': "L’OSS développe des concepts et des méthodologies pour le suivi environnemental, la gestion des ressources naturelles et l’adaptation au changement climatique, sur la base de nos quatre programmes scientifiques : Terre, Eau, Climat et Biodiversité.",
  'about.mission.title': 'Notre mission',
  'about.mission.item1': 'Mise en œuvre des accords multilatéraux sur la dégradation des terres, la biodiversité et le changement climatique',
  'about.mission.item2': 'Promotion des initiatives régionales et internationales face aux défis environnementaux',
  'about.mission.item3': 'Alignement des approches et harmonisation des méthodologies pour une gestion durable des terres et de l’eau',
  'about.impact.title': 'Notre impact',
  'about.impact.item1': 'Accréditée par le Fonds vert pour le climat et le Fonds d’adaptation',
  'about.impact.item2': '12+ partenariats régionaux à travers l’Afrique',

  'rh.tabs.offers': 'Offres',
  'rh.tabs.applications': 'Candidatures',
  'rh.manage.title': 'Gérer les offres',
  'rh.manage.subtitle': 'Créer, modifier et gérer vos offres',
  'rh.createNew': 'Créer une offre',
  'rh.filter.offers': 'Filtrer les offres',
  'rh.filter.applications': 'Filtrer les candidatures',
  'rh.toggle.show': 'Afficher les filtres',
  'rh.toggle.hide': 'Masquer les filtres',
  'rh.search': 'Recherche',
  'rh.search.offers.placeholder': 'Rechercher des offres…',
  'rh.search.applications.placeholder': 'Rechercher des candidatures…',
  'rh.type': 'Type',
  'rh.allTypes': 'Tous les types',
  'rh.country': 'Pays',
  'rh.allCountries': 'Tous les pays',
  'rh.department': 'Département',
  'rh.allDepartments': 'Tous les départements',
  'rh.status': 'Statut',
  'rh.clearAll': 'Effacer tous les filtres',
  'rh.editOffer': "Modifier l’offre",
  'rh.createOffer': 'Créer une offre',
  'rh.table.edit': 'Modifier',
  'rh.table.delete': 'Supprimer',
  'rh.noOffers.title': "Aucune offre ne correspond à vos filtres",
  'rh.noOffers.subtitle': 'Essayez d’ajuster vos critères de filtre ou créez une nouvelle offre',
  'rh.noApplications.title': 'Aucune candidature ne correspond à vos filtres',
  'rh.noApplications.subtitle': 'Essayez d’ajuster vos critères de filtre ou revenez plus tard pour de nouvelles candidatures.',
  'rh.viewDetails': 'Voir les détails',
  'rh.modal.appFrom': 'Candidature de',
  'rh.modal.appliedFor': 'Pour le poste :',
  'rh.label.email': 'Adresse e-mail',
  'rh.label.phone': 'Numéro de téléphone',
  'rh.label.country': 'Pays',
  'rh.label.offerType': "Type d’offre",
  'rh.documents.title': 'Documents de la candidature',
  'rh.modal.close': 'Fermer',
  'rh.error.fetchOffers': 'Échec du chargement des offres',
  'rh.error.fetchApplications': 'Échec du chargement des candidatures',
  'rh.error.saveOffer': "Échec de l’enregistrement de l’offre",
  'rh.alert.fetchDocumentFail': 'Échec du téléchargement du document',
  'rh.confirm.deleteOffer': 'Supprimer cette offre ?',
  'rh.confirm.deleteApplication': 'Supprimer cette candidature ?',
};

const dictionaries: Record<Language, Translations> = { en, fr };

type I18nContextValue = {
  lang: Language;
  t: (key: string) => string;
  currentLangPrefix: '' | '/en' | '/fr';
};

const I18nContext = createContext<I18nContextValue>({
  lang: 'en',
  t: (key: string) => en[key] || key,
  currentLangPrefix: '',
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const pathname = location.pathname || '/';
  const lang: Language = pathname.startsWith('/fr') ? 'fr' : pathname.startsWith('/en') ? 'en' : 'en';
  const currentLangPrefix: '' | '/en' | '/fr' = pathname.startsWith('/fr') ? '/fr' : pathname.startsWith('/en') ? '/en' : '';

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[lang];
    const t = (key: string) => dict[key] || dictionaries.en[key] || key;
    return { lang, t, currentLangPrefix };
  }, [lang, currentLangPrefix]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

