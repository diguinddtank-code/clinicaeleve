import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, IMAGES } from '../constants';

const TimeDelayedPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 z-[90] w-[90vw] md:w-96 p-2 pointer-events-none"
        >
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden pointer-events-auto border border-gray-100 relative">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 z-20 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-1 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex">
               <div className="w-1/3 relative bg-black">
                 <img src={IMAGES.doctorsTeam} className="w-full h-full object-cover opacity-80" alt="" />
                 <div className="absolute inset-0 bg-eleve-gold/20 mix-blend-overlay"></div>
               </div>
               <div className="w-2/3 p-4">
                  <p className="text-xs font-bold text-eleve-gold uppercase mb-1">Dúvidas?</p>
                  <h3 className="text-eleve-black font-serif font-bold leading-tight mb-2">
                    Fale direto com a recepção
                  </h3>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-eleve-success text-white text-xs font-bold py-2 px-3 rounded-lg hover:bg-eleve-successHover transition-colors w-full shadow-md"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
               </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimeDelayedPopup;