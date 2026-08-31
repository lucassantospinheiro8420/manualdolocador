import { createFileRoute } from "@tanstack/react-router";
import { PaginaVslFechada } from "@/components/PaginaVslFechada";

// T-016: teste de PRECO com abertura congelada (LEAD 04).
// 2 videos no A/B do VTurb: take R$67 vs take R$97, 50/50.
// Cada video tem o SEU botao/checkout (OFERTA R$67 vs OFERTA R$97).
const PLAYER_ID = "ab-6a95ee577e1edfe862b04d8e";
const PLAYER_SCRIPT =
  "https://scripts.converteai.net/e39e1358-c294-4887-9186-6c5c21c2dc26/ab-test/6a95ee577e1edfe862b04d8e/player.js";

export const Route = createFileRoute("/vsl-3")({
  component: () => (
    <PaginaVslFechada playerId={PLAYER_ID} playerScript={PLAYER_SCRIPT} />
  ),
});

// O preload do player e o noindex ficam no <head> do index.html (mapa de
// pathname -> player), porque o __root nao renderiza <HeadContent /> e o
// head() das rotas nao chega no DOM neste repo.
