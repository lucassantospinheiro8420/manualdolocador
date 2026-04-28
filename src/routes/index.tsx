import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { StarRating } from "@/components/StarRating";
import { CountdownTimer } from "@/components/CountdownTimer";
import {
  Check, X, ShieldCheck, Clock, TrendingUp, Car, Users,
  Wallet, Lock, Award, PlayCircle, Zap, Target,
  Quote, Triangle, Rocket, DollarSign,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import ebookTablet from "@/assets/ebook-tablet.webp";
import { VturbPlayer } from "@/components/VturbPlayer";
import mentor from "@/assets/mentor.webp";
import dep1 from "@/assets/depoimentos/A1.webp";
import dep2 from "@/assets/depoimentos/A2.webp";
import dep3 from "@/assets/depoimentos/A3.webp";
import dep4 from "@/assets/depoimentos/A4.webp";
import dep5 from "@/assets/depoimentos/A5.webp";
import dep6 from "@/assets/depoimentos/A6.webp";
import dep7 from "@/assets/depoimentos/A7.webp";
import dep8 from "@/assets/depoimentos/A72.webp";

const depoimentos = [
  { src: dep1, alt: "Aluno chegou a 3 carros e R$10.000/mês em 60 dias" },
  { src: dep2, alt: "Aluno conseguiu R$18.000 de desconto na compra" },
  { src: dep3, alt: "Aluno colocou R$3.000 no bolso na 1ª locação" },
  { src: dep7, alt: "Primeiro carro alugado por R$700/semana" },
  { src: dep5, alt: "Aluno com 2 carros alugados e R$6.000/mês" },
  { src: dep4, alt: "Aluno fez 1ª compra e locação em uma semana" },
  { src: dep6, alt: "Começou do zero e está colocando R$3.000 no bolso" },
  { src: dep8, alt: "Aluno com primeiro carro alugado em uma semana" },
];

export const Route = createFileRoute("/")({
  component: SalesPage,
  head: () => ({
    meta: [
      { title: "Manual do Locador de Carro — Lucre R$3.000/mês com Locação" },
      {
        name: "description",
        content:
          "Descubra o método validado para lucrar R$3.000 extra por mês com locação de carros, em apenas 30 minutos por dia. Mesmo sem ter um carro próprio.",
      },
      { property: "og:title", content: "Manual do Locador de Carro" },
      { property: "og:description", content: "R$3.000/mês com locação de carros em 30 min/dia." },
      { property: "og:image", content: ebookTablet },
    ],
  }),
});

function SalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top urgency bar */}
      <div className="bg-gradient-gold text-primary-foreground text-center py-2 px-3 text-xs sm:text-sm font-bold uppercase tracking-wider sticky top-0 z-40">
        ⚡ Oferta por tempo limitado · 95% OFF
      </div>

      {/* HERO */}
      <section className="relative px-4 pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="absolute inset-0 bg-radial-gold opacity-60 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center fade-up">
          <span className="inline-block bg-card border border-primary/40 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            🚗 Manual do Locador de Carro
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-5">
            Lucre <span className="text-gradient-gold">R$3.000 extras</span> por mês com{" "}
            <span className="text-gradient-gold">Locação de Carros</span> em apenas 30 min/dia
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            O método validado para gerar renda mensal com a Uber —
            <strong className="text-foreground"> mesmo que você não tenha um carro próprio.</strong>
          </p>

          <div className="flex justify-center mb-6">
            <img
              src={ebookTablet}
              alt="Manual do Locador de Carro - Transforme Carros em Renda"
              width={900}
              height={1100}
              className="drop-shadow-2xl max-h-[420px] w-auto float-anim"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-2 max-w-xl mx-auto mb-7 text-left">
            {[
              "Mesmo que você não saiba nada sobre carros",
              "Controle e segurança total na locação",
              "Evite os erros que arruinam iniciantes",
              "Atraia somente motoristas 5 estrelas",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2 bg-card/60 border border-border rounded-lg px-3 py-2.5">
                <Check className="size-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>

          <CTAButton scrollTo="oferta">QUERO COMEÇAR AGORA POR R$67</CTAButton>

          <div className="flex items-center justify-center gap-3 mt-4 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-success" />
            <span>Garantia incondicional de 7 dias</span>
            <span>·</span>
            <Lock className="size-4" />
            <span>Compra 100% segura</span>
          </div>

          <div className="flex items-center justify-center gap-2 mt-5">
            <StarRating />
            <span className="text-sm text-muted-foreground">+3000 alunos formados</span>
          </div>
        </div>
      </section>

      {/* VSL */}
      <section className="px-4 py-10 bg-card/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">
            Em <span className="text-gradient-gold">60 segundos</span> eu te explico tudo
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-primary/30 bg-black">
            <VturbPlayer />
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            ✅ SEM IMPROVISO · ✅ SEM RISCO DE PERDER DINHEIRO · ✅ SEM ACHISMO
          </p>
        </div>
      </section>

      {/* PARA QUEM É — 3 pilares */}
      <section className="px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Para quem é</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              O Manual é para quem busca renda extra com:
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: ShieldCheck, t: "BAIXO RISCO",
                d: "Não quer começar um negócio novo nem passar pelo risco de altos e baixos por falta de experiência.",
              },
              {
                icon: TrendingUp, t: "ALTOS LUCROS",
                d: "Receba pelo menos R$3.000 por cada veículo locado, sem gastar horas do seu dia gerenciando.",
              },
              {
                icon: Rocket, t: "GANHOS IMEDIATOS",
                d: "R$1.500 já na entrega + R$3.000 da locação = R$4.500 logo no primeiro mês.",
              },
            ].map((c) => (
              <div key={c.t} className="bg-card border border-primary/30 rounded-2xl p-6 text-center hover:border-primary/60 transition shadow-card">
                <div className="bg-gradient-gold size-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <c.icon className="size-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg text-gradient-gold mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-card/60 border border-border rounded-2xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Nos primeiros 30 dias</strong> de locação você já recebe{" "}
              <span className="text-gradient-gold font-bold">R$1.500 na entrega</span> do carro, e mais{" "}
              <span className="text-gradient-gold font-bold">R$3.000 pela locação</span>, fechando{" "}
              <span className="text-gradient-gold font-bold">R$4.500 já no 1º mês.</span>
            </p>
          </div>

          <div className="mt-8 max-w-md mx-auto">
            <CTAButton scrollTo="oferta">QUERO MINHA RENDA EXTRA</CTAButton>
          </div>
        </div>
      </section>

      {/* STORYTELLING — Por que o mercado virou o novo ouro */}
      <section className="px-4 py-14 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">O Movimento</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Enquanto alguns mercados travam, <span className="text-gradient-gold">outros explodem</span>
            </h2>
            <p className="text-muted-foreground">
              Quem entende o método certo transforma um ativo comum em uma fonte de renda previsível.
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              Pessoas que conhecem o mercado de locação, em menos de 12 meses,
              acabam <strong className="text-foreground">deixando seus empregos CLT</strong> para
              se dedicar ao mercado que mais remunera iniciantes.
            </p>
            <p>
              A locação não depende de modas, lançamentos ou grandes estruturas.{" "}
              <strong className="text-foreground">Ela depende de processo.</strong>{" "}
              E é exatamente aqui que muita gente se confunde.
            </p>

            <div className="bg-card border-l-4 border-primary rounded-r-xl p-5 my-6">
              <p className="text-foreground font-medium mb-3">
                Quando o método é feito da forma correta:
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  "Risco diminui drasticamente",
                  "Renda mensal previsível",
                  "Reinvestimento do 1º carro",
                  "Locação como renda principal",
                ].map((i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-success shrink-0" />
                    <span>{i}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-foreground font-bold text-lg">
              O mercado de locação não é uma promessa futura. <br className="hidden sm:block" />
              <span className="text-gradient-gold">Ele já está acontecendo.</span>
            </p>
            <p className="text-center text-sm italic">
              E como todo movimento de mercado, quem entende antes, entra melhor posicionado.
            </p>
          </div>
        </div>
      </section>

      {/* TRIÂNGULO DA LOCAÇÃO */}
      <section className="px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">O Método</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">
              O <span className="text-gradient-gold">Triângulo da Locação</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os 3 pilares que tornam sua operação praticamente <strong className="text-foreground">infalível</strong>,
              mesmo em cenários difíceis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: DollarSign, t: "GESTÃO",
                d: "Altos lucros e gerenciamento da frota em menos de 30 minutos por dia. É aqui que o dinheiro de verdade aparece.",
              },
              {
                icon: Zap, t: "OPERAÇÃO",
                d: "Faz a sua locação funcionar sem que você precise estar 100% do tempo envolvido. Liberdade de tempo e financeira.",
              },
              {
                icon: Users, t: "VENDAS (ALOCAÇÃO)",
                d: "Garante que seus carros nunca fiquem parados. A forma mais simples de atrair os melhores motoristas.",
              },
            ].map((p, idx) => (
              <div key={p.t} className="relative bg-card border border-primary/40 rounded-2xl p-6 shadow-card hover:shadow-gold transition">
                <div className="absolute -top-3 -left-3 bg-gradient-gold text-primary-foreground size-9 rounded-full flex items-center justify-center font-bold text-sm shadow-gold">
                  {idx + 1}
                </div>
                <Triangle className="size-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2 text-gradient-gold">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-base sm:text-lg mt-10 max-w-2xl mx-auto">
            Você só precisa de um <strong className="text-foreground">passo a passo</strong> para implementar
            esse modelo e conquistar uma fonte de renda{" "}
            <span className="text-gradient-gold font-bold">lucrativa, independente e indestrutível.</span>
          </p>

          <div className="mt-8 max-w-md mx-auto">
            <CTAButton scrollTo="oferta" />
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">O Mercado</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Por que a locação se tornou o <span className="text-gradient-gold">novo ouro</span> do Brasil?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Alta demanda, modelo simples e previsibilidade de receita. Mas só lucra quem domina o método certo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Target, t: "Qual carro escolher", d: "Modelos certos para a Uber e máximo retorno" },
              { icon: Wallet, t: "Quanto pagar por ele", d: "Negocie até 50% abaixo do mercado" },
              { icon: TrendingUp, t: "Onde achar desconto", d: "Fontes fora do radar das lojas tradicionais" },
              { icon: ShieldCheck, t: "Como proteger o veículo", d: "Contratos, vistoria e proteção jurídica" },
              { icon: Users, t: "Motoristas 5 estrelas", d: "Filtragem para reduzir riscos" },
              { icon: Zap, t: "Lucro mensal garantido", d: "Sistema replicável e validado" },
            ].map((c) => (
              <div key={c.t} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition shadow-card">
                <c.icon className="size-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-1">{c.t}</h3>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN VS SOLUTION */}
      <section className="px-4 py-14 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
            Você não tem medo de começar.
          </h2>
          <p className="text-xl text-center text-gradient-gold font-bold mb-10">
            Você tem medo de perder dinheiro sem saber o que está fazendo.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-destructive/10 border border-destructive/40 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <X className="size-6 text-destructive" />
                <h3 className="text-xl font-bold text-destructive">Locação SEM estrutura</h3>
              </div>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Acordo no WhatsApp",
                  "Contratos fracos ou improvisados",
                  "Sem processo de vistoria",
                  "Sem proteção jurídica",
                  "Controle manual de pagamento",
                  "Aprende no prejuízo",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className="size-4 text-destructive shrink-0 mt-0.5" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-success/10 border border-success/40 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Check className="size-6 text-success" />
                <h3 className="text-xl font-bold text-success">Com o Manual do Locador</h3>
              </div>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Contratos prontos copy & paste",
                  "Proteção jurídica completa",
                  "Checklist de vistoria validado",
                  "Sistema de pagamento automatizado",
                  "Filtragem de motoristas premium",
                  "Lucro previsível mês a mês",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="size-4 text-success shrink-0 mt-0.5" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET — modules */}
      <section className="px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">O Conteúdo</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Tudo o que você recebe no <span className="text-gradient-gold">Manual</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                n: "01", t: "Compra com Desconto", icon: Car,
                items: ["Carros até 50% abaixo do mercado", "Onde comprar fora do radar", "Critérios para escolher carros lucrativos", "Como evitar carros que viram prejuízo"],
              },
              {
                n: "02", t: "Alavancagem Inteligente", icon: TrendingUp,
                items: ["Quando financiar (e quando NÃO)", "Crescer sem tirar do bolso", "Use o crédito do banco a seu favor", "Faça a parcela se pagar sozinha"],
              },
              {
                n: "03", t: "Encontrando Motoristas", icon: Users,
                items: ["Onde achar bons motoristas online", "Técnicas digitais de captação", "Como filtrar com segurança", "Carro sempre alocado"],
              },
              {
                n: "04", t: "Gerenciamento Eficaz", icon: Clock,
                items: ["Tudo em até 30 min/dia", "Rotinas simples de controle", "O que acompanhar e ignorar", "Padronização e escala"],
              },
            ].map((m) => (
              <div key={m.n} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/60 transition shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-gold size-12 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {m.n}
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Módulo</span>
                    <h3 className="font-bold text-lg leading-tight">{m.t}</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  {m.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="size-4 text-success shrink-0 mt-0.5" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-md mx-auto">
            <CTAButton scrollTo="oferta" />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="px-4 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Resultados Reais</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">
              Veja as conquistas dos meus <span className="text-gradient-gold">alunos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prints reais de alunos que aplicaram o Manual do Locador. Você está a um passo de resultados parecidos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {depoimentos.map((d, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary/60 hover:scale-[1.02] transition"
              >
                <img
                  src={d.src}
                  alt={d.alt}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-md mx-auto">
            <CTAButton scrollTo="oferta">QUERO SER O PRÓXIMO RESULTADO</CTAButton>
          </div>
        </div>
      </section>

      {/* OFFER STACK */}
      <section id="oferta" className="px-4 py-14 bg-card/30 relative scroll-mt-16">
        <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">A Oferta Completa</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Tudo que você leva <span className="text-gradient-gold">hoje</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <img
              src={ebookTablet}
              alt="Manual do Locador - tablet"
              width={900}
              height={1100}
              className="w-56 sm:w-72 float-anim drop-shadow-2xl"
              loading="lazy"
            />

            <div className="flex-1 w-full">
              <div className="bg-card border border-primary/40 rounded-2xl p-5 shadow-elevated">
                <h3 className="text-lg font-bold mb-4 text-center">📦 O pacote completo:</h3>
                <ul className="space-y-2.5">
                  {[
                    { t: "Manual do Locador (Completo)", v: "R$ 397" },
                    { t: "🎁 BÔNUS: 3 Encontros ao vivo", v: "R$ 497" },
                    { t: "🎁 Estratégia de Compra com Desconto", v: "R$ 97" },
                    { t: "🎁 Crédito para Negativados", v: "R$ 147" },
                    { t: "🎁 Encontrando Motoristas Premium", v: "R$ 97" },
                    { t: "🎁 Gerenciamento Express 30min", v: "R$ 67" },
                    { t: "🎁 Do Zero aos 10k em 90 dias", v: "R$ 197" },
                    { t: "🎁 Desafio: 1º aluguel em 7 dias", v: "R$ 197" },
                  ].map((b) => (
                    <li key={b.t} className="flex items-center justify-between gap-3 text-sm border-b border-border/50 pb-2 last:border-0">
                      <span className="flex items-start gap-2">
                        <Check className="size-4 text-success shrink-0 mt-0.5" />
                        <span>{b.t}</span>
                      </span>
                      <span className="text-muted-foreground line-through tabular-nums shrink-0">{b.v}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t-2 border-primary/30 text-center">
                  <p className="text-sm text-muted-foreground">Valor total:</p>
                  <p className="text-2xl font-bold text-muted-foreground line-through">R$ 1.696</p>
                  <p className="text-sm text-muted-foreground mt-3">Hoje, por apenas:</p>
                  <p className="text-6xl sm:text-7xl font-bold text-gradient-gold leading-none my-2">
                    R$67
                  </p>
                  <p className="text-xs text-muted-foreground mb-5">à vista · ou 12x de R$6,90</p>

                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-widest text-destructive font-bold mb-2 animate-pulse">
                      ⚠️ Oferta encerra em:
                    </p>
                    <CountdownTimer />
                  </div>

                  <CTAButton>QUERO ACESSAR AGORA</CTAButton>

                  <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground">
                    <ShieldCheck className="size-4 text-success" />
                    7 dias de garantia incondicional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Agora você tem <span className="text-gradient-gold">duas opções</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-card border border-destructive/30 rounded-2xl p-6 opacity-80">
              <div className="text-xs uppercase text-destructive font-bold mb-2">Opção 1</div>
              <h3 className="text-xl font-bold mb-4">Sem o Manual</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Ignorar tudo o que você acabou de ver",
                  "Começar sozinho podendo ter prejuízo",
                  "Perder meses no método tentativa-e-erro",
                  "Deixar de lucrar com atalhos validados",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className="size-4 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border-2 border-primary rounded-2xl p-6 shadow-gold relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">
                Recomendado
              </div>
              <div className="text-xs uppercase text-primary font-bold mb-2">Opção 2</div>
              <h3 className="text-xl font-bold mb-4">Com o Manual do Locador</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Baixar o manual e começar ainda hoje",
                  "Copiar e colar a estratégia validada",
                  "Colocar R$3k no bolso em 30 dias",
                  "Construir renda previsível e escalável",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="size-4 text-success shrink-0 mt-0.5" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* MENTOR */}
      <section className="px-4 py-14 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Conheça seu mentor</span>
          </div>
          <div className="grid sm:grid-cols-[200px_1fr] gap-6 items-center bg-card border border-border rounded-2xl p-6 shadow-card">
            <img
              src={mentor}
              alt="Lucas Pinheiro - Mentor"
              width={200}
              height={200}
              className="rounded-2xl w-full max-w-[200px] mx-auto object-cover object-top aspect-[3/4]"
              loading="lazy"
            />
            <div>
              <h3 className="text-2xl font-bold mb-1">Lucas Pinheiro</h3>
              <div className="flex items-center gap-2 text-sm text-primary mb-3">
                <Award className="size-4" />
                Especialista em Locação de Carros
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mais de <strong className="text-foreground">50 carros locados em 2 anos</strong> e mais de{" "}
                <strong className="text-foreground">800 locadores</strong> ajudados a transformar a operação em
                uma máquina de renda previsível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="px-4 py-14">
        <div className="max-w-2xl mx-auto bg-card border-2 border-success/40 rounded-2xl p-8 text-center shadow-card">
          <ShieldCheck className="size-16 text-success mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Garantia Incondicional de 7 dias</h2>
          <p className="text-muted-foreground">
            Se em até 7 dias você sentir que não é pra você, basta enviar um e-mail e devolvemos{" "}
            <strong className="text-foreground">100% do seu investimento.</strong> Sem perguntas.
            Todo o risco é nosso.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-16 bg-card/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sua decisão de hoje define seu <span className="text-gradient-gold">próximo mês</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Por menos de uma pizza, você desbloqueia o sistema que pode te gerar R$3.000/mês.
          </p>
          <p className="text-sm text-muted-foreground mb-1">De <span className="line-through">R$1.696</span> por apenas:</p>
          <p className="text-7xl font-bold text-gradient-gold mb-6">R$67</p>
          <CTAButton>SIM! QUERO COMEÇAR AGORA</CTAButton>
          <p className="text-xs text-muted-foreground mt-4">Pagamento 100% seguro · Acesso imediato</p>
        </div>
      </section>

      <footer className="px-4 py-8 text-center text-xs text-muted-foreground border-t border-border pb-28">
        <p>© Manual do Locador de Carro · Lucas Pinheiro</p>
        <p className="mt-1 max-w-md mx-auto">
          Este produto não garante a obtenção de resultados. Resultados podem variar conforme dedicação.
        </p>
      </footer>

      <StickyBuyBar />
    </div>
  );
}
