import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from '@/lib/checkoutSchemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PLAN_DETAILS = {
  'basico': {
    name: 'Básico',
    monthlyPrice: 29.90,
    annualPrice: 23.90, // preço mensal do plano anual
    tokens: '3.000',
    features: ['Gestão de estoque por voz', 'Registro de Fiado e vendas', 'Acesso ao painel lojista']
  },
  'plus': {
    name: 'Plus',
    monthlyPrice: 59.90,
    annualPrice: 47.90,
    tokens: '10.000',
    features: ['Atendimento ao cliente final', 'Consulta de estoque e Reserva', 'Tudo do Básico']
  }
};

const CheckoutPage = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAnnual, setIsAnnual] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('PIX'); // PIX ou CREDIT_CARD
  const [isLoading, setIsLoading] = useState(false);

  const plan = PLAN_DETAILS[planId?.toLowerCase()] || PLAN_DETAILS['basico'];

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { lgpdConsent: false }
  });

  const lgpdConsent = watch('lgpdConsent');

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      // Aqui integraria com a API do backend: POST /api/v1/public/checkout
      // const response = await fetch('https://api.gevox.com.br/api/v1/public/checkout', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...data, planId, isAnnual, paymentMethod })
      // });
      // const result = await response.json();
      // if(result.checkoutUrl) window.location.href = result.checkoutUrl;

      // Simulando delay de requisição para fins de demonstração
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simular sucesso (Na realidade, redirecionaria para o link do Asaas Checkout)
      navigate('/checkout/sucesso');
      
    } catch (error) {
      toast({
        title: "Erro ao processar",
        description: "Não foi possível criar seu checkout no momento. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const calculateTotal = () => {
    let total = plan.monthlyPrice;
    if (isAnnual) {
      total = total * 12;
      if (paymentMethod === 'PIX') {
        total = total * 0.80; // 20% discount
      } else if (paymentMethod === 'CREDIT_CARD') {
        total = total * 0.90; // 10% discount
      }
    }
    return total;
  };

  const totalValue = calculateTotal();
  const savings = isAnnual ? (plan.monthlyPrice * 12) - totalValue : 0;

  return (
    <>
      <Helmet>
        <title>Checkout - Gevox</title>
      </Helmet>

      <div className="min-h-screen bg-muted/20 flex flex-col">
        <Header />

        <main className="flex-grow py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-muted-foreground hover:text-foreground font-medium mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Formulário de Cadastro */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Crie sua conta</h1>
                  <p className="text-muted-foreground">Preencha seus dados para acessar o Gevox.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 rounded-xl border border-border shadow-sm">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input id="name" placeholder="Seu nome" {...register('name')} />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cpfCnpj">CPF ou CNPJ</Label>
                        <Input id="cpfCnpj" placeholder="000.000.000-00" {...register('cpfCnpj')} />
                        {errors.cpfCnpj && <p className="text-sm text-destructive">{errors.cpfCnpj.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone (WhatsApp)</Label>
                        <Input id="phone" placeholder="(00) 00000-0000" {...register('phone')} />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" {...register('email')} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Crie uma senha (para acessar o painel)</Label>
                      <Input id="password" type="password" placeholder="••••••••" {...register('password')} />
                      {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="lgpdConsent" 
                        checked={lgpdConsent}
                        onCheckedChange={(checked) => setValue('lgpdConsent', checked, { shouldValidate: true })}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label htmlFor="lgpdConsent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Aceito os <a href="/termos-de-uso" target="_blank" className="text-primary hover:underline">Termos de Uso</a> e a <a href="/politica-de-privacidade" target="_blank" className="text-primary hover:underline">Política de Privacidade</a>
                        </label>
                        <p className="text-sm text-muted-foreground">
                          Concordo com o processamento dos meus dados para a prestação do serviço.
                        </p>
                      </div>
                    </div>
                    {errors.lgpdConsent && <p className="text-sm text-destructive">{errors.lgpdConsent.message}</p>}
                  </div>

                  <Button type="submit" className="w-full text-lg h-12" disabled={isLoading}>
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                    Ir para Pagamento Seguro
                  </Button>
                </form>
              </div>

              {/* Resumo do Pedido */}
              <div className="lg:col-span-5">
                <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden sticky top-24">
                  <div className="bg-muted/50 p-6 border-b border-border">
                    <h2 className="font-semibold text-lg">Resumo do Pedido</h2>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-xl text-primary">Plano {plan.name}</h3>
                        <p className="text-sm text-muted-foreground">{plan.tokens} tokens/mês</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4 pt-4 border-t border-border">
                      <div className="flex flex-col gap-2">
                        <Label>Ciclo de cobrança</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <Button 
                            type="button"
                            variant={isAnnual ? 'default' : 'outline'}
                            onClick={() => setIsAnnual(true)}
                            className="w-full"
                          >
                            Anual (Até 20% OFF)
                          </Button>
                          <Button 
                            type="button"
                            variant={!isAnnual ? 'default' : 'outline'}
                            onClick={() => setIsAnnual(false)}
                            className="w-full"
                          >
                            Mensal
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 pt-2">
                        <Label>Forma de pagamento</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <Button 
                            type="button"
                            variant={paymentMethod === 'PIX' ? 'secondary' : 'outline'}
                            onClick={() => setPaymentMethod('PIX')}
                            className="w-full flex flex-col items-center justify-center py-2 h-auto"
                          >
                            <span>PIX</span>
                            {isAnnual && <span className="text-xs text-green-600 font-medium">(-20%)</span>}
                          </Button>
                          <Button 
                            type="button"
                            variant={paymentMethod === 'CREDIT_CARD' ? 'secondary' : 'outline'}
                            onClick={() => setPaymentMethod('CREDIT_CARD')}
                            className="w-full flex flex-col items-center justify-center py-2 h-auto"
                          >
                            <span>Cartão</span>
                            {isAnnual && <span className="text-xs text-green-600 font-medium">(Até 12x) (-10%)</span>}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border flex justify-between items-end">
                      <div>
                        <p className="text-sm text-muted-foreground">Total a pagar</p>
                        {isAnnual && savings > 0 && <p className="text-xs text-green-600 font-medium">Você economiza R$ {savings.toFixed(2).replace('.', ',')}!</p>}
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-foreground">
                          R$ {totalValue.toFixed(2).replace('.', ',')}
                        </span>
                        <span className="text-muted-foreground text-sm block">
                          {isAnnual ? '/ano' : '/mês'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;
