import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, TrendingDown, TrendingUp, Zap, Shield, DollarSign } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import HowItWorksStep from '@/components/HowItWorksStep.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import PricingSection from '@/components/PricingSection.jsx';
import SocialProofSection from '@/components/SocialProofSection.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import GevoxLogo from '@/components/icons/GevoxLogo.jsx';
import WaveIcon from '@/components/icons/WaveIcon.jsx';
import CheckIcon from '@/components/icons/CheckIcon.jsx';
import StockIcon from '@/components/icons/StockIcon.jsx';
import CreditIcon from '@/components/icons/CreditIcon.jsx';
import ScheduleIcon from '@/components/icons/ScheduleIcon.jsx';
import InvoiceIcon from '@/components/icons/InvoiceIcon.jsx';

const HomePage = () => {
  const features = [
    {
      icon: StockIcon,
      title: 'Gestão de Estoque',
      description: 'Diga adeus ao caderno. Consulte e atualize seu estoque instantaneamente como se conversasse com um gerente.',
      benefits: [
        'Atualização pelo WhatsApp',
        'Fim da contagem manual',
        'Saiba exatamente o que tem'
      ]
    },
    {
      icon: CreditIcon,
      title: 'Controle de Fiado',
      description: 'Nunca mais perca dinheiro por esquecer de cobrar. Registre quem deve direto no chat e deixe a cobrança mais simples.',
      benefits: [
        'Registro no ato da venda',
        'Consulta rápida de saldo',
        'Fim da vergonha na hora de cobrar'
      ]
    },
    {
      icon: ScheduleIcon,
      title: 'Agenda e Agendamentos',
      description: 'Organize compromissos pelo WhatsApp. Seus clientes ou você podem marcar horários sem complicação.',
      benefits: [
        'Agendamento automático',
        'Redução de faltas',
        'Tudo via WhatsApp'
      ]
    },
    {
      icon: InvoiceIcon,
      title: 'Atendimento Automático',
      description: 'Sua loja responde clientes 24h por dia. Tire dúvidas de produtos e evite perder vendas enquanto dorme.',
      benefits: [
        'Resposta imediata 24/7',
        'Reserva inteligente de produtos',
        'Cliente não vai para o concorrente'
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Economia de Tempo',
      description: 'Reduza em até 73% o tempo gasto em tarefas administrativas diárias.'
    },
    {
      icon: TrendingDown,
      title: 'Redução de Erros',
      description: 'Diminua erros de digitação e registro em até 89% com comandos de voz precisos.'
    },
    {
      icon: TrendingUp,
      title: 'Aumento de Produtividade',
      description: 'Aumente sua produtividade em até 54% com gestão ágil e intuitiva.'
    },
    {
      icon: Zap,
      title: 'Disponibilidade 24/7',
      description: 'Acesse e gerencie seu negócio a qualquer hora, de qualquer lugar.'
    },
    {
      icon: Shield,
      title: 'Facilidade de Uso',
      description: 'Interface intuitiva que não requer treinamento técnico. Basta falar.'
    },
    {
      icon: DollarSign,
      title: 'Custo-Benefício',
      description: 'Solução acessível que se paga rapidamente com ganhos de eficiência.'
    }
  ];

  const howItWorksSteps = [
    {
      icon: WaveIcon,
      title: 'Você Fala ou Digita',
      description: 'Mande um áudio ou texto pelo WhatsApp, como se conversasse com um gerente de confiança.'
    },
    {
      icon: GevoxLogo,
      title: 'Gevox Processa',
      description: 'Nossa Inteligência Artificial entende seu pedido, seja registrar uma venda fiada ou atualizar o estoque.'
    },
    {
      icon: CheckIcon,
      title: 'Problema Resolvido',
      description: 'Receba a confirmação em segundos e volte a focar no crescimento da sua loja.'
    }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Gevox - Organize sua loja pelo WhatsApp</title>
        <meta
          name="description"
          content="O Gevox assume seu atendimento, controla seu estoque e registra suas vendas enquanto você foca no que importa."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.webp"
              alt="Empreendedor brasileiro usando smartphone"
              className="w-full h-full object-cover"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/85 via-[#0a0a0a]/75 to-accent/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <GevoxLogo className="w-24 h-24 mx-auto" animated />
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Organize sua loja pelo WhatsApp<br />e pare de perder vendas e fiados.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                O Gevox assume seu atendimento, controla seu estoque e registra suas vendas enquanto você foca no que importa: o crescimento do seu negócio.
              </p>

              <div className="flex flex-col items-center gap-6 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 transition-all duration-200 active:scale-[0.98] shadow-lg hover:shadow-xl"
                >
                  <a href="#planos" onClick={(e) => scrollToSection(e, '#planos')}>
                    Testar Gevox Agora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                
                <p className="text-white/80 text-sm md:text-base">
                  Junte-se a mais de 50 empreendedores que já simplificaram sua rotina.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-white/60"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Funcionalidades Section */}
        <section id="funcionalidades" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                Funcionalidades poderosas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tudo que você precisa para gerenciar seu negócio, controlado por voz
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                Por que escolher Gevox?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Resultados comprovados que transformam a gestão do seu negócio
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <SocialProofSection />

        {/* Como Funciona Section */}
        <section id="como-funciona" className="py-20 bg-gradient-to-br from-muted/50 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                Como funciona
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Três passos simples para revolucionar sua gestão
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
              {/* Connection Lines (Desktop) */}
              <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              {howItWorksSteps.map((step, index) => (
                <HowItWorksStep
                  key={index}
                  stepNumber={index + 1}
                  {...step}
                  index={index}
                  showAnimation={index === 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Final / Contact Section */}
        <section id="contato" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                Pronto para transformar sua gestão?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Entre em contato e descubra como Gevox pode revolucionar seu negócio
              </p>
            </motion.div>

            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;