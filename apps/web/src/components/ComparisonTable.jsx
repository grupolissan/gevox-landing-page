import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  const features = [
    { name: 'Tokens por mês', basic: '3.000', pro: '10.000', business: 'Personalizado' },
    { name: 'Gestão de Estoque por voz', basic: true, pro: true, business: true },
    { name: 'Registro de Fiado e Vendas', basic: true, pro: true, business: true },
    { name: 'Acesso ao Painel Lojista', basic: true, pro: true, business: true },
    { name: 'Atendimento ao Cliente Final', basic: false, pro: true, business: true },
    { name: 'Consulta de estoque p/ cliente', basic: false, pro: true, business: true },
    { name: 'Reserva de produtos', basic: false, pro: true, business: true },
    { name: 'Agenda Inteligente', basic: false, pro: false, business: true },
    { name: 'Agendamentos e remarcações', basic: false, pro: false, business: true },
    { name: 'Emissão de NF-e (quando disp.)', basic: false, pro: false, business: true },
    { name: 'Tipo de WhatsApp', basic: 'Pessoal', pro: 'Business', business: 'Business' },
  ];

  const renderValue = (value, isPro = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className={`w-5 h-5 mx-auto ${isPro ? 'text-secondary' : 'text-primary'}`} />
      ) : (
        <X className="w-5 h-5 mx-auto text-muted-foreground/50" />
      );
    }
    return <span className={`font-medium ${isPro ? 'text-black' : 'text-foreground'}`}>{value}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-6 border-b border-border bg-muted/30 w-1/4 min-w-[200px]">
                <span className="text-lg font-semibold text-foreground">Comparativo</span>
              </th>
              <th className="p-6 border-b border-border bg-background text-center w-1/4 min-w-[150px]">
                <span className="text-lg font-semibold text-primary">Básico</span>
              </th>
              <th className="p-6 border-b border-border bg-secondary/10 text-center w-1/4 min-w-[150px] relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
                <span className="text-lg font-bold text-secondary">Plus</span>
              </th>
              <th className="p-6 border-b border-border bg-background text-center w-1/4 min-w-[150px]">
                <span className="text-lg font-semibold text-primary">Premium</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {features.map((feature, index) => (
              <tr key={index} className="hover:bg-muted/30 transition-colors duration-150">
                <td className="p-4 pl-6 text-sm font-medium text-muted-foreground">
                  {feature.name}
                </td>
                <td className="p-4 text-center">
                  {renderValue(feature.basic)}
                </td>
                <td className="p-4 text-center bg-secondary/5">
                  {renderValue(feature.pro, true)}
                </td>
                <td className="p-4 text-center">
                  {renderValue(feature.business)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ComparisonTable;