import { useEffect } from "react";

const PLAYER_ID = "vid-6a15f2e2e8f77642689e8b46";
const SCRIPT_URL = "https://scripts.converteai.net/e39e1358-c294-4887-9186-6c5c21c2dc26/players/6a15f2e2e8f77642689e8b46/v4/player.js";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { id?: string },
        HTMLElement
      >;
    }
  }
}

/**
 * Player Vturb do upsell (boasvindas).
 * Script carrega na montagem para que o vídeo já esteja pronto pra tocar.
 */
export function UpsellVturbPlayer() {
  useEffect(() => {
    if (document.getElementById("upsell-vturb-script")) return;
    const s = document.createElement("script");
    s.id = "upsell-vturb-script";
    s.src = SCRIPT_URL;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <vturb-smartplayer
      id={PLAYER_ID}
      style={{ display: "block", margin: "0 auto", width: "100%" }}
    />
  );
}
