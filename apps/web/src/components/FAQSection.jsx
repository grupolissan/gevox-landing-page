import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'O Gevox funciona em qualquer WhatsApp?',
      answer: 'Sim. O Gevox se conecta ao seu WhatsApp atual (pessoal ou Business) através de um QR Code, de forma idêntica ao WhatsApp Web. Você não precisa trocar de número.'
    },
    {
      question: 'Eu preciso saber programar para usar a IA?',
      answer: 'Não. O Gevox foi desenhado para ser usado por voz. Você apenas envia um áudio para a sua própria secretária dizendo o que aconteceu (ex: "Vendi uma coxinha fiado para o seu José") e ela organiza tudo automaticamente em seu sistema.'
    },
    {
      question: 'A secretária virtual entende gírias e sotaques?',
      answer: 'Com certeza. Nossa inteligência artificial é treinada nos dialetos e sotaques de todo o Brasil. Ela processa a intenção da sua fala, ignorando ruídos de fundo e focando no que realmente importa para o seu negócio.'
    },
    {
      question: 'Meus dados e dos meus clientes estão seguros?',
      answer: 'Segurança total. Todas as informações são criptografadas e armazenadas em servidores de alta performance. Diferente de um caderninho de papel, seus dados no Gevox estão protegidos contra perdas e podem ser acessados de qualquer lugar.'
    },
    {
      question: 'Posso usar em mais de um aparelho?',
      answer: 'Sim. Como o Gevox funciona em nuvem, você pode registrar vendas pelo celular enquanto seu sócio ou funcionário acompanha tudo pelo painel administrativo no computador em tempo real.'
    },
    {
      question: 'Quais as formas de pagamento dos planos?',
      answer: 'Aceitamos cartão de crédito em até 12x (com 10% de desconto no plano anual) e PIX (com 20% de desconto no plano anual).'
    },
    {
      question: 'O que são os "tokens" dos planos?',
      answer: 'Cada token equivale a 1 segundo de interação da nossa Inteligência Artificial com você ou seu cliente via WhatsApp.'
    },
    {
      question: 'O Gevox atende à Lei Geral de Proteção de Dados (LGPD)?',
      answer: 'Sim, seguimos rigorosamente a LGPD. Não vendemos, alugamos ou compartilhamos seus dados comerciais com terceiros. As informações da sua loja e dos seus clientes são de sua propriedade exclusiva.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre o Gevox
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;