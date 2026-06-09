import { site } from "@data/site";

const getNumber = (number = site.whatsappNumber) => {
  if (number.includes("[")) return number;
  return number.replace(/\D/g, "");
};

export const createWhatsAppLink = (message: string, number = site.whatsappNumber) => {
  return `https://wa.me/${getNumber(number)}?text=${encodeURIComponent(message)}`;
};

export const defaultWhatsAppMessage =
  "Olá, vim pelo site da HS Seg. Quero entender qual solução protege melhor minha casa, empresa ou veículo. Gostaria de uma avaliação.";

