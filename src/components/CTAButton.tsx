import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  /** When provided, the button scrolls smoothly to the element with this id
   *  instead of opening the checkout. Used by intermediate CTAs to drive the
   *  lead through the entire page before they reach the price/checkout. */
  scrollTo?: string;
}

const CHECKOUT_URL = "https://pay.assiny.com.br/8d92a1/node/IZOjgd?utm_source=organic";

export function CTAButton({
  children = "QUERO GARANTIR MEU ACESSO AGORA",
  className = "",
  href = CHECKOUT_URL,
  scrollTo,
}: CTAButtonProps) {
  const isScroll = Boolean(scrollTo);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isScroll || !scrollTo) return;
    e.preventDefault();
    const el = document.getElementById(scrollTo);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const linkProps = isScroll
    ? { href: `#${scrollTo}`, onClick: handleClick }
    : { href, target: "_blank" as const, rel: "noopener noreferrer" };

  return (
    <a {...linkProps} className={`block w-full ${className}`}>
      <Button
        size="lg"
        className="w-full bg-gradient-gold text-primary-foreground font-bold uppercase tracking-wide text-base sm:text-lg py-7 sm:py-8 rounded-xl shadow-gold pulse-glow hover:scale-[1.02] active:scale-[0.99] transition-transform border-0"
      >
        👉 {children}
      </Button>
    </a>
  );
}
