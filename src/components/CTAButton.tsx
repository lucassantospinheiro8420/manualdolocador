import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  /** Quando fornecido, o botão dá scroll suave para o elemento com este id
   *  em vez de abrir o checkout. */
  scrollTo?: string;
  /** ID único do elemento <a> para tracking GTM. */
  id?: string;
}

const CHECKOUT_URL = "https://pay.assiny.com.br/8d92a1/node/IZOjgd?utm_source=organic";

/**
 * CTA renderizado como <a> puro com href, id e class — compatível com
 * o evento nativo gtm.linkClick do Google Tag Manager.
 */
export function CTAButton({
  children = "QUERO GARANTIR MEU ACESSO AGORA",
  className = "",
  href = CHECKOUT_URL,
  scrollTo,
  id,
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

  const finalHref = isScroll ? `#${scrollTo}` : href;
  const linkProps = isScroll
    ? { onClick: handleClick }
    : { target: "_blank" as const, rel: "noopener noreferrer" };

  return (
    <a
      id={id}
      href={finalHref}
      data-cta={id || (isScroll ? "scroll" : "checkout")}
      className={cn(
        "cta-button",
        "inline-flex items-center justify-center w-full",
        "bg-gradient-cta text-white",
        "font-bold uppercase tracking-wide text-base sm:text-lg",
        "py-7 sm:py-8 px-6",
        "rounded-xl shadow-cta pulse-glow",
        "no-underline text-center",
        "hover:scale-[1.02] active:scale-[0.99] transition-transform",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2",
        className,
      )}
      {...linkProps}
    >
      👉 {children}
    </a>
  );
}
