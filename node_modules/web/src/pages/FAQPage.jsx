import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function FAQPage() {
  const faqs = [
    {
      question: 'Como faço para agendar um horário?',
      answer: 'Você pode agendar pelo WhatsApp clicando no botão "Agendar Agora" em qualquer página do site, ou entrando em contato diretamente pelo número (11) 99999-9999. Também aceitamos agendamentos por Instagram e pelo formulário de contato.'
    },
    {
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'Aceitamos dinheiro, cartões de débito e crédito (Visa, Mastercard, Elo), e PIX. Para pacotes de tratamentos, oferecemos condições especiais de parcelamento.'
    },
    {
      question: 'Qual o horário de funcionamento?',
      answer: 'Funcionamos de segunda a sexta-feira das 9h às 19h, e aos sábados das 9h às 15h. Domingos e feriados estamos fechados. Para horários especiais, consulte disponibilidade pelo WhatsApp.'
    },
    {
      question: 'Quanto tempo dura cada procedimento?',
      answer: 'O tempo varia de acordo com o serviço: Manicure (45-60 min), Pedicure (60-75 min), Alongamento de Unhas (90-120 min), Limpeza de Pele (60-90 min), Depilação (30-60 min dependendo da área). Consulte-nos para informações específicas.'
    },
    {
      question: 'Preciso fazer algum preparo antes dos procedimentos?',
      answer: 'Para depilação, recomendamos que os pelos tenham pelo menos 0.5cm. Para limpeza de pele, evite usar maquiagem pesada no dia. Para outros procedimentos, não há preparo especial necessário. Sempre orientamos individualmente quando necessário.'
    },
    {
      question: 'Os produtos utilizados são de qualidade?',
      answer: 'Sim! Trabalhamos exclusivamente com produtos premium de marcas reconhecidas no mercado. Todos os materiais são descartáveis ou esterilizados seguindo rigorosos protocolos de higiene e segurança.'
    },
    {
      question: 'Posso levar acompanhante?',
      answer: 'Sim, você pode trazer um acompanhante. Nosso espaço é acolhedor e confortável para você e quem estiver com você.'
    },
    {
      question: 'Vocês atendem em domicílio?',
      answer: 'Atualmente nossos serviços são realizados apenas no studio para garantir a qualidade e higiene dos procedimentos. Consulte-nos para casos especiais.'
    },
    {
      question: 'Como funciona o alongamento de unhas?',
      answer: 'Utilizamos técnicas modernas com gel ou fibra de vidro. O procedimento dura cerca de 2 horas e o resultado pode durar de 3 a 4 semanas com manutenção adequada. Oferecemos orientações completas de cuidados pós-procedimento.'
    },
    {
      question: 'Posso cancelar ou remarcar meu horário?',
      answer: 'Sim, pedimos apenas que avise com pelo menos 24 horas de antecedência pelo WhatsApp. Assim podemos disponibilizar o horário para outras clientes. Cancelamentos de última hora podem estar sujeitos a taxas.'
    },
    {
      question: 'Vocês trabalham com pacotes ou planos?',
      answer: 'Sim! Oferecemos pacotes especiais para tratamentos contínuos com condições diferenciadas. Entre em contato para conhecer nossas opções e encontrar o melhor plano para você.'
    },
    {
      question: 'O studio é acessível?',
      answer: 'Sim, nosso espaço é acessível e preparado para receber todas as clientes com conforto e segurança.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Perguntas Frequentes - Studio Blessed</title>
        <meta
          name="description"
          content="Tire suas dúvidas sobre agendamentos, formas de pagamento, horários e procedimentos do Studio Blessed. Respostas para as perguntas mais comuns."
        />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight"
              style={{ textWrap: 'balance', letterSpacing: '-0.02em' }}
            >
              Perguntas Frequentes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-effect rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <div className="mt-16 glass-effect rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Não encontrou sua resposta?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco pelo WhatsApp e teremos prazer em esclarecer todas as suas dúvidas
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default FAQPage;