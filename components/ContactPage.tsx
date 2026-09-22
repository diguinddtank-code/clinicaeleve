import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  MessageSquare, 
  ShieldAlert, 
  Navigation, 
  Car, 
  FileText, 
  Calendar,
  AlertCircle,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { 
  WHATSAPP_NUMBER, 
  ADDRESS, 
  PHONE_DISPLAY, 
  IMAGES,
  DR_ANDRE_INSTAGRAM,
  DR_ANA_INSTAGRAM
} from '../constants';
import { updatePageSeo } from '../seo';

interface ContactPageProps {
  onNavigateHome: (sectionId?: string) => void;
  onNavigateAbout: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome, onNavigateAbout }) => {
  // Estados do formulário inteligente de triagem
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Cirurgia Ortognática & Deformidades');
  const [urgencyLevel, setUrgencyLevel] = useState('Planejamento / Eletivo');
  const [preferredShift, setPreferredShift] = useState('Qualquer Horário');
  const [patientNotes, setPatientNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Scroll para o topo e ativação de SEO e Schemas da subpágina de Contato
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updatePageSeo('contact');
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const messageLines = [
      'Olá! Gostaria de agendar uma consulta na Eleve Odontologia.',
      `*Nome:* ${patientName || 'Não informado'}`,
      `*Telefone:* ${patientPhone || 'Não informado'}`,
      `*Interesse:* ${selectedSpecialty}`,
      `*Urgência:* ${urgencyLevel}`,
      `*Turno de preferência:* ${preferredShift}`,
      patientNotes ? `*Observações:* ${patientNotes}` : ''
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  const specialtiesList = [
    'Cirurgia Ortognática & Deformidades',
    'Implantes Dentários & Enxertos Ósseos',
    'Extração de Sisos Inclusos',
    'Invisalign & Ortodontia Digital',
    'Aparelhos Autoligados & Safira Estética',
    'Clareamento & Estética Dental',
    'Avaliação Clínica Geral'
  ];

  const urgencyOptions = [
    { label: 'Planejamento / Eletivo', desc: 'Desejo agendar com calma' },
    { label: 'Próximos 7 dias', desc: 'Tenho preferência por esta semana' },
    { label: 'Dor ou Urgência Clínica', desc: 'Preciso de acolhimento prioritário' }
  ];

  const shiftOptions = ['Manhã (08h às 12h)', 'Tarde (13h às 17h)', 'Fim de Tarde (17h às 19h)', 'Sábado (08h às 13h)', 'Qualquer Horário'];

  const contactFaqs = [
    {
      q: 'A Eleve Odontologia atende planos de saúde ou convênios?',
      a: 'Nossos atendimentos são exclusivamente particulares, o que nos permite dedicar de 60 a 90 minutos a cada paciente sem a pressa imposta pelos convênios. No entanto, emitimos recibos e relatórios clínicos completos com código de procedimento e justificativa diagnóstica para que você solicite reembolso junto ao seu plano de saúde.'
    },
    {
      q: 'Preciso levar algum exame na primeira consulta?',
      a: 'Caso já possua radiografias panorâmicas, tomografias computadorizadas da face ou laudos recentes, recomendamos que traga no dia da consulta. Se não tiver exames prévios, não se preocupe: faremos a avaliação clínica completa e solicitaremos com guia médica apenas o estritamente necessário.'
    },
    {
      q: 'Como funciona o acesso de carro e onde estacionar?',
      a: 'Estamos localizados na Rua Sena Madureira, 491, no bairro Ouro Preto, em um trecho tranquilo e seguro próximo à Avenida Fleming e Tancredo Neves. Há vagas em frente à clínica e facilidade de parada ao longo da via para o seu total conforto.'
    },
    {
      q: 'Qual é o canal mais rápido para confirmar um horário?',
      a: 'O WhatsApp oficial da clínica, pelo número (31) 3234-7977, é o nosso meio de comunicação prioritário. Nossa equipe de recepção responde prontamente durante o horário de funcionamento para encontrar a data mais conveniente para a sua agenda.'
    }
  ];

  return (
    <div className="bg-white text-eleve-black selection:bg-eleve-brand selection:text-white">
      
      {/* HERO SECTION EDITORIAL DE CONTATO */}
      <section className="relative min-h-[60vh] bg-eleve-black text-white flex items-center overflow-hidden pt-28 pb-20">
        
        {/* Glows e Luzes de Fundo */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[400px] bg-eleve-brand/20 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-eleve-gold/15 blur-[120px] pointer-events-none rounded-full" />
        
        {/* Marca d'água */}
        <img 
          src={IMAGES.logo} 
          alt="" 
          className="absolute -right-24 top-1/3 w-[650px] opacity-[0.03] pointer-events-none select-none brightness-0 invert" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          {/* Breadcrumbs de Navegação */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 font-bold">
            <button 
              onClick={() => onNavigateHome()} 
              className="hover:text-eleve-gold transition-colors flex items-center gap-1 cursor-pointer"
            >
              Início
            </button>
            <ChevronRight size={14} className="text-gray-500" />
            <span className="text-eleve-gold">Central de Contato</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-eleve-gold whitespace-nowrap">
                Atendimento
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.12] tracking-tight">
              Inicie seu atendimento com{' '}
              <span className="gold-gradient-text italic font-serif">tempo dedicado</span> e atenção integral.
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed">
              Sem salas de espera lotadas ou atendimentos com pressa. Entre em contato diretamente com a nossa recepção no Ouro Preto para tirar dúvidas, enviar exames prévios ou agendar sua avaliação com nossos cirurgiões titulares.
            </p>
          </div>

          {/* Cards Rápidos de Acesso no Topo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-eleve-brand/20 text-eleve-brandLight flex items-center justify-center mb-4">
                <MessageSquare size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">WhatsApp Oficial</p>
              <p className="text-lg font-serif font-bold text-white mt-1">{PHONE_DISPLAY}</p>
              <p className="text-xs text-gray-400 mt-1">Resposta rápida da recepção</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-eleve-gold/20 text-eleve-gold flex items-center justify-center mb-4">
                <Clock size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Horário de Funcionamento</p>
              <p className="text-base font-serif font-bold text-white mt-1">Seg a Sex: 08h às 19h</p>
              <p className="text-xs text-gray-400 mt-1">Sábados: 08h às 13h</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-eleve-brand/20 text-eleve-brandLight flex items-center justify-center mb-4">
                <MapPin size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Localização</p>
              <p className="text-base font-serif font-bold text-white mt-1">Rua Sena Madureira, 491</p>
              <p className="text-xs text-gray-400 mt-1">Ouro Preto, Belo Horizonte</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldAlert size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Casos com Dor ou Trauma</p>
              <p className="text-base font-serif font-bold text-white mt-1">Acolhimento no Dia</p>
              <p className="text-xs text-gray-400 mt-1">Triagem prioritária de urgência</p>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 2: FORMULÁRIO DE TRIAGEM INTELIGENTE & CANAIS DIRETOS */}
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Coluna Esquerda: Triagem Inteligente de Agendamento */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl">
              
              <div className="mb-8">
                <span className="text-eleve-brand font-bold tracking-[0.25em] uppercase text-xs block mb-2">
                  Triagem Direta de Consulta
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-eleve-black font-bold">
                  Personalize sua solicitação de horário
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  Preencha as informações abaixo para que nossa recepção já consulte a disponibilidade exata na agenda do cirurgião responsável.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Nome e WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Como prefere ser chamado?"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-eleve-brand focus:ring-2 focus:ring-eleve-brand/20 outline-none transition-all text-sm text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Seu WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(31) 99999-9999"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-eleve-brand focus:ring-2 focus:ring-eleve-brand/20 outline-none transition-all text-sm text-slate-800"
                    />
                  </div>
                </div>

                {/* Seleção do Procedimento de Interesse */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Procedimento ou Área de Interesse *
                  </label>
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-eleve-brand focus:ring-2 focus:ring-eleve-brand/20 outline-none transition-all text-sm text-slate-800 bg-white"
                  >
                    {specialtiesList.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Grau de Urgência */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Grau de Urgência do Seu Caso *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {urgencyOptions.map((opt) => {
                      const isSelected = urgencyLevel === opt.label;
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => setUrgencyLevel(opt.label)}
                          className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'border-eleve-brand bg-eleve-brand/5 ring-1 ring-eleve-brand'
                              : 'border-gray-200 hover:border-gray-300 bg-stone-50'
                          }`}
                        >
                          <p className={`text-xs font-bold ${isSelected ? 'text-eleve-brand' : 'text-slate-800'}`}>
                            {opt.label}
                          </p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{opt.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Turno de Preferência */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Turno Preferencial para Atendimento
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {shiftOptions.map((shift) => (
                      <button
                        key={shift}
                        type="button"
                        onClick={() => setPreferredShift(shift)}
                        className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          preferredShift === shift
                            ? 'bg-eleve-black text-white'
                            : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                        }`}
                      >
                        {shift}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Observações / Sintomas */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Observações Clínicas ou Dúvidas (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte brevemente o que você está sentindo, se já realizou exames ou qual é o seu objetivo estético."
                    value={patientNotes}
                    onChange={(e) => setPatientNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-eleve-brand focus:ring-2 focus:ring-eleve-brand/20 outline-none transition-all text-sm text-slate-800 resize-none"
                  />
                </div>

                {/* Botão de Envio */}
                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageSquare size={18} />
                  Enviar Solicitação para a Recepção no WhatsApp
                  <ArrowRight size={16} />
                </button>

                <p className="text-[11px] text-center text-slate-500 font-medium">
                  Seus dados são protegidos por sigilo médico odontológico e utilizados apenas para o agendamento da sua consulta.
                </p>

              </form>

              {/* Feedback de envio suave */}
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span>
                      Encaminhando sua solicitação diretamente para o WhatsApp oficial da clínica.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Coluna Direita: Canais Segmentados & Informações Práticas */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Canais Segmentados de Atendimento */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md space-y-6">
                <span className="text-eleve-gold font-bold tracking-[0.25em] uppercase text-xs block">
                  Atendimento Especializado
                </span>
                <h3 className="text-2xl font-serif font-bold text-eleve-black">
                  Canais Diretos por Área
                </h3>

                <div className="space-y-4">
                  
                  {/* Canal Cirúrgico */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      'Olá! Gostaria de agendar uma avaliação cirúrgica (Ortognática, Sisos ou Implantes) com o Dr. André Araújo.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-2xl bg-stone-50 border border-gray-200 hover:border-eleve-brand hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-eleve-brand">
                        Núcleo Cirúrgico
                      </span>
                      <ArrowRight size={14} className="text-slate-400 group-hover:text-eleve-brand group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="font-serif font-bold text-base text-eleve-black mt-1">
                      Dr. André Araújo
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Cirurgia Ortognática, Sisos Inclusos e Implantes Guiados
                    </p>
                  </a>

                  {/* Canal Ortodôntico e Estético */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      'Olá! Gostaria de agendar uma avaliação ortodôntica (Invisalign ou Canal) com a Dra. Ana Luiza.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-2xl bg-stone-50 border border-gray-200 hover:border-eleve-gold hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-eleve-gold">
                        Núcleo Ortodôntico & Estético
                      </span>
                      <ArrowRight size={14} className="text-slate-400 group-hover:text-eleve-gold group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="font-serif font-bold text-base text-eleve-black mt-1">
                      Dra. Ana Luiza
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Invisalign Doctor, Ortodontia Autoligada e Estética Dental
                    </p>
                  </a>

                  {/* Canal de Dor e Urgência */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      'URGÊNCIA: Olá, estou com dor intensa ou incômodo agudo e preciso de acolhimento na Eleve.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-2xl bg-red-50/60 border border-red-200 hover:border-red-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-600 flex items-center gap-1.5">
                        <AlertCircle size={14} />
                        Dor Aguda ou Inchaço
                      </span>
                      <ArrowRight size={14} className="text-red-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="font-serif font-bold text-base text-eleve-black mt-1">
                      Acolhimento Prioritário no Dia
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Alívio rápido de dor e diagnóstico com tomografia
                    </p>
                  </a>

                </div>
              </div>

              {/* Informações de Reembolso e Exames */}
              <div className="bg-eleve-black text-white rounded-3xl p-8 border border-white/10 shadow-lg space-y-4">
                <div className="flex items-center gap-2 text-eleve-gold">
                  <FileText size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Política de Reembolso
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold text-white">
                  Possui convênio ou plano de saúde?
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                  Para manter consultas completas de até 90 minutos e padrão de centro cirúrgico, nossos atendimentos são particulares. Fornecemos nota fiscal eletrônica, relatório com CID e discriminação detalhada dos atos operatórios para que você solicite o reembolso integral ou parcial junto à sua operadora.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 3: LOCALIZAÇÃO, MAPA & COMO CHEGAR */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-eleve-brand font-bold tracking-[0.25em] uppercase text-xs block">
                Acesso & Conforto
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-eleve-black font-bold leading-tight">
                Fácil acesso na região nobre do Ouro Preto e Castelo
              </h2>
              <div className="w-16 h-1 bg-eleve-gold" />

              <p className="text-slate-700 text-base leading-relaxed">
                Nossa clínica foi estrategicamente instalada na Rua Sena Madureira, em trecho calmo e arborizado, com fácil conexão para as principais avenidas da região da Pampulha.
              </p>

              <div className="space-y-4 pt-2">
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-gray-200">
                  <Car size={20} className="text-eleve-brand mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-eleve-black">Estacionamento Descomplicado</p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Vagas em frente à clínica e facilidade de estacionar sem a rotatividade estressante do hipercentro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-gray-200">
                  <Navigation size={20} className="text-eleve-brand mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-eleve-black">Vias Principais de Ligação</p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Rápida ligação através da Avenida Fleming, Avenida Tancredo Neves e Avenida Portugal.
                    </p>
                  </div>
                </div>

              </div>

              {/* Botões para Apps de Rotas */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Rua+Sena+Madureira+491+Ouro+Preto+Belo+Horizonte+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-eleve-black hover:bg-eleve-brand text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  <MapPin size={14} />
                  Abrir no Google Maps
                </a>

                <a
                  href="https://waze.com/ul?q=Rua+Sena+Madureira+491+Ouro+Preto+Belo+Horizonte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-300 hover:border-eleve-brand text-slate-800 hover:text-eleve-brand text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  <Navigation size={14} />
                  Navegar com Waze
                </a>
              </div>

            </div>

            {/* Mapa Interativo Embed de Alta Qualidade */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-[16/10] sm:aspect-[16/11]">
                <iframe
                  title="Localização da Eleve Odontologia no Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.124564344445!2d-44.00417532398539!3d-19.88780008149174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6919eb6be1131%3A0xb363ad92a106f2c4!2sR.%20Sena%20Madureira%2C%20491%20-%20Ouro%20Preto%2C%20Belo%20Horizonte%20-%20MG%2C%2031330-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
                
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-200 max-w-xs pointer-events-none hidden sm:block">
                  <p className="font-serif font-bold text-sm text-eleve-black">Eleve Odontologia</p>
                  <p className="text-xs text-slate-600 mt-0.5">Rua Sena Madureira, 491, Ouro Preto</p>
                  <p className="text-[10px] text-eleve-brand font-bold uppercase tracking-wider mt-1">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 4: PERGUNTAS FREQUENTES SOBRE AGENDAMENTO */}
      <section className="py-24 bg-stone-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-eleve-gold font-bold tracking-[0.25em] uppercase text-xs block mb-3">
              Dúvidas Práticas
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-eleve-black font-bold mb-4">
              Perguntas Frequentes sobre Consultas e Atendimento
            </h2>
            <p className="text-slate-600 text-base">
              Tudo o que você precisa saber antes de nos visitar.
            </p>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={faq.q}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif font-bold text-lg text-eleve-black">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`text-eleve-brand shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-eleve-gold' : ''
                      }`} 
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed border-t border-gray-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SEÇÃO 5: CONVITE DE CONTINUIDADE INSTITUCIONAL */}
      <section className="py-20 bg-eleve-black text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-eleve-gold font-bold uppercase tracking-widest text-xs block">
            Corpo Clínico & Histórico
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            Deseja saber mais sobre as qualificações dos nossos fundadores?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Conheça o histórico cirúrgico do Dr. André Araújo e a formação acadêmica da Dra. Ana Luiza em nossa página institucional completa.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigateAbout()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-eleve-gold hover:bg-eleve-goldLight text-eleve-black font-bold uppercase tracking-wider text-xs rounded-sm transition-all shadow-xl cursor-pointer"
            >
              Ver Dossiê Sobre Nós
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => onNavigateHome()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider text-xs rounded-sm border border-white/20 transition-all cursor-pointer"
            >
              Voltar para a Página Principal
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
