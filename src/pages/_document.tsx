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

          {/* <!-- Google Tag Manager --> */}
          <Script
            id={process.env.NEXT_PUBLIC_GTM_ID}
            type="text/javascript"
            async
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script',${process.env.NEXT_PUBLIC_GTM_ID})`
            }}
          />
          {/* <!-- End Google Tag Manager --> */}

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <Favicon />

          <SEO
            title="Isabela Castelli - Psicologia Clínica e Hospitalar"
            description="A sua saúde mental é prioridade! Um acompanhamento psicológico bem feito vai ajudá-lo a compreender os seus sentimentos, seu modo de pensar e de agir."
            url={process.env.NEXT_PUBLIC_URL}
          />
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
