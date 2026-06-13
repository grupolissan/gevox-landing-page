import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const HowItWorksStep = ({ stepNumber, icon: Icon, title, description, index = 0, showAnimation = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <Card className="h-full bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
        <CardHeader className="text-center">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {stepNumber}
          </div>
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 mt-6">
            <Icon className={`w-10 h-10 text-primary ${showAnimation ? 'animate-pulse' : ''}`} />
          </div>
          <CardTitle className="text-2xl font-semibold text-foreground mb-3">{title}</CardTitle>
          <CardDescription className="text-base text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default HowItWorksStep;