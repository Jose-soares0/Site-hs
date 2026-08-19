import { useMemo, useState } from "react";
import { Building2, Car, CheckCircle2, Home, Landmark, MessageCircle } from "lucide-react";
import { solutions, type SolutionKey } from "@data/solutions";
import { createWhatsAppLink } from "@utils/whatsapp";

const icons = {
  casa: Home,
  empresa: Building2,
  condominio: Landmark,
  veiculo: Car,
};

export default function SolutionSelector() {
  const [activeKey, setActiveKey] = useState<SolutionKey>("empresa");
  const activeSolution = useMemo(
    () => solutions.find((solution) => solution.key === activeKey) ?? solutions[0],
    [activeKey],
  );
  const activeIndex = solutions.findIndex((solution) => solution.key === activeKey) + 1;
  const whatsappLink = createWhatsAppLink(activeSolution.message);

  return (
    <section id="solucoes" className="section-space bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Por onde começar</p>
            <h2 className="section-title mt-4 text-black-hs">O que você precisa proteger?</h2>
          </div>
          <p className="lead-text">
            Selecione o ambiente para comparar os serviços mais usados em cada cenário e iniciar uma avaliação com a equipe da HS SEG.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.42fr_1fr]">
          <div className="grid gap-3">
            {solutions.map((solution) => {
              const Icon = icons[solution.key];
              const isActive = activeKey === solution.key;

              return (
                <button
                  className={`solution-choice flex items-center gap-4 rounded-lg border p-4 text-left transition ${
                    isActive
                      ? "border-gray-metal bg-gray-line text-black-hs shadow-xl shadow-gray-metal/20"
                      : "border-gray-line bg-white text-black-hs hover:border-blue-monitoring hover:bg-blue-monitoring/5"
                  }`}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveKey(solution.key)}
                >
                  <span
                    className={`solution-choice__icon grid size-11 shrink-0 place-items-center rounded-lg ${
                      isActive ? "border-black-hs bg-black-hs text-white" : "border-gray-line bg-white-shield text-black-hs"
                    }`}
                    aria-hidden="true"
                  >
                    <Icon size={21} strokeWidth={2.4} />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-black">{solution.label}</span>
                    <span className={`block text-sm ${isActive ? "text-black-hs/70" : "text-gray-500"}`}>
                      Ver recomendação
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="solution-panel technical-card overflow-hidden" key={activeKey}>
            <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-5">
                  <p className="text-sm font-black uppercase text-blue-monitoring">Recomendação inicial</p>
                  <span className="font-display text-xs font-black text-gray-metal">0{activeIndex} / 04</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-black leading-tight text-black-hs sm:text-[1.65rem]">{activeSolution.title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{activeSolution.description}</p>

                <div className="mt-7 grid gap-3">
                  {activeSolution.benefits.map((benefit) => (
                    <div className="flex items-center gap-3" key={benefit}>
                      <CheckCircle2 className="text-green-confirmation" size={19} aria-hidden="true" />
                      <span className="font-semibold text-black-hs">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a className="primary-button whatsapp-button mt-8" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} aria-hidden="true" />
                  Solicitar avaliação
                </a>
              </div>

              <div className="bg-black-hs p-6 text-white sm:p-8">
                <p className="text-sm font-black uppercase text-gray-metal">Serviços mais indicados</p>
                <div className="solution-recommended-list mt-5 grid">
                  {activeSolution.recommended.map((item, index) => (
                    <div className="solution-recommended-row" key={item}>
                      <span className="text-xs font-black text-gray-metal">0{index + 1}</span>
                      <span className="font-display text-base font-black sm:text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="solution-operational-note mt-8 border-t border-white/14 pt-5">
                  <p className="text-xs font-black uppercase text-gray-metal">Próximo passo</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">A equipe confirma os pontos de instalação, equipamentos e prazo durante a avaliação.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
