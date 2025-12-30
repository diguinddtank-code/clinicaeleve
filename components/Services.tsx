import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle2, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, IMAGES } from '../constants';

const services = [
  {
    title: "Cirurgia Ortognática",
    desc: "Correção de deformidades faciais e mordida. Melhora drástica na estética e respiração.",
    image: IMAGES.serviceOrtognatica, 
    feature: "Especialidade Dr. André",
    benefits: [
      "Harmonização definitiva do perfil facial",
      "Melhora na respiração e apneia do sono",
      "Correção da mordida e mastigação",
      "Planejamento 100% virtual 3D"
    ]
  },
  {
    title: "Implantes Dentários",
    desc: "Recupere a segurança de sorrir com implantes unitários ou protocolos totais.",
    image: IMAGES.serviceImplants,
    feature: "Carga Imediata",
    benefits: [
      "Dentes fixos e seguros",
      "Aparência e sensação natural",
      "Preservação da estrutura óssea",
      "Cirurgia guiada sem cortes extensos"
    ]
  },
  {
    title: "Extração de Siso",
    desc: "Cirurgia segura e minimamente invasiva para sisos inclusos.",
    image: IMAGES.serviceSiso,
    feature: "Sedação Consciente",
    benefits: [
      "Técnica minimamente invasiva",
      "Opção de sedação para conforto total",
      "Recuperação pós-operatória acelerada",
      "Prevenção de infecções e dores futuras"
    ]
  },
  {
    title: "Invisalign & Ortodontia",
    desc: "Alinhadores transparentes e aparelhos estéticos para corrigir seu sorriso com discrição.",
    image: IMAGES.serviceOrto,
    feature: "Escaneamento Digital",
    benefits: [
      "Alinhadores praticamente invisíveis",
      "Removível para comer e higienizar",
      "Previsibilidade do resultado final",
      "Mais conforto que aparelhos fixos"
    ]
  },
  {
    title: "Clareamento Dental",
    desc: "Recupere o brilho natural dos seus dentes. Técnicas de consultório (laser) e caseiro supervisionado.",
    image: IMAGES.serviceClareamento,
    feature: "Sorriso Iluminado",
    benefits: [
      "Resultados visíveis na primeira sessão",
      "Proteção da estrutura dental",
      "Protocolo personalizado anti-sensibilidade",
      "Remoção de manchas profundas"
    ]
  },
  {
    title: "Endodontia (Canal)",
    desc: "Tratamento de canal automatizado (rotatório). Mais rápido, preciso e sem dor.",
    image: IMAGES.serviceEndo,
    feature: "Microscopia",
    benefits: [
      "Alívio imediato da dor de dente",
      "Tecnologia rotatória (mais rápido)",
      "Uso de microscópio para precisão",
      "Salva o dente natural"
    ]
  }
];

const ServiceCard = ({ service, index, onOpen }: { service: any, index: number, onOpen: () => void }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const isImplants = service.title === "Implantes Dentários";
  const yRange = isImplants ? ["-20%", "20%"] : ["-10%", "10%"];
  const scaleValue = isImplants ? 1.25 : 1.1;

  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={onOpen}
      className="group bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      <div className="h-56 overflow-hidden relative">
        <div className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur text-eleve-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm border border-gray-100">
          {service.feature}
        </div>
        
        <motion.div 
            style={{ y, scale: scaleValue }} 
            className="w-full h-full"
        >
            <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
            />
        </motion.div>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between relative bg-white">
        <div>
          <h3 className="text-xl font-serif text-eleve-black mb-3 group-hover:text-eleve-brand transition-colors font-bold">{service.title}</h3>
          <p className="text-slate-700 font-medium text-sm mb-5 leading-relaxed">
            {service.desc}
          </p>
        </div>
        
        <button 
          className="inline-flex items-center gap-2 text-eleve-brand font-bold text-xs uppercase tracking-widest hover:text-eleve-dark transition-colors"
        >
          Saiba Mais 
          <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};

const ServiceModal = ({ service, onClose }: { service: any, onClose: () => void }) => {
  if (!service) return null;

  const whatsappMessage = `Olá! Vi os detalhes sobre *${service.title}* no site da Eleve e gostaria de agendar uma avaliação.`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] md:max-h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors backdrop-blur shadow-sm"
        >
          <X size={20} />
        </button>

        {/* Imagem Mobile (Topo) / Desktop (Esquerda) */}
        <div className="w-full md:w-2/5 h-48 md:h-auto relative shrink-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
          <div className="absolute bottom-4 left-4 text-white md:hidden">
             <span className="text-[10px] font-bold uppercase tracking-widest bg-eleve-brand px-2 py-1 rounded mb-2 inline-block">
                {service.feature}
             </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col overflow-y-auto">
          <div className="hidden md:block mb-4">
             <span className="text-[10px] font-bold uppercase tracking-widest text-eleve-brand bg-eleve-brand/10 px-2 py-1 rounded inline-block">
                {service.feature}
             </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif text-eleve-black font-bold mb-3">
            {service.title}
          </h3>
          
          <p className="text-slate-700 leading-relaxed mb-6 font-medium text-base">
            {service.desc}
          </p>

          <div className="bg-gray-50 rounded-xl p-5 mb-8 border border-gray-100">
            <h4 className="font-bold text-sm uppercase tracking-wide text-gray-600 mb-4">Principais Benefícios</h4>
            <ul className="space-y-3">
              {service.benefits?.map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-slate-800 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-eleve-brand shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-eleve-success text-white font-bold py-3.5 rounded-lg hover:bg-eleve-successHover transition-all shadow-lg hover:shadow-green-200 transform hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Agendar Avaliação
            </a>
            <p className="text-center text-xs text-gray-400 mt-3">
              Fale diretamente com nossa equipe técnica.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="py-20 bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
           <span className="text-eleve-brand font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Procedimentos Especializados</span>
           <h2 className="text-3xl md:text-4xl font-serif text-eleve-black mb-4 font-bold">Nossos Tratamentos</h2>
           <p className="text-slate-700 max-w-2xl mx-auto font-medium text-base">
             Referência em <b>Cirurgias Complexas</b> e <b>Reabilitação Oral</b> no Ouro Preto.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              onOpen={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;