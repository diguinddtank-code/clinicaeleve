import React from 'react';
import { Plus } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-eleve-dark mb-8">Perguntas Frequentes (FAQ)</h2>
        <div className="space-y-6">
          <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer">
            <summary className="flex justify-between items-center font-medium list-none text-eleve-dark text-lg">
              <span>Vocês aceitam convênios?</span>
              <span className="transition group-open:rotate-45"><Plus /></span>
            </summary>
            <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
              Trabalhamos predominantemente com atendimento particular para garantir a máxima qualidade e tempo dedicado a cada paciente. Entre em contato para verificar condições especiais e reembolsos.
            </p>
          </details>

          <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer">
            <summary className="flex justify-between items-center font-medium list-none text-eleve-dark text-lg">
              <span>Como funciona o implante dentário?</span>
              <span className="transition group-open:rotate-45"><Plus /></span>
            </summary>
            <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
              O implante é uma raiz artificial de titânio. O Dr. André Araújo é especialista no assunto. O procedimento é seguro, feito com anestesia local e, em muitos casos, pode ser feito com carga imediata (dente no mesmo dia).
            </p>
          </details>

          <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer">
            <summary className="flex justify-between items-center font-medium list-none text-eleve-dark text-lg">
              <span>A clínica fica perto de quais bairros?</span>
              <span className="transition group-open:rotate-45"><Plus /></span>
            </summary>
            <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
              Estamos no coração do bairro <b>Ouro Preto</b>, com acesso muito fácil para quem vem do bairro <b>Castelo</b>, Paquetá, Alípio de Melo e toda a região da Pampulha em BH.
            </p>
          </details>
          
           <details className="group bg-gray-50 p-6 rounded-xl cursor-pointer">
            <summary className="flex justify-between items-center font-medium list-none text-eleve-dark text-lg">
              <span>Fazem cirurgia de siso?</span>
              <span className="transition group-open:rotate-45"><Plus /></span>
            </summary>
            <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
              Sim! O Dr. André é especialista Buco-Maxilo-Facial, sendo referência na remoção de sisos inclusos e impactados com segurança e conforto.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;