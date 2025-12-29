import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { ADDRESS, PHONE_DISPLAY, WHATSAPP_LINK } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-eleve-dark mb-4">Onde Estamos</h2>
          <p className="text-gray-700 font-medium">Fácil acesso para moradores do Ouro Preto, Castelo e região da Pampulha.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-1/3 p-8 md:p-10 bg-white text-eleve-black flex flex-col justify-between border-r border-gray-100">
            <div>
                <h3 className="text-2xl font-serif font-bold mb-8 text-eleve-brand">Informações</h3>
                
                <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-eleve-brand/5 rounded-lg group-hover:bg-eleve-brand/10 transition-colors">
                        <MapPin className="text-eleve-brand flex-shrink-0" size={24} />
                    </div>
                    <div>
                    <p className="font-bold text-lg text-gray-900">Endereço</p>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">{ADDRESS}</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-eleve-brand/5 rounded-lg group-hover:bg-eleve-brand/10 transition-colors">
                         <Phone className="text-eleve-brand flex-shrink-0" size={24} />
                    </div>
                    <div>
                    <p className="font-bold text-lg text-gray-900">Contato</p>
                    <p className="text-gray-700 font-medium">{PHONE_DISPLAY}</p>
                    <p className="text-gray-600 text-sm">elevebh@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-eleve-brand/5 rounded-lg group-hover:bg-eleve-brand/10 transition-colors">
                        <Clock className="text-eleve-brand flex-shrink-0" size={24} />
                    </div>
                    <div>
                    <p className="font-bold text-lg text-gray-900">Horários</p>
                    <p className="text-gray-700 text-sm font-medium">Seg - Sex: 08:00 - 18:00</p>
                    <p className="text-gray-700 text-sm font-medium">Sábado: Sob agendamento</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-3">
                <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-eleve-success text-white text-center py-4 rounded-lg font-bold hover:bg-eleve-successHover transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                Agendar Visita
                </a>
                
                <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+Sena+Madureira,+491+-+Ouro+Preto,+Belo+Horizonte+-+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border-2 border-eleve-brand text-eleve-brand text-center py-3.5 rounded-lg font-bold hover:bg-eleve-brand hover:text-white transition-colors text-sm"
                >
                <Navigation size={18} />
                Como Chegar (GPS)
                </a>
            </div>
          </div>

          <div className="lg:w-2/3 h-96 lg:h-auto min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.866597711466!2d-44.00166242398517!3d-19.88785898149174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6918667a256a9%3A0x6b16e8812674e1e3!2sR.%20Sena%20Madureira%2C%20491%20-%20Ouro%20Preto%2C%20Belo%20Horizonte%20-%20MG%2C%2031340-000!5e0!3m2!1spt-BR!2sbr!4v1715428277203!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Clínica Eleve"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;