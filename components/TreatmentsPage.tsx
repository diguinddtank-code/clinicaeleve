import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowDown,
  ArrowUp,
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Cpu, 
  Eye, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  FileText, 
  MessageSquare,
  Award,
  Zap,
  Check,
  X
} from 'lucide-react';
import { 
  WHATSAPP_NUMBER, 
  IMAGES, 
  DR_ANDRE_INSTAGRAM, 
  DR_ANA_INSTAGRAM,
  PHONE_DISPLAY 
} from '../constants';
import { updatePageSeo } from '../seo';

interface TreatmentsPageProps {
  onNavigateHome: (sectionId?: string) => void;
  onNavigateContact: () => void;
  onNavigateAbout: () => void;
}

interface TreatmentItem {
  id: string;
  category: 'cirurgia' | 'ortodontia' | 'estetica' | 'reabilitacao';
  title: string;
  subtitle: string;
  tag: string;
  doctor: 'Dr. André Araújo' | 'Dra. Ana Luiza';
  doctorTitle: string;
  doctorImg: string;
  doctorInstagram: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  indications: string[];
  differentials: string[];
  techUsed: string[];
  recoveryTime: string;
  anesthesiaType: string;
  whatsappMessage: string;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ 
  onNavigateHome, 
  onNavigateContact, 
  onNavigateAbout 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'cirurgia' | 'ortodontia' | 'estetica' | 'reabilitacao'>('todos');
  const [activeTreatmentId, setActiveTreatmentId] = useState<string>('ortognatica');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const detailsPanelRef = useRef<HTMLDivElement>(null);
  const listTopRef = useRef<HTMLDivElement>(null);

