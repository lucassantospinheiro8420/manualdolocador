import { useEffect, useState } from "react";

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

/**
 * Click-to-play wrapper para o Vturb.
 * O player só é carregado depois que o usuário clica — garantindo que o
 * Smart Autoplay do Vturb NUNCA dispare sozinho. Resolve o drop de 71% no
 * scroll observado no Clarity em mobile.
 */
export function VturbPlayer() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    if (document.getElementById("vturb-player-script")) return;
    const s = document.createElement("script");
    s.id = "vturb-player-script";
    s.src =
      "https://scripts.converteai.net/e39e1358-c294-4887-9186-6c5c21c2dc26/players/6945c577e80b76c536cd8e0a/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, [started]);

  if (!started) {
    return (
      <button
        type="button"
        onClick={() => setStarted(true)}
        aria-label="Tocar vídeo"
        className="relative w-full aspect-video bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center cursor-pointer group overflow-hidden"
      >
        {/* Glow gradient */}
        <div className="absolute inset-0 bg-radial-gold opacity-20 pointer-events-none" />

        {/* Play button + texto */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="size-20 sm:size-24 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 sm:size-12 text-primary-foreground translate-x-0.5"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-white font-bold text-sm sm:text-base uppercase tracking-wider">
            ▶ Clique para assistir
          </span>
          <span className="text-white/60 text-xs">Vídeo de 60 segundos</span>
        </div>
      </button>
    );
  }

  return (
    <vturb-smartplayer
      id={PLAYER_ID}
      style={{ display: "block", margin: "0 auto", width: "100%" }}
    />
  );
}
