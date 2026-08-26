import { createFileRoute } from "@tanstack/react-router";
import { PaginaVslFechada } from "@/components/PaginaVslFechada";

// Segundo teste A/B de video, MESMA pagina da /vsl. A unica variavel e o player.
const PLAYER_ID = "ab-6a8f7a6904f647dafd180efc";
const PLAYER_SCRIPT =
  "https://scripts.converteai.net/e39e1358-c294-4887-9186-6c5c21c2dc26/ab-test/6a8f7a6904f647dafd180efc/player.js";

export const Route = createFileRoute("/vsl-2")({
  component: () => (
    <PaginaVslFechada playerId={PLAYER_ID} playerScript={PLAYER_SCRIPT} />
  ),
});

// O preload do player e o noindex ficam no <head> do index.html (mapa de
// pathname -> player), porque o __root nao renderiza <HeadContent /> e o
// head() das rotas nao chega no DOM neste repo.
