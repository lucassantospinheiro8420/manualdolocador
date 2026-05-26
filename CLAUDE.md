# Manual do Locador de Carros — Projeto

Landing page de vendas do **Manual do Locador de Carros** (Lucas Pinheiro / Winner Locações).

## 🎯 Produto

- **Nome:** Manual do Locador de Carros
- **Preço:** R$67 à vista · 12x de R$6,93
- **Ancoragem:** R$697 (vai aparecer como "De R$697 por R$67")
- **Promessa:** R$3.000/mês por carro alugado
- **Autoridade:** Lucas Pinheiro, fundador da Winner Locações (50 carros em 24 meses, 3.000+ alunos)

## 🚀 Deploy

- **Domínio:** [manualdolocador.com](https://manualdolocador.com)
- **Plataforma:** Vercel (projeto `manual-do-locador-lovable`)
- **GitHub:** https://github.com/lucassantospinheiro8420/manualdolocador
- **Branch principal:** `master`
- **Backup branch:** `backup-versao-completa-pre-enxuta` + tag `v-completa-antes-da-enxuta`

### Comandos deploy
```bash
git add -A && git commit -m "msg" && git push origin master
vercel --prod --yes
# pegar URL do deploy e aliasar:
vercel alias set <deploy-url>.vercel.app manualdolocador.com
```

**REGRA:** Sempre mostrar o **deploy preview** antes de fazer o alias pro domínio. Usuário aprova → faz alias.

## 📄 Páginas

### `/` — Landing principal (`src/routes/index.tsx`)
Estrutura enxuta (inspirada no Contrato Anti-Risco que converte bem):

1. Top bar dourado "Você está prestes a conhecer..."
2. **HERO**: headline + subhead + 4 bullets pills + CTA "QUERO COPIAR O MANUAL" + mockup
3. **Mini Jornada do Herói** (`#jornada`): 5 objeções com solução + ancoragem positiva (R$3.000/carro em verde)
4. **Método** (`#metodo`): grid 9 cards (Rastreador, Captação, Antecedentes, Garantia Antecipada, etc.)
5. **3 Pilares** (`#pilares`): Baixo Risco, Altos Lucros, Ganhos Imediatos
6. **Pain vs Solution** (`#dor-vs-solucao`)
7. **Winner Locações**: capa do manual + texto autoridade
8. **Oferta** (`#oferta`): 8 itens (último é BÔNUS), valor total R$697, preço R$67
9. **Garantia 7 dias**
10. **Mentor**: Lucas Pinheiro
11. **Provas Sociais** (`#provas`): 8 prints WhatsApp
12. **CTA Final**: "Seus primeiros R$3.000 por carro alugado estão a um Manual de distância"
13. **3 depoimentos texto** (Bruno A., Diego M., Larissa S.)
14. **2ª chance de compra**

### `/boasvindas` — Upsell pós-compra (`src/routes/boasvindas.tsx`)
- Banner verde "PARABÉNS"
- Headline "Mas espera aí... Tenho mais uma novidade pra você"
- Texto: *"Você tem direito a 3 encontros bônus de dúvidas comigo. No vídeo abaixo eu te explico como participar."*
- **Vídeo Vturb** (ID: `vid-6a15f2e2e8f77642689e8b46`)
- **Após 5min** (`REVEAL_DELAY_MS`): revela seção de bônus
- 8 benefícios (Contrato locação, Seguro com desconto, Tráfego pago, Consultor financeiro, etc.)
- Ancoragem: R$5.000 (riscado) → R$497 (verde gigante)
- **Assiny One-Click** node `582226`
- Debug: `?reveal=1` pula o delay

**Configurar no Assiny:** redirect pós-compra do Manual → `https://manualdolocador.com/boasvindas`

## 🎨 Tema (paleta "Aço")

`src/styles.css` — paleta steel-blue suave (light theme):
- Background: branco
- Primary: azul aço médio (`oklch(0.5 0.13 235)`)
- Success/CTA: verde (`oklch(0.7 0.18 155)`)
- Cards e section-alt com tint azul-cinza sutil
- Gradient-gold é AZUL (variável renomeada no spirit, não no código)

## 🔧 Stack técnica

- **Build:** Vite 7 + React + TypeScript
- **Routing:** TanStack Router (file-based, auto-gen via vite plugin)
- **CSS:** Tailwind 4 + variáveis CSS customizadas
- **Fonts:** self-hosted (`@fontsource/inter` + `@fontsource/montserrat`)
- **Player vídeo:** Vturb (ConverteAI)
- **Checkout:** Assiny (`pay.assiny.com.br/8d92a1/node/IZOjgd`)
- **One-click upsell:** Assiny node `582226`

### Componentes importantes
- `src/components/CTAButton.tsx` — `<a>` puro com href/id/class (compatível `gtm.linkClick`)
- `src/components/VturbPlayer.tsx` — player principal (ID `vid-6945c577e80b76c536cd8e0a`)
- `src/components/UpsellVturbPlayer.tsx` — player upsell (ID `vid-6a15f2e2e8f77642689e8b46`)
- `src/components/AssinyOneClick.tsx` — wrapper do iframe one-click (carrega scripts on-demand)
- `src/components/CountdownTimer.tsx` — countdown da oferta
- `src/components/StarRating.tsx` — 5 estrelas

### IDs únicos dos CTAs (pra GTM)
- `cta-hero`, `cta-oferta`, `cta-final`, `cta-final-2`

## 📊 Tracking

- **Stape Tagging Server:** `https://api.manualdolocador.com` (sub do próprio domínio, first-party cookies)
- **GTM Server Container:** integrado via Stape
- **GTM Web Container:** carregado no `<head>` do `index.html`
- **Facebook Pixel:** `1514353496465410` (CAPI via Stape)
- **Microsoft Clarity:** `vlgen61c4f` (mapa de calor)
- **UTMify:** rastreamento de UTM/originem

## 📈 Performance / Otimizações

- Imagens em WebP otimizadas via sharp
- Mockup principal: `mockup-completo-v2.webp` (~120KB)
- Preload da imagem LCP no `index.html`
- DNS prefetch + preconnect para CDNs
- Vite build com `assetFileNames` estável pro mockup (preserva URL pro preload funcionar)

## ✍️ Diretrizes de copy

- **NUNCA** usar travessões (—) — cara de IA. Usar vírgula, ponto ou dois pontos.
- **NUNCA** usar "descubra", "incrível" e palavras com cara de venda
- Linguagem direta e lógica
- Bônus tem padrão: "🎁 BÔNUS: Substantivo + descritor em minúsculas"
- Bullets em Title Case (estilo Contrato Anti-Risco)

## 🧪 Testes A/B já feitos

1. ✅ Tema dourado-preto → migramos pro azul claro (mais conversão, menos cara de venda)
2. ✅ Vídeo autoplay → click-to-play → autoplay nativo do Vturb (esse problema do scroll drop 5%→10% foi parcialmente resolvido)
3. ✅ Reorganização estrutural (estilo Contrato Anti-Risco) — em teste atual
4. ✅ Bullets "doces" → bullets de desejo (R$3k PIX, 1500 garantia, etc.)
5. ✅ CTA hero scrolla pra #oferta (era #resultados)

## 📊 Histórico de dados Clarity

- Drop crítico observado: **5% → 10% de scroll** (perdíamos 71% nos primeiros segundos)
- Após várias otimizações ficou em ~62% — ainda alto
- Hipótese principal restante: **tráfego mal qualificado vindo dos anúncios**

## ⚠️ Coisas importantes

- O usuário **prefere ver preview deploy** antes de aplicar pro domínio. Não fazer alias automático.
- Sempre **otimizar imagens novas com sharp** (limite ~150KB para mockups)
- **Mock-up grande** = problema de loading no mobile (que é 95% do tráfego)
- Quando trocar imagem, fazer **cache-busting renomeando o arquivo** (vide histórico mockup-completo → mockup-completo-v2)
- O **mentor Lucas Pinheiro** é o fundador da Winner Locações (50 carros em 24 meses)
