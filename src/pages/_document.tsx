import { Favicon } from 'components/Head/Favicon'
import { SEO } from 'components/Head/SEO'
import Document, { Head, Html, Main, NextScript } from 'next/document'
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
            title="Isabela Castelli - Psicologia Clínica e Hospitalar"
            description="A sua saúde mental é prioridade! Um acompanhamento psicológico bem feito vai ajudá-lo a compreender os seus sentimentos, seu modo de pensar e de agir."
            url="https://isabelacastelli.com.br"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
