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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Banner de parabéns */}
      <div className="bg-success text-white text-center py-3 px-3">
        <p className="text-sm sm:text-base font-bold uppercase tracking-wider leading-tight">
          🎉 PARABÉNS! Você está prestes a alugar seu 1º carro
        </p>
      </div>

      {/* HERO + VSL */}
      <section className="px-5 pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.15] mb-3">
            Mas espera aí...
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.15] mb-5">
            <span className="text-gradient-gold">Tenho mais uma novidade pra você</span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Assista ao vídeo abaixo <strong className="text-foreground">até o final</strong> pra
            entender como ir muito além do Manual e ter acesso a tudo que eu uso
            diariamente na minha operação.
          </p>

          {/* Player VSL */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-primary/30 bg-black max-w-2xl mx-auto">
            <UpsellVturbPlayer />
          </div>

          <p className="mt-5 text-xs sm:text-sm text-muted-foreground">
            ⚠️ A oferta especial será liberada ao final do vídeo
          </p>
        </div>
      </section>

      {/* OFERTA — revelada após 5 minutos */}
      {showOffer && (
        <section className="px-5 py-14 bg-section-alt fade-up">
          <div className="max-w-3xl mx-auto">

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-success/15 border border-success/40 rounded-full px-4 py-1.5 mb-4">
                <Sparkles className="size-4 text-success" />
                <span className="text-xs font-bold uppercase tracking-wider text-success">
                  Oferta liberada
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3">
                Apresento o{" "}
                <span className="text-gradient-gold">Método Renda Mensal Vitalícia</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tudo que eu uso na operação da Winner Locações no dia a dia, organizado
                e liberado pra você aplicar imediatamente.
              </p>
            </div>

            {/* Benefícios */}
            <div className="bg-card border border-primary/40 rounded-2xl p-6 sm:p-8 shadow-elevated mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-5 text-center">
                📦 O que está incluso:
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
                Esse é o passo de quem leva a sério a construção de uma{" "}
                <strong className="text-foreground">operação lucrativa de locação</strong>.
                <br className="hidden sm:block" />
                Com 1 clique você libera tudo isso usando o mesmo cartão da compra anterior.
              </p>
            </div>

            {/* Assiny One-Click */}
            <div className="bg-card border-2 border-primary/40 rounded-2xl p-2 sm:p-4 shadow-elevated">
              <AssinyOneClick nodeId="IZOjgd" />
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
