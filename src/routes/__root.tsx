import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap",
      },
      { rel: "dns-prefetch", href: "https://cdn.converteai.net" },
      { rel: "dns-prefetch", href: "https://scripts.converteai.net" },
      { rel: "dns-prefetch", href: "https://images.converteai.net" },
      { rel: "dns-prefetch", href: "https://api.vturb.com.br" },
      { rel: "preconnect", href: "https://cdn.converteai.net", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://scripts.converteai.net", crossOrigin: "anonymous" },
      {
        rel: "preload",
        href: "https://scripts.converteai.net/e39e1358-c294-4887-9186-6c5c21c2dc26/players/6945c577e80b76c536cd8e0a/v4/player.js",
        as: "script",
      },
      {
        rel: "preload",
        href: "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js",
        as: "script",
      },
      {
        rel: "preload",
        href: "https://cdn.converteai.net/e39e1358-c294-4887-9186-6c5c21c2dc26/6945c56c9a07b812705cb2b7/main.m3u8",
        as: "fetch",
      },
    ],
    scripts: [
      {
        children:
          '!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);',
      },
      {
        src: "https://scripts.converteai.net/e39e1358-c294-4887-9186-6c5c21c2dc26/players/6945c577e80b76c536cd8e0a/v4/player.js",
        async: true,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
