/**
 * SEO & Schema.org Structured Data Engine
 * Especializado para Eleve Odontologia (Belo Horizonte - Ouro Preto & Castelo)
 * Gerencia títulos, meta descriptions, canonicals, OpenGraph, Twitter Cards e JSON-LD dinâmicos por subpágina.
 */

export type Subpage = 'home' | 'about' | 'treatments' | 'contact';

export interface PageSeoConfig {
  path: string;
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogType: 'website' | 'article';
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  schema: Record<string, any>;
}

const BASE_URL = 'https://eleveodontologia.com.br';
const CLINIC_LOGO = 'https://i.imgur.com/UXQZlMH.png';
const CLINIC_FACADE = 'https://i.imgur.com/xEHLSXb.png';
const CLINIC_RECEPTION = 'https://i.imgur.com/41386jO.png';
const DR_ANDRE_IMG = 'https://i.imgur.com/us1azR4.png';
const DRA_ANA_IMG = 'https://i.imgur.com/9esPUGw.png';

export const SEO_DATA: Record<Subpage, PageSeoConfig> = {
  home: {
    path: '/',
    title: 'Eleve Odontologia | Cirurgia Ortognática, Implantes e Invisalign em BH',
    description: 'Clínica odontológica de excelência em Belo Horizonte (Ouro Preto e Castelo). Dr. André Araújo e Dra. Ana Luiza: Ortognática 3D, Implantes Guiados e Sedação Consciente.',
    keywords: 'dentista ouro preto, dentista castelo bh, cirurgia ortognatica bh, implante dentario bh, extracao siso incluso, dr andre araujo bucomaxilo, dra ana luiza ortodontia, invisalign bh, clinica odontologica ouro preto bh',
    canonicalUrl: `${BASE_URL}/`,
    ogType: 'website',
    ogTitle: 'Eleve Odontologia | Clínica Odontológica em Belo Horizonte',
    ogDescription: 'Cirurgia Ortognática 3D, Implantes Dentários Guiados e Invisalign com especialistas dedicados nos bairros Ouro Preto e Castelo.',
    ogImage: CLINIC_LOGO,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['Dentist', 'MedicalBusiness', 'LocalBusiness'],
          '@id': `${BASE_URL}/#clinic`,
          name: 'Eleve Odontologia',
          url: `${BASE_URL}/`,
          logo: CLINIC_LOGO,
          image: [CLINIC_LOGO, CLINIC_FACADE, CLINIC_RECEPTION],
          telephone: '+55-31-3234-7977',
          priceRange: '$$$',
          description: 'Clínica de odontologia cirúrgica e estética em Belo Horizonte. Referência em Cirurgia Ortognática 3D, Implantes Dentários Guiados, Ortodontia Digital e Sedação Consciente com Anestesiologista.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Sena Madureira, 491',
            addressLocality: 'Belo Horizonte',
            addressRegion: 'MG',
            postalCode: '31330-000',
            addressCountry: 'BR'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -19.8878,
            longitude: -44.0016
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '19:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday'],
              opens: '08:00',
              closes: '13:00'
            }
          ],
          hasMap: 'https://maps.google.com/?q=Rua+Sena+Madureira,+491+-+Ouro+Preto,+Belo+Horizonte+-+MG',
          medicalSpecialty: [
            'Dentistry',
            'Oral and Maxillofacial Surgery',
            'Orthodontics',
            'Endodontics',
            'Dental Implants'
          ],
          founder: [
            {
              '@type': 'Person',
              '@id': `${BASE_URL}/sobre#dr-andre`,
              name: 'Dr. André Araújo',
              jobTitle: 'Cirurgião Buco-Maxilo-Facial e Implantodontista',
              image: DR_ANDRE_IMG,
              sameAs: 'https://www.instagram.com/andrearaujobmf/'
            },
            {
              '@type': 'Person',
              '@id': `${BASE_URL}/sobre#dra-ana`,
              name: 'Dra. Ana Luiza',
              jobTitle: 'Ortodontista e Endodontista',
              image: DRA_ANA_IMG,
              sameAs: 'https://www.instagram.com/aninhadovi/'
            }
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+55-31-3234-7977',
            contactType: 'customer service',
            availableLanguage: ['Portuguese', 'English'],
            areaServed: ['Belo Horizonte', 'Nova Lima', 'Contagem', 'Betim']
          }
        },
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          url: `${BASE_URL}/`,
          name: 'Eleve Odontologia',
          publisher: {
            '@id': `${BASE_URL}/#clinic`
          }
        }
      ]
    }
  },

  about: {
    path: '/sobre',
    title: 'Sobre a Eleve Odontologia | Especialistas Titulares e Estrutura 3D em BH',
    description: 'Conheça o corpo clínico titular da Eleve Odontologia em BH. Dr. André Araújo (Cirurgia Bucomaxilofacial) e Dra. Ana Luiza (Ortodontia e Endodontia). Sem rotatividade profissional.',
    keywords: 'sobre eleve odontologia, dr andre araujo bucomaxilofacial bh, dra ana luiza ortodontista, dentistas ouro preto bh, clinica odontologica castelo bh, equipe medica eleve, historia eleve odontologia',
    canonicalUrl: `${BASE_URL}/sobre`,
    ogType: 'article',
    ogTitle: 'Sobre a Eleve Odontologia | Especialistas Titulares em BH',
    ogDescription: 'Formação acadêmica de elite, residência hospitalar e atendimento sem rotatividade profissional com os fundadores Dr. André e Dra. Ana Luiza.',
    ogImage: CLINIC_FACADE,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${BASE_URL}/sobre#webpage`,
          url: `${BASE_URL}/sobre`,
          name: 'Sobre a Eleve Odontologia - História e Corpo Clínico Titular',
          description: 'Apresentação detalhada da filosofia de trabalho, corpo clínico titular e estrutura hospitalar da Eleve Odontologia em Belo Horizonte.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Início',
                item: `${BASE_URL}/`
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Sobre Nós',
                item: `${BASE_URL}/sobre`
              }
            ]
          },
          mainEntity: {
            '@id': `${BASE_URL}/#clinic`
          }
        },
        {
          '@type': 'Person',
          '@id': `${BASE_URL}/sobre#dr-andre`,
          name: 'Dr. André Araújo',
          jobTitle: 'Cirurgião Buco-Maxilo-Facial e Implantodontista',
          worksFor: {
            '@id': `${BASE_URL}/#clinic`
          },
          image: DR_ANDRE_IMG,
          description: 'Residência em Cirurgia e Traumatologia Buco-Maxilo-Facial pelo Hospital Municipal Dr. Mário Gatti. Especialista em Deformidades Faciais, Cirurgia Ortognática 3D, Implantes Guiados e Articulação Temporomandibular (DTM).',
          alumniOf: [
            {
              '@type': 'EducationalOrganization',
              name: 'Hospital Municipal Dr. Mário Gatti'
            },
            {
              '@type': 'EducationalOrganization',
              name: 'Universidade Federal de Minas Gerais (UFMG)'
            }
          ],
          medicalSpecialty: 'Oral and Maxillofacial Surgery',
          sameAs: 'https://www.instagram.com/andrearaujobmf/'
        },
        {
          '@type': 'Person',
          '@id': `${BASE_URL}/sobre#dra-ana`,
          name: 'Dra. Ana Luiza',
          jobTitle: 'Ortodontista e Endodontista',
          worksFor: {
            '@id': `${BASE_URL}/#clinic`
          },
          image: DRA_ANA_IMG,
          description: 'Especialista em Ortodontia Corretiva e Ortopedia Facial pela UFMG. Invisalign Doctor certificada e especialista em Endodontia Microscópica Automatizada.',
          alumniOf: [
            {
              '@type': 'EducationalOrganization',
              name: 'Universidade Federal de Minas Gerais (UFMG)'
            }
          ],
          medicalSpecialty: ['Orthodontics', 'Endodontics'],
          sameAs: 'https://www.instagram.com/aninhadovi/'
        },
        {
          '@type': 'FAQPage',
          '@id': `${BASE_URL}/sobre#faq`,
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Serei atendido pelo próprio Dr. André ou Dra. Ana durante todo o tratamento?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim. Na Eleve você não corre o risco de ser atendido por estagiários ou ter o profissional trocado a cada mês. Desde a consulta inicial de diagnóstico até a finalização do tratamento cirúrgico ou ortodôntico, o seu caso é conduzido pelos especialistas titulares.'
              }
            },
            {
              '@type': 'Question',
              name: 'Onde são realizadas as cirurgias de grande porte como a Ortognática?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Cirurgias que exigem anestesia geral (como a Cirurgia Ortognática) são realizadas em centros cirúrgicos hospitalares credenciados em Belo Horizonte. Procedimentos de menor porte ocorrem no centro cirúrgico ambulatorial da própria clínica.'
              }
            },
            {
              '@type': 'Question',
              name: 'A clínica oferece sedação para pacientes ansiosos ou com fobia?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim! Dispomos de protocolo de sedação consciente assistida por médico anestesiologista dedicado ao monitoramento contínuo durante cirurgias de sisos, enxertos e implantes.'
              }
            }
          ]
        }
      ]
    }
  },

  treatments: {
    path: '/tratamentos',
    title: 'Tratamentos e Cirurgias Odontológicas Avançadas | Eleve Odontologia BH',
    description: 'Dossiê completo de tratamentos: Cirurgia Ortognática 3D, Implantes Guiados, Invisalign, Extração de Sisos Inclusos e Sedação Consciente em Belo Horizonte.',
    keywords: 'cirurgia ortognatica bh, implante guiado tomografia, invisalign ouro preto bh, extracao siso incluso bh, tratamento canal microscopio bh, clareamento dental seguro bh, sedacao para dentista bh',
    canonicalUrl: `${BASE_URL}/tratamentos`,
    ogType: 'article',
    ogTitle: 'Tratamentos e Cirurgias Odontológicas de Alta Performance | Eleve',
    ogDescription: 'Planejamento digital virtual 3D, precisão milimétrica e sedação consciente para transformar sua função mastigatória e harmonia facial.',
    ogImage: CLINIC_FACADE,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MedicalWebPage',
          '@id': `${BASE_URL}/tratamentos#webpage`,
          url: `${BASE_URL}/tratamentos`,
          name: 'Tratamentos Odontológicos e Cirurgias Especializadas - Eleve Odontologia',
          description: 'Catálogo aprofundado dos procedimentos cirúrgicos, ortodônticos e reabilitadores executados pelo corpo clínico da Eleve Odontologia.',
          medicalSpecialty: 'Dentistry',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Início',
                item: `${BASE_URL}/`
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Tratamentos',
                item: `${BASE_URL}/tratamentos`
              }
            ]
          },
          mainEntity: {
            '@type': 'ItemList',
            name: 'Procedimentos Odontológicos Especializados',
            itemListElement: [
              {
                '@type': 'MedicalProcedure',
                position: 1,
                name: 'Cirurgia Ortognática 3D',
                procedureType: 'SurgicalProcedure',
                description: 'Reposicionamento ósseo maxilomandibular com planejamento virtual guiado por computador para correção de deformidades dentofaciais, mordida aberta, prognatismo e apneia do sono.',
                bodyLocation: 'Maxilla, Mandible, Facial Bones'
              },
              {
                '@type': 'MedicalProcedure',
                position: 2,
                name: 'Implantes Dentários Guiados',
                procedureType: 'SurgicalProcedure',
                description: 'Instalação de implantes de titânio ou cerâmica com guia cirúrgica confeccionada em impressora 3D a partir de tomografia volumétrica, sem cortes extensos de bisturi.',
                bodyLocation: 'Alveolar Bone, Tooth Socket'
              },
              {
                '@type': 'MedicalProcedure',
                position: 3,
                name: 'Ortodontia Digital & Invisalign',
                procedureType: 'NoninvasiveProcedure',
                description: 'Alinhamento dentário com tecnologia de alinhadores transparentes removíveis e aparelhos autoligados de baixa fricção planejados por escaneamento intraoral 3D.',
                bodyLocation: 'Teeth, Dental Arch'
              },
              {
                '@type': 'MedicalProcedure',
                position: 4,
                name: 'Cirurgia de Terceiros Molares (Sisos Inclusos)',
                procedureType: 'SurgicalProcedure',
                description: 'Exodontia minimamente invasiva de dentes sisos inclusos e impactados com piezoelétrico e opção de sedação consciente com médico anestesiologista.',
                bodyLocation: 'Wisdom Teeth'
              },
              {
                '@type': 'MedicalProcedure',
                position: 5,
                name: 'Endodontia Guiada & Microscópica',
                procedureType: 'PercutaneousProcedure',
                description: 'Tratamento e retratamento de canal em sessão única ou reduzida sob ampliação com microscópio operatório e localizador apical digital.',
                bodyLocation: 'Dental Pulp, Root Canals'
              },
              {
                '@type': 'MedicalProcedure',
                position: 6,
                name: 'Clareamento Dental Fotoativado & Monitorado',
                procedureType: 'NoninvasiveProcedure',
                description: 'Técnica combinada de consultório e caseira supervisionada com desensibilizantes de última geração para luminosidade duradoura e natural.',
                bodyLocation: 'Tooth Enamel'
              }
            ]
          }
        },
        {
          '@type': 'FAQPage',
          '@id': `${BASE_URL}/tratamentos#faq`,
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Como funciona o planejamento virtual 3D na Cirurgia Ortognática?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Realizamos tomografia computadorizada e escaneamento intraoral dos dentes. No software de simulação, o cirurgião movimenta milimetricamente os ossos faciais antes de ir para o centro cirúrgico, confeccionando guias impressas em 3D que conferem precisão máxima e diminuem o tempo anestésico.'
              }
            },
            {
              '@type': 'Question',
              name: 'A extração de siso com sedação consciente é segura?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutamente segura. A sedação é conduzida por médico anestesiologista presente na sala cirúrgica durante todo o ato, administrando medicação endovenosa e monitorando parâmetros vitais enquanto o cirurgião atua com tranquilidade.'
              }
            },
            {
              '@type': 'Question',
              name: 'Posso usar Invisalign mesmo para casos complexos de mordida?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim. A Dra. Ana Luiza é Invisalign Doctor capacitada para associar alinhadores com mecânicas auxiliares, elásticos e ancoragens esqueléticas, tratando desde apinhamentos leves até desarmonias severas.'
              }
            }
          ]
        }
      ]
    }
  },

  contact: {
    path: '/contato',
    title: 'Contato e Agendamento | Eleve Odontologia BH | Ouro Preto e Castelo',
    description: 'Agende sua avaliação com especialistas na Eleve Odontologia em Belo Horizonte. Atendimento na Rua Sena Madureira, 491, bairro Ouro Preto. WhatsApp: (31) 3234-7977.',
    keywords: 'contato eleve odontologia, agendar consulta dentista ouro preto, telefone dentista ouro preto bh, whatsapp dr andre araujo, endereco eleve odontologia sena madureira',
    canonicalUrl: `${BASE_URL}/contato`,
    ogType: 'website',
    ogTitle: 'Contato e Agendamento Exclusivo | Eleve Odontologia BH',
    ogDescription: 'Converse diretamente com nossa recepção por WhatsApp ou preencha o formulário inteligente de triagem para agendar com Dr. André ou Dra. Ana Luiza.',
    ogImage: CLINIC_FACADE,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': `${BASE_URL}/contato#webpage`,
          url: `${BASE_URL}/contato`,
          name: 'Contato e Agendamento - Eleve Odontologia',
          description: 'Canais oficiais de agendamento de consultas, triagem prévia e localização da clínica Eleve Odontologia em Belo Horizonte.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Início',
                item: `${BASE_URL}/`
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contato',
                item: `${BASE_URL}/contato`
              }
            ]
          },
          mainEntity: {
            '@type': ['Dentist', 'MedicalBusiness'],
            '@id': `${BASE_URL}/#clinic`,
            name: 'Eleve Odontologia',
            telephone: '+55-31-3234-7977',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Rua Sena Madureira, 491',
              addressLocality: 'Belo Horizonte',
              addressRegion: 'MG',
              postalCode: '31330-000',
              addressCountry: 'BR'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -19.8878,
              longitude: -44.0016
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+55-31-3234-7977',
              contactType: 'customer service',
              contactOption: 'HearingImpairedSupported',
              availableLanguage: ['Portuguese', 'English']
            }
          }
        },
        {
          '@type': 'FAQPage',
          '@id': `${BASE_URL}/contato#faq`,
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Como funciona o agendamento de primeira consulta?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Você pode agendar diretamente pelo nosso WhatsApp oficial (31) 3234-7977 ou preencher o formulário de triagem. Nossa equipe acolhe seus exames prévios e agenda um horário estendido exclusivo para o seu caso.'
              }
            },
            {
              '@type': 'Question',
              name: 'A clínica possui estacionamento ou facilidade para parar?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sim. A clínica está localizada na Rua Sena Madureira, 491, no bairro Ouro Preto, em região nobre e tranquila, com vagas fáceis de embarque, desembarque e estacionamento nas imediações.'
              }
            }
          ]
        }
      ]
    }
  }
};

