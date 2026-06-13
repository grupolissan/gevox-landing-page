import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ComparisonTable from './ComparisonTable.jsx';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Básico',
      description: 'Ideal para quem está começando a organizar o negócio e quer sair do caderninho.',
      monthlyPrice: 29.90,
      annualPrice: 23.90, // 20% desconto no pix
      interactions: '3.000 tokens/mês (1 token = 1s)',
      anchor: 'Menos de R$ 1 por dia para não perder mais dinheiro de fiado',
      features: [
        'Gestão de estoque por voz',
        'Registro de Fiado e vendas',
        'Acesso ao painel lojista',
        'Requer WhatsApp pessoal'
      ],
      highlight: false,
      buttonVariant: 'outline',
      buttonClass: 'border-primary text-primary hover:bg-primary hover:text-white',
      buttonText: 'Começar Agora',
      buttonLink: '/checkout/basico'
    },
    {
      name: 'Plus',
      description: 'A solução completa para automatizar o atendimento ao cliente.',
      monthlyPrice: 59.90,
      annualPrice: 47.90, // 20% desconto no pix
      interactions: '10.000 tokens/mês (1 token = 1s)',
      anchor: 'A primeira secretária virtual da sua loja via WhatsApp',
      features: [
        'Tudo do plano Básico',
        'Atendimento ao cliente final',
        'Consulta de estoque p/ cliente',
        'Reserva de produtos',
        'Requer WhatsApp Business'
      ],
      highlight: true,
      badge: '🌟 Melhor Escolha',
      buttonVariant: 'default',
      buttonClass: 'bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/30',
      buttonText: 'Começar Agora',
      buttonLink: '/checkout/plus'
    },
    {
      name: 'Premium',
      description: 'Para empresas estruturadas que precisam de gestão completa e agenda.',
      isConsultation: true,
      interactions: 'Tokens personalizados',
      anchor: 'A solução definitiva sob medida para seu volume de vendas',
      features: [
        'Tudo do plano Plus',
        'Agenda inteligente',
        'Agendamentos e remarcações',
        'Emissão de NF-e (quando disp.)',
        'Requer WhatsApp Business'
      ],
      highlight: false,
      buttonVariant: 'default',
      buttonClass: 'bg-accent hover:bg-accent/90 text-white',
      buttonText: 'Falar com Consultor',
      buttonLink: 'https://wa.me/5518998258093'
    }
  ];

  return (
    <section id="planos" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pricing Header & Toggle */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
            Planos que cabem no seu bolso
          </h2>
          
          <div className="flex items-center justify-center gap-4 pb-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              role="switch"
              aria-checked={isAnnual}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
                  isAnnual ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Anual
              <Badge variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/30 border-none">
                20% OFF no PIX
              </Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative h-full ${plan.highlight ? 'md:-mt-8 md:mb-8 z-10' : 'z-0'}`}
            >
              <Card className={`h-full flex flex-col transition-all duration-300 hover:shadow-xl ${
                plan.highlight 
                  ? 'border-2 border-secondary shadow-lg scale-105 bg-card' 
                  : 'border border-border bg-card/50 hover:bg-card'
              }`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-secondary text-white hover:bg-secondary px-3 py-1 text-sm font-medium shadow-sm">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
                  
                  <div className="mt-6 mb-2 min-h-[48px] flex items-center justify-center">
                    {plan.isConsultation ? (
                      <span className="text-3xl font-extrabold text-foreground">
                        Sob Consulta
                      </span>
                    ) : (
                      <>
                        <span className="text-4xl font-extrabold text-foreground">
                          R$ {(isAnnual ? plan.annualPrice : plan.monthlyPrice).toFixed(2).replace('.', ',')}
                        </span>
                        <span className="text-muted-foreground">/mês</span>
                      </>
                    )}
                  </div>
                  
                  {!plan.isConsultation && isAnnual && (
                    <div className="text-sm text-secondary font-medium min-h-[20px]">
                      Pague no PIX ou em até 12x no cartão
                    </div>
                  )}
                  {(!plan.isConsultation && !isAnnual) && (
                    <div className="min-h-[20px]"></div>
                  )}
                  {plan.isConsultation && (
                    <div className="min-h-[20px]"></div>
                  )}
                  
                  <div className={`mt-4 p-3 rounded-lg bg-muted/50 text-sm font-medium border border-border/50 ${plan.name === 'Plus' ? 'text-black' : 'text-foreground/80'}`}>
                    {plan.anchor}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="mb-6 flex items-center justify-center gap-2 text-sm font-semibold text-primary bg-primary/10 py-2 rounded-md">
                    <Sparkles className="w-4 h-4" />
                    {plan.interactions}
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-secondary' : 'text-primary'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto pt-6">
                  {plan.buttonLink && plan.buttonLink.startsWith('http') ? (
                    <Button 
                      asChild
                      className={`w-full transition-all duration-200 active:scale-[0.98] ${plan.buttonClass}`}
                      variant={plan.buttonVariant}
                    >
                      <a href={plan.buttonLink} target="_blank" rel="noreferrer">
                        {plan.buttonText}
                      </a>
                    </Button>
                  ) : plan.buttonLink ? (
                    <Button 
                      asChild
                      className={`w-full transition-all duration-200 active:scale-[0.98] ${plan.buttonClass}`}
                      variant={plan.buttonVariant}
                    >
                      <Link to={plan.buttonLink}>
                        {plan.buttonText}
                      </Link>
                    </Button>
                  ) : (
                    <Button 
                      className={`w-full transition-all duration-200 active:scale-[0.98] ${plan.buttonClass}`}
                      variant={plan.buttonVariant}
                    >
                      {plan.buttonText}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <ComparisonTable />

      </div>
    </section>
  );
};

export default PricingSection;