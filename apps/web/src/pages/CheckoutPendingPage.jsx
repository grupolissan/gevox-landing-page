import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const CheckoutPendingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Pagamento Pendente - Gevox</title>
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
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-amber-500" />
            
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-orange-500" />
            </div>

            <h1 className="text-3xl font-bold text-foreground mb-4">
              Falta pouco!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Recebemos seu pedido, mas o pagamento via PIX ainda está pendente de confirmação.
            </p>

            <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left space-y-4 border border-border/50">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Onde está meu PIX?
              </h3>
              <p className="text-sm text-muted-foreground">
                Enviamos um e-mail para você com o código Copia e Cola e o QR Code para pagamento.
              </p>
              <p className="text-sm text-muted-foreground">
                Assim que o banco confirmar o pagamento, sua conta será ativada automaticamente e você receberá as instruções de acesso ao painel do Gevox.
              </p>
            </div>

            <div className="flex justify-center">
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

export default CheckoutPendingPage;
