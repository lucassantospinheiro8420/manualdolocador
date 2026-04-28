import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";

export function StickyBuyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-card/95 backdrop-blur-md border-t-2 border-primary/40 px-3 py-3 shadow-elevated">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <div className="hidden sm:flex flex-col leading-tight shrink-0">
            <span className="text-xs text-muted-foreground line-through">R$1.396</span>
            <span className="text-xl font-bold text-gradient-gold">R$67</span>
          </div>
          <div className="flex-1">
            <CTAButton>QUERO ACESSO POR R$67</CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
