import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, Building2 } from 'lucide-react';
import GevoxLogo from '@/components/icons/GevoxLogo.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Funcionalidades', href: '#funcionalidades', isAnchor: true },
    { name: 'Planos', href: '#planos', isAnchor: true },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade', isAnchor: false },
    { name: 'Termos de Uso', href: '/termos-de-uso', isAnchor: false }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = "https://wa.me/5518998258093?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Gevox";

  return (
    <footer className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GevoxLogo className="w-12 h-12" />
              <span className="text-2xl font-bold text-gradient-primary">Gevox</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              O Gevox assume seu atendimento, controla seu estoque e registra suas vendas no WhatsApp.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.isAnchor ? (
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-white/70 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contato e Empresa</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>contato@gvox.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MessageSquare className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>+55 18 99825-8093</span>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <Building2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="leading-tight">
                  LISSAN COMERCIO DE UTILIDADES LTDA<br />
                  CNPJ: 50.136.278/0001-69
                </span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Fale Conosco</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Entre em contato pelo WhatsApp e tire suas dúvidas com nossa equipe.
            </p>
            <Button
              asChild
              className="w-full bg-secondary hover:bg-secondary/90 text-white transition-all duration-200 active:scale-[0.98]"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Gevox. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;