import { useEffect, useState } from 'react';
import { Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import HomePage from './pages/HomePage';
import OfferDetailPage from './pages/OfferDetailPage';
import AboutPage from './pages/AboutPage';
import RHDashboard from './pages/RHDashboard';
import AdminDashboard from './pages/AdminDashboard';
import type { Offer, User } from './types';
import { API_BASE_URL } from './config';
import { useI18n } from './i18n';

const LangLink = ({ to, className, children }: { to: string; className?: string; children: React.ReactNode }) => {
  const { currentLangPrefix } = useI18n();
  const isAbsolute = to.startsWith('http');
  const path = isAbsolute ? to : `${currentLangPrefix}${to === '/' ? '' : to}` || '/';
  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
};

const App = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [showLogin, setShowLogin] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const { t, currentLangPrefix } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/offers`);
        const data = await res.json();
        setOffers(data);
      } catch (err) {
        console.error('Failed to fetch offers:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        setUser({
          id: decoded.id,
          name: decoded.name,
          email: decoded.email,
          role: decoded.role,
        });
      } catch {
        localStorage.removeItem('token');
      }
    }
    
    fetchOffers();
  }, []);
  
  const handleLogin = (userData: User) => {
    setUser(userData);
    setShowLogin(false);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
  
  // kept for future use: ability to trigger ApplicationForm from Home
  // const handleApply = (offerId: number, offerType: string) => {
  //   setSelectedOfferId(offerId);
  //   setSelectedOfferType(offerType);
  //   setShowApplicationForm(true);
  // };

  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-12 w-12 border-t-2 border-yellow-500"></div>
      </div>
    );
  }
  
  return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
        <header className="bg-white shadow-sm border-b border-blue-100">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full py-4 flex items-center justify-between">
              <LangLink 
                to={user ? (user.role === 'rh' ? '/rh-dashboard' : '/admin-dashboard') : '/'} 
                className="flex items-center group transition-all duration-200 hover:scale-[1.01]"
              >
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-amber-400 flex items-center justify-center shadow-sm">
                    <span className="text-blue-900 font-bold text-lg">OSS</span>
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-2xl font-extrabold text-blue-900">
                    {t('app.brand.title')}
                  </span>
                  <p className="text-sm text-blue-700 font-medium">{t('app.brand.subtitle')}</p>
                </div>
              </LangLink>
              
              <div className="flex items-center space-x-4">
                <LangLink
                  to="/about"
                  className="hidden sm:inline-flex items-center px-4 py-2 text-blue-700 hover:text-blue-900 font-medium rounded-lg hover:underline underline-offset-4 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('nav.about')}
                </LangLink>
                
                {user ? (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 px-4 py-2 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="hidden sm:block">
                        <p className="text-sm font-medium text-blue-900">{t('nav.welcome')}</p>
                        <p className="text-sm text-blue-700 font-semibold">{user.name}</p>
                      </div>
                      <div className={`hidden sm:flex px-2 py-1 rounded-full text-xs font-medium ${
                        user.role === 'admin' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role === 'admin' ? t('role.admin') : t('role.rh')}
                      </div>
                    </div>
                    <button 
                      onClick={handleLogout} 
                      className="inline-flex items-center px-4 py-2 border border-blue-200 text-sm font-medium rounded-lg text-blue-800 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-0 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      {t('nav.logout')}
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowLogin(true)} 
                    className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg text-blue-900 bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-300 transition-colors duration-200 shadow-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7c1.13 0 2.08.402 2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('nav.login')}
                  </button>
                )}

                <button
                  onClick={() => {
                    const path = location.pathname;
                    if (path.startsWith('/fr')) {
                      const next = path.replace('/fr', '/en');
                      navigate(next || '/en');
                    } else if (path.startsWith('/en')) {
                      const next = path.replace('/en', '/fr');
                      navigate(next || '/fr');
                    } else {
                      navigate('/fr' + (path === '/' ? '' : path));
                    }
                  }}
                  className="inline-flex items-center px-3 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50"
                >
                  {currentLangPrefix === '/fr' ? 'FR' : currentLangPrefix === '/en' ? 'EN' : 'EN'}
                </button>
              </div>
            </div>
            
            <div className="sm:hidden border-t border-gray-100 py-2">
              <LangLink
                to="/about"
                className="flex items-center px-4 py-2 text-gray-700 hover:text-yellow-600 font-medium rounded-lg hover:bg-yellow-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('nav.about')}
              </LangLink>
            </div>
            
            {user && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-sm">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 6h6" />
                  </svg>
                  <span className="text-gray-500">{t('nav.dashboard')}</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700 font-medium capitalize">
                    {user.role === 'rh' ? t('nav.hr') : t('nav.admin')}
                  </span>
                </div>
              </div>
            )}
          </nav>
        </header>
        
        <main className="flex-1">
          <Routes>
            {/* English (default and /en) */}
            <Route path="/" element={user ? <Navigate to={user.role === 'rh' ? '/rh-dashboard' : '/admin-dashboard'} /> : <HomePage offers={offers} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/offer/:id" element={<OfferDetailPage />} />
            <Route path="/en" element={<HomePage offers={offers} />} />
            <Route path="/en/about" element={<AboutPage />} />
            <Route path="/en/offer/:id" element={<OfferDetailPage />} />
            {/* French */}
            <Route path="/fr" element={<HomePage offers={offers} />} />
            <Route path="/fr/about" element={<AboutPage />} />
            <Route path="/fr/offer/:id" element={<OfferDetailPage />} />
            {user?.role === 'rh' && <Route path="/rh-dashboard" element={<RHDashboard />} />}
            {user?.role === 'admin' && <Route path="/admin-dashboard" element={<AdminDashboard />} />}
            {user?.role === 'rh' && <Route path="/en/rh-dashboard" element={<RHDashboard />} />}
            {user?.role === 'rh' && <Route path="/fr/rh-dashboard" element={<RHDashboard />} />}
            {user?.role === 'admin' && <Route path="/en/admin-dashboard" element={<AdminDashboard />} />}
            {user?.role === 'admin' && <Route path="/fr/admin-dashboard" element={<AdminDashboard />} />}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        
        <footer className="border-t-4 border-amber-400 bg-blue-900 mt-16 text-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-xl bg-amber-400 flex items-center justify-center shadow">
                    <span className="text-blue-900 font-bold text-lg">OSS</span>
                  </div>
                  <span className="ml-3 text-lg font-bold text-white">{t('app.brand.title')}</span>
                </div>
                <p className="text-blue-200 leading-relaxed">
                  {t('app.brand.subtitle')} - Connecting talent with opportunities across North Africa.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.949 4.6 3.419-2.07 4.678-5.144 4.678-9.142 0-.185-.003-.37-.01-.552 2.179-1.397 4.768-2.348 4.768-2.348z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h3>
                <div className="space-y-2">
                  <LangLink to="/about" className="block text-blue-200 hover:text-white hover:underline underline-offset-4 transition-colors">{t('footer.about')}</LangLink>
                  <a href="#opportunities" className="block text-blue-200 hover:text-white hover:underline underline-offset-4 transition-colors">{t('footer.currentOpportunities')}</a>
                  <a href="#" className="block text-blue-200 hover:text-white hover:underline underline-offset-4 transition-colors">{t('footer.applicationProcess')}</a>
                  <a href="#" className="block text-blue-200 hover:text-white hover:underline underline-offset-4 transition-colors">{t('footer.contactUs')}</a>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">{t('footer.contactInformation')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-amber-300 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-blue-200 text-sm">{t('footer.location')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-amber-300 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-blue-200 text-sm">careers@oss.org.tn</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-blue-200 text-sm">
                  &copy; {new Date().getFullYear()} {t('app.brand.subtitle')}. {t('footer.copyright')}
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors hover:underline underline-offset-4">{t('footer.privacy')}</a>
                  <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors hover:underline underline-offset-4">{t('footer.terms')}</a>
                  <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors hover:underline underline-offset-4">{t('footer.accessibility')}</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      </div>
  );
};

export default App;