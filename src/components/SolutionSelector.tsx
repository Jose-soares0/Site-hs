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
  const whatsappLink = createWhatsAppLink(activeSolution.message);

  return (
    <section id="solucoes" className="section-space bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Seletor inteligente</p>
            <h2 className="section-title mt-4 text-black-hs">Encontre a proteção certa para o que você precisa cuidar.</h2>
          </div>
          <p className="lead-text">
            O cliente não precisa decorar nome de equipamento. Ele escolhe o que quer proteger, entende o caminho e já chama a HS Seg com uma mensagem pronta.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.42fr_1fr]">
          <div className="grid gap-3">
            {solutions.map((solution) => {
              const Icon = icons[solution.key];
              const isActive = activeKey === solution.key;

              return (
                <button
                  className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    isActive
                      ? "border-gray-metal bg-gray-line text-black-hs shadow-xl shadow-gray-metal/20"
                      : "border-gray-line bg-white text-black-hs hover:border-blue-monitoring hover:bg-blue-monitoring/5"
                  }`}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveKey(solution.key)}
                >
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-xl ${
                      isActive ? "bg-black-hs text-white" : "bg-black-hs text-white"
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

          <div className="technical-card overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
              <div className="p-6 sm:p-8">
                <p className="text-sm font-black uppercase text-blue-monitoring">Solução recomendada</p>
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
                <p className="text-sm font-black uppercase text-gray-metal">Serviços indicados</p>
                <div className="mt-5 grid gap-3">
                  {activeSolution.recommended.map((item) => (
                    <div className="rounded-2xl border border-white/12 bg-white/6 p-4" key={item}>
                      <span className="font-display text-base font-black sm:text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded-2xl border border-blue-monitoring/30 bg-blue-monitoring/10 p-4">
                  <p className="text-xs font-bold uppercase text-blue-100">Mensagem do WhatsApp</p>
                  <p className="mt-2 text-sm leading-6 text-white/78">{activeSolution.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
