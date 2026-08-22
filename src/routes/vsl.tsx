import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";

const PLAYER_ID = "ab-6a89e9152d15b4a5d9500304";
const PLAYER_SCRIPT =
  "https://scripts.converteai.net/e39e1358-c294-4887-9186-6c5c21c2dc26/ab-test/6a89e9152d15b4a5d9500304/player.js";

export const Route = createFileRoute("/vsl")({
  component: VslPage,
  head: () => ({
    meta: [
      { title: "Manual do Locador de Carros" },
      {
        name: "description",
        content:
          "As 4 coisas que fazem um carro parado te pagar R$3.000 por mes.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    // Preload + noindex NAO ficam aqui: o __root nao renderiza <HeadContent />,
    // entao head() nao chega no DOM (vale pra todas as rotas deste repo).
    // O preload escopado por pathname mora no <head> do index.html.
  }),
});

function VslPage() {
  useEffect(() => {
    if (document.getElementById("vturb-ab-script")) return;
    const s = document.createElement("script");
    s.id = "vturb-ab-script";
    s.src = PLAYER_SCRIPT;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      {/* TARJA */}
      <div className="w-full bg-red-600 px-4 py-2.5">
        <p className="text-balance text-center text-[13px] font-semibold leading-snug text-white sm:text-sm">
          ATENÇÃO: este vídeo pode sair do ar a qualquer momento.
        </p>
      </div>

      <main className="mx-auto w-full max-w-[600px] flex-1 px-5 pb-10 pt-7 sm:pt-9">
        {/* REDLINE
            text-balance distribui as linhas por igual (nada de palavra sozinha
            na ultima). O nbsp em "por mes" e a garantia pra navegador antigo
            que ainda nao suporta text-wrap: balance. */}
        <h1 className="text-balance text-center text-[27px] font-bold leading-[1.2] tracking-tight sm:text-[34px]">
          Eu te mostro neste vídeo as 4 coisas que fazem um carro parado te
          pagar R$3.000 por&nbsp;mês.
        </h1>

        {/* SUB */}
        <p className="mx-auto mt-4 max-w-[480px] text-balance text-center text-[15px] leading-relaxed text-neutral-600 sm:mt-5 sm:text-base">
          Comecei com 40 mil de dívida. Hoje são 50 carros&nbsp;na&nbsp;rua.
        </p>

        {/* MICRO ORDEM */}
        <p className="mt-6 text-center text-[15px] font-semibold text-neutral-900 sm:text-base">
          <span aria-hidden="true" className="mr-1.5">
            ▼
          </span>
          Aperta o play aí embaixo
        </p>

        {/* PLAYER */}
        <div className="mt-3 overflow-hidden rounded-lg">
          <vturb-smartplayer
            id={PLAYER_ID}
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          />
        </div>
      </main>

      {/* RODAPE */}
      <footer className="border-t border-neutral-200 px-5 py-8">
        <div className="mx-auto max-w-[520px] space-y-3 text-center text-[11px] leading-relaxed text-neutral-500">
          <p className="text-pretty">
            Este produto não garante a obtenção de resultados. Resultados podem
            variar conforme dedicação e aplicação correta do método.
          </p>
          <p className="text-pretty">
            Este site não é afiliado ao Facebook ou a qualquer entidade do
            Facebook Inc. Depois que você sai do Facebook, a responsabilidade
            passa a ser deste site e não deles.
          </p>
          <p className="pt-1">
            <Link
              to="/privacidade"
              className="underline underline-offset-2 hover:text-neutral-700"
            >
              Política de Privacidade
            </Link>
          </p>
          <p className="pt-1 text-neutral-400">
            © 2026 Manual do Locador de Carros. Lucas Pinheiro. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
