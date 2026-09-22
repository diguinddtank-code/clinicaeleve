import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Instagram, 
  Building2, 
  Scan, 
  HeartHandshake, 
  Calendar,
  Phone,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Activity,
  Star,
  Clock,
  Check,
  Stethoscope,
  Smile
} from 'lucide-react';
import { 
  IMAGES, 
  WHATSAPP_LINK, 
  DR_ANDRE_INSTAGRAM, 
  ADDRESS, 
  PHONE_DISPLAY 
} from '../constants';
import { updatePageSeo } from '../seo';

interface DrAndrePageProps {
  onNavigateHome: (sectionId?: string) => void;
  onNavigateContact?: () => void;
  onNavigateTreatments?: () => void;
}

export const DrAndrePage: React.FC<DrAndrePageProps> = ({ 
  onNavigateHome, 
  onNavigateContact,
  onNavigateTreatments 
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedProcedure, setSelectedProcedure] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updatePageSeo('drandre');
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whatsappDrAndre = `https://wa.me/553132347977?text=${encodeURIComponent(
    'Olá! Estava na página do Dr. André Araújo e gostaria de agendar uma consulta presencial de avaliação cirúrgica.'
  )}`;

  const stats = [
    { number: '+12', label: 'Anos de Prática Cirúrgica', desc: 'Atuação constante em ambiente clínico e hospitalar' },
    { number: '+1.800', label: 'Procedimentos Realizados', desc: 'Cirurgias ortognáticas, implantes e sisos complexos' },
    { number: '100%', label: 'Planejamento Digital 3D', desc: 'Previsibilidade anatômica com guias tomográficos' },
    { number: '0%', label: 'Rotatividade de Médicos', desc: 'Você é operado e acompanhado pelo titular' },
  ];

  const credentials = [
    {
      institution: 'Hospital Municipal Dr. Mário Gatti',
      role: 'Residência Médica / Hospitalar em CTBMF',
      desc: 'Formação intensiva em ambiente de urgência, reconstrução facial, trauma craniomaxilofacial e cirurgias de alta densidade.',
      badge: 'Residência Hospitalar'
    },
    {
      institution: 'Especialização em Implantodontia Avançada',
      role: 'Cirurgia Guiada & Carga Imediata',
      desc: 'Capacitação em reabilitações completas sobre implantes, enxertos ósseos autógenos e biomateriais de padrão internacional.',
      badge: 'Especialista'
    },
    {
      institution: 'Staff Cirúrgico de Hospitais de Referência em BH',
      role: 'Corpo Clínico Credenciado',
      desc: 'Habilitação e rotina em centros cirúrgicos hospitalares para cirurgias sob anestesia geral e sedação profunda monitorada.',
      badge: 'Atuação Hospitalar'
    },
    {
      institution: 'Cirurgia Ortognática Tridimensional',
      role: 'Planejamento Virtual & VTO Computadorizado',
      desc: 'Especialização em correções esqueléticas de maxila e mandíbula com softwares de simulação facial de última geração.',
      badge: 'Tecnologia 3D'
    }
  ];

  const procedures = [
    {
      title: 'Cirurgia Ortognática 3D',
      badge: 'Correção Esquelética & Facial',
      shortDesc: 'Harmonização do perfil, alinhamento ósseo e resolução definitiva da apneia obstrutiva do sono e mordida cruzada/aberta.',
      details: [
        'Planejamento 100% digital com simulação tridimensional da face antes da cirurgia',
        'Correção de queixo para trás (retrognatismo) ou para frente (prognatismo)',
        'Melhora substancial da capacidade respiratória e desobstrução das vias aéreas',
        'Realizada nos melhores hospitais de BH com suporte médico completo'
      ],
      recoveryTime: 'Retorno gradativo às atividades leves em 15 a 21 dias'
    },
    {
      title: 'Implantes Guiados por Computador',
      badge: 'Sem Cortes Extensos',
      shortDesc: 'Recupere dentes fixos com técnica minimamente invasiva, guiada por tomografia 3D, sem cortes desnecessários e sem dor.',
      details: [
        'Guia cirúrgico milimétrico impresso em resina 3D a partir da tomografia',
        'Dispensa pontos e incisões abertas na maioria dos casos selecionados',
        'Possibilidade de Carga Imediata (dente provisório fixo instalado no mesmo dia)',
        'Pós-operatório rápido e confortável sem inchaço significativo'
      ],
      recoveryTime: 'Recuperação imediata com retorno ao trabalho em 24h a 48h'
    },
    {
      title: 'Extração de Sisos Inclusos & Impactados',
      badge: 'Técnica Ultraconservadora',
      shortDesc: 'Remoção de sisos complexos, inclusos ou próximos a nervos com técnica de preservação óssea e opção de sedação consciente.',
      details: [
        'Avaliação prévia em tomografia volumétrica para máxima segurança do nervo alveolar',
        'Instrumentação moderna que reduz o trauma sobre o osso e a gengiva',
        'Protocolo pré e pós-operatório com medicações anti-inflamatórias preventivas',
        'Opção de Sedação Consciente com Anestesiologista Médico: você dorme durante o procedimento'
      ],
      recoveryTime: 'Recuperação confortável em 3 a 5 dias com repouso orientado'
    },
    {
      title: 'Disfunção de ATM & Dores Orofaciais',
      badge: 'Alívio Articular',
      shortDesc: 'Diagnóstico e tratamento de estalos na mandíbula, travamento bucal, dores de cabeça tensionais e bruxismo severo.',
      details: [
        'Artrocentese e lavagem articular minimamente invasiva da ATM',
        'Placas estabilizadoras miorrelaxantes de alta precisão',
        'Viscosuplementação com ácido hialurônico intra-articular',
        'Integração com fisioterapia e controle neuromusculares'
      ],
      recoveryTime: 'Alívio sintomático nas primeiras semanas de tratamento'
    },
    {
      title: 'Enxertos Ósseos & Levantamento de Seio',
      badge: 'Reconstrução Estrutural',
      shortDesc: 'Restauração do volume ósseo perdido para viabilizar a colocação de implantes dentários seguros e definitivos.',
      details: [
        'Utilização de biomateriais de alta biocompatibilidade e membranas regenerativas',
        'Técnica de levantamento de seio maxilar com micro-incisões protegidas',
        'Garantia de espessura e densidade óssea para suporte mastigatório vitalício',
        'Solução até para casos antigos com grande perda óssea'
      ],
      recoveryTime: 'Acompanhamento periódico com maturação óssea previsível'
    },
    {
      title: 'Sedação Consciente com Médico',
      badge: 'Zero Medo ou Ansiedade',
      shortDesc: 'Tratamentos cirúrgicos com sedação endovenosa administrada por médico anestesiologista dentro da própria clínica.',
      details: [
        'Presença contínua de Anestesiologista com monitorização de ECG, oximetria e pressão',
        'Você relaxa em sono leve e tranquilo, sem perceber o tempo passar',
        'Ideal para quem tem fobia de agulhas, traumas do passado ou reflexo de ânsia',
        'Acordar suave e sem náuseas logo após o término do procedimento'
      ],
      recoveryTime: 'Alta médica acompanhada em menos de 1 hora após a intervenção'
    }
  ];

  const testimonials = [
    {
      name: 'Bernardo Guimarães',
      city: 'Belo Horizonte',
      treatment: 'Cirurgia Ortognática',
      quote: 'Fiz minha cirurgia ortognática com o Dr. André e a transformação foi impressionante. Além do resultado estético incrível e natural, passei a respirar e dormir como nunca na vida. Ele me explicou cada detalhe no modelo 3D antes da cirurgia, me dando total confiança.',
      highlight: 'Transformação funcional e estética'
    },
    {
      name: 'Mariana Resende',
      city: 'Contagem / BH',
      treatment: 'Implantes Guiados & Sisos com Sedação',
      quote: 'Eu tinha pânico absoluto de cirurgia na boca por um trauma antigo. O Dr. André propôs a extração dos sisos e o implante com sedação consciente. Dormi e acordei com tudo pronto, sem sentir absolutamente nada de dor. A equipe é espetacular!',
      highlight: 'Zero dor com sedação consciente'
    },
    {
      name: 'Carlos Eduardo Fontes',
      city: 'Belo Horizonte',
      treatment: 'Implante Dentário com Carga Imediata',
      quote: 'Perdi um dente da frente em um acidente e fui atendido pelo Dr. André. No mesmo dia já saí com o implante e um dente provisório perfeito. O profissionalismo, a pontualidade e a clareza nas explicações são de outro nível.',
      highlight: 'Segurança e rapidez no mesmo dia'
    }
  ];

  const faqs = [
    {
      q: 'Onde são realizadas as cirurgias do Dr. André Araújo?',
      a: 'Procedimentos de pequeno e médio porte (como Implantes Guiados, Extração de Sisos e Enxertos) são realizados na estrutura cirúrgica própria da Eleve Odontologia, com suporte opcional de Sedação Consciente com médico anestesiologista. Já cirurgias de grande porte, como a Cirurgia Ortognática, são realizadas nos principais hospitais parceiros de Belo Horizonte com suporte hospitalar e anestesia geral.'
    },
    {
      q: 'Como funciona a Sedação Consciente para quem tem medo ou fobia de cirurgia?',
      a: 'Um médico anestesiologista acompanha todo o procedimento ao lado da cadeira cirúrgica, administrando medicamentos sedativos seguros pela veia. Você adormece em um estado de profundo relaxamento e serenidade, sem sentir dor, ansiedade ou os barulhos do consultório. Ao término, você desperta tranquilamente e recebe alta pouco tempo depois acompanhado.'
    },
    {
      q: 'O que é a tecnologia de Implantes Guiados por Computador?',
      a: 'É um método avançado no qual realizamos uma tomografia 3D e um escaneamento digital da sua boca. Em um software especializado, o Dr. André planeja a posição exata de cada implante. Uma guia cirúrgica sob medida é impressa em 3D, permitindo instalar o implante através de uma microabertura, sem a necessidade de cortes extensos ou retalhos de gengiva.'
    },
    {
      q: 'A primeira consulta com o Dr. André Araújo já inclui análise de exames?',
      a: 'Sim. As consultas têm duração de 60 minutos para que o Dr. André possa ouvir suas queixas, avaliar sua estrutura facial e analisar detalhadamente exames prévios (como tomografias e radiografias). Se você ainda não tiver os exames, nós emitimos o pedido digital com indicação dos melhores centros diagnósticos de BH.'
    },
    {
      q: 'Como agendar uma avaliação diretamente com o Dr. André?',
      a: 'Você pode entrar em contato diretamente pelo nosso WhatsApp oficial (31) 3234-7977 ou pelo formulário de contato do site. Nossa equipe de recepção reservará um horário exclusivo na agenda do Dr. André.'
    }
  ];

  return (
    <div className="bg-eleve-black text-white font-sans">
      
      {/* =========================================================================
          HERO SECTION IMERSIVO: DR. ANDRÉ ARAÚJO (FLUIDO DESDE O NAVBAR)
      ========================================================================= */}
      <section className="relative bg-eleve-black text-white overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-28">
        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eleve-brand/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-eleve-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Foto Oficial & Badges do Especialista */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Borda Iluminada & Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/15 bg-gradient-to-b from-white/10 to-white/5 aspect-[3/4]">
                  <img 
                    src={IMAGES.drAndre} 
                    alt="Dr. André Araújo - Cirurgião Bucomaxilofacial" 
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Gradiente de leitura sobre a foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-eleve-black via-eleve-black/20 to-transparent" />

                  {/* Informações no rodapé da imagem */}
                  <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                    <div className="inline-flex items-center gap-2 bg-eleve-brand text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 shadow-md">
                      <ShieldCheck size={13} />
                      Cirurgião Titular & Diretor
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
                      Dr. André Araújo
                    </h2>
                    <p className="text-gray-300 text-xs sm:text-sm font-medium">
                      Cirurgia e Traumatologia Buco-Maxilo-Facial • Implantodontia
                    </p>
                  </div>
                </div>

                {/* Selo Flutuante de Autoridade */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-6 -right-4 sm:-right-6 bg-white text-eleve-black p-4 rounded-2xl shadow-2xl border border-gray-100 max-w-[200px]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-eleve-success animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Residência Médica</span>
                  </div>
                  <p className="text-xs font-bold leading-snug text-eleve-black">
                    Hosp. Municipal Dr. Mário Gatti
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Texto de Apresentação & Autoridade */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col justify-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full w-fit">
                <Award size={14} className="text-eleve-gold" />
                <span className="text-eleve-gold font-bold tracking-[0.2em] uppercase text-[11px]">
                  Cirurgia Facial de Alta Complexidade
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-white font-bold leading-[1.12]">
                Precisão Cirúrgica Hospitalar. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-eleve-gold via-white to-gray-300 italic font-light">
                  Acolhimento Humano.
                </span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                Com sólida formação em ambiente hospitalar de urgência e trauma, o <strong className="text-white font-semibold">Dr. André Araújo</strong> é a referência técnica da Eleve Odontologia em <strong className="text-white font-semibold">Cirurgia Ortognática 3D</strong>, <strong className="text-white font-semibold">Implantes Guiados</strong> e <strong className="text-white font-semibold">Extração Minimamente Invasiva de Sisos</strong>.
              </p>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Aliando simulação computacional tridimensional a protocolos de sedação consciente, cada caso é conduzido com planejamento milimétrico para garantir uma experiência confortável, sem dor e com retorno rápido à rotina.
              </p>

              {/* Botões de Ação */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={whatsappDrAndre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-eleve-success to-teal-600 text-white font-bold uppercase tracking-widest text-xs sm:text-sm rounded-lg shadow-[0_0_30px_rgba(5,150,105,0.4)] hover:shadow-[0_0_40px_rgba(5,150,105,0.6)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
                >
                  <Calendar size={18} />
                  Agendar Consulta com Dr. André
                </a>

                <a
                  href="#procedimentos"
                  className="px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold uppercase tracking-widest text-xs sm:text-sm rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  Ver Procedimentos
                </a>
              </div>

              {/* Badges de Confiança */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-[11px] text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-eleve-brand shrink-0" />
                  <span>Consultas de 60 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-eleve-brand shrink-0" />
                  <span>Opção de Sedação Médica</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-eleve-brand shrink-0" />
                  <span>Tomografia e Guia 3D</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. NÚMEROS E MÉTRICAS DE IMPACTO CLÍNICO
      ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between hover:border-eleve-brand/30 transition-colors"
              >
                <div>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-eleve-brand block mb-1">
                    {item.number}
                  </span>
                  <h3 className="text-sm font-bold text-eleve-black uppercase tracking-wider mb-2">
                    {item.label}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FORMAÇÃO ACADÊMICA & CREDENCIAMENTO HOSPITALAR
      ========================================================================= */}
      <section className="py-20 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-eleve-brand font-bold tracking-[0.2em] uppercase text-xs block mb-3">
              Rigor Técnico & Currículo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-eleve-black mb-4">
              Formação Cirúrgica de Excelência
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A cirurgia facial e a implantodontia exigem preparo cirúrgico contínuo. Conheça as principais certificações que sustentam a prática do Dr. André Araújo.
            </p>
            <div className="w-16 h-1 bg-eleve-gold mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {credentials.map((cred, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-eleve-brand" />
                
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-eleve-brand/10 text-eleve-brand px-3 py-1 rounded-full">
                      {cred.badge}
                    </span>
                    <Stethoscope size={18} className="text-gray-400" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-eleve-black mb-1">
                    {cred.role}
                  </h3>
                  <p className="text-sm font-semibold text-eleve-brand mb-4">
                    {cred.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {cred.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ESPECIALIDADES CIRÚRGICAS & PROCEDIMENTOS (INTERATIVO)
      ========================================================================= */}
      <section id="procedimentos" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-eleve-brand font-bold tracking-[0.2em] uppercase text-xs block mb-3">
                Procedimentos Especializados
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-eleve-black mb-4">
                Cirurgia Facial & Reabilitação Oral
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Procedimentos planejados virtualmente com foco em preservação tecidual, estética facial harmônica e recuperação confortável.
              </p>
            </div>

            <a
              href={whatsappDrAndre}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-eleve-brand hover:text-eleve-dark transition-colors border-b-2 border-eleve-brand pb-1 w-fit cursor-pointer"
            >
              Tirar Dúvidas sobre meu caso <ArrowRight size={16} />
            </a>
          </div>

          {/* Grid de Procedimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((proc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-200 flex flex-col justify-between hover:border-eleve-brand hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-eleve-gold/15 text-eleve-dark px-3 py-1 rounded-full">
                      {proc.badge}
                    </span>
                    <Scan size={18} className="text-gray-400 group-hover:text-eleve-brand transition-colors" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-eleve-black mb-3">
                    {proc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                    {proc.shortDesc}
                  </p>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-gray-200">
                    {proc.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check size={14} className="text-eleve-brand mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 bg-white/50 -mx-7 -mb-7 p-5 rounded-b-2xl">
                  <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium mb-3">
                    <Clock size={13} className="text-eleve-brand" />
                    <span>{proc.recoveryTime}</span>
                  </div>

                  <a
                    href={`https://wa.me/553132347977?text=${encodeURIComponent(
                      `Olá, Dr. André! Gostaria de saber mais informações e agendar uma avaliação para ${proc.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-eleve-black text-white text-[11px] font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 group-hover:bg-eleve-brand transition-colors"
                  >
                    Consultar este procedimento <ArrowRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. PROTOCOLO DE ATENDIMENTO EM 4 ETAPAS
      ========================================================================= */}
      <section className="py-20 bg-eleve-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eleve-gold font-bold tracking-[0.2em] uppercase text-xs block mb-3">
              Jornada Cirúrgica Segura
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Como Funciona a Sua Cirurgia
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Da primeira conversa ao pós-operatório final, cada passo é desenhado para eliminar a ansiedade e garantir total previsibilidade.
            </p>
            <div className="w-16 h-1 bg-eleve-brand mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consulta & Tomografia 3D',
                desc: 'Avaliação clínica minuciosa de 60 minutos, escaneamento intraoral e solicitação de exames tomográficos tridimensionais.'
              },
              {
                step: '02',
                title: 'Planejamento Virtual',
                desc: 'Simulação computacional completa. O Dr. André desenha a posição dos implantes ou cortes ósseos antes de tocar no paciente.'
              },
              {
                step: '03',
                title: 'Procedimento Controlado',
                desc: 'Execução cirúrgica de alta precisão no consultório ou hospital, com opção de sedação médica para zero dor e zero medo.'
              },
              {
                step: '04',
                title: 'Pós-Operatório Direto',
                desc: 'Acompanhamento pessoal do Dr. André, com canal direto de suporte e revisões periódicas até a cicatrização completa.'
              }
            ].map((st, sIdx) => (
              <motion.div
                key={sIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sIdx * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-serif font-black text-eleve-gold/40 block mb-4">
                    {st.step}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. DEPOIMENTOS DE PACIENTES DO DR. ANDRÉ
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eleve-brand font-bold tracking-[0.2em] uppercase text-xs block mb-3">
              Experiências Reais
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-eleve-black mb-4">
              O que dizem os pacientes operados
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Histórias de transformação, alívio de dor e recuperação da autoestima sob os cuidados do Dr. André Araújo.
            </p>
            <div className="w-16 h-1 bg-eleve-gold mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="fill-eleve-gold text-eleve-gold" />
                    ))}
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-eleve-brand bg-eleve-brand/10 px-2.5 py-1 rounded-full inline-block mb-4">
                    {t.treatment}
                  </span>

                  <p className="text-sm text-slate-700 italic leading-relaxed mb-6 font-medium">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-eleve-black">{t.name}</h4>
                    <p className="text-gray-400 text-[11px]">{t.city}</p>
                  </div>
                  <span className="text-[10px] text-eleve-success font-semibold flex items-center gap-1">
                    <CheckCircle2 size={12} /> Verificado
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. PERGUNTAS FREQUENTES (FAQ) DO DR. ANDRÉ
      ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-eleve-brand font-bold tracking-[0.2em] uppercase text-xs block mb-3">
              Esclarecimentos Clínicos
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-eleve-black mb-4">
              Dúvidas Frequentes sobre os Procedimentos
            </h2>
            <div className="w-16 h-1 bg-eleve-gold mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50/50 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-100/60 transition-colors cursor-pointer"
                  aria-expanded={activeFaq === index}
                >
                  <span className="font-serif text-lg font-bold text-eleve-black">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`text-eleve-brand shrink-0 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-gray-700 leading-relaxed border-t border-gray-200/60 font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. CTA FINAL DE AGENDAMENTO COM DR. ANDRÉ
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-eleve-black via-gray-900 to-eleve-black text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-eleve-gold mb-6">
            <Sparkles size={14} /> Atendimento Personalizado em BH
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Pronto para transformar sua mastigação, <br />
            estética e qualidade de vida?
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Agende uma consulta estendida com o <strong className="text-white">Dr. André Araújo</strong> na Eleve Odontologia (Ouro Preto / BH) e receba um diagnóstico 3D com plano cirúrgico sob medida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
            <a
              href={whatsappDrAndre}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-gradient-to-r from-eleve-success to-teal-600 text-white font-bold uppercase tracking-widest text-xs sm:text-sm rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-center"
            >
              <Calendar size={18} />
              Agendar no WhatsApp
            </a>

            {onNavigateContact && (
              <button
                onClick={onNavigateContact}
                className="w-full py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold uppercase tracking-widest text-xs sm:text-sm rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Ver Localização & Telefone
              </button>
            )}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-eleve-brand" /> {ADDRESS}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="text-eleve-brand" /> {PHONE_DISPLAY}
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};

export default DrAndrePage;