  // Ação ao selecionar um procedimento com rolagem automática no mobile para a explicação
  const handleSelectTreatment = (id: string) => {
    setActiveTreatmentId(id);

    // Em dispositivos móveis e telas menores onde a explicação fica empilhada abaixo da lista
    setTimeout(() => {
      if (detailsPanelRef.current) {
        const yOffset = -85; // Compensação para a navbar fixa
        const element = detailsPanelRef.current;
        const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }, 60);
  };

  const handleBackToList = () => {
    if (listTopRef.current) {
      const yOffset = -95;
      const element = listTopRef.current;
      const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  // Scroll para o topo e ativação de SEO e Schemas da subpágina de Tratamentos
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updatePageSeo('treatments');
  }, []);

  const treatmentsData: TreatmentItem[] = [
    {
      id: 'ortognatica',
      category: 'cirurgia',
      title: 'Cirurgia Ortognática 3D',
      subtitle: 'Correção de deformidades da face, mordida cruzada e apneia obstrutiva do sono',
      tag: 'Cirurgia Avançada',
      doctor: 'Dr. André Araújo',
      doctorTitle: 'Cirurgião Buco-Maxilo-Facial (Residência Hospitalar Dr. Mário Gatti)',
      doctorImg: IMAGES.drAndre,
      doctorInstagram: DR_ANDRE_INSTAGRAM,
      badge: 'Planejamento 3D',
      shortDesc: 'Alinhamento esquelético dos maxilares com simulação pré-operatória em 3D, restabelecendo a mastigação, a respiração e a harmonia do perfil facial.',
      fullDesc: 'A Cirurgia Ortognática é indicada para pacientes com discrepâncias ósseas que não podem ser resolvidas apenas com aparelho ortodôntico convencional. Na Eleve, todo o caso é planejado virtualmente através de tomografias computadorizadas e softwares de simulação cirúrgica. Isso nos permite antecipar milimetricamente os movimentos ósseos, encurtar o tempo cirúrgico e proporcionar uma recuperação muito mais segura.',
      indications: [
        'Prognatismo (mandíbula excessivamente projetada para a frente)',
        'Retrognatismo (queixo retraído com queixa de perfil sem definição)',
        'Assimetrias faciais visíveis ou mordida aberta esquelética',
        'Dificuldade mastigatória crônica e dores na articulação temporomandibular (ATM)',
        'Apneia obstrutiva do sono causada pelo estreitamento das vias aéreas'
      ],
      differentials: [
        'Planejamento virtual 3D com previsibilidade milimétrica prévia',
        'Realizada em ambiente de centro cirúrgico hospitalar de ponta em Belo Horizonte',
        'Fixação interna rígida com placas e parafusos de titânio biocompatível',
        'Acompanhamento pós-operatório diário e suporte direto do cirurgião responsável'
      ],
      techUsed: ['Tomografia Cone Beam', 'Software de Planejamento Virtual Dolphin', 'Fixação Rígida de Titânio', 'Laserterapia Pós-Operatória'],
      recoveryTime: 'Retorno às atividades leves entre 15 e 21 dias',
      anesthesiaType: 'Anestesia geral hospitalar conduzida por equipe médica anestesiologista',
      whatsappMessage: 'Olá! Gostaria de agendar uma consulta de avaliação para Cirurgia Ortognática com o Dr. André Araújo.'
    },
    {
      id: 'implantes',
      category: 'cirurgia',
      title: 'Implantes Dentários Guiados',
      subtitle: 'Substituição definitiva de dentes perdidos com cirurgia guiada por computador',
      tag: 'Implantes & Próteses',
      doctor: 'Dr. André Araújo',
      doctorTitle: 'Especialista em Implantodontia e Reconstrução Óssea',
      doctorImg: IMAGES.drAndre,
      doctorInstagram: DR_ANDRE_INSTAGRAM,
      badge: 'Cirurgia Guiada',
      shortDesc: 'Instalação de implantes através de guias cirúrgicos impressos em 3D, reduzindo o sangramento, a dor e acelerando a osseointegração.',
      fullDesc: 'Diferente da técnica tradicional de corte gengival livre, o implante guiado por computador é posicionado com precisão tridimensional através de uma guia personalizada milimétrica. O procedimento é extremamente rápido, muitas vezes sem necessidade de incisões extensas nem pontos cirúrgicos convencionais, permitindo que você retorne à rotina com o mínimo de desconforto.',
      indications: [
        'Perda de um dente isolado sem danificar os dentes vizinhos saudáveis',
        'Perda de múltiplos dentes posteriores ou anteriores',
        'Pacientes que utilizam dentaduras instáveis e desejam prótese protocolo fixa',
        'Dentes fraturados na raiz ou condenados periodontalmente'
      ],
      differentials: [
        'Cirurgia guiada por tomografia sem cortes desnecessários na gengiva',
        'Titânio com superfície bioativa para osseointegração acelerada',
        'Possibilidade de carga imediata com dente provisório no mesmo dia conforme avaliação óssea',
        'Protocolo de sedação consciente para total tranquilidade durante a sessão'
      ],
      techUsed: ['Scanner Intraoral 3D', 'Guia Cirúrgico Prototipado', 'Motor de Implante Suíço', 'Biomateriais Importados'],
      recoveryTime: 'Recuperação confortável em 24 a 48 horas',
      anesthesiaType: 'Anestesia local sem dor com opção de sedação médica consciente',
      whatsappMessage: 'Olá! Gostaria de agendar uma consulta para Implantes Dentários Guiados com o Dr. André Araújo.'
    },
    {
      id: 'sisos',
      category: 'cirurgia',
      title: 'Extração Segura de Sisos Inclusos',
      subtitle: 'Cirurgia orofacial minimamente invasiva para dentes do siso inclusos ou impactados',
      tag: 'Cirurgia de Sisos',
      doctor: 'Dr. André Araújo',
      doctorTitle: 'Cirurgião Buco-Maxilo-Facial',
      doctorImg: IMAGES.drAndre,
      doctorInstagram: DR_ANDRE_INSTAGRAM,
      badge: 'Atraumática',
      shortDesc: 'Remoção precisa de terceiros molares com preservação óssea, instrumentação cirúrgica delicada e controle rigoroso de edema e dor.',
      fullDesc: 'O siso retido ou impactado pode pressionar as raízes dos dentes vizinhos, causar cistos patológicos, infecções agudas (pericoronarite) e dores de cabeça constantes. Na Eleve, a cirurgia é realizada por cirurgião bucomaxilo especialista, com planejamento radiográfico e tomográfico que mapeia exatamente o nervo alveolar inferior, prevenindo dormências ou lesões nervosas.',
      indications: [
        'Dentes do siso que não nasceram e estão deitados no osso',
        'Episódios recorrentes de inflamação e dor na gengiva posterior',
        'Recomendação ortodôntica antes ou depois do uso de alinhadores',
        'Risco de reabsorção radicular no segundo molar adjacente'
      ],
      differentials: [
        'Mapeamento tridimensional prévio da proximidade do nervo alveolar',
        'Possibilidade de remoção dos 4 sisos em uma única sessão confortável',
        'Opção de sedação venosa para o paciente dormir com acompanhamento anestésico',
        'Kit pós-operatório completo com medicações prescritas e laserterapia cicatrizante'
      ],
      techUsed: ['Tomografia Computadorizada', 'Motores Cirúrgicos de Alta Velocidade', 'Laser Vermelho e Infravermelho', 'Suturas Monofilamentares'],
      recoveryTime: 'Repouso de 3 a 5 dias para cicatrização inicial',
      anesthesiaType: 'Anestesia local anestésica profunda com opção de sedação médica',
      whatsappMessage: 'Olá! Gostaria de solicitar uma avaliação para extração de Sisos com o Dr. André Araújo.'
    },
    {
      id: 'invisalign',
      category: 'ortodontia',
      title: 'Invisalign & Ortodontia Digital',
      subtitle: 'Alinhadores transparentes sob medida sem braquetes metálicos nem desconforto',
      tag: 'Ortodontia Digital',
      doctor: 'Dra. Ana Luiza',
      doctorTitle: 'Invisalign Doctor, Mestre e Pós-Graduada pela UFMG',
      doctorImg: IMAGES.draAna,
      doctorInstagram: DR_ANA_INSTAGRAM,
      badge: '100% Digital',
      shortDesc: 'Tecnologia ortodôntica americana com alinhadores invisíveis, previsibilidade virtual do sorriso e sem restrições alimentares.',
      fullDesc: 'Conduzido pela Dra. Ana Luiza, o tratamento com alinhadores transparentes Invisalign representa o ápice da conveniência e da estética dental. Através do escaneamento intraoral tridimensional, eliminamos completamente as moldagens de gesso antigas. Você visualiza na tela cada etapa da movimentação dentária antes mesmo de começar a usar a primeira placa alinhadora.',
      indications: [
        'Dentes apinhados ou girados que prejudicam a harmonia do sorriso',
        'Espaçamentos excessivos entre os dentes (diastemas)',
        'Mordidas abertas, cruzadas ou sobremordida profunda',
        'Adultos e profissionais que não querem usar aparelhos metálicos visíveis'
      ],
      differentials: [
        'Planejamento personalizado conduzido diretamente por Mestre pela UFMG',
        'Removível para comer o que quiser e fazer a higiene bucal perfeita',
        'Praticamente imperceptível para quem conversa com você a curta distância',
        'Menos consultas presenciais de emergência por quebra de peças'
      ],
      techUsed: ['Scanner Intraoral 3D de Alta Resolução', 'Software ClinCheck 3D', 'Polímero SmartTrack Patenteado'],
      recoveryTime: 'Zero tempo de recuperação; adaptação suave nos primeiros 2 dias',
      anesthesiaType: 'Procedimento não invasivo, sem qualquer necessidade de anestesia',
      whatsappMessage: 'Olá! Gostaria de agendar uma consulta para alinhadores Invisalign com a Dra. Ana Luiza.'
    },
    {
      id: 'autoligado',
      category: 'ortodontia',
      title: 'Aparelhos Autoligados & Safira Estética',
      subtitle: 'Alinhamento dental avançado com braquetes de cristal de safira e tecnologia autoligada sem atrito',
      tag: 'Ortodontia Fixa',
      doctor: 'Dra. Ana Luiza',
      doctorTitle: 'Ortodontista, Mestre e Pós-Graduada pela UFMG',
      doctorImg: IMAGES.draAna,
      doctorInstagram: DR_ANA_INSTAGRAM,
      badge: 'Safira Pura',
      shortDesc: 'Braquetes translúcidos de safira e sistemas autoligados que proporcionam movimentação rápida e biológica sem borrachinhas manchadas.',
      fullDesc: 'Para pacientes que buscam a eficácia consagrada da ortodontia fixa com a máxima discrição estética, a Dra. Ana Luiza trabalha com sistemas autoligados e braquetes de cristal de safira. Diferente dos aparelhos metálicos ou cerâmicos convencionais, os braquetes de safira são translúcidos e não amarelam com café, vinho ou alimentos pigmentados. A tecnologia autoligada elimina as ligaduras elásticas, reduzindo o atrito e permitindo consultas de manutenção mais espaçadas e tratamentos muito mais confortáveis.',
      indications: [
        'Desalinhamentos moderados a severos que necessitam de controle tridimensional contínuo',
        'Fechamento de diastemas (espaços) e correção de apinhamentos dentários acentuados',
        'Mordida cruzada, mordida profunda ou mordida aberta esquelética',
        'Preparo ortodôntico de nivelamento prévio para Cirurgia Ortognática',
        'Pacientes que buscam a precisão do aparelho fixo com discrição estética total'
      ],
      differentials: [
        'Braquetes de safira monocristalina transparentes que se fundem à cor do esmalte',
        'Mecanismo autoligado de baixo atrito, promovendo movimentação mais rápida e biológica',
        'Consultas de ativação com intervalos maiores (a cada 6 a 8 semanas)',
        'Higienização muito mais simples pela ausência de elásticos que retêm placa bacteriana'
      ],
      techUsed: ['Braquetes de Cristal de Safira', 'Fios Termoativados com Memória de Forma', 'Mapeamento Digital Oclusal', 'Fotografia Odontológica Digital'],
      recoveryTime: 'Adaptação confortável em 3 a 5 dias; alimentação normal sem incômodos',
      anesthesiaType: 'Procedimento não invasivo de colagem de braquetes, sem dor e sem anestesia',
      whatsappMessage: 'Olá! Gostaria de solicitar uma avaliação para Aparelhos Autoligados e Safira com a Dra. Ana Luiza.'
    },
    {
      id: 'clareamento',
      category: 'estetica',
      title: 'Clareamento Dental & Estética Integrada',
      subtitle: 'Protocolos supervisionados de alta durabilidade com proteção do esmalte e sem sensibilidade',
      tag: 'Estética Dental',
      doctor: 'Dra. Ana Luiza',
      doctorTitle: 'Ortodontista e Especialista em Harmonia do Sorriso',
      doctorImg: IMAGES.draAna,
      doctorInstagram: DR_ANA_INSTAGRAM,
      badge: 'Sem Sensibilidade',
      shortDesc: 'Combinação refinada de clareamento no consultório e moldeiras personalizadas com géis de liberação controlada.',
      fullDesc: 'O clareamento na Eleve é planejado para clarear os pigmentos internos da dentina sem agredir a estrutura do esmalte. Aplicamos protocolos avançados com barreira gengival de fotopolimerização e agentes neutralizadores de sensibilidade, permitindo dentes naturalmente brancos, luminosos e com tonalidade estável ao longo do tempo.',
      indications: [
        'Dentes amarelados pelo tempo, café, chá, vinho tinto ou tabaco',
        'Desejo de realçar a estética do sorriso antes de eventos e casamentos',
        'Uniformização de cor antes de realizar restaurações estéticas ou facetas',
        'Pacientes que tentaram clarear antes e sentiram sensibilidade dolorosa'
      ],
      differentials: [
        'Gel de pH neutro enriquecido com nitrato de potássio e flúor protetor',
        'Moldeiras individualizadas com vedamento perfeito contra vazamentos',
        'Acompanhamento de cor com escala biométrica digital de alta precisão',
        'Preservação incondicional da integridade biológica dos dentes'
      ],
      techUsed: ['Luz LED Térmica Fria', 'Barreira Gengival Fotopolimerizável', 'Escala Vita 3D Master'],
      recoveryTime: 'Zero tempo de recuperação; resultado evidente desde as primeiras aplicações',
      anesthesiaType: 'Não requer anestesia; aplicação confortável',
      whatsappMessage: 'Olá! Gostaria de agendar uma consulta para Clareamento Dental com a Dra. Ana Luiza.'
    },
    {
      id: 'enxertos',
      category: 'reabilitacao',
      title: 'Enxertos Ósseos & Reconstrução Alveolar',
      subtitle: 'Regeneração óssea tecidual guiada para viabilizar implantes em áreas com atrofia',
      tag: 'Enxerto Ósseo',
      doctor: 'Dr. André Araújo',
      doctorTitle: 'Cirurgião Buco-Maxilo-Facial e Implantodontista',
      doctorImg: IMAGES.drAndre,
      doctorInstagram: DR_ANDRE_INSTAGRAM,
      badge: 'Biomateriais',
      shortDesc: 'Reconstrução de volume ósseo perdido com biomateriais certificados, membranas de colágeno e bioengenharia tecidual.',
      fullDesc: 'Quando um dente é perdido há muitos anos, o osso da mandíbula ou maxila sofre um processo natural de reabsorção e afinamento. Para que o implante dentário tenha estabilidade e longevidade de décadas, o Dr. André Araújo realiza a reconstrução de espessura e altura através de enxertos ósseos com membranas biocompatíveis e técnicas cirúrgicas comprovadas pela literatura científica mundial.',
      indications: [
        'Pouca espessura ou altura óssea diagnosticada na tomografia para implantes',
        'Perdas dentárias antigas com colapso do contorno do osso e da gengiva',
        'Levantamento de seio maxilar (Sinus Lift) na região posterior superior',
        'Preservação do alvéolo imediatamente após uma extração dentária complexa'
      ],
      differentials: [
        'Utilização exclusiva de biomateriais líderes de mercado com certificação internacional',
        'Fibrina rica em plaquetas e leucócitos (L-PRF) para acelerar a cicatrização',
        'Técnica minimamente traumática planejada por tomografia volumétrica',
        'Possibilidade de instalação simultânea do implante em casos selecionados'
      ],
      techUsed: ['Biomateriais Particulados de Hidroxiapatita', 'Membranas Reabsorvíveis de Colágeno', 'Centrífuga para Fatores de Crescimento L-PRF'],
      recoveryTime: 'Retorno às atividades em 48 a 72 horas; maturação óssea de 4 a 6 meses',
      anesthesiaType: 'Anestesia local profunda associada a sedação consciente médica',
      whatsappMessage: 'Olá! Gostaria de solicitar uma avaliação para Enxerto Ósseo com o Dr. André Araújo.'
    }
  ];

  const filteredTreatments = selectedCategory === 'todos' 
    ? treatmentsData 
    : treatmentsData.filter(t => t.category === selectedCategory);

  const activeTreatment = treatmentsData.find(t => t.id === activeTreatmentId) || treatmentsData[0];

  const comparisonRows = [
    {
      feature: 'Corpo Clínico Responsável',
      mass: 'Dentistas terceirizados, recém-formados ou em rodízio constante.',
      eleve: 'Especialistas titulares Dr. André Araújo e Dra. Ana Luiza presentes em cada etapa.'
    },
    {
      feature: 'Tempo por Consulta',
      mass: 'Atendimentos acelerados de 15 a 20 minutos com fila de espera.',
      eleve: 'Consultas dedicadas de 60 a 90 minutos para diagnóstico e cirurgia com calma.'
    },
    {
      feature: 'Planejamento e Tecnologia',
      mass: 'Moldagens antigas com pasta desconfortável e radiografias 2D simples.',
      eleve: 'Scanner intraoral 3D, tomografia computadorizada e planejamento virtual guiado.'
    },
    {
      feature: 'Controle de Fobia e Dor',
      mass: 'Apenas anestesia local comum, sem suporte médico para ansiedade.',
      eleve: 'Protocolo de sedação consciente com médico anestesiologista dedicado.'
    },
    {
      feature: 'Biossegurança & Ambiente',
      mass: 'Consultórios compartilhados com grande fluxo de pessoas e pressa.',
      eleve: 'Centro cirúrgico privado no Ouro Preto com esterilização de nível hospitalar.'
    }
  ];

  const treatmentsFaqs = [
    {
      q: 'Como sei qual é o tratamento ideal para o meu caso?',
      a: 'A resposta definitiva surge na consulta diagnóstica inicial. Nós realizamos anamnese detalhada, fotos em alta resolução, avaliação óssea e mastigatória completa. Explicamos cada alternativa com transparência para que você tome sua decisão com total segurança.'
    },
    {
      q: 'Pacientes com medo de dentista podem fazer cirurgia com sedação?',
      a: 'Com certeza. Para cirurgias como sisos inclusos, implantes e enxertos, oferecemos o protocolo de sedação consciente com médico anestesiologista. Você permanece dormindo em estado de relaxamento profundo, sem sentir dor e sem guardar lembranças desconfortáveis do procedimento.'
    },
    {
      q: 'Quanto tempo dura o tratamento com alinhadores Invisalign?',
      a: 'O prazo varia conforme a complexidade do desalinhamento, mas tratamentos estéticos leves costumam ser concluídos entre 6 e 10 meses. Casos de média e alta complexidade levam de 12 a 18 meses, com a vantagem de não ter braquetes colados nem emergências de fios furando a boca.'
    },
    {
      q: 'A clínica realiza exames tomográficos na própria consulta?',
      a: 'Possuímos parcerias com os centros radiológicos de excelência mais próximos no bairro Ouro Preto e Pampulha, com guia de encaminhamento digital prioritário. Toda a análise diagnóstica 3D é integrada diretamente em nossos computadores cirúrgicos.'
    }
  ];

  return (
    <div className="bg-white text-eleve-black selection:bg-eleve-brand selection:text-white">
      
      {/* HERO SECTION EDITORIAL DOS TRATAMENTOS */}
      <section className="relative min-h-[55vh] bg-eleve-black text-white flex items-center overflow-hidden pt-28 pb-20">
        
        {/* Glows e Luzes Atmosféricas */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[450px] bg-eleve-brand/20 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[380px] bg-eleve-gold/15 blur-[130px] pointer-events-none rounded-full" />
        
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
            <span className="text-eleve-gold">Tratamentos & Procedimentos</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-eleve-gold whitespace-nowrap">
                Procedimentos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.12] tracking-tight">
              Ciência cirúrgica de precisão, tecnologia 3D e{' '}
              <span className="gold-gradient-text italic font-serif">harmonia orofacial</span>.
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed">
              Cada sorriso e cada anatomia óssea exigem planejamento biológico exclusivo. Conheça nossos tratamentos cirúrgicos, ortodônticos e reabilitadores conduzidos integralmente por cirurgiões titulares em Belo Horizonte.
            </p>
          </div>

          {/* Filtros de Categoria em Pílulas */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-12 pt-8 border-t border-white/10">
            {[
              { id: 'todos', label: 'Todos os Procedimentos' },
              { id: 'cirurgia', label: 'Cirurgias & Implantes' },
              { id: 'ortodontia', label: 'Ortodontia Digital' },
              { id: 'reabilitacao', label: 'Reabilitação & Enxertos' },
              { id: 'estetica', label: 'Estética & Clareamento' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id as any);
                  if (cat.id !== 'todos') {
                    const firstOfCat = treatmentsData.find(t => t.category === cat.id);
                    if (firstOfCat) {
                      setActiveTreatmentId(firstOfCat.id);
                    }
                  }
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-eleve-gold text-eleve-black shadow-lg font-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/15 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* SEÇÃO 2: VITRINE INTERATIVA DOS TRATAMENTOS (DOSSIÊ PROFUNDO) */}
      <section className="py-24 bg-stone-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-eleve-brand font-bold tracking-[0.25em] uppercase text-xs block">
              Catálogo Especializado
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-eleve-black font-bold">
              Selecione o procedimento para ver os detalhes clínicos
            </h2>
            <p className="text-slate-600 text-base">
              Conheça as indicações anatômicas, o tempo estimado de recuperação, a tecnologia empregada e o cirurgião titular de cada área.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Lista Lateral de Seleção dos Tratamentos */}
            <div ref={listTopRef} className="lg:col-span-4 space-y-3">
              {filteredTreatments.map(t => {
                const isSelected = activeTreatmentId === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleSelectTreatment(t.id)}
                    className={`w-full p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer active:scale-[0.99] ${
                      isSelected
                        ? 'bg-eleve-black text-white border-eleve-black shadow-xl ring-2 ring-eleve-gold/40'
                        : 'bg-white text-slate-800 border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shrink-0 whitespace-nowrap ${
                        isSelected ? 'bg-eleve-gold text-eleve-black' : 'bg-stone-100 text-slate-600'
                      }`}>
                        {t.tag}
                      </span>
                      <div className="shrink-0 flex items-center gap-1.5">
                        {isSelected && (
                          <span className="lg:hidden text-[10px] font-bold uppercase tracking-wider text-eleve-gold">
                            Ativo
                          </span>
                        )}
                        <ChevronRight 
                          size={16} 
                          className={`transition-transform duration-300 ${
                            isSelected 
                              ? 'text-eleve-gold rotate-90 lg:rotate-0' 
                              : 'text-slate-400'
                          }`} 
                        />
                      </div>
                    </div>

                    <h3 className="font-serif font-bold text-lg leading-snug">
                      {t.title}
                    </h3>
                    <p className={`text-xs mt-1.5 line-clamp-2 ${isSelected ? 'text-gray-300' : 'text-slate-500'}`}>
                      {t.subtitle}
                    </p>

                    <div className="mt-4 pt-3 border-t border-gray-100/10 flex items-center justify-between gap-2 text-[11px]">
                      <span className={`truncate ${isSelected ? 'text-gray-300' : 'text-slate-600 font-semibold'}`}>
                        {t.doctor}
                      </span>
                      <span className={`shrink-0 font-bold flex items-center gap-1.5 ${isSelected ? 'text-eleve-gold' : 'text-eleve-brand'}`}>
                        {isSelected ? 'Ver detalhes abaixo' : 'Ver detalhes'}
                        <ArrowDown size={13} className={isSelected ? 'animate-bounce text-eleve-gold' : 'text-eleve-brand'} />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Painel Central do Tratamento Ativo (Dossiê Aprofundado) */}
            <div 
              ref={detailsPanelRef}
              id="treatment-details-panel"
              className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-2xl space-y-10 relative scroll-mt-24 transition-all duration-300"
            >
              {/* Barra de controle rápido para mobile */}
              <div className="lg:hidden flex items-center justify-between pb-4 border-b border-gray-100 gap-2">
                <button
                  type="button"
                  onClick={handleBackToList}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-eleve-brand py-2 px-3.5 rounded-xl bg-stone-100 border border-stone-200 cursor-pointer active:scale-95 transition-transform"
                >
                  <ArrowUp size={14} className="text-eleve-brand" />
                  Trocar procedimento
                </button>

                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  Explicação ativa
                </span>
              </div>
              
              {/* Header do Dossiê */}
              <div className="border-b border-gray-100 pb-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-eleve-brand px-3 py-1 rounded-full bg-eleve-brand/10 border border-eleve-brand/20 whitespace-nowrap">
                    {activeTreatment.tag}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-eleve-gold px-3 py-1 rounded-full bg-amber-50 border border-amber-200 whitespace-nowrap">
                    {activeTreatment.badge}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-eleve-black font-bold leading-tight">
                  {activeTreatment.title}
                </h2>

                <p className="text-slate-600 text-base sm:text-lg font-medium">
                  {activeTreatment.subtitle}
                </p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify pt-2">
                  {activeTreatment.fullDesc}
                </p>
              </div>

              {/* Responsável Titular */}
              <div className="p-6 rounded-2xl bg-stone-50 border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
                <img 
                  src={activeTreatment.doctorImg} 
                  alt={activeTreatment.doctor} 
                  className="w-20 h-20 rounded-full object-cover border-2 border-eleve-gold shadow-md shrink-0" 
                />
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-eleve-brand block">
                    Cirurgião Titular Responsável
                  </span>
                  <p className="text-xl font-serif font-bold text-eleve-black">
                    {activeTreatment.doctor}
                  </p>
                  <p className="text-xs text-slate-600 font-medium">
                    {activeTreatment.doctorTitle}
                  </p>
                </div>
                <div className="sm:ml-auto shrink-0">
                  <a
                    href={activeTreatment.doctorInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-eleve-brand hover:text-eleve-dark transition-colors inline-flex items-center gap-1.5"
                  >
                    Ver Casos Clínicos
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Grid: Para quem é indicado & Diferenciais da Eleve */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Indicações */}
                <div className="space-y-4">
                  <h4 className="text-base font-serif font-bold text-eleve-black flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-eleve-brand" />
                    Principais Indicações Clínicas
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {activeTreatment.indications.map(ind => (
                      <li key={ind} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-eleve-brand mt-2 shrink-0" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diferenciais */}
                <div className="space-y-4">
                  <h4 className="text-base font-serif font-bold text-eleve-black flex items-center gap-2">
                    <ShieldCheck size={18} className="text-eleve-gold" />
                    Diferenciais do Protocolo Eleve
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {activeTreatment.differentials.map(diff => (
                      <li key={diff} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-eleve-gold mt-2 shrink-0" />
                        <span>{diff}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Tecnologias, Recuperação e Anestesia */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-gray-100">
                <div className="p-4 rounded-xl bg-stone-50 border border-gray-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                    Tecnologias Envolvidas
                  </p>
                  <p className="text-xs font-semibold text-slate-800 leading-snug">
                    {activeTreatment.techUsed.join(', ')}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-gray-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                    Previsão de Recuperação
                  </p>
                  <p className="text-xs font-semibold text-slate-800 leading-snug">
                    {activeTreatment.recoveryTime}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-gray-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                    Tipo de Anestesia
                  </p>
                  <p className="text-xs font-semibold text-slate-800 leading-snug">
                    {activeTreatment.anesthesiaType}
                  </p>
                </div>
              </div>

              {/* Botão de Agendamento Imediato para este Procedimento */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
                <div>
                  <p className="text-sm font-bold text-eleve-black">Deseja agendar sua avaliação para este tratamento?</p>
                  <p className="text-xs text-slate-500">Nossa recepção consultará a agenda do cirurgião responsável.</p>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(activeTreatment.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  <MessageSquare size={16} />
                  Agendar Consulta no WhatsApp
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Botão de Retorno no Mobile */}
              <div className="lg:hidden pt-2 text-center border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleBackToList}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <ArrowUp size={14} className="text-eleve-brand" />
                  Voltar e escolher outro procedimento
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 3: COMPARATIVO TRANSPARENTE (MASSAL VS. ELEVE) */}
      <section className="py-24 bg-eleve-black text-white relative overflow-hidden">
        
        {/* Glows */}
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-eleve-gold/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-eleve-gold font-bold tracking-[0.25em] uppercase text-xs block">
              Transparência & Ética Médica
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              A diferença entre odontologia de franquia e uma clínica cirúrgica boutique
            </h2>
            <p className="text-gray-300 text-base font-light">
              Entenda por que recusamos a produção em massa e priorizamos o rigor biológico em Belo Horizonte.
            </p>
          </div>

          <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-12 bg-white/10 p-5 sm:p-6 text-xs font-bold uppercase tracking-wider text-gray-300 border-b border-white/10">
              <div className="col-span-12 sm:col-span-4">Critério Clínico</div>
              <div className="col-span-6 sm:col-span-4 text-red-300 hidden sm:block">Clínicas de Franquia Comuns</div>
              <div className="col-span-12 sm:col-span-4 text-eleve-gold font-black">Padrão Eleve Odontologia</div>
            </div>

            <div className="divide-y divide-white/5">
              {comparisonRows.map((row, idx) => (
                <div key={row.feature} className="grid grid-cols-12 p-5 sm:p-6 items-center gap-4 sm:gap-6 text-sm">
                  <div className="col-span-12 sm:col-span-4 font-serif font-bold text-white text-base">
                    {row.feature}
                  </div>
                  <div className="col-span-12 sm:col-span-4 text-gray-400 text-xs sm:text-sm font-light flex items-start gap-2">
                    <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <span>{row.mass}</span>
                  </div>
                  <div className="col-span-12 sm:col-span-4 text-white text-xs sm:text-sm font-medium flex items-start gap-2 bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                    <Check size={16} className="text-eleve-gold shrink-0 mt-0.5" />
                    <span className="text-gray-100">{row.eleve}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 4: PROTOCOLO DE SEDAÇÃO CONSCIENTE PARA PACIENTES ANSIOSOS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-eleve-brand/10 border border-eleve-brand/20">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-eleve-brand whitespace-nowrap">
                  Sedação Consciente
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-eleve-black font-bold leading-tight">
                Sente ansiedade ou fobia ao sentar na cadeira do dentista?
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed text-justify">
                Você não precisa adiar sua cirurgia ou o tratamento que devolverá sua mastigação. Na Eleve Odontologia, cirurgias de sisos, implantes e enxertos podem ser realizadas sob sedação consciente com médico anestesiologista dedicado ao monitoramento contínuo dos seus sinais vitais.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-gray-200">
                  <CheckCircle2 size={20} className="text-eleve-brand mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-eleve-black">Estado de Sono Profundo e Relaxamento</p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Você relaxa, adormece com conforto e acorda com o procedimento cirúrgico totalmente concluído.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-gray-200">
                  <CheckCircle2 size={20} className="text-eleve-brand mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-eleve-black">Amnésia Retrograda Positiva</p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      O paciente não guarda memórias auditivas ou sensoriais desconfortáveis da cirurgia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-gray-200">
                  <CheckCircle2 size={20} className="text-eleve-brand mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-eleve-black">Recuperação Rápida no Próprio Dia</p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Após breve período de repouso assistido na clínica, você retorna para sua residência com segurança.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigateContact()}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-eleve-black hover:bg-eleve-brand text-white font-bold uppercase tracking-wider text-xs rounded-sm transition-all shadow-md cursor-pointer"
                >
                  Tirar Dúvidas sobre Sedação na Recepção
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-stone-900">
                <img 
                  src={IMAGES.clinic || "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200"} 
                  alt="Centro Cirúrgico e Consultório Eleve Odontologia" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200";
                  }}
                  className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eleve-black/85 via-eleve-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                  <p className="text-xs uppercase tracking-widest font-bold text-eleve-gold">
                    Sede Própria no Ouro Preto
                  </p>
                  <p className="text-xl font-serif font-bold text-white mt-1">
                    Equipamentos hospitalares integrados ao acolhimento humano
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 5: FAQ ESPECÍFICO DE TRATAMENTOS */}
      <section className="py-24 bg-stone-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-eleve-gold font-bold tracking-[0.25em] uppercase text-xs block">
              Esclarecimentos Clínicos
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-eleve-black font-bold">
              Perguntas Frequentes sobre Procedimentos e Cirurgias
            </h2>
            <p className="text-slate-600 text-base">
              Tire suas principais dúvidas sobre indicações, sedação e prazos.
            </p>
          </div>

          <div className="space-y-4">
            {treatmentsFaqs.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div 
                  key={faq.q}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
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

      {/* SEÇÃO 6: CTA FINAL DE AGENDAMENTO EXCLUSIVO */}
      <section className="py-24 bg-eleve-black text-white relative overflow-hidden">
        
        {/* Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-eleve-gold/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <span className="text-eleve-gold font-bold uppercase tracking-widest text-xs block">
            Agenda Exclusiva & Atendimento Individual
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight max-w-3xl mx-auto">
            Dê o primeiro passo para o tratamento que transformará sua{' '}
            <span className="gold-gradient-text italic font-serif">saúde e autoestima</span>.
          </h2>

          <p className="text-gray-300 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Nossa equipe de recepção está pronta para esclarecer dúvidas preliminares, verificar horários disponíveis com o Dr. André ou a Dra. Ana Luiza e acolher o seu caso com total discrição.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigateContact()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-eleve-gold hover:bg-eleve-goldLight text-eleve-black font-bold uppercase tracking-widest text-xs rounded-sm shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer font-black"
            >
              Ir para Central de Agendamento
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => onNavigateAbout()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-sm border border-white/20 transition-all cursor-pointer"
            >
              Conhecer a História dos Doutores
            </button>
          </div>

          <div className="pt-8 text-xs text-gray-400 font-semibold uppercase tracking-wider flex flex-wrap justify-center gap-8">
            <span>Rua Sena Madureira, 491, Ouro Preto</span>
            <span className="hidden sm:inline">•</span>
            <span>Telefone: {PHONE_DISPLAY}</span>
            <span className="hidden sm:inline">•</span>
            <span>Belo Horizonte, MG</span>
          </div>

        </div>
      </section>

    </div>
  );
};

export default TreatmentsPage;
