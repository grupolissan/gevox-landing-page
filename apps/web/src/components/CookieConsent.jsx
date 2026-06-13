import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gevox_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gevox_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('gevox_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-5xl mx-auto bg-background border border-border shadow-2xl rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full hidden md:block">
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">Sua privacidade é importante</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies essenciais para o funcionamento do site. Também gostaríamos de usar cookies não essenciais para entender como você interage com a página e melhorar sua experiência. 
                Ao clicar em "Aceitar", você concorda com o uso desses cookies. Para mais detalhes, consulte nossa <Link to="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <Button 
                variant="outline" 
                onClick={handleReject}
                className="w-full sm:w-auto"
              >
                Rejeitar Não Essenciais
              </Button>
              <Button 
                onClick={handleAccept}
                className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90"
              >
                Aceitar Todos
              </Button>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
