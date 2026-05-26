import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Check, Sparkles, ShieldCheck, FileText, Megaphone,
  Target, Calculator, Wallet, MessageCircle, Users,
} from "lucide-react";
import { UpsellVturbPlayer } from "@/components/UpsellVturbPlayer";
import { AssinyOneClick } from "@/components/AssinyOneClick";

// Delay para revelar a oferta (5 minutos = 300.000 ms)
const REVEAL_DELAY_MS = 5 * 60 * 1000;

export const Route = createFileRoute("/boasvindas")({
  component: UpsellPage,
  head: () => ({
    meta: [
      { title: "🎉 Parabéns! Mais uma novidade pra você — Manual do Locador" },
      {
        name: "description",
        content:
          "Acesso ao Método Renda Mensal Vitalícia com todos os materiais que o Lucas usa diariamente na operação.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
});

function UpsellPage() {
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    // Permite forçar revelação imediata via ?reveal=1 (debug/teste)
    const params = new URLSearchParams(window.location.search);
    if (params.get("reveal") === "1") {
      setShowOffer(true);
      return;
    }

    const timer = setTimeout(() => setShowOffer(true), REVEAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden" style={{ background: "linear-gradient(180deg, oklch(0.18 0.05 235) 0%, oklch(0.13 0.04 235) 60%, oklch(0.95 0.025 235) 60%)" }}>
      {/* Banner de parabéns */}
      <div className="bg-success text-white text-center py-3 px-3 relative z-10">
        <p className="text-sm sm:text-base font-bold uppercase tracking-wider leading-tight">
          🎉 PARABÉNS! Você está prestes a alugar seu 1º carro
        </p>
      </div>

      {/* HERO + VSL — fundo escuro premium */}
      <section className="px-5 pt-10 pb-14 sm:pt-14 sm:pb-20 relative">
        <div className="max-w-3xl mx-auto text-center fade-up text-white">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold leading-[1.2] mb-2 text-white">
            Mas espera aí...
          </h1>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-[1.2] mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Tenho mais uma novidade pra você
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Você tem direito a <strong className="text-white">3 encontros bônus de dúvidas comigo</strong>.
            No vídeo abaixo eu te explico como participar.
          </p>

          {/* Player VSL */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-white/20 bg-black max-w-2xl mx-auto">
            <UpsellVturbPlayer />
          </div>

          <p className="mt-5 text-xs sm:text-sm text-white/60">
            🎥 Assista o vídeo até o final pra entender como participar
          </p>
        </div>
      </section>

      {/* BÔNUS — revelados após 5 minutos */}
      {showOffer && (
        <section className="px-5 py-14 fade-up relative" style={{ background: "var(--section-alt)" }}>
          <div className="max-w-3xl mx-auto">

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-success/15 border border-success/40 rounded-full px-4 py-1.5 mb-4">
                <Sparkles className="size-4 text-success" />
                <span className="text-xs font-bold uppercase tracking-wider text-success">
                  Bônus disponível
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
                Liberei pra você o pacote{" "}
                <span className="text-gradient-gold">Renda Mensal Vitalícia</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Os materiais que eu uso diariamente na Winner Locações, prontos
                pra você aplicar e acelerar seus primeiros resultados.
              </p>
            </div>

            {/* Benefícios */}
            <div className="bg-card border border-primary/40 rounded-2xl p-6 sm:p-8 shadow-elevated mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-5 text-center">
                🎁 O que está incluso nos seus bônus:
              </h3>

              <ul className="space-y-3.5">
                {[
                  { icon: FileText, t: "Contrato de Locação + Locação com Compra (modelos prontos)" },
                  { icon: ShieldCheck, t: "Indicação de Seguro com desconto exclusivo" },
                  { icon: Target, t: "Minha campanha de tráfego pago para captar motoristas" },
                  { icon: Megaphone, t: "Meu anúncio de tráfego pago (pronto pra copiar)" },
                  { icon: Calculator, t: "Indicação de Consultor Financeiro" },
                  { icon: Wallet, t: "Indicação de Consultor de Consórcio Contemplado" },
                  { icon: MessageCircle, t: "Suporte direto comigo por 12 meses" },
                  { icon: Users, t: "Acesso ao grupo de alunos da comunidade" },
                ].map((b) => (
                  <li key={b.t} className="flex items-start gap-3">
                    <div className="bg-success/15 size-9 rounded-lg flex items-center justify-center shrink-0">
                      <Check className="size-5 text-success" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm sm:text-base font-medium leading-snug">{b.t}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mensagem antes do checkout */}
            <div className="text-center mb-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Confirma com <strong className="text-foreground">1 clique</strong> usando o mesmo
                cartão da sua compra e seu acesso é liberado imediatamente.
              </p>
            </div>

            {/* Assiny One-Click */}
            <div className="bg-card border-2 border-primary/40 rounded-2xl p-2 sm:p-4 shadow-elevated">
              <AssinyOneClick nodeId="582226" />
            </div>

            {/* Garantia */}
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <ShieldCheck className="size-5 text-success" />
              <span>7 dias de garantia incondicional · acesso imediato</span>
            </div>

          </div>
        </section>
      )}

      <footer className="px-4 py-8 text-center text-xs text-muted-foreground border-t border-border">
        <p>© Manual do Locador de Carros · Lucas Pinheiro · Winner Locações</p>
      </footer>
    </div>
  );
}
