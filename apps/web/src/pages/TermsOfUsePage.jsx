import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { ChevronLeft } from 'lucide-react';

const TermsOfUsePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Termos de Uso - Gevox</title>
        <meta name="description" content="Termos e Condições de Uso da plataforma Gevox." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Voltar para a página inicial
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Termos de Uso</h1>
            <p className="text-muted-foreground mb-8">Última atualização: 11 de junho de 2026</p>

            <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar a plataforma Gevox, operada pela <strong>LISSAN COMERCIO DE UTILIDADES LTDA</strong> (CNPJ: 50.136.278/0001-69), você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá usar o serviço.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Descrição do Serviço</h2>
                <p>
                  O Gevox é uma plataforma SaaS (Software as a Service) que fornece uma assistente virtual integrada ao WhatsApp para gestão de estoque, fiados, agenda e emissão de notas fiscais, operando sob diferentes planos de assinatura mensais e anuais.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Contas e Segurança</h2>
                <p>
                  Para utilizar o Gevox, você deve criar uma conta fornecendo informações precisas e completas. Você é responsável por manter a confidencialidade de sua senha e conta, bem como por todas as atividades que ocorrem sob sua conta. O Gevox não se responsabiliza por perdas causadas pelo uso não autorizado de sua conta.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Planos, Pagamentos e "Tokens"</h2>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Os serviços são cobrados antecipadamente de forma mensal ou anual.</li>
                  <li>O pagamento é processado através da instituição parceira (Asaas), aceitando PIX e Cartão de Crédito.</li>
                  <li>Cada plano possui um limite de "Tokens" (onde 1 token equivale a 1 segundo de processamento da Inteligência Artificial via WhatsApp). O uso excedente poderá acarretar bloqueio temporário do serviço ou necessidade de upgrade.</li>
                  <li>O Gevox reserva-se o direito de alterar os preços, notificando os usuários com 30 dias de antecedência.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Cancelamento e Reembolso</h2>
                <p>
                  O usuário pode cancelar a assinatura a qualquer momento através do painel. O cancelamento interromperá a renovação automática, mas não gerará reembolso proporcional pelos dias restantes do ciclo já pago, os quais continuarão disponíveis para uso até o vencimento.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo, software, design, marca e tecnologia associados ao Gevox são de propriedade exclusiva da LISSAN COMERCIO DE UTILIDADES LTDA, sendo proibida a cópia, modificação ou engenharia reversa sem autorização prévia.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Foro</h2>
                <p>
                  Estes Termos serão regidos pelas leis do Brasil. Fica eleito o foro da comarca da sede da contratada para dirimir quaisquer controvérsias oriundas destes Termos de Uso, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
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

export default TermsOfUsePage;
