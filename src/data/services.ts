export type Service = {
  title: string;
  icon: "monitoring" | "camera" | "security" | "tracking" | "home" | "business" | "condominium" | "access";
  description: string;
  cta: string;
  message: string;
};

export const services: Service[] = [
  {
    title: "Monitoramento 24h",
    icon: "monitoring",
    description:
      "Acompanhamento contínuo para reduzir exposição ao risco e orientar a resposta quando houver ocorrência.",
    cta: "Avaliar monitoramento",
    message:
      "Olá, vim pelo site da HS SEG. Quero saber mais sobre monitoramento 24h para proteger meu imóvel.",
  },
  {
    title: "Câmeras de segurança",
    icon: "camera",
    description:
      "Projeto, instalação e acompanhamento com imagens estratégicas para residências, lojas e condomínios.",
    cta: "Ver câmeras",
    message:
      "Olá, vim pelo site da HS SEG. Tenho interesse em câmeras de segurança e gostaria de uma avaliação.",
  },
  {
    title: "Segurança eletrônica",
    icon: "security",
    description:
      "Câmeras, sensores, cercas e controle de acesso instalados conforme os pontos vulneráveis do imóvel.",
    cta: "Avaliar segurança",
    message:
      "Olá, vim pelo site da HS SEG. Quero uma avaliação de segurança eletrônica para meu imóvel.",
  },
  {
    title: "Rastreamento veicular",
    icon: "tracking",
    description:
      "Localização, histórico de rotas, alertas e mais controle para carros, motos e frotas.",
    cta: "Rastrear veículo",
    message:
      "Olá, vim pelo site da HS SEG. Quero rastreamento veicular para carro, moto ou frota.",
  },
  {
    title: "Residência",
    icon: "home",
    description:
      "Com câmeras, concertinas, motor para portão e muito mais!",
    cta: "Proteger residência",
    message:
      "Olá, vim pelo site da HS SEG. Quero proteger minha residência com segurança eletrônica.",
  },
  {
    title: "Segurança para empresas",
    icon: "business",
    description:
      "Alarmes com sensores de presença, monitoramento e fechadura digital para lojas, escritórios e operações locais.",
    cta: "Proteger empresa",
    message:
      "Olá, vim pelo site da HS SEG. Quero uma avaliação para proteger minha empresa.",
  },
  {
    title: "Segurança para condomínios",
    icon: "condominium",
    description:
      "Soluções para áreas comuns, acessos, perímetro e pontos sensíveis do condomínio.",
    cta: "Avaliar condomínio",
    message:
      "Olá, vim pelo site da HS SEG. Quero segurança eletrônica para condomínio.",
  },
  {
    title: "Controle de acesso",
    icon: "access",
    description:
      "Mais controle sobre entradas, circulação e registros para ambientes residenciais e empresariais.",
    cta: "Controlar acesso",
    message:
      "Olá, vim pelo site da HS SEG. Tenho interesse em controle de acesso.",
  },
];
