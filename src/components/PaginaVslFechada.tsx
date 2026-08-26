import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

/**
 * Pagina FECHADA de VSL: tarja + headline + sub + ordem de play + player + rodape.
 * Nada mais. Objetivo unico e play rate; quem vende e o video.
 *
 * As rotas /vsl e /vsl-2 usam este MESMO componente e mudam SO o player,
 * porque a variavel em teste ali e o video, nao a pagina. Se um dia a copy
 * de uma rota precisar divergir, essa rota para de usar este componente.
 *
 * O preload do player e o noindex NAO ficam aqui: o __root nao renderiza
 * <HeadContent />, entao head() das rotas nao chega no DOM. Eles moram no
 * <head> do index.html, num mapa de pathname -> script do player.
 */

type Props = {
  /** id do embed do teste A/B do VTurb, ex.: "ab-6a89e9152d15b4a5d9500304" */
  playerId: string;
  /** url do player.js correspondente */
  playerScript: string;
};

export function PaginaVslFechada({ playerId, playerScript }: Props) {
  useEffect(() => {
    const marca = "vturb-ab-script-" + playerId;
    if (document.getElementById(marca)) return;
    const s = document.createElement("script");
    s.id = marca;
    s.src = playerScript;
    s.async = true;
    document.head.appendChild(s);
  }, [playerId, playerScript]);

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

        {/* PLAYER
            Borda preta fina + sombra suave pra descolar o video do fundo branco.
            Dial: a borda e o /20 do black; a sombra e o rgba do shadow. */}
        <div className="mt-3 overflow-hidden rounded-lg border border-black/20 shadow-[0_6px_22px_-8px_rgba(0,0,0,0.35)]">
          <vturb-smartplayer
            key={playerId}
            id={playerId}
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
