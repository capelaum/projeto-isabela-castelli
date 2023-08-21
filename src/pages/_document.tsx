import { Favicon } from 'components/Head/Favicon'
import { SEO } from 'components/Head/SEO'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { getCssText } from 'styles/stitches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="Anonymous"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@700&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <Favicon />

          <SEO
            title="Dra. Isabela Castelli - Psicóloga Clínica e Hospitalar"
            description="Dra. Isabela Castelli - Psicologia Clínica e Hospitalar - A sua saúde mental é prioridade! Um acompanhamento psicológico bem feito vai ajudá-lo a compreender os seus sentimentos, seu modo de pensar e de agir."
            url={process.env.NEXT_PUBLIC_URL}
          />

          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          />
        </Head>

        <body>
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', ${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID});
            `}
          </Script>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
