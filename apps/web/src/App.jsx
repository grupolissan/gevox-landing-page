import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('./pages/TermsOfUsePage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const CheckoutSuccessPage = lazy(() => import('./pages/CheckoutSuccessPage'));
const CheckoutPendingPage = lazy(() => import('./pages/CheckoutPendingPage'));
import CookieConsent from './components/CookieConsent';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
          <Route path="/checkout/sucesso" element={<CheckoutSuccessPage />} />
          <Route path="/checkout/pendente" element={<CheckoutPendingPage />} />
          <Route path="/checkout/:planId" element={<CheckoutPage />} />
        </Routes>
      </Suspense>
      <CookieConsent />
      <Toaster />
    </Router>
  );
}

export default App;