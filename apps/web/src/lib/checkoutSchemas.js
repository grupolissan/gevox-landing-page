import { z } from 'zod';

export const checkoutSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres.' }),
  email: z.string().email({ message: 'E-mail inválido.' }),
  cpfCnpj: z.string().min(11, { message: 'CPF ou CNPJ inválido.' }),
  phone: z.string().min(10, { message: 'Telefone inválido.' }),
  password: z.string().min(6, { message: 'Senha deve ter no mínimo 6 caracteres.' }),
  lgpdConsent: z.literal(true, {
    errorMap: () => ({ message: 'Você precisa aceitar os Termos e Política de Privacidade.' }),
  }),
});
