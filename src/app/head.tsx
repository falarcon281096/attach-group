export default function Head() {
  return (
    <>
      {/* Preconnect para orígenes críticos (mejora LCP en móvil) */}
      <link rel="preconnect" href="https://cdn.growthbook.io" crossOrigin="" />
      <link rel="preconnect" href="https://sgtm.attachmedia.com" crossOrigin="" />
      <link rel="preconnect" href="https://api_tracardi.expiera.com" crossOrigin="" />
      {/* Opcional: dns-prefetch de terceros comunes */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      {/* Preload del font crítico para evitar FOIT */}
      <link
        rel="preload"
        as="font"
        href="/fonts/graphik-regular-webfont.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </>
  );
}