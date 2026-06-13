import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const CheckoutSuccessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Pagamento Confirmado - Gevox</title>
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow flex items-center justify-center py-20 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl w-full bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary" />
            
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold text-foreground mb-4">
              Bem-vindo ao Gevox!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Seu pagamento foi confirmado com sucesso. Sua loja acaba de ganhar a melhor assistente virtual do mercado.
            </p>

            <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left space-y-4 border border-border/50">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Próximos passos
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="font-bold text-foreground">1.</span>
                  Enviamos um e-mail com as instruções de primeiro acesso. Verifique sua caixa de entrada (e o spam).
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-foreground">2.</span>
                  Acesse o painel do lojista utilizando o e-mail e a senha cadastrados.
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-foreground">3.</span>
                  Siga o passo a passo no painel para conectar o seu WhatsApp ao Gevox via QR Code.
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
                <a href="https://app.gevox.com.br/login" target="_blank" rel="noopener noreferrer">
                  Acessar Painel Lojista
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/">
                  Voltar para o site
                </Link>
              </Button>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CheckoutSuccessPage;
