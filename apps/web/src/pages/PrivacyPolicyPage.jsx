import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { ChevronLeft } from 'lucide-react';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Gevox</title>
        <meta name="description" content="Política de Privacidade do Gevox em conformidade com a LGPD." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Voltar para a página inicial
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Política de Privacidade</h1>
            <p className="text-muted-foreground mb-8">Última atualização: 11 de junho de 2026</p>

            <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Introdução</h2>
                <p>
                  A <strong>LISSAN COMERCIO DE UTILIDADES LTDA</strong> ("nós", "nosso", "Gevox"), inscrita no CNPJ nº 50.136.278/0001-69, tem o compromisso de proteger sua privacidade e seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações quando você utiliza nosso site e serviços de gestão empresarial via WhatsApp.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Dados Coletados</h2>
                <p>Coletamos os seguintes dados pessoais para a prestação dos nossos serviços:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Dados de Cadastro:</strong> Nome completo, e-mail, telefone (WhatsApp), e CPF/CNPJ.</li>
                  <li><strong>Dados de Pagamento:</strong> Processados de forma segura através do nosso parceiro Asaas (Instituição de Pagamento). Não armazenamos os dados completos do seu cartão de crédito.</li>
                  <li><strong>Dados de Navegação:</strong> Endereço IP, cookies e informações de uso do site (mediante seu consentimento).</li>
                  <li><strong>Dados da Operação:</strong> Informações sobre clientes, produtos, vendas e fiados registrados através do WhatsApp, os quais são de sua propriedade exclusiva.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Finalidade do Tratamento</h2>
                <p>O tratamento de dados (Art. 7º da LGPD) ocorre para as seguintes finalidades:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Fornecer, manter e melhorar nossos serviços (Base legal: Execução de contrato).</li>
                  <li>Processar pagamentos e assinaturas (Base legal: Execução de contrato e Obrigação legal).</li>
                  <li>Enviar avisos técnicos, atualizações e suporte (Base legal: Legítimo interesse).</li>
                  <li>Cumprir obrigações fiscais e legais (Base legal: Obrigação legal).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Compartilhamento de Dados</h2>
                <p>
                  Não vendemos ou alugamos seus dados comerciais para terceiros. O compartilhamento ocorre apenas com prestadores de serviços estritamente necessários para a operação, como:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Asaas:</strong> Para processamento de pagamentos (gateway de pagamento certificado com padrão PCI Compliance).</li>
                  <li><strong>Provedores de infraestrutura em nuvem:</strong> Onde nosso sistema está hospedado.</li>
                  <li><strong>Meta (WhatsApp):</strong> Canal pelo qual o serviço é prestado.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Seus Direitos (Art. 18 LGPD)</h2>
                <p>Como titular dos dados, você tem o direito de:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Confirmar a existência de tratamento e acessar seus dados.</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                  <li>Revogar o consentimento a qualquer momento (para comunicações de marketing).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Contato do Encarregado (DPO)</h2>
                <p>
                  Para exercer seus direitos ou tirar dúvidas sobre esta Política de Privacidade, entre em contato através do e-mail: <strong>contato@gvox.com.br</strong> ou pelo nosso telefone: <strong>+55 18 99825-8093</strong>.
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
