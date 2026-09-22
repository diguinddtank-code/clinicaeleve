import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Instagram, 
  Building2, 
  Microscope, 
  Scan, 
  HeartHandshake, 
  Users, 
  FileCheck, 
  Calendar,
  Phone,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { 
  IMAGES, 
  WHATSAPP_LINK, 
  DR_ANDRE_INSTAGRAM, 
  DR_ANA_INSTAGRAM, 
  ADDRESS, 
  PHONE_DISPLAY 
} from '../constants';

interface AboutPageProps {
  onNavigateHome: (sectionId?: string) => void;
  onNavigateContact?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [activeDoctorTab, setActiveDoctorTab] = useState<'andre' | 'ana'>('andre');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Scroll para o topo ao carregar a página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Atualização dinâmica de SEO para a página Sobre Nós
    const originalTitle = document.title;
    document.title = 'Sobre a Eleve Odontologia | Corpo Clínico e História em BH';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const prevDesc = metaDescription?.getAttribute('content') || '';
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Conheça a história da Eleve Odontologia em Belo Horizonte. Corpo clínico titular com Dr. André Araújo e Dra. Ana Luiza, estrutura cirúrgica hospitalar e odontologia 3D.'
      );
    }

    return () => {
      document.title = originalTitle;
      if (metaDescription) {
        metaDescription.setAttribute('content', prevDesc);
      }
    };
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whatsappConsulta = `https://wa.me/553132347977?text=${encodeURIComponent(
    'Olá! Conheci a história da Eleve Odontologia pelo site e gostaria de agendar uma consulta presencial com os especialistas.'
  )}`;

  const pillars = [
    {
      icon: Users,
      title: 'Corpo Clínico Titular',
      badge: 'Sem rotatividade',
      description:
        'Diferente das clínicas comerciais com troca constante de profissionais recém-formados, na Eleve você é acolhido e operado diretamente pelos fundadores e especialistas responsáveis pelo seu plano de tratamento.'
    },
    {
      icon: Building2,
      title: 'Padrão Hospitalar Rigoroso',
      badge: 'Segurança absoluta',
      description:
        'Credenciamento cirúrgico nos principais hospitais de Belo Horizonte. Protocolos de biossegurança de nível hospitalar e sedação médica para quem tem ansiedade ou fobia de dentista.'
    },
    {
      icon: Scan,
      title: 'Odontologia 3D & Previsibilidade',
      badge: 'Fluxo 100% digital',
      description:
        'Escaneamento intraoral digital sem massa desconfortável, tomografia tridimensional e planejamento cirúrgico guiado por computador. O resultado final é planejado com precisão milimétrica antes de iniciar.'
    },
    {
      icon: HeartHandshake,
      title: 'Tempo Dedicado & Pontualidade',
      badge: 'Respeito ao paciente',
      description:
        'Consultas estendidas de 60 a 90 minutos para diagnóstico aprofundado, explicações transparentes e atenção integral. Sala de espera sem lotação e compromisso absoluto com o seu horário.'
    }
  ];

  const milestones = [
    {
      year: '2012',
      title: 'Fundação Acadêmica de Elite',
      desc: 'Início da trajetória com especializações de alta densidade no Hospital Municipal Dr. Mário Gatti e na Universidade Federal de Minas Gerais (UFMG).'
    },
    {
      year: '2016',
      title: 'Experiência Cirúrgica Intensiva',
      desc: 'Atuação constante em plantões de trauma bucomaxilofacial, reconstruções complexas e microcirurgias no ambiente hospitalar.'
    },
    {
      year: '2019',
      title: 'Nascimento da Eleve Odontologia',
      desc: 'Inauguração da sede própria na Rua Sena Madureira, unindo ambiente de hospitalidade ao rigor de um centro cirúrgico privado no Ouro Preto.'
    },
    {
      year: '2023',
      title: 'Centro de Ortodontia Digital e 3D',
      desc: 'Integração de scanners intraorais de última geração e planejamento virtual para cirurgias ortognáticas e alinhadores Invisalign.'
    },
    {
      year: 'Hoje',
      title: 'Referência em Minas Gerais',
      desc: 'Mais de 4.800 pacientes reabilitados e reconhecimento regional em cirurgias orofaciais e tratamentos ortodônticos avançados.'
    }
  ];

  const technologyCards = [
    {
      icon: Scan,
      title: 'Escaneamento Intraoral Digital 3D',
      desc: 'Diga adeus às incômodas moldagens com massa e ânsia. Nosso scanner óptico cria um modelo tridimensional colorido e perfeito da sua boca em menos de três minutos.'
    },
    {
      icon: Microscope,
      title: 'Endodontia Microscópica de Alta Definição',
      desc: 'Tratamentos de canal executados com microscopia clínica, garantindo a localização de canais atípicos e a máxima preservação da estrutura dental natural.'
    },
    {
      icon: ShieldCheck,
      title: 'Central de Esterilização Hospitalar',
      desc: 'Rastreabilidade total dos instrumentais através de autoclaves com barreira sanitária, testes biológicos periódicos e embalagens cirúrgicas seladas a vácuo.'
    },
    {
      icon: FileCheck,
      title: 'Planejamento Cirúrgico Virtual Guiado',
      desc: 'Cirurgias ortognáticas e implantes são simulados previamente em software específico, reduzindo o tempo operatório e acelerando a recuperação pós-operatória.'
    }
  ];

  const institutionalFaqs = [
    {
      q: 'Quem realizará o meu atendimento e procedimentos na clínica?',
      a: 'Você será atendido exclusivamente pelos nossos especialistas titulares: Dr. André Araújo e Dra. Ana Luiza. Nós não repassamos casos para dentistas estagiários ou recém-formados. O profissional que planeja o seu caso é o mesmo que executa cada etapa até a alta final.'
    },
    {
      q: 'A clínica realiza cirurgias com sedação para pacientes ansiosos?',
      a: 'Sim. Compreendemos que muitas pessoas sentem medo ou fobia de procedimentos odontológicos. Para isso, oferecemos protocolo de sedação consciente com médico anestesiologista, proporcionando uma experiência tranquila, sem dor e sem traumas de memória.'
    },
    {
      q: 'Como funciona o acesso e o estacionamento na Eleve?',
      a: 'Estamos estrategicamente localizados na Rua Sena Madureira, 491, no bairro Ouro Preto, em região nobre e de fácil tráfego na Pampulha. Contamos com vagas em frente e amplo estacionamento nas imediações para o seu total conforto e segurança.'
    },
    {
      q: 'Qual é o prazo médio de início para cirurgias e tratamentos?',
      a: 'Após a consulta diagnóstica inicial e a análise dos exames 3D, seu plano de tratamento é apresentado com total transparência de etapas e valores. Em casos de dor ou urgência, priorizamos o acolhimento imediato. Para procedimentos eletivos, o agendamento é estruturado conforme a sua disponibilidade.'
    }
  ];

  return (
    <div className="bg-white text-eleve-black selection:bg-eleve-brand selection:text-white">
      
      {/* HERO SECTION IMERSIVA EDITORIAL */}
      <section className="relative min-h-[90vh] bg-eleve-black text-white flex items-center overflow-hidden pt-28 pb-20">
        
        {/* Glows e Iluminação de Fundo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-eleve-brand/20 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-eleve-gold/15 blur-[120px] pointer-events-none rounded-full" />
        
        {/* Marca d'água sutil */}
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
            <span className="text-eleve-gold">Sobre a Clínica</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Texto Principal */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Sparkles size={14} className="text-eleve-gold" />
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-eleve-gold">
                  Manifesto Institucional
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.12] tracking-tight">
                A odontologia que recusa a produção em massa e prioriza a{' '}
                <span className="gold-gradient-text italic font-serif">arte cirúrgica</span> individualizada.
              </h1>

              <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
                Criada por cirurgiões formados nos mais respeitados centros hospitalares e acadêmicos de Minas Gerais, a Eleve Odontologia nasceu com um propósito intransigente: dedicar tempo verdadeiro, tecnologia tridimensional e atenção cirúrgica minuciosa a cada vida que confia em nossas mãos.
              </p>

              {/* Botões de Ação no Hero */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={whatsappConsulta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-eleve-gold hover:bg-eleve-goldLight text-eleve-black font-bold uppercase tracking-wider text-xs rounded-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Agendar Consulta Exclusiva
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#doutores-detalhes"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-wider text-xs rounded-sm border border-white/20 transition-all duration-300"
                >
                  Conhecer os Especialistas
                </a>
              </div>
            </div>

            {/* Imagem de Destaque com Moldura Editorial */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                
                {/* Borda decorativa dourada deslocada */}
                <div className="absolute -inset-3 border border-eleve-gold/30 rounded-2xl -rotate-1 pointer-events-none" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-eleve-dark aspect-[4/5]">
                  <img 
                    src={IMAGES.doctorsTeam} 
                    alt="Dr. André Araújo e Dra. Ana Luiza na Eleve Odontologia" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eleve-black via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                    <p className="text-white font-serif text-lg font-bold">Dr. André Araújo & Dra. Ana Luiza</p>
                    <p className="text-eleve-gold text-xs uppercase tracking-widest font-semibold mt-0.5">
                      Fundadores e Diretores Clínicos
                    </p>
                  </div>
                </div>

                {/* Badge Flutuante de Autoridade */}
                <div className="absolute -bottom-6 -left-6 bg-white text-eleve-black p-4 rounded-xl shadow-2xl border border-gray-100 hidden sm:flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-eleve-brand/10 text-eleve-brand flex items-center justify-center shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Excelência Médica</p>
                    <p className="font-bold text-sm text-eleve-black">100% Casos Titulados</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Grid de Estatísticas Rápidas */}
          <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <span className="text-3xl lg:text-4xl font-serif font-bold text-eleve-gold">+12 Anos</span>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Trajetória Cirúrgica</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl lg:text-4xl font-serif font-bold text-eleve-brandLight">+4.800</span>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Casos Concluídos</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl lg:text-4xl font-serif font-bold text-eleve-gold">100% 3D</span>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Planejamento Digital</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl lg:text-4xl font-serif font-bold text-eleve-brandLight">Zero</span>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Rotatividade Profissional</p>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 2: A ORIGEM DA ELEVE E A NOSSA FILOSOFIA */}
      <section className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-eleve-brand font-bold tracking-[0.25em] uppercase text-xs block">
                Nossa Origem
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-eleve-black font-bold leading-tight">
                Por que criamos a Eleve no Ouro Preto e Castelo?
              </h2>
              <div className="w-16 h-1 bg-eleve-gold" />
              
              <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed font-normal">
                <p>
                  Durante anos de atuação em grandes blocos cirúrgicos e policlínicas, testemunhamos a massificação do atendimento odontológico. Consultas de dez minutos, planos de tratamento genéricos e a constante troca do profissional que atende o paciente tornaram-se a norma do mercado.
                </p>
                <p>
                  A Eleve foi fundada como um contraponto a esse modelo. Decidimos construir uma clínica onde a precisão de um centro cirúrgico hospitalar pudesse conviver em harmonia com o conforto acolhedor de um ambiente calmo, sofisticado e humano.
                </p>
                <p>
                  Aqui, cada paciente recebe atendimento exclusivo. Se você necessita de uma cirurgia ortognática para correção facial, de um implante de alta estabilidade ou do refinamento ortodôntico de um alinhador transparente, você saberá exatamente quem planejou e quem executará cada detalhe.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src={IMAGES.drAndre} alt="Dr. André Araújo" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src={IMAGES.draAna} alt="Dra. Ana Luiza" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-eleve-black">Compromisso Direto dos Fundadores</p>
                  <p className="text-xs text-slate-500 font-medium">Belo Horizonte, Minas Gerais</p>
                </div>
              </div>
            </div>

            {/* 4 Pilares Inegociáveis */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-eleve-brand/30 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-xl bg-eleve-brand/10 text-eleve-brand flex items-center justify-center">
                            <Icon size={22} />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-eleve-brand bg-eleve-brand/10 px-2.5 py-1 rounded-full">
                            {pillar.badge}
                          </span>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-eleve-black mb-3">
                          {pillar.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 3: DOSSIÊ COMPLETO DOS DOUTORES */}
      <section id="doutores-detalhes" className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-eleve-gold font-bold tracking-[0.25em] uppercase text-xs block mb-3">
              Autoridade Médica
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-eleve-black font-bold mb-4">
              Conheça quem cuidará do seu sorriso
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Qualificação contínua, formação nos maiores polos de saúde do país e dedicação clínica exclusiva.
            </p>
          </div>

          {/* Abas de Seleção dos Doutores */}
          <div className="flex justify-center mb-14">
            <div className="inline-flex p-1.5 bg-gray-100 rounded-full border border-gray-200">
              <button
                onClick={() => setActiveDoctorTab('andre')}
                className={`px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeDoctorTab === 'andre'
                    ? 'bg-eleve-black text-white shadow-md'
                    : 'text-gray-600 hover:text-eleve-black'
                }`}
              >
                Dr. André Araújo
              </button>
              <button
                onClick={() => setActiveDoctorTab('ana')}
                className={`px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeDoctorTab === 'ana'
                    ? 'bg-eleve-gold text-white shadow-md'
                    : 'text-gray-600 hover:text-eleve-black'
                }`}
              >
                Dra. Ana Luiza
              </button>
            </div>
          </div>

          {/* Conteúdo Dinâmico do Doutor */}
          <div className="bg-stone-50 rounded-3xl border border-gray-200 p-8 sm:p-12 lg:p-16 shadow-lg">
            <AnimatePresence mode="wait">
              {activeDoctorTab === 'andre' ? (
                <motion.div
                  key="andre"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                      <img 
                        src={IMAGES.drAndre} 
                        alt="Dr. André Araújo - Cirurgião Bucomaxilofacial" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-eleve-black/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                        <span className="text-eleve-gold text-xs uppercase tracking-widest font-bold">
                          Diretor Cirúrgico
                        </span>
                        <h3 className="font-serif text-3xl font-bold">Dr. André Araújo</h3>
                        <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">
                          Cirurgia Buco-Maxilo-Facial e Implantes
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <div className="inline-block bg-eleve-brand text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                        Responsável Técnico
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-serif font-bold text-eleve-black">
                        Dr. André Araújo
                      </h3>
                      <p className="text-eleve-brand text-sm sm:text-base font-bold uppercase tracking-wider mt-1">
                        Cirurgião Buco-Maxilo-Facial e Especialista em Implantodontia
                      </p>
                    </div>

                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                      Com vasta vivência em cirurgias de alta complexidade, o Dr. André concluiu sua residência hospitalar no prestigiado Hospital Municipal Dr. Mário Gatti. É o cirurgião de referência para casos que demandam intervenção óssea precisa, como a Cirurgia Ortognática para alinhamento das bases ósseas da face, extração segura de sisos inclusos próximos a feixes nervosos e reabilitação com implantes osseointegrados guiados digitalmente.
                    </p>

                    <div className="border-l-2 border-eleve-gold pl-4 py-1 italic text-slate-800 text-sm sm:text-base bg-eleve-gold/5 rounded-r-lg">
                      "A cirurgia facial não admite improvisos. Nosso compromisso é unir a estabilidade biológica da mastigação à harmonia estética natural das feições de cada pessoa."
                    </div>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Credenciais e Destaques Clínicos
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-800 font-medium">
                        <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-200">
                          <CheckCircle2 size={16} className="text-eleve-brand shrink-0" />
                          <span>Residência Hospitalar Dr. Mário Gatti</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-200">
                          <CheckCircle2 size={16} className="text-eleve-brand shrink-0" />
                          <span>Cirurgia Ortognática e Deformidades</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-200">
                          <CheckCircle2 size={16} className="text-eleve-brand shrink-0" />
                          <span>Membro do Corpo Clínico Hospitalar de BH</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-200">
                          <CheckCircle2 size={16} className="text-eleve-brand shrink-0" />
                          <span>Implantes Guiados por Computador</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <a
                        href={DR_ANDRE_INSTAGRAM}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 hover:border-eleve-brand hover:text-eleve-brand transition-all shadow-sm"
                      >
                        <Instagram size={16} className="text-pink-600" />
                        Ver Casos Reais no Instagram
                      </a>

                      <a
                        href={`https://wa.me/553132347977?text=${encodeURIComponent(
                          'Olá! Gostaria de agendar uma avaliação cirúrgica diretamente com o Dr. André Araújo.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-eleve-black hover:bg-eleve-brand text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                      >
                        Avaliar Meu Caso Cirúrgico
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="ana"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                      <img 
                        src={IMAGES.draAna} 
                        alt="Dra. Ana Luiza - Ortodontista e Endodontista" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-eleve-black/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                        <span className="text-eleve-gold text-xs uppercase tracking-widest font-bold">
                          Ortodontia & Endodontia
                        </span>
                        <h3 className="font-serif text-3xl font-bold">Dra. Ana Luiza</h3>
                        <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">
                          Mestre e Pós-Graduada pela UFMG
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <div className="inline-block bg-eleve-gold text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                        Ortodontia Digital & Endodontia
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-serif font-bold text-eleve-black">
                        Dra. Ana Luiza
                      </h3>
                      <p className="text-eleve-gold text-sm sm:text-base font-bold uppercase tracking-wider mt-1">
                        Invisalign Doctor e Especialista em Endodontia Microscópica
                      </p>
                    </div>

                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                      Mestre e pós-graduada pela Universidade Federal de Minas Gerais (UFMG), a Dra. Ana Luiza destaca-se pelo trabalho milimétrico, refinamento estético e extrema delicadeza. Seu foco clínico está em alinhar dentes com discrição absoluta através da tecnologia Invisalign, além de preservar elementos dentários comprometidos por meio do tratamento de canal com microscopia operatória.
                    </p>

                    <div className="border-l-2 border-eleve-brand pl-4 py-1 italic text-slate-800 text-sm sm:text-base bg-eleve-brand/5 rounded-r-lg">
                      "A ortodontia de alto nível não apenas alinha dentes, ela restaura a harmonia do terço inferior da face, melhora a dicção e devolve a autoestima em cada sorriso."
                    </div>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Credenciais e Destaques Clínicos
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-800 font-medium">
                        <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-200">
                          <CheckCircle2 size={16} className="text-eleve-gold shrink-0" />
                          <span>Mestrado e Pós-Graduação na UFMG</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-200">
                          <CheckCircle2 size={16} className="text-eleve-gold shrink-0" />
                          <span>Invisalign Doctor Credenciada</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-200">
                          <CheckCircle2 size={16} className="text-eleve-gold shrink-0" />
                          <span>Endodontia com Microscopia Operatória</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-200">
                          <CheckCircle2 size={16} className="text-eleve-gold shrink-0" />
                          <span>Ortodontia Preventiva e Corretiva</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <a
                        href={DR_ANA_INSTAGRAM}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 hover:border-eleve-gold hover:text-eleve-gold transition-all shadow-sm"
                      >
                        <Instagram size={16} className="text-pink-600" />
                        Ver Casos Reais no Instagram
                      </a>

                      <a
                        href={`https://wa.me/553132347977?text=${encodeURIComponent(
                          'Olá! Gostaria de agendar uma avaliação para Invisalign ou Endodontia com a Dra. Ana Luiza.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-eleve-gold hover:bg-eleve-goldLight text-eleve-black rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                      >
                        Avaliar Meu Caso Ortodôntico
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SEÇÃO 4: TECNOLOGIA E INFRAESTRUTURA DE PONTA */}
      <section className="py-24 lg:py-32 bg-eleve-dark text-white relative overflow-hidden">
        
        {/* Luzes decorativas */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-eleve-brand/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-eleve-gold/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-eleve-brandLight font-bold tracking-[0.25em] uppercase text-xs block mb-3">
              Estrutura & Tecnologia
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Precisão tecnológica aplicada ao seu conforto
            </h2>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
              Investimos constantemente no que existe de mais moderno no cenário odontológico mundial. Cada equipamento tem como objetivo aumentar a previsibilidade clínica, eliminar incômodos e encurtar o tempo de tratamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyCards.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={tech.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-eleve-gold/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-eleve-gold/15 text-eleve-gold flex items-center justify-center mb-6">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3 leading-snug">
                      {tech.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                      {tech.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-eleve-gold text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 size={14} />
                    Padrão Internacional
                  </div>
                </div>
              );
            })}
          </div>

          {/* Galeria da Clínica */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] group">
              <img 
                src={IMAGES.clinic1} 
                alt="Consultório odontológico de alta tecnologia na Eleve" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-serif text-lg font-bold">Consultórios Climatizados e Ergonômicos</p>
                  <p className="text-gray-300 text-xs mt-1">Conforto absoluto durante todo o procedimento</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] group">
              <img 
                src={IMAGES.clinic2} 
                alt="Recepção acolhedora e moderna da Eleve Odontologia" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-serif text-lg font-bold">Recepção Boutique e Espaço Café</p>
                  <p className="text-gray-300 text-xs mt-1">Atmosfera descontraída e acolhedora sem pressa</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 5: LINHA DO TEMPO DA EXCELÊNCIA */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-eleve-brand font-bold tracking-[0.25em] uppercase text-xs block mb-3">
              Nossa Trajetória
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-eleve-black font-bold mb-4">
              Uma história construída caso a caso
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Conheça os marcos da jornada que consolidou a Eleve como centro de referência odontológica.
            </p>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-32 space-y-12">
            {milestones.map((m, idx) => (
              <div key={m.year} className="relative pl-8 md:pl-12 group">
                
                {/* Ponto indicador */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-eleve-brand group-hover:border-eleve-gold group-hover:scale-125 transition-all duration-300" />
                
                {/* Ano no desktop posicionado à esquerda */}
                <span className="hidden md:block absolute -left-32 top-0 text-xl font-serif font-bold text-eleve-brand group-hover:text-eleve-gold transition-colors">
                  {m.year}
                </span>

                <div className="bg-stone-50 p-6 rounded-2xl border border-gray-200 group-hover:shadow-md transition-shadow">
                  <span className="md:hidden inline-block text-xs font-bold text-eleve-brand uppercase tracking-widest mb-1">
                    {m.year}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-eleve-black mb-2">
                    {m.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEÇÃO 6: PERGUNTAS FREQUENTES INSTITUCIONAIS */}
      <section className="py-24 bg-stone-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-eleve-gold font-bold tracking-[0.25em] uppercase text-xs block mb-3">
              Esclarecimentos
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-eleve-black font-bold mb-4">
              Perguntas Frequentes sobre a Clínica
            </h2>
            <p className="text-slate-600 text-base">
              Transparência total desde o primeiro contato.
            </p>
          </div>

          <div className="space-y-4">
            {institutionalFaqs.map((faq, index) => {
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

      {/* SEÇÃO 7: CTA DE ALTO IMPACTO E ESCASSEZ ELEGANTE */}
      <section className="py-24 bg-eleve-black text-white relative overflow-hidden">
        
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-eleve-brand/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eleve-gold/20 border border-eleve-gold/40 text-eleve-gold text-xs uppercase tracking-widest font-bold">
            <Clock size={14} />
            Agendamento Individualizado
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight max-w-3xl mx-auto">
            Seu sorriso merece a precisão de quem trata cada caso como{' '}
            <span className="gold-gradient-text italic font-serif">uma obra única</span>.
          </h2>

          <p className="text-gray-300 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Para garantir consultas aprofundadas e dedicação integral, limitamos o número diário de atendimentos. Converse diretamente com a nossa recepção e reserve o seu horário.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={whatsappConsulta}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-eleve-gold hover:bg-eleve-goldLight text-eleve-black font-bold uppercase tracking-widest text-xs rounded-sm shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Falar com a Recepção no WhatsApp
              <ArrowRight size={16} />
            </a>

            <button
              onClick={() => onNavigateContact ? onNavigateContact() : onNavigateHome('location')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-sm border border-white/20 transition-all cursor-pointer"
            >
              <MapPin size={16} />
              Central de Contato & Localização
            </button>
          </div>

          <div className="pt-10 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs text-gray-400 font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-eleve-gold" />
              <span>Rua Sena Madureira, 491</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-eleve-gold" />
              <span>Telefone: {PHONE_DISPLAY}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-eleve-gold" />
              <span>Ouro Preto & Castelo BH</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;
