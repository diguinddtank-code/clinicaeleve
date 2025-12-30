import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Mariana Costa",
    text: "Experiência impecável. Do ambiente ao resultado final da cirurgia de siso, tudo transmite segurança. A equipe é fantástica.",
    treatment: "Cirurgia Oral",
    time: "há 2 semanas"
  },
  {
    name: "Ricardo Mendes",
    text: "Os implantes ficaram perfeitos. O Dr. André é um artista. Recomendo para quem busca o melhor em BH sem medo.",
    treatment: "Implantes",
    time: "há 1 mês"
  },
  {
    name: "Fernanda Oliveira",
    text: "A Dra. Ana transformou meu sorriso com Invisalign. Atendimento pontual e extremamente cuidadoso em cada detalhe.",
    treatment: "Ortodontia",
    time: "há 3 semanas"
  },
  {
    name: "Carlos Eduardo",
    text: "Fiz canal sem sentir dor nenhuma. A tecnologia que eles usam é impressionante. Parabéns à toda equipe da Eleve.",
    treatment: "Endodontia",
    time: "há 2 meses"
  },
  {
    name: "Patrícia Lima",
    text: "Clínica linda, atendimento maravilhoso. Fiz facetas de resina e amei o resultado natural. Autoestima renovada!",
    treatment: "Estética",
    time: "há 1 semana"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-eleve-dark">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1629909615184-74f495363b63?auto=format&fit=crop&q=80&w=2000')"
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-eleve-dark via-transparent to-eleve-dark"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center">
           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 mb-6">
              <span className="flex gap-1">
                 {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Excelência em BH</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Pacientes Reais. <span className="text-eleve-gold italic">Resultados Reais.</span></h2>
           <p className="text-gray-300 max-w-xl mx-auto font-normal">
             A satisfação de quem já transformou o sorriso conosco.
           </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden z-10">
        {/* Gradientes laterais para suavizar o corte */}
        <div className="absolute top-0 left-0 w-12 md:w-40 h-full bg-gradient-to-r from-eleve-dark to-transparent z-20"></div>
        <div className="absolute top-0 right-0 w-12 md:w-40 h-full bg-gradient-to-l from-eleve-dark to-transparent z-20"></div>

        {/* Marquee Track */}
        <motion.div 
          className="flex gap-6 w-max pl-4 md:pl-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 50, // Mais lento para leitura
            repeat: Infinity 
          }}
        >
          {/* Duplicar array para loop infinito */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-[320px] md:w-[450px] flex-shrink-0 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all hover:-translate-y-1 hover:border-eleve-gold/30 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-eleve-gold to-eleve-dark text-white flex items-center justify-center font-bold font-serif text-lg shadow-lg border border-white/20">
                        {t.name[0]}
                    </div>
                    <div>
                        <p className="font-bold text-white text-sm leading-tight">{t.name}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{t.time}</p>
                    </div>
                </div>
                <div className="bg-white p-1.5 rounded-full shadow-sm opacity-80 group-hover:opacity-100 transition-opacity">
                   <GoogleIcon />
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} className="fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                  ))}
              </div>

              <Quote className="text-eleve-gold/40 mb-2 h-8 w-8 rotate-180" />
              <p className="text-gray-100 font-normal text-base md:text-lg leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-eleve-gold">{t.treatment}</span>
                <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded">Verificado</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;