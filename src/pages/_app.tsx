import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { globalStyles } from 'styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
