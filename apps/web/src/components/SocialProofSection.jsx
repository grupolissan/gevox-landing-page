import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Clock, CheckCircle } from 'lucide-react';

const SocialProofSection = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Horas Economizadas",
      description: "Deixe o trabalho repetitivo para a IA e ganhe horas livres no seu dia para focar no crescimento da loja."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary" />,
      title: "Fim do Caderninho",
      description: "Todos os fiados e registros de estoque salvos na nuvem de forma segura e acessíveis 24h por dia."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Vendas Recuperadas",
      description: "Atendimento automático e resposta rápida evitam que o seu cliente compre no concorrente enquanto você dorme."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
            Por que lojistas escolhem o Gevox?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Benefícios reais que transformam o dia a dia do seu negócio sem complicações tecnológicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/50 bg-background/50 backdrop-blur hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{stat.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
