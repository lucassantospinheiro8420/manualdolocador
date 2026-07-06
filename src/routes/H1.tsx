import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { StarRating } from "@/components/StarRating";
import {
  Check, X, ShieldCheck, AlertTriangle, Wallet, Users,
  TrendingUp, Rocket, Award, CreditCard, Smartphone, FileText,
  Search, ShieldAlert, Banknote,
} from "lucide-react";
import mockupCompleto from "@/assets/mockup-completo-v2.webp";
import ebookTablet from "@/assets/ebook-tablet.webp";
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
  { src: dep3, alt: "Aluno colocou R$3.000 no bolso na 1ª locação" },
  { src: dep4, alt: "Aluno fez 1ª compra e locação em uma semana" },
  { src: dep5, alt: "Aluno com 2 carros alugados e R$6.000/mês" },
  { src: dep1, alt: "Aluno chegou a 3 carros e R$10.000/mês em 60 dias" },
  { src: dep2, alt: "Aluno conseguiu R$18.000 de desconto na compra" },
  { src: dep7, alt: "Primeiro carro alugado por R$700/semana" },
  { src: dep6, alt: "Começou do zero e está colocando R$3.000 no bolso" },
  { src: dep8, alt: "Aluno com primeiro carro alugado em uma semana" },
];

export const Route = createFileRoute("/H1")({
  component: SalesPage,
  head: () => ({
    meta: [
      { title: "Manual do Locador de Carros: Copie o método e garanta R$3.000 por carro alugado" },
      {
        name: "description",
        content:
          "Copie e aplique o método de locação de carros que tirou Lucas Pinheiro de 0 a 50 carros alugados em 24 meses. R$3.000/mês por carro.",
      },
      { property: "og:title", content: "Manual do Locador de Carros" },
      { property: "og:description", content: "O método que me tirou de 0 a 50 carros alugados em 24 meses." },
      { property: "og:image", content: mockupCompleto },
    ],
  }),
});

function SalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top urgency bar */}
      <div className="bg-gradient-gold text-primary-foreground text-center py-2 px-3 sticky top-0 z-40">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight">
          Você está prestes a conhecer o
        </p>
        <p className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight">
          Manual do Locador de Carros
        </p>
      </div>

      {/* HERO */}
      <section className="relative px-5 pt-6 pb-8 sm:pt-10 sm:pb-12">
        <div className="relative max-w-2xl mx-auto text-center fade-up">

          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-[1.2] mb-3">
            <span className="text-gradient-gold">Garanta R$3.000 por mês</span> com cada carro alugado, mesmo que na sua cidade você jure que <span className="text-gradient-gold">não aluga</span>
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto mb-5 leading-relaxed">
            O mesmo método que me fez sair de <strong className="text-foreground">0 a 50 carros alugados em 24 meses</strong>{" "}
            começando com o meu próprio carro.{" "}
            <strong className="text-foreground">Liberado pra você aplicar ainda hoje.</strong>
          </p>

          <div className="flex flex-col gap-2 max-w-md mx-auto mb-5 text-left">
            {[
              "Cobre no mínimo R$700/semana de qualquer carro",
              "Receba R$1.500 de garantia em cada locação",
              "Comece com o seu próprio carro, sem investir nada",
              "Evite erros que fazem iniciantes perder dinheiro",
            ].map((b) => (
              <div key={b} className="flex items-center gap-2.5 bg-primary/15 border border-primary/40 rounded-full px-4 py-2.5">
                <Check className="size-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>

          <CTAButton id="cta-hero" scrollTo="oferta">QUERO COPIAR O MANUAL</CTAButton>

          <div className="flex justify-center mt-6">
            <img
              src={mockupCompleto}
              alt="Manual do Locador de Carros, mockup completo (livro, monitor, tablet, iPhone, laptop)"
              width={1200}
              height={800}
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              className="max-h-[280px] sm:max-h-[460px] w-auto float-anim"
            />
          </div>
        </div>
      </section>

      {/* MINI JORNADA DO HEROI: quebra de objeções + ancoragem */}
      <section id="jornada" className="px-4 py-14 bg-section-alt">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">As travas que você tem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 leading-tight">
              Se você ainda <span className="text-destructive">não começou</span> a alugar carros…
            </h2>
            <p className="text-base sm:text-lg text-gradient-gold font-bold">
              Aqui está o passo a passo que destrava cada uma das suas dúvidas.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {[
              {
                obj: "“Eu não tenho dinheiro pra comprar um carro.”",
                sol: "Você aprende 3 caminhos: começar com o seu próprio carro, conseguir crédito mesmo negativado, ou comprar carros por até 50% do preço de mercado.",
              },
              {
                obj: "“E se o motorista bater o meu carro?”",
                sol: "O método te ensina qual seguro contratar, qual rastreador usar, e como fazer análise de antecedentes em tempo real pra evitar motoristas problema.",
              },
              {
                obj: "“E se ele simplesmente não me pagar?”",
                sol: "Você aprende a cobrar R$1.500 de garantia antecipada já na entrega do carro, antes mesmo da locação começar a rodar.",
              },
              {
                obj: "“Eu não sei qual carro escolher.”",
                sol: "O Manual te entrega o critério exato pra escolher carros que se pagam rápido e geram R$3.000/mês sem dor de cabeça.",
              },
              {
                obj: "“Demora muito pra começar a faturar?”",
                sol: "Não. Em 24h você pode estar com o 1º carro alugado. E a gestão da frota toma menos de 30 minutos do seu dia.",
              },
            ].map((q) => (
              <div key={q.obj} className="bg-card border border-border rounded-2xl p-5 shadow-card">
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="size-5 text-destructive shrink-0 mt-0.5" />
                  <p className="font-semibold text-foreground text-sm sm:text-base">{q.obj}</p>
                </div>
                <div className="flex items-start gap-3 pl-8">
                  <Check className="size-5 text-success shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{q.sol}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Ancoragem - resultado positivo */}
          <div className="bg-card border-2 border-success/40 rounded-2xl p-6 sm:p-8 text-center shadow-elevated">
            <TrendingUp className="size-10 text-success mx-auto mb-3" />
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Uma locação feita <strong className="text-foreground">de qualquer jeito</strong> pode te fazer
              perder dinheiro. Mas trilhando o <strong className="text-foreground">caminho correto</strong>,
              cada carro alugado pode te render facilmente
            </p>
            <p className="text-5xl sm:text-6xl font-bold text-success mb-1">R$ 3.000</p>
            <p className="text-base sm:text-lg text-muted-foreground mb-4">por mês, de forma previsível</p>
            <p className="text-base sm:text-lg leading-relaxed">
              É exatamente isso que você consegue tendo um passo a passo simples pra seguir.
              Ou, como eu gosto de chamar, um{" "}
              <span className="text-gradient-gold font-bold">Manual do Locador de Carros</span>.
            </p>
          </div>
        </div>
      </section>

      {/* O MÉTODO: grid dos pilares do conteúdo */}
      <section id="metodo" className="px-4 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">O método completo</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">
              Cada peça do método é um <span className="text-gradient-gold">passo a passo prático</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tudo o que você precisa pra começar a operar uma locadora lucrativa, do primeiro carro à frota completa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, t: "Rastreador + Seguro", d: "Qual rastreador instalar, qual seguro contratar e o que fazer em caso de acidente." },
              { icon: Users, t: "Captação de Motoristas", d: "Onde encontrar só motoristas 5 estrelas, e como filtrar pra deixar problema longe da sua operação." },
              { icon: Search, t: "Análise de Antecedentes", d: "Como rodar uma análise completa do motorista em tempo real, antes de entregar o carro." },
              { icon: Banknote, t: "Garantia Antecipada", d: "Como cobrar R$1.500 de garantia já na entrega do carro, antes do aluguel começar a rodar." },
              { icon: FileText, t: "Script para Atendimento", d: "O script pronto pra qualificar o motorista e fechar a locação com segurança." },
              { icon: FileText, t: "Checklist de Vistoria", d: "O passo a passo de como vistoriar o carro na entrega e na devolução pra não levar prejuízo." },
              { icon: Wallet, t: "Compra Inteligente", d: "Como comprar carros por até 50% do preço de mercado em qualquer região do Brasil." },
              { icon: CreditCard, t: "Crédito Liberado", d: "Como usar o dinheiro dos bancos pra crescer a frota, mesmo estando negativado." },
              { icon: Smartphone, t: "Sistema de Gestão", d: "Gerencie sua frota inteira em menos de 30 minutos por dia com um sistema simples e prático." },
            ].map((c) => (
              <div key={c.t} className="bg-card border border-primary/30 rounded-2xl p-6 hover:border-primary/60 transition shadow-card">
                <div className="bg-gradient-gold size-12 rounded-xl flex items-center justify-center mb-3">
                  <c.icon className="size-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-base mb-1.5 text-gradient-gold">{c.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 PILARES */}
      <section id="pilares" className="px-4 py-14 bg-section-alt">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Pra quem é</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Feito pra quem quer construir uma <span className="text-gradient-gold">renda real</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: ShieldCheck, t: "BAIXO RISCO",
                d: "Você opera com critérios validados em 50 locações reais. Não precisa aprender no prejuízo nem improvisar.",
              },
              {
                icon: TrendingUp, t: "ALTOS LUCROS",
                d: "Cada carro locado gera no mínimo R$3.000/mês, com o método te mostrando como cobrar e receber sem brecha.",
              },
              {
                icon: Rocket, t: "GANHOS IMEDIATOS",
                d: "R$1.500 já na entrega como garantia + R$3.000 pela locação = R$4.500 logo no 1º mês de operação.",
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
        </div>
      </section>

      {/* PAIN VS SOLUTION */}
      <section id="dor-vs-solucao" className="px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
            Sem método, <span className="text-destructive">sua locação vira dor de cabeça.</span>
          </h2>
          <p className="text-xl text-center text-gradient-gold font-bold mb-10">
            Com o Manual do Locador, vira renda recorrente.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-destructive/10 border border-destructive/40 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="size-6 text-destructive" />
                <h3 className="text-xl font-bold text-destructive">Locação SEM método</h3>
              </div>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Improvisa contrato e processo",
                  "Aluga pra qualquer motorista",
                  "Toma calote e batida no peito",
                  "Carro parado sem ninguém pra alugar",
                  "Compra carro que vira prejuízo",
                  "Trava pra crescer por falta de capital",
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
                <ShieldCheck className="size-6 text-success" />
                <h3 className="text-xl font-bold text-success">Com o Manual do Locador</h3>
              </div>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Processo validado em 50 locações reais",
                  "Filtra só motoristas 5 estrelas",
                  "R$1.500 de garantia antecipada em CADA locação",
                  "Carro sempre alocado, rendendo R$700/semana",
                  "Critério pra comprar carro que se paga sozinho",
                  "Cresce 1 carro por mês mesmo negativado",
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

      {/* AUTORIDADE / WINNER LOCAÇÕES */}
      <section className="px-4 py-14 bg-section-alt">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-[180px_1fr] gap-6 items-center bg-card border border-border rounded-2xl p-6 shadow-card">
            <img
              src={ebookTablet}
              alt="Manual do Locador de Carros, capa"
              width={180}
              height={240}
              className="rounded-xl w-full max-w-[180px] mx-auto object-contain"
              loading="lazy"
            />
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold mb-2">
                <Award className="size-4" />
                Validado na prática
              </div>
              <h3 className="text-2xl font-bold mb-2">O método da <span className="text-gradient-gold">Winner Locações</span></h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Manual construído dentro da <strong className="text-foreground">Winner Locações</strong>,
                com <strong className="text-foreground">50 carros alugados em 24 meses</strong>.
                Tudo o que funcionou na prática, organizado em um passo a passo simples
                pra você seguir e aplicar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER STACK */}
      <section id="oferta" className="px-4 py-14 bg-section-alt relative scroll-mt-16">
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">A Oferta Completa</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Tudo que você leva <span className="text-gradient-gold">hoje</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <img
              src={mockupCompleto}
              alt="Manual do Locador - mockup completo"
              width={1200}
              height={800}
              className="w-full max-w-md lg:max-w-lg float-anim"
              loading="lazy"
            />

            <div className="flex-1 w-full">
              <div className="bg-card border border-primary/40 rounded-2xl p-5 shadow-elevated">
                <h3 className="text-lg font-bold mb-4 text-center">📦 O pacote completo:</h3>
                <ul className="space-y-2.5">
                  {[
                    { t: "Manual do Locador (método completo)", v: "R$ 197" },
                    { t: "Qual Carro Iniciar a Operação", v: "R$ 67" },
                    { t: "Qual Seguro e Rastreador Usar", v: "R$ 67" },
                    { t: "Avaliando Motoristas + Antecedentes", v: "R$ 97" },
                    { t: "Aprovando Crédito para Negativado", v: "R$ 97" },
                    { t: "Script de Vistoria e Atendimento", v: "R$ 67" },
                    { t: "Sistema de Gerenciamento", v: "R$ 47" },
                    { t: "🎁 BÔNUS: 3 Encontros ao vivo comigo", v: "R$ 158" },
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
                  <p className="text-2xl font-bold text-muted-foreground line-through">R$ 697</p>
                  <p className="text-sm text-muted-foreground mt-3">Hoje, por apenas:</p>
                  <p className="text-6xl sm:text-7xl font-bold text-success leading-none my-2">
                    R$67
                  </p>
                  <p className="text-xs text-muted-foreground mb-5">à vista · ou 12x de R$6,93</p>

                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-widest text-destructive font-bold mb-2 animate-pulse">
                      ⚠️ Oferta encerra em:
                    </p>
                    <CountdownTimer />
                  </div>

                  <CTAButton id="cta-oferta">QUERO ACESSAR AGORA</CTAButton>

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

      {/* GUARANTEE */}
      <section className="px-4 py-14">
        <div className="max-w-2xl mx-auto bg-card border-2 border-success/40 rounded-2xl p-8 text-center shadow-card">
          <ShieldCheck className="size-16 text-success mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Garantia Incondicional de 7 dias</h2>
          <p className="text-muted-foreground">
            Se em até 7 dias você sentir que o método não é pra você, basta enviar um e-mail e
            devolvemos <strong className="text-foreground">100% do seu investimento.</strong> Sem perguntas.
            Todo o risco é nosso.
          </p>
        </div>
      </section>

      {/* MENTOR: Lucas Pinheiro (após garantia) */}
      <section className="px-4 py-14 bg-section-alt">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Quem te ensina</span>
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
              <p className="text-sm text-primary font-semibold mb-3">Fundador da Winner Locações</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                De <strong className="text-foreground">0 a 50 carros alugados em 24 meses</strong>, começando com o
                próprio carro. Já ajudou mais de <strong className="text-foreground">3.000 locadores</strong> a
                construir uma operação lucrativa e previsível com locação de veículos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVAS SOCIAIS: depoimentos reais (prints) + texto */}
      <section id="provas" className="px-4 py-14 bg-section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1 mb-3">
              <StarRating />
            </div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Prova Social</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3">
              Esses são só <span className="text-gradient-gold">alguns</span> dos mais de{" "}
              <span className="text-gradient-gold">3.000 alunos</span> que aplicam o método
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Locadores que saíram do zero e construíram uma renda recorrente alugando carros.
            </p>
          </div>

          {/* Grid de prints (WhatsApp) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {depoimentos.map((d, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary/60 hover:scale-[1.02] transition"
              >
                <img src={d.src} alt={d.alt} className="w-full h-auto block" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-10 text-sm text-muted-foreground">
            <Users className="size-4 text-primary" />
            <span>Mais de <strong className="text-foreground">3.000 locadores</strong> já aplicaram o método</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Seus primeiros{" "}
            <span className="text-gradient-gold">R$3.000 por carro alugado</span>{" "}
            estão a <span className="text-gradient-gold">um Manual de distância</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Pega o passo a passo que já fez <strong className="text-foreground">3.000 locadores</strong> tirarem
            o primeiro carro do papel e começarem a faturar de verdade no mercado de locação.
          </p>
          <p className="text-sm text-muted-foreground mb-1">De <span className="line-through">R$ 697</span> por apenas:</p>
          <p className="text-7xl font-bold text-success mb-2">R$67</p>
          <p className="text-xs text-muted-foreground mb-6">à vista · ou 12x de R$6,93</p>
          <CTAButton id="cta-final">SIM! QUERO O MANUAL</CTAButton>
          <p className="text-xs text-muted-foreground mt-4">Pagamento 100% seguro · Acesso imediato</p>
        </div>
      </section>

      {/* DEPOIMENTOS EM TEXTO (última dobra antes do footer) */}
      <section className="px-4 py-14 bg-section-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">O que dizem os alunos</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 leading-tight">
              Resultados reais de quem já está aplicando o{" "}
              <span className="text-gradient-gold">Manual do Locador</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                nome: "Bruno Almeida",
                cargo: "Locador, 4 carros na frota",
                iniciais: "BA",
                texto: "Comecei com 1 carro próprio seguindo o passo a passo. Em 5 meses já tinha 4 carros rodando, todos pagando as próprias parcelas e sobrando R$3.000 por carro no meu bolso.",
              },
              {
                nome: "Diego Martins",
                cargo: "Começou negativado, hoje tem 3 carros",
                iniciais: "DM",
                texto: "Tava negativado e sem capital. Apliquei a estratégia de crédito do Manual e financiei meu primeiro carro. 8 meses depois, são 3 carros alugados e R$9 mil/mês entrando.",
              },
              {
                nome: "Larissa Santos",
                cargo: "Locadora em Belo Horizonte",
                iniciais: "LS",
                texto: "O que mais me ajudou foi o script de qualificação de motorista. Eu alugava pra qualquer um e tomava calote. Agora filtro só motorista 5 estrelas e há 7 meses não tomo um centavo.",
              },
            ].map((p) => (
              <div key={p.nome} className="bg-card border border-border rounded-2xl p-6 shadow-card relative">
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} viewBox="0 0 24 24" className="size-4 fill-primary text-primary">
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  "{p.texto}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                  <div className="size-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                    {p.iniciais}
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-tight">{p.nome}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{p.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGUNDA CHANCE DE COMPRA — após depoimentos finais */}
      <section className="px-4 py-14">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
            Não deixe pra depois.{" "}
            <span className="text-gradient-gold">Seu próximo R$3.000 começa hoje.</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            O Manual completo, com tudo que você precisa pra alugar seu primeiro carro nas próximas 24 horas.
          </p>
          <p className="text-sm text-muted-foreground mb-1">De <span className="line-through">R$ 697</span> por apenas:</p>
          <p className="text-7xl font-bold text-success mb-2">R$67</p>
          <p className="text-xs text-muted-foreground mb-6">à vista · ou 12x de R$6,93</p>
          <CTAButton id="cta-final-2">QUERO COPIAR O MANUAL</CTAButton>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-success" />
            7 dias de garantia incondicional · Acesso imediato
          </div>
        </div>
      </section>

      <footer className="px-4 py-8 text-center text-xs text-muted-foreground border-t border-border pb-28">
        <p>© Manual do Locador de Carros · Lucas Pinheiro</p>
        <p className="mt-1 max-w-md mx-auto">
          Este produto não garante a obtenção de resultados. Resultados podem variar conforme dedicação e
          aplicação correta do método.
        </p>
      </footer>

    </div>
  );
}
