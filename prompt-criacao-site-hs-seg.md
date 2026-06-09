# Prompt para criacao do site da HS Seg

Use o prompt abaixo para gerar o site completo da HS Seg.

```text
Voce e um senior front-end engineer, product designer, conversion copywriter e especialista em sites premium para empresas locais de seguranca. Crie um site institucional/comercial completo para a HS Seg, empresa de seguranca eletronica, monitoramento 24h e rastreamento veicular no Piaui.

Objetivo do site:
Criar uma experiencia premium, moderna, confiavel e altamente orientada a conversao pelo WhatsApp. O site deve fazer a HS Seg parecer uma central moderna de protecao 24h, superior aos concorrentes locais, sem perder a proximidade de uma empresa regional.

Stack obrigatoria:
- Astro como framework principal.
- TypeScript.
- Tailwind CSS.
- React apenas para componentes interativos especificos.
- GSAP para animacoes premium de hero, scroll e linha do tempo.
- Markdown/MDX preparado para futuros cases e blog.
- JSON-LD para SEO local.
- Links de WhatsApp dinamicos.

Nao usar:
- WordPress.
- Elementor.
- jQuery.
- Bootstrap generico.
- Three.js como base do site.
- Chatbot IA como elemento principal da primeira versao.
- Animacoes pesadas sem funcao.
- Depoimentos, numeros ou clientes inventados.

Identidade visual:
- Direcao: tecnica, firme, moderna, local e confiavel.
- Sensacao desejada: protecao real, resposta rapida, monitoramento ativo e tecnologia acessivel.
- A pagina deve parecer uma mistura de site premium local com interface de plataforma de seguranca.
- Evite aparencia de template comum de camera/alarme.

Paleta:
- Preto HS: #06080B
- Grafite Operacional: #151A21
- Branco Escudo: #F7F8FA
- Azul Monitoramento: #0B7CFF
- Amarelo Alerta: #F4B000
- Cinza Metal: #8D96A3
- Cinza Linha: #D9DEE6
- Verde Confirmacao: #1FBF75
- Vermelho Alerta: #D72638

Uso das cores:
- Fundos escuros no hero, chamada final, rodape e blocos de autoridade.
- Branco/cinza claro em secoes de leitura e servicos.
- Azul para tecnologia, monitoramento, status, mapas e interface.
- Amarelo para CTA principal, selos, alertas e detalhes de destaque.
- Nao fazer o site todo preto, todo azul ou com gradientes exagerados.

Tipografia:
- Use Montserrat para titulos, botoes e chamadas.
- Use Inter para textos, cards, formularios e detalhes.
- H1 forte, claro e responsivo.
- Texto legivel no mobile.
- Sem letter-spacing negativo.

Tom de voz:
- Portugues do Brasil.
- Direto, seguro, comercial e especifico.
- Nao usar frases genericas como "solucoes sob medida", "qualidade e excelencia" ou "a melhor solucao para voce".
- Falar de risco com seriedade, sem explorar medo exagerado.
- Mostrar controle, resposta, tecnologia, presenca local e confianca construida na pratica.

Promessa principal:
"Seguranca eletronica, monitoramento 24h e rastreamento veicular no Piaui."

Subpromessa:
"Alarmes, cameras, rastreamento e suporte local para proteger casas, empresas, condominios e veiculos com tecnologia e resposta monitorada."

CTA principal:
"Solicitar avaliacao pelo WhatsApp"

CTA secundario:
"Ver solucoes"

Dados conhecidos:
- Marca: HS Seg
- Instagram: @hs.segpi
- Segmento: seguranca eletronica, monitoramento 24h, rastreamento veicular, alarmes, cameras, seguranca residencial, empresarial e condominial.
- Experiencia: 8 anos protegendo o que tem valor.
- Regiao: Piaui, com foco em Teresina e entorno.

Use placeholders editaveis para:
- [WHATSAPP_NUMBER]
- [TELEFONE]
- [ENDERECO]
- [EMAIL]
- [URL_INSTAGRAM]
- [LOGO_HS_SEG]
- [IMAGENS_REAIS_DA_EMPRESA]
- [CLIENTES_REAIS]
- [DEPOIMENTOS_REAIS]

Arquitetura de paginas:
- Home principal em src/pages/index.astro.
- Preparar estrutura para futuras paginas de servicos em src/pages/servicos/.
- Preparar estrutura para cases em src/content/cases/.
- Preparar estrutura para blog em src/content/blog/.

Estrutura de componentes:
- BaseLayout.astro
- Header.astro
- Hero.astro
- TrustBar.astro
- SolutionSelector.tsx
- ServicesGrid.astro
- ProcessTimeline.astro
- SocialProof.astro
- VehicleTracking.astro
- BusinessCondominium.astro
- AboutSection.astro
- Faq.astro ou Faq.tsx
- FinalCta.astro
- Footer.astro
- WhatsAppButton.astro ou .tsx

Secoes obrigatorias da home:

1. Header
- Logo no topo esquerdo.
- Navegacao simples: Solucoes, Como funciona, Casos, Rastreamento, FAQ, Contato.
- Botao de WhatsApp sempre visivel no desktop.
- No mobile, usar menu limpo e botao de WhatsApp facil de tocar.
- Header pode ficar sticky, mas sem ocupar espaco demais.

2. Hero principal
- Fundo escuro premium com textura tecnica sutil, linhas discretas ou grid leve.
- H1: "Seguranca eletronica, monitoramento 24h e rastreamento veicular no Piaui"
- Subtexto: "Proteja sua casa, empresa, condominio ou veiculo com alarmes, cameras, rastreamento e suporte local de uma operacao preparada para agir."
- CTA principal para WhatsApp.
- CTA secundario para rolar ate solucoes.
- Selos: "8 anos de experiencia", "Monitoramento 24h", "Atendimento no Piaui".
- Visual lateral: composicao de central de monitoramento com camera, mapa, alerta e status online. Se nao houver imagens reais, usar placeholders profissionais e bem marcados.
- Incluir microanimacoes: ponto pulsando em "24h", status "Monitoramento ativo", card de alerta entrando suavemente.

3. Barra de confianca
- Quatro indicadores curtos:
  - 8 anos de experiencia
  - Monitoramento 24h
  - Residencial, empresarial e veicular
  - Atendimento local no Piaui
- Visual compacto, tecnico e confiavel.

4. Seletor inteligente de solucao
- Componente interativo em React.
- Quatro opcoes: Casa, Empresa, Condominio, Veiculo.
- Ao selecionar, mudar:
  - titulo
  - beneficios principais
  - servicos recomendados
  - mensagem dinamica para WhatsApp
- Exemplo de mensagem:
  "Ola, vim pelo site da HS Seg. Quero proteger uma empresa em Teresina. Tenho interesse em cameras e monitoramento 24h. Gostaria de uma avaliacao."
- Nao usar IA generativa nesta fase; usar logica por regras.

5. Servicos principais
- Cards tecnicos com icones:
  - Monitoramento 24h
  - Cameras de seguranca
  - Sistemas de alarme
  - Rastreamento veicular
  - Seguranca residencial
  - Seguranca para empresas
  - Seguranca para condominios
  - Controle de acesso
- Cada card deve ter titulo, beneficio pratico e micro CTA.
- Cards com hover discreto, borda fina, detalhe azul/amarelo e sem exagero visual.

6. Como funciona
- Linha do tempo animada com GSAP:
  - Avaliacao da necessidade
  - Projeto da solucao
  - Instalacao dos equipamentos
  - Monitoramento e acompanhamento
  - Suporte quando precisar
- Inspiracao: fluxo "detecta, verifica, aciona, protege".
- Visual deve lembrar uma operacao organizada, nao apenas uma lista.

7. Prova social e casos reais
- Usar estrutura preparada para fotos, prints de feedbacks, clientes e casos reais.
- Nao inventar depoimentos.
- Se nao houver conteudo real, usar placeholders explicitos:
  - [DEPOIMENTO REAL DO CLIENTE]
  - [FOTO DE INSTALACAO]
  - [CASE REAL DO INSTAGRAM]
- Dar destaque para "confianca construida na pratica".

8. Rastreamento veicular
- Secao propria, com visual de mapa/app.
- Mostrar beneficios:
  - Localizacao em tempo real
  - Historico de rotas
  - Alertas
  - Bloqueio
  - Monitoramento 24h
  - Mais controle sobre veiculos e frotas
- CTA especifico:
  "Quero rastrear meu veiculo"
- Pode ter animacao de sinal/ponto no mapa, leve e performatica.

9. Empresas e condominios
- Tom mais B2B e tecnico.
- Mostrar:
  - CFTV
  - Alarmes
  - Controle de acesso
  - Monitoramento
  - Protecao de patrimonio
  - Apoio para lojas, condominios e operacoes locais
- Visual mais sobrio, com cards horizontais e layout limpo.

10. Sobre a HS Seg
- Texto curto e forte.
- Falar dos 8 anos, da presenca local e da combinacao entre tecnologia, equipe e atendimento.
- Nao fazer uma historia longa.
- Incluir espaco para foto da equipe, fachada ou instalacao real.

11. FAQ
- Perguntas obrigatorias:
  - Quanto custa uma solucao de seguranca?
  - A HS Seg atende minha regiao?
  - A instalacao e rapida?
  - Posso acompanhar pelo celular?
  - O que acontece se o alarme disparar?
  - O rastreamento funciona para carro, moto e frota?
  - Preciso comprar os equipamentos?
- Respostas comerciais, objetivas e sem promessas impossiveis.

12. CTA final
- Fundo escuro forte.
- Titulo:
  "Quer saber qual solucao protege melhor sua casa, empresa ou veiculo?"
- Texto:
  "Fale com a HS Seg e receba uma avaliacao para entender o que faz sentido para sua rotina, seu patrimonio e seu nivel de risco."
- Botao:
  "Falar com especialista no WhatsApp"

13. Rodape
- Logo.
- Links rapidos.
- Servicos principais.
- WhatsApp, telefone, Instagram e endereco com placeholders.
- Texto de direitos autorais.

Animacoes obrigatorias:
- Hero com elementos de interface entrando em camadas.
- Status/ponto pulsando para "Monitoramento ativo".
- Cards de servico com hover.
- Linha do tempo com reveal ao scroll.
- Rastreamento veicular com sinal discreto em mapa/app.
- Respeitar prefers-reduced-motion.
- Animacoes devem ser leves, sem travar o mobile.

SEO:
- Title: "HS Seg | Seguranca Eletronica, Monitoramento 24h e Rastreamento no Piaui"
- Meta description com ate 160 caracteres.
- Open Graph.
- Estrutura semantica com h1 unico.
- JSON-LD para LocalBusiness, Organization, Service e FAQPage.
- Preparar keywords locais naturalmente:
  - seguranca eletronica em Teresina
  - monitoramento 24h no Piaui
  - rastreamento veicular em Teresina
  - cameras de seguranca em Teresina
  - alarme residencial em Teresina
  - seguranca para condominios em Teresina

Acessibilidade:
- Contraste adequado.
- Botoes com aria-label quando necessario.
- Navegacao por teclado.
- Texto alternativo em imagens.
- Componentes interativos acessiveis.
- Nao depender apenas de cor para indicar status.

Performance:
- Otimizar imagens.
- Lazy load em imagens abaixo da dobra.
- Evitar bibliotecas desnecessarias.
- Carregar React apenas nos componentes interativos.
- Evitar video pesado no hero se nao houver otimizacao.
- O site deve ser excelente no mobile.

WhatsApp dinamico:
- Criar helper para gerar link:
  https://wa.me/[WHATSAPP_NUMBER]?text=[MENSAGEM_CODIFICADA]
- A mensagem deve mudar conforme:
  - perfil selecionado no seletor
  - servico clicado
  - CTA usado
- Usar placeholder [WHATSAPP_NUMBER] em todos os pontos.

Arquivos esperados:
- package.json
- astro.config.mjs
- tailwind.config.mjs ou tailwind config equivalente
- tsconfig.json
- src/layouts/BaseLayout.astro
- src/pages/index.astro
- src/components/*
- src/data/services.ts
- src/data/faqs.ts
- src/data/solutions.ts
- src/styles/global.css
- public/images/ com placeholders organizados

Qualidade visual esperada:
- Nivel superior aos sites locais comuns de seguranca.
- Inspiracao visual em plataformas modernas como Verkada, SimpliSafe, Genetec e Kisi, mas adaptada a uma empresa local.
- Interface com sensacao de central de monitoramento.
- Nada de visual infantil, exageradamente futurista ou poluido.
- Evitar cards dentro de cards.
- Evitar hero generico de banco de imagem.
- Evitar secoes longas sem hierarquia.

Checklist final:
- Rodar npm install se necessario.
- Rodar npm run build.
- Rodar npm run dev.
- Verificar desktop e mobile.
- Conferir se nao ha texto quebrando em botoes/cards.
- Conferir se CTAs de WhatsApp usam o helper.
- Conferir se nao existem dados falsos.
- Conferir se o site tem boa hierarquia, contraste e performance.
- Entregar resumo do que foi criado e URL local para visualizacao.
```

