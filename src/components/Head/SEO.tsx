interface SeoProps {
  title: string
  description: string
  url: string
}

export function SEO({ title, description, url }: SeoProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_ENV !== 'production' && (
        <meta name="robots" content="noindex,nofollow" />
      )}

      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#CC96A3" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="pt_BR" />

      <meta property="og:image" itemProp="image" content={`${url}/Capa.png`} />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@capellett" />
      <meta name="twitter:site" content="@capellett" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}/Capa.png`} />
    </>
  )
}
