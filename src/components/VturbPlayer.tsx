import { useEffect } from "react";

const PLAYER_ID = "vid-6945c577e80b76c536cd8e0a";

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

export function VturbPlayer() {
  useEffect(() => {
    if (document.getElementById("vturb-player-script")) return;
    const s = document.createElement("script");
    s.id = "vturb-player-script";
    s.src =
      "https://scripts.converteai.net/e39e1358-c294-4887-9186-6c5c21c2dc26/players/6945c577e80b76c536cd8e0a/v4/player.js";
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