/**
 * Aplica metadados SEO, OpenGraph e Script Schema.org no <head> da página
 */
export const updatePageSeo = (page: Subpage) => {
  const config = SEO_DATA[page] || SEO_DATA.home;

  // 1. Título do Documento
  document.title = config.title;

  // 2. Helper para criar ou atualizar meta tags
  const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
    let element = document.querySelector(`meta[${attribute}="${key}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, key);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // 3. Meta Description & Keywords
  setMetaTag('name', 'description', config.description);
  setMetaTag('name', 'keywords', config.keywords);

  // 4. OpenGraph Tags
  setMetaTag('property', 'og:title', config.ogTitle);
  setMetaTag('property', 'og:description', config.ogDescription);
  setMetaTag('property', 'og:url', config.canonicalUrl);
  setMetaTag('property', 'og:type', config.ogType);
  setMetaTag('property', 'og:image', config.ogImage);
  setMetaTag('property', 'og:site_name', 'Eleve Odontologia');

  // 5. Twitter Card Tags
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', config.ogTitle);
  setMetaTag('name', 'twitter:description', config.ogDescription);
  setMetaTag('name', 'twitter:image', config.ogImage);

  // 6. Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', config.canonicalUrl);

  // 7. Schema.org JSON-LD Dinâmico por Subpágina
  let schemaScript = document.getElementById('eleve-dynamic-schema') as HTMLScriptElement | null;
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'eleve-dynamic-schema';
    schemaScript.type = 'application/ld+json';
    document.head.appendChild(schemaScript);
  }
  schemaScript.textContent = JSON.stringify(config.schema, null, 2);
};

/**
 * Utilitários de roteamento limpo para subpáginas HTML5
 */
export const getSubpageFromPath = (
  pathname: string,
  hash: string
): { page: Subpage; sectionId?: string } => {
  const cleanPath = pathname.replace(/\/+$/, '').toLowerCase();

  // Rotas canônicas de subpágina
  if (cleanPath === '/sobre' || cleanPath === '/sobre-nos' || cleanPath === '/about') {
    return { page: 'about' };
  }
  if (
    cleanPath === '/tratamentos' ||
    cleanPath === '/procedimentos' ||
    cleanPath === '/treatments' ||
    cleanPath === '/servicos'
  ) {
    return { page: 'treatments' };
  }
  if (cleanPath === '/contato' || cleanPath === '/agendar' || cleanPath === '/contact') {
    return { page: 'contact' };
  }

  // Compatibilidade com navegação legada por hash (ex.: #sobre, #tratamentos, #contato)
  const cleanHash = hash.replace(/^#/, '').toLowerCase();
  if (cleanHash === 'sobre' || cleanHash === 'sobrenos' || cleanHash === 'about') {
    return { page: 'about' };
  }
  if (
    cleanHash === 'tratamentos' ||
    cleanHash === 'procedimentos' ||
    cleanHash === 'treatments' ||
    cleanHash === 'servicos'
  ) {
    return { page: 'treatments' };
  }
  if (cleanHash === 'contato' || cleanHash === 'agendar' || cleanHash === 'contact') {
    return { page: 'contact' };
  }

  // Âncoras dentro da página inicial (ex.: #doctors, #location, #faq)
  if (cleanHash && cleanHash !== 'home') {
    return { page: 'home', sectionId: cleanHash };
  }

  return { page: 'home' };
};

export const getPathForSubpage = (page: Subpage): string => {
  switch (page) {
    case 'about':
      return '/sobre';
    case 'treatments':
      return '/tratamentos';
    case 'contact':
      return '/contato';
    default:
      return '/';
  }
};
