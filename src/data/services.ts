export type ServiceIcon =
  | "monitoring"
  | "camera"
  | "security"
  | "tracking"
  | "home"
  | "business"
  | "condominium"
  | "access";

export type ServiceHighlight = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  icon: ServiceIcon;
  description: string;
  cta: string;
  message: string;
  seoDescription: string;
  intro: string;
  highlights: ServiceHighlight[];
  included: string[];
  audience: string[];
};

export const services: Service[] = [
  {
    slug: "monitoramento-24h",
    title: "Monitoramento 24h",
    icon: "monitoring",
    description:
      "Acompanhamento contínuo para reduzir exposição ao risco e orientar a resposta quando houver ocorrência.",
    cta: "Avaliar monitoramento",
    message:
      "Olá, vim pelo site da HS SEG. Quero saber mais sobre monitoramento 24h para proteger meu imóvel.",
    seoDescription:
      "Monitoramento 24h em Teresina com acompanhamento contínuo, alarmes conectados e suporte local da HS SEG.",
    intro:
      "Uma operação conectada para acompanhar sinais de alarme durante todo o dia e orientar os próximos passos quando houver uma ocorrência.",
    highlights: [
      { title: "Acompanhamento contínuo", description: "Os sinais do sistema permanecem conectados a uma rotina de monitoramento 24 horas." },
      { title: "Alertas centralizados", description: "Eventos do alarme são organizados para facilitar a verificação e o atendimento." },
      { title: "Procedimento definido", description: "A operação segue o fluxo combinado para contato e orientação em cada tipo de alerta." },
      { title: "Suporte local", description: "Equipe próxima para instalação, ajustes e acompanhamento do sistema no Piauí." },
    ],
    included: ["Sistema de alarme conectado", "Sensores e sirenes", "Configuração de contatos", "Acompanhamento e suporte"],
    audience: ["Residências", "Lojas", "Escritórios", "Condomínios"],
  },
  {
    slug: "cameras-de-seguranca",
    title: "Câmeras de segurança",
    icon: "camera",
    description:
      "Projeto, instalação e acompanhamento com imagens estratégicas para residências, lojas e condomínios.",
    cta: "Ver câmeras",
    message:
      "Olá, vim pelo site da HS SEG. Tenho interesse em câmeras de segurança e gostaria de uma avaliação.",
    seoDescription:
      "Câmeras de segurança em Teresina com projeto, instalação e acesso pelo celular para casas, empresas e condomínios.",
    intro:
      "Câmeras posicionadas a partir da rotina do local, dos acessos e dos pontos que realmente precisam de visibilidade.",
    highlights: [
      { title: "Pontos estratégicos", description: "O projeto considera entradas, circulação, perímetro e áreas sensíveis do imóvel." },
      { title: "Acesso pelo celular", description: "Visualização das imagens em aplicativo compatível com a solução instalada." },
      { title: "Gravação organizada", description: "Configuração de armazenamento conforme a necessidade e a estrutura do ambiente." },
      { title: "Instalação técnica", description: "Cabeamento, equipamentos e enquadramentos definidos para uma operação estável." },
    ],
    included: ["Avaliação dos pontos", "Câmeras e gravador", "Configuração de aplicativo", "Orientação de uso"],
    audience: ["Casas", "Comércios", "Empresas", "Condomínios"],
  },
  {
    slug: "seguranca-eletronica",
    title: "Segurança eletrônica",
    icon: "security",
    description:
      "Câmeras, sensores, cercas e controle de acesso instalados conforme os pontos vulneráveis do imóvel.",
    cta: "Avaliar segurança",
    message:
      "Olá, vim pelo site da HS SEG. Quero uma avaliação de segurança eletrônica para meu imóvel.",
    seoDescription:
      "Segurança eletrônica em Teresina com câmeras, sensores, cercas e controle de acesso instalados pela HS SEG.",
    intro:
      "Camadas de proteção combinadas para cuidar do perímetro, dos acessos e da movimentação dentro do imóvel.",
    highlights: [
      { title: "Proteção por camadas", description: "Equipamentos diferentes trabalham juntos em pontos externos, acessos e áreas internas." },
      { title: "Detecção de movimento", description: "Sensores podem identificar movimentações nos ambientes definidos durante a avaliação." },
      { title: "Proteção de perímetro", description: "Cercas, concertinas e outros recursos são avaliados conforme o tipo de imóvel." },
      { title: "Controle conectado", description: "Câmeras, alarmes e acessos são organizados para facilitar o uso diário." },
    ],
    included: ["Avaliação de vulnerabilidades", "Câmeras e sensores", "Proteção de perímetro", "Controle de acesso"],
    audience: ["Residências", "Empresas", "Lojas", "Condomínios"],
  },
  {
    slug: "rastreamento-veicular",
    title: "Rastreamento veicular",
    icon: "tracking",
    description:
      "Localização, histórico de rotas, alertas e mais controle para carros, motos e frotas.",
    cta: "Rastrear veículo",
    message:
      "Olá, vim pelo site da HS SEG. Quero rastreamento veicular para carro, moto ou frota.",
    seoDescription:
      "Rastreamento veicular em Teresina com cobertura em todo o Brasil, localização, histórico de rotas e alertas.",
    intro:
      "Mais visibilidade sobre carros, motos e frotas, com acompanhamento pelo celular e cobertura em todo o Brasil.",
    highlights: [
      { title: "Localização atual", description: "Consulte a posição disponível do veículo pela plataforma de rastreamento." },
      { title: "Histórico de rotas", description: "Acompanhe deslocamentos anteriores e tenha mais informação sobre a operação." },
      { title: "Alertas configuráveis", description: "Receba notificações de eventos compatíveis com o plano e o equipamento instalado." },
      { title: "Cobertura nacional", description: "O rastreador acompanha veículos em deslocamento por todo o Brasil." },
    ],
    included: ["Equipamento rastreador", "Acesso à plataforma", "Histórico e alertas", "Instalação e suporte"],
    audience: ["Carros", "Motos", "Veículos comerciais", "Frotas"],
  },
  {
    slug: "residencia",
    title: "Residência",
    icon: "home",
    description: "Com câmeras, concertinas, motor para portão e muito mais!",
    cta: "Proteger residência",
    message:
      "Olá, vim pelo site da HS SEG. Quero proteger minha residência com segurança eletrônica.",
    seoDescription:
      "Segurança residencial em Teresina com câmeras, concertinas, motor para portão, alarmes e controle de acesso.",
    intro:
      "Uma avaliação da rotina da casa para combinar proteção do perímetro, controle dos acessos e acompanhamento pelo celular.",
    highlights: [
      { title: "Visão dos acessos", description: "Câmeras ajudam a acompanhar portões, garagem, entradas e áreas externas." },
      { title: "Perímetro protegido", description: "Concertinas, cercas e sensores podem reforçar os limites da residência." },
      { title: "Portão automatizado", description: "Motores e controles tornam a entrada e a saída mais práticas no dia a dia." },
      { title: "Acesso mais controlado", description: "Fechaduras digitais e outros recursos ajudam a organizar quem entra no imóvel." },
    ],
    included: ["Câmeras", "Concertinas e cercas", "Motor para portão", "Alarmes e fechaduras digitais"],
    audience: ["Casas", "Apartamentos", "Residências em condomínio", "Imóveis de temporada"],
  },
  {
    slug: "seguranca-para-empresas",
    title: "Segurança para empresas",
    icon: "business",
    description:
      "Alarmes com sensores de presença, monitoramento e fechadura digital para lojas, escritórios e operações locais.",
    cta: "Proteger empresa",
    message:
      "Olá, vim pelo site da HS SEG. Quero uma avaliação para proteger minha empresa.",
    seoDescription:
      "Segurança para empresas em Teresina com monitoramento 24h, alarmes, câmeras, sensores e fechaduras digitais.",
    intro:
      "Tecnologia para acompanhar acessos, áreas críticas e movimentações sem complicar a rotina da operação.",
    highlights: [
      { title: "Monitoramento 24h", description: "Alarmes conectados a uma rotina contínua de acompanhamento de ocorrências." },
      { title: "Câmeras em áreas críticas", description: "Entradas, estoque, caixa e circulação recebem atenção conforme o tipo de negócio." },
      { title: "Sensores de presença", description: "Detecção configurada para áreas e horários definidos durante o projeto." },
      { title: "Fechadura digital", description: "Mais controle para portas internas, salas restritas e acessos da equipe." },
    ],
    included: ["Alarmes e sensores", "Monitoramento 24h", "Câmeras", "Fechaduras e controle de acesso"],
    audience: ["Lojas", "Escritórios", "Academias", "Operações locais"],
  },
  {
    slug: "seguranca-para-condominios",
    title: "Segurança para condomínios",
    icon: "condominium",
    description:
      "Soluções para áreas comuns, acessos, perímetro e pontos sensíveis do condomínio.",
    cta: "Avaliar condomínio",
    message:
      "Olá, vim pelo site da HS SEG. Quero segurança eletrônica para condomínio.",
    seoDescription:
      "Segurança para condomínios em Teresina com câmeras, controle de acesso, porteiro e proteção eletrônica.",
    intro:
      "Um projeto pensado para áreas compartilhadas, fluxo de moradores, visitantes, prestadores e proteção do perímetro.",
    highlights: [
      { title: "Câmeras em áreas comuns", description: "Acessos, garagem, circulação e pontos de uso coletivo recebem cobertura planejada." },
      { title: "Controle de acesso", description: "Tecnologias para organizar entradas de moradores, visitantes e prestadores." },
      { title: "Apoio à portaria", description: "Equipamentos e comunicação ajudam o trabalho do porteiro e da administração." },
      { title: "Proteção de perímetro", description: "Sensores, cercas e câmeras reforçam os limites e pontos sensíveis do condomínio." },
    ],
    included: ["CFTV", "Controle de acesso", "Apoio à portaria", "Alarmes e perímetro"],
    audience: ["Condomínios residenciais", "Condomínios comerciais", "Loteamentos", "Áreas compartilhadas"],
  },
  {
    slug: "controle-de-acesso",
    title: "Controle de acesso",
    icon: "access",
    description:
      "Mais controle sobre entradas, circulação e registros para ambientes residenciais e empresariais.",
    cta: "Controlar acesso",
    message:
      "Olá, vim pelo site da HS SEG. Tenho interesse em controle de acesso.",
    seoDescription:
      "Controle de acesso em Teresina com fechaduras digitais, biometria, tags e organização de entradas.",
    intro:
      "Recursos para definir quem entra, por onde entra e como os acessos são organizados na rotina do imóvel.",
    highlights: [
      { title: "Fechaduras digitais", description: "Abertura por senha, biometria ou outros meios compatíveis com cada equipamento." },
      { title: "Acessos identificados", description: "Tags e cadastros ajudam a organizar usuários autorizados no ambiente." },
      { title: "Portas e portões", description: "Soluções podem ser aplicadas em acessos residenciais, comerciais e condominiais." },
      { title: "Gestão mais simples", description: "Permissões e rotinas de entrada ficam centralizadas conforme a solução escolhida." },
    ],
    included: ["Fechaduras digitais", "Biometria e senhas", "Tags de acesso", "Instalação e configuração"],
    audience: ["Residências", "Empresas", "Condomínios", "Áreas restritas"],
  },
];
