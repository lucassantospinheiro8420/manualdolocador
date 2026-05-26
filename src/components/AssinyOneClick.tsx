import { useEffect } from "react";

/**
 * Assiny One-Click checkout iframe.
 * Carrega os scripts do Assiny sob demanda (apenas quando o componente
 * é montado), o que permite usar dentro de seções com delay/reveal
 * sem disparar carregamento na abertura da página.
 */
export function AssinyOneClick({ nodeId = "IZOjgd" }: { nodeId?: string }) {
  useEffect(() => {
    // Evita injetar duas vezes
    if (document.getElementById("assiny-one-click-script")) {
      // @ts-expect-error - função global do Assiny
      if (typeof window.createOneClickBuy === "function") {
        // @ts-expect-error
        window.createOneClickBuy(
          nodeId,
          `https://pay.assiny.com.br/8d92a1/node/${nodeId}/one-click`,
          () => {
            // @ts-expect-error
            window.iFrameResize?.(
              {
                log: false,
                checkOrigin: false,
                heightCalculationMethod: "max",
                resizedCallback: (e: { iframe: { id: string } }) => {
                  const el = document.getElementById(e.iframe.id);
                  if (el) el.style.overflow = "hidden";
                },
              },
              `#iFrame${nodeId}`,
            );
          },
        );
      }
      return;
    }

    const resizer = document.createElement("script");
    resizer.id = "assiny-one-click-script";
    resizer.type = "text/javascript";
    resizer.src = "https://tracker.assiny.com.br/iframeResizer.min.js";
    document.head.appendChild(resizer);

    resizer.onload = () => {
      const oneClick = document.createElement("script");
      oneClick.type = "text/javascript";
      oneClick.src = "https://tracker.assiny.com.br/oneClickBuyV2.min.js";
      document.head.appendChild(oneClick);

      oneClick.onload = () => {
        // @ts-expect-error
        window.createOneClickBuy(
          nodeId,
          `https://pay.assiny.com.br/8d92a1/node/${nodeId}/one-click`,
          () => {
            // @ts-expect-error
            window.iFrameResize(
              {
                log: false,
                checkOrigin: false,
                heightCalculationMethod: "max",
                resizedCallback: (e: { iframe: { id: string } }) => {
                  const el = document.getElementById(e.iframe.id);
                  if (el) el.style.overflow = "hidden";
                },
              },
              `#iFrame${nodeId}`,
            );
          },
        );
      };
    };
  }, [nodeId]);

  return <div id={nodeId} className="w-full" />;
}
