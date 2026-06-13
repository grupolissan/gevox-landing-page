import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeatureCard = ({ icon: Icon, title, description, benefits, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-secondary/20 group">
        <CardHeader>
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
          <CardDescription className="text-base text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        {benefits && benefits.length > 0 && (
          <CardContent>
            <div className="space-y-2">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-0.5 bg-secondary/10 text-secondary hover:bg-secondary/20">
                    ✓
                  </Badge>
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
};

export default FeatureCard;