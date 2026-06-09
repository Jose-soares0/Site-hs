export type SolutionKey = "casa" | "empresa" | "condominio" | "veiculo";

export type Solution = {
  key: SolutionKey;
  label: string;
  title: string;
  description: string;
  benefits: string[];
  recommended: string[];
  message: string;
};

export const solutions: Solution[] = [
  {
    key: "casa",
    label: "Casa",
    title: "Segurança eletrônica para proteger sua casa",
    description:
      "Proteção residencial com câmeras, cerca elétrica e concertina para reforçar pontos vulneráveis e aumentar o controle da rotina.",
    benefits: ["Câmeras em pontos estratégicos", "Cerca elétrica para perímetro", "Concertina para reforço físico"],
    recommended: ["Câmeras de segurança", "Cerca elétrica", "Concertina"],
    message:
      "Olá, vim pelo site da HS Seg. Quero proteger uma casa com segurança eletrônica. Tenho interesse em câmeras, cerca elétrica e concertina.",
  },
  {
    key: "empresa",
    label: "Empresa",
    title: "Monitoramento e segurança eletrônica para empresas",
    description:
      "Soluções para empresas que precisam de monitoramento 24h, sistema de alarmes e câmeras para reduzir riscos e acompanhar áreas sensíveis.",
    benefits: ["Monitoramento 24h", "Sistema de alarmes", "Câmeras para áreas críticas"],
    recommended: ["Monitoramento 24h", "Sistema de alarmes", "Câmeras de segurança"],
    message:
      "Olá, vim pelo site da HS Seg. Quero proteger uma empresa. Tenho interesse em monitoramento 24h, sistema de alarmes e câmeras.",
  },
  {
    key: "condominio",
    label: "Condomínio",
    title: "Segurança eletrônica para condomínios",
    description:
      "Câmeras, porteiro e segurança eletrônica para melhorar o controle de acessos, áreas comuns, garagens e pontos sensíveis do condomínio.",
    benefits: ["Câmeras em áreas comuns", "Porteiro e controle de acesso", "Segurança eletrônica para o condomínio"],
    recommended: ["Câmeras de segurança", "Porteiro", "Segurança eletrônica"],
    message:
      "Olá, vim pelo site da HS Seg. Quero avaliar segurança eletrônica para condomínio, com câmeras, porteiro e controle de acesso.",
  },
  {
    key: "veiculo",
    label: "Veículo",
    title: "Rastreamento para carro, moto e frota",
    description:
      "Acompanhe localização, rotas e alertas para tomar decisões mais rápidas sobre seus veículos. O rastreador cobre todo o Brasil.",
    benefits: ["Localização em tempo real", "Histórico de rotas", "Rastreador com cobertura em todo o Brasil"],
    recommended: ["Rastreamento veicular", "Cobertura nacional", "Gestão de frota"],
    message:
      "Olá, vim pelo site da HS Seg. Quero rastreamento veicular para carro, moto ou frota. Gostaria de saber planos, instalação e cobertura em todo o Brasil.",
  },
];

